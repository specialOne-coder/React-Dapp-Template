import { infuraId } from "../utils/app-constants";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
const Alert = require("sweetalert2");



/**
 * @description 
 * Provider options
 */
const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
            infuraId: infuraId, // required
        },
    },
};


/**
 * @description 
 * web3 modal library
 */
const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions, // required
    theme: "dark", // optional
});


// global provider 
const provider = async () => {
    const provider = web3Modal.connect();
    return provider;
}

const library = async () => {
    const library = new ethers.providers.Web3Provider(await provider());
    return library;
}

const  signer = async () => {
    const lib = await library();
    const signer = lib.getSigner();
    return signer;
};


/**
 * @description
 * wallet connection
 */
const connect = async () => {
    try {
        const accounts = (await library()).listAccounts();
        console.log('good => ', accounts[0]);
        return accounts;
    } catch (error) {
        return error;
    }
}

// wallet disconnetion
const disconnect = async () => {
    await web3Modal.clearCachedProvider();
}

// verify userNetwork 
const verifyNetwork = async (networkId, networkName, networkRpc) => {
    const lib = await library();
    const userNetwork = await lib.getNetwork();
    console.log('=> user network Id', userNetwork.chainId);
    console.log('=> request network Id', networkId);
    if ((await userNetwork).chainId != networkId) {
        Alert.fire({
            icon: "error",
            title: "Wrong Network",
            confirmButtonText: "Switch",
            text: "please switch to the correct network",
            width: 'auto'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const switchN = await switchNetwork(networkId, networkName, networkRpc);
                return switchN;
            }
        });
    }
    return networkId;
}

// switch network if wrong
const switchNetwork = async (chainId, chainName, rpc) => {
    const lib = await library();
    try {
        await lib.provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: `0x${Number(chainId).toString(16)}` }],
        });
        return chainId;
    } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        console.log("switch network error", switchError);
        if (switchError.code === 4902) {
            try {
                console.log('=> chainId', `0x${chainId}`);
                console.log('=> rpc', rpc);

                await lib.provider.request({
                    method: "wallet_addEthereumChain",
                    params: [
                        {
                            chainId: `0x${Number(chainId).toString(16)}`,
                            chainName: chainName.toString(),
                            rpcUrls: [rpc] /* ... */,
                        },
                    ],
                });
            } catch (addError) {
                console.log("error dajout", addError);
            }
        }
    }
}



export { connect, disconnect, verifyNetwork, switchNetwork, provider, web3Modal, library, signer };