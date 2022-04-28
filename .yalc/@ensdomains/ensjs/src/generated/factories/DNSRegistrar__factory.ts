/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DNSRegistrar, DNSRegistrarInterface } from "../DNSRegistrar";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract DNSSEC",
        name: "_dnssec",
        type: "address",
      },
      {
        internalType: "contract PublicSuffixList",
        name: "_suffixes",
        type: "address",
      },
      {
        internalType: "contract ENS",
        name: "_ens",
        type: "address",
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
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "dnsname",
        type: "bytes",
      },
    ],
    name: "Claim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oracle",
        type: "address",
      },
    ],
    name: "NewOracle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "suffixes",
        type: "address",
      },
    ],
    name: "NewPublicSuffixList",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "name",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "proof",
        type: "bytes",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ens",
    outputs: [
      {
        internalType: "contract ENS",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "contract DNSSEC",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "name",
        type: "bytes",
      },
      {
        components: [
          {
            internalType: "bytes",
            name: "rrset",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "sig",
            type: "bytes",
          },
        ],
        internalType: "struct DNSSEC.RRSetWithSignature[]",
        name: "input",
        type: "tuple[]",
      },
      {
        internalType: "bytes",
        name: "proof",
        type: "bytes",
      },
    ],
    name: "proveAndClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "name",
        type: "bytes",
      },
      {
        components: [
          {
            internalType: "bytes",
            name: "rrset",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "sig",
            type: "bytes",
          },
        ],
        internalType: "struct DNSSEC.RRSetWithSignature[]",
        name: "input",
        type: "tuple[]",
      },
      {
        internalType: "bytes",
        name: "proof",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "resolver",
        type: "address",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "proveAndClaimWithResolver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract DNSSEC",
        name: "_dnssec",
        type: "address",
      },
    ],
    name: "setOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract PublicSuffixList",
        name: "_suffixes",
        type: "address",
      },
    ],
    name: "setPublicSuffixList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "suffixes",
    outputs: [
      {
        internalType: "contract PublicSuffixList",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceID",
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
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162003488380380620034888339818101604052810190620000379190620001fb565b826000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fb3eacd0e351fafdfefdec84e1cd19679b38dbcd63ea7c2c24da17fd2bc3b3c0e60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051620000c8919062000262565b60405180910390a181600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f9176b7f47e4504df5e5516c99d90d82ac7cbd49cc77e7f22ba2ac2f2e3a3eba8600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660405162000164919062000262565b60405180910390a180600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050506200033d565b600081519050620001c781620002ef565b92915050565b600081519050620001de8162000309565b92915050565b600081519050620001f58162000323565b92915050565b6000806000606084860312156200021157600080fd5b60006200022186828701620001b6565b93505060206200023486828701620001e4565b92505060406200024786828701620001cd565b9150509250925092565b6200025c816200027f565b82525050565b600060208201905062000279600083018462000251565b92915050565b60006200028c82620002cf565b9050919050565b6000620002a0826200027f565b9050919050565b6000620002b4826200027f565b9050919050565b6000620002c8826200027f565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620002fa8162000293565b81146200030657600080fd5b50565b6200031481620002a7565b81146200032057600080fd5b50565b6200032e81620002bb565b81146200033a57600080fd5b50565b61313b806200034d6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80633f15457f116100665780633f15457f1461011e5780637adbf9731461013c5780637dc0d1d0146101585780638bbedf7514610176578063be27b22c1461019257610093565b806301ffc9a7146100985780631ecfc411146100c8578063224199c2146100e457806330349ebe14610100575b600080fd5b6100b260048036038101906100ad919061211f565b6101ae565b6040516100bf91906126e7565b60405180910390f35b6100e260048036038101906100dd9190612374565b610280565b005b6100fe60048036038101906100f99190612220565b61048b565b005b6101086108cc565b6040516101159190612828565b60405180910390f35b6101266108f2565b604051610133919061280d565b60405180910390f35b6101566004803603810190610151919061234b565b610918565b005b610160610b20565b60405161016d91906127f2565b60405180910390f35b610190600480360381019061018b9190612189565b610b44565b005b6101ac60048036038101906101a791906122df565b610c07565b005b60007f01ffc9a7a5cef8baa21ed3c5c0d7e23accb804b619e9333b597f47a0d84076e27bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061027957507f17d8f49b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302571be36000801b6040518263ffffffff1660e01b81526004016102e09190612702565b60206040518083038186803b1580156102f857600080fd5b505afa15801561030c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033091906120a4565b905060008173ffffffffffffffffffffffffffffffffffffffff16638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561037a57600080fd5b505afa15801561038e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b291906120a4565b90508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103ec57600080fd5b82600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f9176b7f47e4504df5e5516c99d90d82ac7cbd49cc77e7f22ba2ac2f2e3a3eba8600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660405161047e9190612695565b60405180910390a1505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663435cc16285856040518363ffffffff1660e01b81526004016104e69291906126b0565b600060405180830381600087803b15801561050057600080fd5b505af1158015610514573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061053d9190612148565b9250600080600061054e8887610cd5565b9250925092508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b9906128c3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161461082b57600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161415610666576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065d90612843565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635ef2c7f08484308960006040518663ffffffff1660e01b81526004016106ca95949392919061277d565b600060405180830381600087803b1580156106e457600080fd5b505af11580156106f8573d6000803e3d6000fd5b5050505060008383604051602001610711929190612669565b6040516020818303038152906040528051906020012090508573ffffffffffffffffffffffffffffffffffffffff1663d5fa2b0082876040518363ffffffff1660e01b815260040161076492919061271d565b600060405180830381600087803b15801561077e57600080fd5b505af1158015610792573d6000803e3d6000fd5b50505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635b0fc9c382846040518363ffffffff1660e01b81526004016107f392919061271d565b600060405180830381600087803b15801561080d57600080fd5b505af1158015610821573d6000803e3d6000fd5b50505050506108c2565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635ef2c7f08484848960006040518663ffffffff1660e01b815260040161088f95949392919061277d565b600060405180830381600087803b1580156108a957600080fd5b505af11580156108bd573d6000803e3d6000fd5b505050505b5050505050505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302571be36000801b6040518263ffffffff1660e01b81526004016109789190612702565b60206040518083038186803b15801561099057600080fd5b505afa1580156109a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c891906120a4565b905060008173ffffffffffffffffffffffffffffffffffffffff16638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a1257600080fd5b505afa158015610a26573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4a91906120a4565b90508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a8457600080fd5b826000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fb3eacd0e351fafdfefdec84e1cd19679b38dbcd63ea7c2c24da17fd2bc3b3c0e60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051610b139190612695565b60405180910390a1505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663435cc16283836040518363ffffffff1660e01b8152600401610b9f9291906126b0565b600060405180830381600087803b158015610bb957600080fd5b505af1158015610bcd573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610bf69190612148565b9050610c028382610c07565b505050565b6000806000610c168585610cd5565b925092509250600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166306ab59238484846040518463ffffffff1660e01b8152600401610c7b93929190612746565b602060405180830381600087803b158015610c9557600080fd5b505af1158015610ca9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ccd91906120f6565b505050505050565b600080600080610cef600087610ef090919063ffffffff16565b60ff169050610d0a60018288610f419092919063ffffffff16565b92506000610d47600183610d1e9190612a0c565b6001848a51610d2d9190612b6e565b610d379190612b6e565b89610f6d9092919063ffffffff16565b9050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634f89059e826040518263ffffffff1660e01b8152600401610da491906127d0565b60206040518083038186803b158015610dbc57600080fd5b505afa158015610dd0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df491906120cd565b610e33576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e2a90612863565b60405180910390fd5b610e3e816000611028565b9450610e6b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168888611443565b50809350508273ffffffffffffffffffffffffffffffffffffffff168585604051602001610e9a929190612669565b604051602081830303815290604052805190602001207fa2e66ce20e6fb2c4f61339c364ad79f15160cf5307230c8bc4d628adbca2ba3989604051610edf91906127d0565b60405180910390a350509250925092565b6000828281518110610f2b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b60f81c905092915050565b600083518284610f519190612a0c565b1115610f5c57600080fd5b818360208601012090509392505050565b606083518284610f7d9190612a0c565b1115610f8857600080fd5b60008267ffffffffffffffff811115610fca577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610ffc5781602001600182028036833780820191505090505b509050600080602083019150856020880101905061101b8282876116b4565b8293505050509392505050565b60008061103e8385610ef090919063ffffffff16565b60ff1690506000811415611058576000801b91505061143d565b600061107b856001848761106c9190612a0c565b6110769190612a0c565b611028565b905060006110a060018661108f9190612a0c565b8488610f419092919063ffffffff16565b905081816040516020016110b5929190612669565b6040516020818303038152906040528051906020012093506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302571be3866040518263ffffffff1660e01b815260040161112a9190612702565b60206040518083038186803b15801561114257600080fd5b505afa158015611156573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061117a91906120a4565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614806111e257503073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b611221576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161121890612883565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611438576000801b831415611384576000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166302571be36000801b6040518263ffffffff1660e01b81526004016112bf9190612702565b60206040518083038186803b1580156112d757600080fd5b505afa1580156112eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061130f91906120a4565b90508073ffffffffffffffffffffffffffffffffffffffff16638cb8ecec84306040518363ffffffff1660e01b815260040161134c92919061271d565b600060405180830381600087803b15801561136657600080fd5b505af115801561137a573d6000803e3d6000fd5b5050505050611437565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166306ab59238484306040518463ffffffff1660e01b81526004016113e393929190612746565b602060405180830381600087803b1580156113fd57600080fd5b505af1158015611411573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061143591906120f6565b505b5b505050505b92915050565b60008061144e611d86565b61146e6005865161145f9190612a0c565b8261171890919063ffffffff16565b506114b76040518060400160405280600581526020017f045f656e730000000000000000000000000000000000000000000000000000008152508261178290919063ffffffff16565b506114cb858261178290919063ffffffff16565b506000808773ffffffffffffffffffffffffffffffffffffffff1663087991bc601085600001516040518363ffffffff1660e01b815260040161150f9291906128e3565b60606040518083038186803b15801561152757600080fd5b505afa15801561153b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061155f919061239d565b9091508093508192505050600060601b6bffffffffffffffffffffffff1916826bffffffffffffffffffffffff191614801561159c575060008651145b156115b057600080945094505050506116ac565b85805190602001206bffffffffffffffffffffffff1916826bffffffffffffffffffffffff1916146115e157600080fd5b60006115f76000886117a490919063ffffffff16565b90505b611603816117ce565b6116a05761162081608001518361161a9190612a62565b426117e4565b61165f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611656906128a3565b60405180910390fd5b600080611670898460a00151611800565b8093508192505050811561169057806001975097505050505050506116ac565b505061169b81611886565b6115fa565b50600080945094505050505b935093915050565b5b602081106116f357815183526020836116ce9190612a0c565b92506020826116dd9190612a0c565b91506020816116ec9190612b6e565b90506116b5565b60006001826020036101000a0390508019835116818551168181178652505050505050565b611720611d86565b600060208361172f9190612df3565b1461175b576020826117419190612df3565b602061174d9190612b6e565b826117589190612a0c565b91505b81836020018181525050604051808452600081528281016020016040525082905092915050565b61178a611d86565b61179c838460000151518485516119d0565b905092915050565b6117ac611da0565b828160000181905250818160c00181815250506117c881611886565b92915050565b6000816000015151826020015110159050919050565b60008082846117f39190612af6565b60030b1215905092915050565b6000805b83518310156118775760006118228486610ef090919063ffffffff16565b60ff1690506001846118349190612a0c565b9350600080611844878785611abf565b80935081925050508115611861578060019450945050505061187f565b828661186d9190612a0c565b9550505050611804565b600080915091505b9250929050565b8060c001518160200181815250508060000151518160200151106118a9576119cd565b60006118bd82600001518360200151611b29565b82602001516118cc9190612a0c565b90506118e5818360000151611bcc90919063ffffffff16565b826040019061ffff16908161ffff16815250506002816119059190612a0c565b905061191e818360000151611bcc90919063ffffffff16565b826060019061ffff16908161ffff168152505060028161193e9190612a0c565b9050611957818360000151611bfb90919063ffffffff16565b826080019063ffffffff16908163ffffffff168152505060048161197b9190612a0c565b90506000611996828460000151611bcc90919063ffffffff16565b61ffff1690506002826119a99190612a0c565b9150818360a001818152505080826119c19190612a0c565b8360c001818152505050505b50565b6119d8611d86565b82518211156119e657600080fd5b846020015182856119f79190612a0c565b1115611a2c57611a2b856002611a1c88602001518887611a179190612a0c565b611c2c565b611a269190612a9c565b611c48565b5b600080865180518760208301019350808887011115611a4b5787860182525b60208701925050505b60208410611a925780518252602082611a6d9190612a0c565b9150602081611a7c9190612a0c565b9050602084611a8b9190612b6e565b9350611a54565b60006001856020036101000a03905080198251168184511681811785525050508692505050949350505050565b60008063613d3078611ada8587611bfb90919063ffffffff16565b63ffffffff1614611af15760008091509150611b21565b602c831015611b065760008091509150611b21565b611b1c85600486611b179190612a0c565b611c6c565b915091505b935093915050565b6000808290505b600115611bb75783518110611b6e577f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b6000611b838286610ef090919063ffffffff16565b60ff169050600181611b959190612a0c565b82611ba09190612a0c565b91506000811415611bb15750611bb7565b50611b30565b8281611bc39190612b6e565b91505092915050565b60008251600283611bdd9190612a0c565b1115611be857600080fd5b61ffff8260028501015116905092915050565b60008251600483611c0c9190612a0c565b1115611c1757600080fd5b63ffffffff8260048501015116905092915050565b600081831115611c3e57829050611c42565b8190505b92915050565b600082600001519050611c5b8383611718565b50611c668382611782565b50505050565b6000806028838551611c7e9190612b6e565b1015611c905760008091509150611d7f565b6000808490505b602885611ca49190612a0c565b811015611d7557600482901b91506000611cc78288610ef090919063ffffffff16565b60ff16905060308110158015611cdd5750603a81105b15611cf857603081611cef9190612b6e565b83179250611d61565b60418110158015611d095750604781105b15611d2457603781611d1b9190612b6e565b83179250611d60565b60618110158015611d355750606781105b15611d5057605781611d479190612b6e565b83179250611d5f565b60008094509450505050611d7f565b5b5b508080611d6d90612da0565b915050611c97565b5080600192509250505b9250929050565b604051806040016040528060608152602001600081525090565b6040518060e001604052806060815260200160008152602001600061ffff168152602001600061ffff168152602001600063ffffffff16815260200160008152602001600081525090565b6000611dfe611df984612938565b612913565b90508083825260208201905082856020860282011115611e1d57600080fd5b60005b85811015611e6757813567ffffffffffffffff811115611e3f57600080fd5b808601611e4c8982612013565b85526020850194506020840193505050600181019050611e20565b5050509392505050565b6000611e84611e7f84612964565b612913565b905082815260208101848484011115611e9c57600080fd5b611ea7848285612d2d565b509392505050565b6000611ec2611ebd84612964565b612913565b905082815260208101848484011115611eda57600080fd5b611ee5848285612d3c565b509392505050565b600081359050611efc8161304d565b92915050565b600081519050611f118161304d565b92915050565b600082601f830112611f2857600080fd5b8135611f38848260208601611deb565b91505092915050565b600081519050611f5081613064565b92915050565b600081519050611f658161307b565b92915050565b600081519050611f7a81613092565b92915050565b600081359050611f8f816130a9565b92915050565b600082601f830112611fa657600080fd5b8135611fb6848260208601611e71565b91505092915050565b600082601f830112611fd057600080fd5b8151611fe0848260208601611eaf565b91505092915050565b600081359050611ff8816130c0565b92915050565b60008135905061200d816130d7565b92915050565b60006040828403121561202557600080fd5b61202f6040612913565b9050600082013567ffffffffffffffff81111561204b57600080fd5b61205784828501611f95565b600083015250602082013567ffffffffffffffff81111561207757600080fd5b61208384828501611f95565b60208301525092915050565b60008151905061209e816130ee565b92915050565b6000602082840312156120b657600080fd5b60006120c484828501611f02565b91505092915050565b6000602082840312156120df57600080fd5b60006120ed84828501611f41565b91505092915050565b60006020828403121561210857600080fd5b600061211684828501611f6b565b91505092915050565b60006020828403121561213157600080fd5b600061213f84828501611f80565b91505092915050565b60006020828403121561215a57600080fd5b600082015167ffffffffffffffff81111561217457600080fd5b61218084828501611fbf565b91505092915050565b60008060006060848603121561219e57600080fd5b600084013567ffffffffffffffff8111156121b857600080fd5b6121c486828701611f95565b935050602084013567ffffffffffffffff8111156121e157600080fd5b6121ed86828701611f17565b925050604084013567ffffffffffffffff81111561220a57600080fd5b61221686828701611f95565b9150509250925092565b600080600080600060a0868803121561223857600080fd5b600086013567ffffffffffffffff81111561225257600080fd5b61225e88828901611f95565b955050602086013567ffffffffffffffff81111561227b57600080fd5b61228788828901611f17565b945050604086013567ffffffffffffffff8111156122a457600080fd5b6122b088828901611f95565b93505060606122c188828901611eed565b92505060806122d288828901611eed565b9150509295509295909350565b600080604083850312156122f257600080fd5b600083013567ffffffffffffffff81111561230c57600080fd5b61231885828601611f95565b925050602083013567ffffffffffffffff81111561233557600080fd5b61234185828601611f95565b9150509250929050565b60006020828403121561235d57600080fd5b600061236b84828501611fe9565b91505092915050565b60006020828403121561238657600080fd5b600061239484828501611ffe565b91505092915050565b6000806000606084860312156123b257600080fd5b60006123c08682870161208f565b93505060206123d18682870161208f565b92505060406123e286828701611f56565b9150509250925092565b60006123f88383612616565b905092915050565b61240981612ba2565b82525050565b600061241a826129a5565b61242481856129c8565b93508360208202850161243685612995565b8060005b85811015612472578484038952815161245385826123ec565b945061245e836129bb565b925060208a0199505060018101905061243a565b50829750879550505050505092915050565b61248d81612bb4565b82525050565b61249c81612bec565b82525050565b6124b36124ae82612bec565b612de9565b82525050565b60006124c4826129b0565b6124ce81856129d9565b93506124de818560208601612d3c565b6124e781612eb1565b840191505092915050565b60006124fd826129b0565b61250781856129ea565b9350612517818560208601612d3c565b61252081612eb1565b840191505092915050565b61253481612caf565b82525050565b61254381612cd3565b82525050565b61255281612cf7565b82525050565b61256181612d1b565b82525050565b60006125746026836129fb565b915061257f82612ec2565b604082019050919050565b60006125976023836129fb565b91506125a282612f11565b604082019050919050565b60006125ba602a836129fb565b91506125c582612f60565b604082019050919050565b60006125dd603c836129fb565b91506125e882612faf565b604082019050919050565b6000612600602d836129fb565b915061260b82612ffe565b604082019050919050565b6000604083016000830151848203600086015261263382826124b9565b9150506020830151848203602086015261264d82826124b9565b9150508091505092915050565b61266381612c53565b82525050565b600061267582856124a2565b60208201915061268582846124a2565b6020820191508190509392505050565b60006020820190506126aa6000830184612400565b92915050565b600060408201905081810360008301526126ca818561240f565b905081810360208301526126de81846124f2565b90509392505050565b60006020820190506126fc6000830184612484565b92915050565b60006020820190506127176000830184612493565b92915050565b60006040820190506127326000830185612493565b61273f6020830184612400565b9392505050565b600060608201905061275b6000830186612493565b6127686020830185612493565b6127756040830184612400565b949350505050565b600060a0820190506127926000830188612493565b61279f6020830187612493565b6127ac6040830186612400565b6127b96060830185612400565b6127c66080830184612558565b9695505050505050565b600060208201905081810360008301526127ea81846124f2565b905092915050565b6000602082019050612807600083018461252b565b92915050565b6000602082019050612822600083018461253a565b92915050565b600060208201905061283d6000830184612549565b92915050565b6000602082019050818103600083015261285c81612567565b9050919050565b6000602082019050818103600083015261287c8161258a565b9050919050565b6000602082019050818103600083015261289c816125ad565b9050919050565b600060208201905081810360008301526128bc816125d0565b9050919050565b600060208201905081810360008301526128dc816125f3565b9050919050565b60006040820190506128f8600083018561265a565b818103602083015261290a81846124f2565b90509392505050565b600061291d61292e565b90506129298282612d6f565b919050565b6000604051905090565b600067ffffffffffffffff82111561295357612952612e82565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561297f5761297e612e82565b5b61298882612eb1565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000612a1782612c81565b9150612a2283612c81565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612a5757612a56612e24565b5b828201905092915050565b6000612a6d82612c8b565b9150612a7883612c8b565b92508263ffffffff03821115612a9157612a90612e24565b5b828201905092915050565b6000612aa782612c81565b9150612ab283612c81565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612aeb57612aea612e24565b5b828202905092915050565b6000612b0182612c46565b9150612b0c83612c46565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffff8000000001821260008412151615612b4757612b46612e24565b5b82637fffffff018213600084121615612b6357612b62612e24565b5b828203905092915050565b6000612b7982612c81565b9150612b8483612c81565b925082821015612b9757612b96612e24565b5b828203905092915050565b6000612bad82612c61565b9050919050565b60008115159050919050565b60007fffffffffffffffffffffffffffffffffffffffff00000000000000000000000082169050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6000612c2d82612ba2565b9050919050565b6000612c3f82612ba2565b9050919050565b60008160030b9050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600067ffffffffffffffff82169050919050565b6000612cba82612cc1565b9050919050565b6000612ccc82612c61565b9050919050565b6000612cde82612ce5565b9050919050565b6000612cf082612c61565b9050919050565b6000612d0282612d09565b9050919050565b6000612d1482612c61565b9050919050565b6000612d2682612c9b565b9050919050565b82818337600083830152505050565b60005b83811015612d5a578082015181840152602081019050612d3f565b83811115612d69576000848401525b50505050565b612d7882612eb1565b810181811067ffffffffffffffff82111715612d9757612d96612e82565b5b80604052505050565b6000612dab82612c81565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612dde57612ddd612e24565b5b600182019050919050565b6000819050919050565b6000612dfe82612c81565b9150612e0983612c81565b925082612e1957612e18612e53565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f43616e6e6f74207365742061646472206966207265736f6c766572206973206e60008201527f6f74207365740000000000000000000000000000000000000000000000000000602082015250565b7f506172656e74206e616d65206d7573742062652061207075626c69632073756660008201527f6669780000000000000000000000000000000000000000000000000000000000602082015250565b7f43616e6e6f7420656e61626c652061206e616d65206f776e656420627920736f60008201527f6d656f6e6520656c736500000000000000000000000000000000000000000000602082015250565b7f444e53207265636f7264206973207374616c653b2072656672657368206f722060008201527f64656c657465206974206265666f72652070726f63656564696e672e00000000602082015250565b7f4f6e6c79206f776e65722063616e2063616c6c2070726f7665416e64436c616960008201527f6d576974685265736f6c76657200000000000000000000000000000000000000602082015250565b61305681612ba2565b811461306157600080fd5b50565b61306d81612bb4565b811461307857600080fd5b50565b61308481612bc0565b811461308f57600080fd5b50565b61309b81612bec565b81146130a657600080fd5b50565b6130b281612bf6565b81146130bd57600080fd5b50565b6130c981612c22565b81146130d457600080fd5b50565b6130e081612c34565b81146130eb57600080fd5b50565b6130f781612c8b565b811461310257600080fd5b5056fea26469706673582212206ee5cab83a909097227319cce5a4b719af0f19534dc0e6e62503c5f38a59e2e764736f6c63430008040033";

type DNSRegistrarConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DNSRegistrarConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DNSRegistrar__factory extends ContractFactory {
  constructor(...args: DNSRegistrarConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _dnssec: string,
    _suffixes: string,
    _ens: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DNSRegistrar> {
    return super.deploy(
      _dnssec,
      _suffixes,
      _ens,
      overrides || {}
    ) as Promise<DNSRegistrar>;
  }
  override getDeployTransaction(
    _dnssec: string,
    _suffixes: string,
    _ens: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _dnssec,
      _suffixes,
      _ens,
      overrides || {}
    );
  }
  override attach(address: string): DNSRegistrar {
    return super.attach(address) as DNSRegistrar;
  }
  override connect(signer: Signer): DNSRegistrar__factory {
    return super.connect(signer) as DNSRegistrar__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DNSRegistrarInterface {
    return new utils.Interface(_abi) as DNSRegistrarInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DNSRegistrar {
    return new Contract(address, _abi, signerOrProvider) as DNSRegistrar;
  }
}
