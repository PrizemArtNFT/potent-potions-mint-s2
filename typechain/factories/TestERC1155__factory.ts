/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestERC1155, TestERC1155Interface } from "../TestERC1155";

const _abi = [
  {
    inputs: [],
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040805160208101909152600081526200002c81620000f3565b5062000059336001670de0b6b3a7640000604051806020016040528060008152506200010c60201b60201c565b6200007e3360026001604051806020016040528060008152506200010c60201b60201c565b620000a33360036001604051806020016040528060008152506200010c60201b60201c565b620000c83360046001604051806020016040528060008152506200010c60201b60201c565b620000ed3360056001604051806020016040528060008152506200010c60201b60201c565b62000740565b8051620001089060029060208401906200047a565b5050565b6001600160a01b038416620001725760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b60648201526084015b60405180910390fd5b33620001988160008762000186886200022c565b62000191886200022c565b5050505050565b6000848152602081815260408083206001600160a01b038916845290915281208054859290620001ca908490620005fb565b909155505060408051858152602081018590526001600160a01b0380881692600092918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a462000191816000878787876200028e565b604080516001808252818301909252606091600091906020808301908036833701905050905082816000815181106200027557634e487b7160e01b600052603260045260246000fd5b602090810291909101015292915050565b505050505050565b620002ad846001600160a01b03166200047460201b620006601760201c565b15620002865760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190620002e990899089908890889088906004016200059f565b602060405180830381600087803b1580156200030457600080fd5b505af192505050801562000337575060408051601f3d908101601f19168201909252620003349181019062000520565b60015b620003f8576200034662000698565b806308c379a014156200038757506200035e620006b1565b806200036b575062000389565b8060405162461bcd60e51b8152600401620001699190620005e6565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e204552433131353560448201527f526563656976657220696d706c656d656e746572000000000000000000000000606482015260840162000169565b6001600160e01b0319811663f23a6e6160e01b146200046b5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b606482015260840162000169565b50505050505050565b3b151590565b828054620004889062000620565b90600052602060002090601f016020900481019282620004ac5760008555620004f7565b82601f10620004c757805160ff1916838001178555620004f7565b82800160010185558215620004f7579182015b82811115620004f7578251825591602001919060010190620004da565b506200050592915062000509565b5090565b5b808211156200050557600081556001016200050a565b60006020828403121562000532578081fd5b81516001600160e01b0319811681146200054a578182fd5b9392505050565b60008151808452815b8181101562000578576020818501810151868301820152016200055a565b818111156200058a5782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a060808201819052600090620005db9083018462000551565b979650505050505050565b6020815260006200054a602083018462000551565b600082198211156200061b57634e487b7160e01b81526011600452602481fd5b500190565b600181811c908216806200063557607f821691505b602082108114156200065757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8201601f191681016001600160401b03811182821017156200069157634e487b7160e01b600052604160045260246000fd5b6040525050565b600060033d1115620006ae57600481823e5160e01c5b90565b600060443d1015620006c05790565b6040516003193d81016004833e81513d6001600160401b038083116024840183101715620006f057505050505090565b8285019150815181811115620007095750505050505090565b843d8701016020828501011115620007245750505050505090565b62000735602082860101876200065d565b509095945050505050565b61140180620007506000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f41461010a578063a22cb4651461012a578063e985e9c51461013d578063f242432a1461017957600080fd5b8062fdd58e1461008c57806301ffc9a7146100b25780630e89341c146100d55780632eb2c2d6146100f5575b600080fd5b61009f61009a366004610e87565b61018c565b6040519081526020015b60405180910390f35b6100c56100c0366004610f7b565b610223565b60405190151581526020016100a9565b6100e86100e3366004610fba565b610275565b6040516100a9919061113b565b610108610103366004610d44565b610309565b005b61011d610118366004610eb0565b6103a0565b6040516100a991906110fa565b610108610138366004610e4d565b610502565b6100c561014b366004610d12565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b610108610187366004610dea565b6105d9565b60006001600160a01b0383166101fd5760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b60648201526084015b60405180910390fd5b506000908152602081815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b03198216636cdb3d1360e11b148061025457506001600160e01b031982166303a24d0760e21b145b8061026f57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606002805461028490611261565b80601f01602080910402602001604051908101604052809291908181526020018280546102b090611261565b80156102fd5780601f106102d2576101008083540402835291602001916102fd565b820191906000526020600020905b8154815290600101906020018083116102e057829003601f168201915b50505050509050919050565b6001600160a01b0385163314806103255750610325853361014b565b61038c5760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f74206044820152711bdddb995c881b9bdc88185c1c1c9bdd995960721b60648201526084016101f4565b6103998585858585610666565b5050505050565b606081518351146104055760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b60648201526084016101f4565b6000835167ffffffffffffffff81111561042f57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610458578160200160208202803683370190505b50905060005b84518110156104fa576104bf85828151811061048a57634e487b7160e01b600052603260045260246000fd5b60200260200101518583815181106104b257634e487b7160e01b600052603260045260246000fd5b602002602001015161018c565b8282815181106104df57634e487b7160e01b600052603260045260246000fd5b60209081029190910101526104f3816112c9565b905061045e565b509392505050565b336001600160a01b038316141561056d5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b60648201526084016101f4565b3360008181526001602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6001600160a01b0385163314806105f557506105f5853361014b565b6106535760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201526808185c1c1c9bdd995960ba1b60648201526084016101f4565b610399858585858561085f565b3b151590565b81518351146106c85760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016101f4565b6001600160a01b0384166106ee5760405162461bcd60e51b81526004016101f490611196565b3360005b84518110156107f157600085828151811061071d57634e487b7160e01b600052603260045260246000fd5b60200260200101519050600085838151811061074957634e487b7160e01b600052603260045260246000fd5b602090810291909101810151600084815280835260408082206001600160a01b038e1683529093529190912054909150818110156107995760405162461bcd60e51b81526004016101f4906111db565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b168252812080548492906107d6908490611249565b92505081905550505050806107ea906112c9565b90506106f2565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb878760405161084192919061110d565b60405180910390a4610857818787878787610985565b505050505050565b6001600160a01b0384166108855760405162461bcd60e51b81526004016101f490611196565b3361089e81878761089588610af0565b61039988610af0565b6000848152602081815260408083206001600160a01b038a168452909152902054838110156108df5760405162461bcd60e51b81526004016101f4906111db565b6000858152602081815260408083206001600160a01b038b811685529252808320878503905590881682528120805486929061091c908490611249565b909155505060408051868152602081018690526001600160a01b03808916928a821692918616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a461097c828888888888610b49565b50505050505050565b6001600160a01b0384163b156108575760405163bc197c8160e01b81526001600160a01b0385169063bc197c81906109c99089908990889088908890600401611057565b602060405180830381600087803b1580156109e357600080fd5b505af1925050508015610a13575060408051601f3d908101601f19168201909252610a1091810190610f9e565b60015b610ac057610a1f611310565b806308c379a01415610a595750610a34611328565b80610a3f5750610a5b565b8060405162461bcd60e51b81526004016101f4919061113b565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b60648201526084016101f4565b6001600160e01b0319811663bc197c8160e01b1461097c5760405162461bcd60e51b81526004016101f49061114e565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610b3857634e487b7160e01b600052603260045260246000fd5b602090810291909101015292915050565b6001600160a01b0384163b156108575760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190610b8d90899089908890889088906004016110b5565b602060405180830381600087803b158015610ba757600080fd5b505af1925050508015610bd7575060408051601f3d908101601f19168201909252610bd491810190610f9e565b60015b610be357610a1f611310565b6001600160e01b0319811663f23a6e6160e01b1461097c5760405162461bcd60e51b81526004016101f49061114e565b80356001600160a01b0381168114610c2a57600080fd5b919050565b600082601f830112610c3f578081fd5b81356020610c4c82611225565b604051610c59828261129c565b8381528281019150858301600585901b87018401881015610c78578586fd5b855b85811015610c9657813584529284019290840190600101610c7a565b5090979650505050505050565b600082601f830112610cb3578081fd5b813567ffffffffffffffff811115610ccd57610ccd6112fa565b604051610ce4601f8301601f19166020018261129c565b818152846020838601011115610cf8578283fd5b816020850160208301379081016020019190915292915050565b60008060408385031215610d24578182fd5b610d2d83610c13565b9150610d3b60208401610c13565b90509250929050565b600080600080600060a08688031215610d5b578081fd5b610d6486610c13565b9450610d7260208701610c13565b9350604086013567ffffffffffffffff80821115610d8e578283fd5b610d9a89838a01610c2f565b94506060880135915080821115610daf578283fd5b610dbb89838a01610c2f565b93506080880135915080821115610dd0578283fd5b50610ddd88828901610ca3565b9150509295509295909350565b600080600080600060a08688031215610e01578081fd5b610e0a86610c13565b9450610e1860208701610c13565b93506040860135925060608601359150608086013567ffffffffffffffff811115610e41578182fd5b610ddd88828901610ca3565b60008060408385031215610e5f578182fd5b610e6883610c13565b915060208301358015158114610e7c578182fd5b809150509250929050565b60008060408385031215610e99578182fd5b610ea283610c13565b946020939093013593505050565b60008060408385031215610ec2578182fd5b823567ffffffffffffffff80821115610ed9578384fd5b818501915085601f830112610eec578384fd5b81356020610ef982611225565b604051610f06828261129c565b8381528281019150858301600585901b870184018b1015610f25578889fd5b8896505b84871015610f4e57610f3a81610c13565b835260019690960195918301918301610f29565b5096505086013592505080821115610f64578283fd5b50610f7185828601610c2f565b9150509250929050565b600060208284031215610f8c578081fd5b8135610f97816113b2565b9392505050565b600060208284031215610faf578081fd5b8151610f97816113b2565b600060208284031215610fcb578081fd5b5035919050565b6000815180845260208085019450808401835b8381101561100157815187529582019590820190600101610fe5565b509495945050505050565b60008151808452815b8181101561103157602081850181015186830182015201611015565b818111156110425782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0386811682528516602082015260a06040820181905260009061108390830186610fd2565b82810360608401526110958186610fd2565b905082810360808401526110a9818561100c565b98975050505050505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190526000906110ef9083018461100c565b979650505050505050565b602081526000610f976020830184610fd2565b6040815260006111206040830185610fd2565b82810360208401526111328185610fd2565b95945050505050565b602081526000610f97602083018461100c565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b600067ffffffffffffffff82111561123f5761123f6112fa565b5060051b60200190565b6000821982111561125c5761125c6112e4565b500190565b600181811c9082168061127557607f821691505b6020821081141561129657634e487b7160e01b600052602260045260246000fd5b50919050565b601f8201601f1916810167ffffffffffffffff811182821017156112c2576112c26112fa565b6040525050565b60006000198214156112dd576112dd6112e4565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600060033d111561132557600481823e5160e01c5b90565b600060443d10156113365790565b6040516003193d81016004833e81513d67ffffffffffffffff816024840111818411171561136657505050505090565b828501915081518181111561137e5750505050505090565b843d87010160208285010111156113985750505050505090565b6113a76020828601018761129c565b509095945050505050565b6001600160e01b0319811681146113c857600080fd5b5056fea2646970667358221220b1fdfd30df40b38879f7e89a994c957fd7ce07d64e0e054817d9a0a478f00c9764736f6c63430008040033";

export class TestERC1155__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestERC1155> {
    return super.deploy(overrides || {}) as Promise<TestERC1155>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestERC1155 {
    return super.attach(address) as TestERC1155;
  }
  connect(signer: Signer): TestERC1155__factory {
    return super.connect(signer) as TestERC1155__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestERC1155Interface {
    return new utils.Interface(_abi) as TestERC1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC1155 {
    return new Contract(address, _abi, signerOrProvider) as TestERC1155;
  }
}
