// import eth_abi from './abis/eth_abi.json';
// import arb_abi from './abis/arb_abi.json';
// import opt_abi from './abis/opt_abi.json';
// import pol_abi from './abis/pol_abi.json';
// import bnb_abi from './abis/bnb_abi.json';
// import ava_abi from './abis/ava_abi.json';
// import ftm_abi from './abis/ftm_abi.json';

export const chainlist = [
    {
      id: 1,
      chainid: '0x1',
      chain_name: 'Ethereum',
      rpc: 'https://rpc.ankr.com/eth',
      abi: 'import your abi here',
      address:'0X0000000000000000000000000000000000000000',
    },
    {
      id: 2,
      chainid: '0x137',
      chain_name: 'Polygon',
      rpc: 'https://poly-rpc.gateway.pokt.network',
      abi: 'import your abi here',
      address:'0X0000000000000000000000000000000000000000',
    },
    {
      id: 3,
      chainid: '0x43114',
      chain_name: 'Avax',
      rpc: 'https://rpc.ankr.com/avalanche',
      abi: 'import your abi here',
      address:'0X0000000000000000000000000000000000000000',
    },
    {
      id: 4,
      chainid: '0x56',
      chain_name: 'BNB',
      rpc: 'https://bsc-dataseed4.defibit.io',
      abi: 'import your abi here',
      address:'0X0000000000000000000000000000000000000000',
    },
    {
      id: 5,
      chainid: '0x250',
      chain_name: 'Fantom',
      rpc: 'https://rpc.fantom.network',
      abi: 'import your abi here',
      address:'0X0000000000000000000000000000000000000000',
    },
    {
      id: 6,
      chainid: '0x42161',
      chain_name: 'Arbitrum',
      rpc: 'https://rpc.ankr.com/arbitrum',
      abi: 'import your abi here',
      address:'0X0000000000000000000000000000000000000000',
    },
    {
      id: 10,
      chainid: '0x10',
      chain_name: 'Optimism',
      rpc: 'https://mainnet.optimism.io',
      abi: 'import your abi here',
      address:'0X0000000000000000000000000000000000000000',
    }
]