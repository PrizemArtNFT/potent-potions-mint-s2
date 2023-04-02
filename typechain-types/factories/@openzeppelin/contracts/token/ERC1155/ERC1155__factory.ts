/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC1155,
  ERC1155Interface,
} from "../../../../../@openzeppelin/contracts/token/ERC1155/ERC1155";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200161f3803806200161f833981016040819052620000349162000105565b6200003f8162000046565b506200022e565b80516200005b9060029060208401906200005f565b5050565b8280546200006d90620001db565b90600052602060002090601f016020900481019282620000915760008555620000dc565b82601f10620000ac57805160ff1916838001178555620000dc565b82800160010185558215620000dc579182015b82811115620000dc578251825591602001919060010190620000bf565b50620000ea929150620000ee565b5090565b5b80821115620000ea5760008155600101620000ef565b6000602080838503121562000118578182fd5b82516001600160401b03808211156200012f578384fd5b818501915085601f83011262000143578384fd5b81518181111562000158576200015862000218565b604051601f8201601f19908116603f0116810190838211818310171562000183576200018362000218565b8160405282815288868487010111156200019b578687fd5b8693505b82841015620001be57848401860151818501870152928501926200019f565b82841115620001cf57868684830101525b98975050505050505050565b600181811c90821680620001f057607f821691505b602082108114156200021257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6113e1806200023e6000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f41461010a578063a22cb4651461012a578063e985e9c51461013d578063f242432a1461017957600080fd5b8062fdd58e1461008c57806301ffc9a7146100b25780630e89341c146100d55780632eb2c2d6146100f5575b600080fd5b61009f61009a366004610e19565b61018c565b6040519081526020015b60405180910390f35b6100c56100c0366004610f0d565b610222565b60405190151581526020016100a9565b6100e86100e3366004610f4c565b610274565b6040516100a991906110cd565b610108610103366004610cd6565b610308565b005b61011d610118366004610e42565b610354565b6040516100a9919061108c565b610108610138366004610ddf565b6104b6565b6100c561014b366004610ca4565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b610108610187366004610d7c565b6104c5565b60006001600160a01b0383166101fc5760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201526930b634b21037bbb732b960b11b60648201526084015b60405180910390fd5b506000908152602081815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b03198216636cdb3d1360e11b148061025357506001600160e01b031982166303a24d0760e21b145b8061026e57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606002805461028390611241565b80601f01602080910402602001604051908101604052809291908181526020018280546102af90611241565b80156102fc5780601f106102d1576101008083540402835291602001916102fc565b820191906000526020600020905b8154815290600101906020018083116102df57829003601f168201915b50505050509050919050565b6001600160a01b0385163314806103245750610324853361014b565b6103405760405162461bcd60e51b81526004016101f390611128565b61034d858585858561050a565b5050505050565b606081518351146103b95760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b60648201526084016101f3565b6000835167ffffffffffffffff8111156103e357634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561040c578160200160208202803683370190505b50905060005b84518110156104ae5761047385828151811061043e57634e487b7160e01b600052603260045260246000fd5b602002602001015185838151811061046657634e487b7160e01b600052603260045260246000fd5b602002602001015161018c565b82828151811061049357634e487b7160e01b600052603260045260246000fd5b60209081029190910101526104a7816112a9565b9050610412565b509392505050565b6104c1338383610703565b5050565b6001600160a01b0385163314806104e157506104e1853361014b565b6104fd5760405162461bcd60e51b81526004016101f390611128565b61034d85858585856107e4565b815183511461056c5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016101f3565b6001600160a01b0384166105925760405162461bcd60e51b81526004016101f390611176565b3360005b84518110156106955760008582815181106105c157634e487b7160e01b600052603260045260246000fd5b6020026020010151905060008583815181106105ed57634e487b7160e01b600052603260045260246000fd5b602090810291909101810151600084815280835260408082206001600160a01b038e16835290935291909120549091508181101561063d5760405162461bcd60e51b81526004016101f3906111bb565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b1682528120805484929061067a908490611229565b925050819055505050508061068e906112a9565b9050610596565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb87876040516106e592919061109f565b60405180910390a46106fb81878787878761090e565b505050505050565b816001600160a01b0316836001600160a01b031614156107775760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b60648201526084016101f3565b6001600160a01b03838116600081815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b03841661080a5760405162461bcd60e51b81526004016101f390611176565b33600061081685610a82565b9050600061082385610a82565b90506000868152602081815260408083206001600160a01b038c168452909152902054858110156108665760405162461bcd60e51b81526004016101f3906111bb565b6000878152602081815260408083206001600160a01b038d8116855292528083208985039055908a168252812080548892906108a3908490611229565b909155505060408051888152602081018890526001600160a01b03808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610903848a8a8a8a8a610adb565b505050505050505050565b6001600160a01b0384163b156106fb5760405163bc197c8160e01b81526001600160a01b0385169063bc197c81906109529089908990889088908890600401610fe9565b602060405180830381600087803b15801561096c57600080fd5b505af192505050801561099c575060408051601f3d908101601f1916820190925261099991810190610f30565b60015b610a49576109a86112f0565b806308c379a014156109e257506109bd611308565b806109c857506109e4565b8060405162461bcd60e51b81526004016101f391906110cd565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e2d455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b60648201526084016101f3565b6001600160e01b0319811663bc197c8160e01b14610a795760405162461bcd60e51b81526004016101f3906110e0565b50505050505050565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610aca57634e487b7160e01b600052603260045260246000fd5b602090810291909101015292915050565b6001600160a01b0384163b156106fb5760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190610b1f9089908990889088908890600401611047565b602060405180830381600087803b158015610b3957600080fd5b505af1925050508015610b69575060408051601f3d908101601f19168201909252610b6691810190610f30565b60015b610b75576109a86112f0565b6001600160e01b0319811663f23a6e6160e01b14610a795760405162461bcd60e51b81526004016101f3906110e0565b80356001600160a01b0381168114610bbc57600080fd5b919050565b600082601f830112610bd1578081fd5b81356020610bde82611205565b604051610beb828261127c565b8381528281019150858301600585901b87018401881015610c0a578586fd5b855b85811015610c2857813584529284019290840190600101610c0c565b5090979650505050505050565b600082601f830112610c45578081fd5b813567ffffffffffffffff811115610c5f57610c5f6112da565b604051610c76601f8301601f19166020018261127c565b818152846020838601011115610c8a578283fd5b816020850160208301379081016020019190915292915050565b60008060408385031215610cb6578182fd5b610cbf83610ba5565b9150610ccd60208401610ba5565b90509250929050565b600080600080600060a08688031215610ced578081fd5b610cf686610ba5565b9450610d0460208701610ba5565b9350604086013567ffffffffffffffff80821115610d20578283fd5b610d2c89838a01610bc1565b94506060880135915080821115610d41578283fd5b610d4d89838a01610bc1565b93506080880135915080821115610d62578283fd5b50610d6f88828901610c35565b9150509295509295909350565b600080600080600060a08688031215610d93578081fd5b610d9c86610ba5565b9450610daa60208701610ba5565b93506040860135925060608601359150608086013567ffffffffffffffff811115610dd3578182fd5b610d6f88828901610c35565b60008060408385031215610df1578182fd5b610dfa83610ba5565b915060208301358015158114610e0e578182fd5b809150509250929050565b60008060408385031215610e2b578182fd5b610e3483610ba5565b946020939093013593505050565b60008060408385031215610e54578182fd5b823567ffffffffffffffff80821115610e6b578384fd5b818501915085601f830112610e7e578384fd5b81356020610e8b82611205565b604051610e98828261127c565b8381528281019150858301600585901b870184018b1015610eb7578889fd5b8896505b84871015610ee057610ecc81610ba5565b835260019690960195918301918301610ebb565b5096505086013592505080821115610ef6578283fd5b50610f0385828601610bc1565b9150509250929050565b600060208284031215610f1e578081fd5b8135610f2981611392565b9392505050565b600060208284031215610f41578081fd5b8151610f2981611392565b600060208284031215610f5d578081fd5b5035919050565b6000815180845260208085019450808401835b83811015610f9357815187529582019590820190600101610f77565b509495945050505050565b60008151808452815b81811015610fc357602081850181015186830182015201610fa7565b81811115610fd45782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0386811682528516602082015260a06040820181905260009061101590830186610f64565b82810360608401526110278186610f64565b9050828103608084015261103b8185610f9e565b98975050505050505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a06080820181905260009061108190830184610f9e565b979650505050505050565b602081526000610f296020830184610f64565b6040815260006110b26040830185610f64565b82810360208401526110c48185610f64565b95945050505050565b602081526000610f296020830184610f9e565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6020808252602e908201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60408201526d195c881bdc88185c1c1c9bdd995960921b606082015260800190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b600067ffffffffffffffff82111561121f5761121f6112da565b5060051b60200190565b6000821982111561123c5761123c6112c4565b500190565b600181811c9082168061125557607f821691505b6020821081141561127657634e487b7160e01b600052602260045260246000fd5b50919050565b601f8201601f1916810167ffffffffffffffff811182821017156112a2576112a26112da565b6040525050565b60006000198214156112bd576112bd6112c4565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600060033d111561130557600481823e5160e01c5b90565b600060443d10156113165790565b6040516003193d81016004833e81513d67ffffffffffffffff816024840111818411171561134657505050505090565b828501915081518181111561135e5750505050505090565b843d87010160208285010111156113785750505050505090565b6113876020828601018761127c565b509095945050505050565b6001600160e01b0319811681146113a857600080fd5b5056fea26469706673582212204da2cacad3048a8778fbba3fe4f4efcf798ec2e9cc0bde8542bf5b3acb7cc40764736f6c63430008040033";

type ERC1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155__factory extends ContractFactory {
  constructor(...args: ERC1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    uri_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1155> {
    return super.deploy(uri_, overrides || {}) as Promise<ERC1155>;
  }
  override getDeployTransaction(
    uri_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri_, overrides || {});
  }
  override attach(address: string): ERC1155 {
    return super.attach(address) as ERC1155;
  }
  override connect(signer: Signer): ERC1155__factory {
    return super.connect(signer) as ERC1155__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155Interface {
    return new utils.Interface(_abi) as ERC1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155 {
    return new Contract(address, _abi, signerOrProvider) as ERC1155;
  }
}
