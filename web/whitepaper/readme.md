<h1 align="center">Cat's owner Whitepaper</h1>


## Abstract

In this paper we propose an open, permissioned network based on Ethereum protocol with Proof of Authority consensus by independent validators.

Authors: Sergio Casizzone

## Introduction

POA Network is an open, public, permissioned blockchain based on the Ethereum protocol. To reach consensus on a global state, it uses a Proof of Authority consensus algorithm. PoA consensus is a straightforward and efficient form of Proof of Stake with known validators and governance-based penalty system. A list of validators is managed by a smart contract with governance by validators.

## Hyperledger Besu

Our POA is based on Hyperledger Besu. Hyperledger Besu is an open-source Ethereum client developed under the Apache 2.0 license and written in Java. It runs on the Ethereum public network, private networks, and test networks such as Rinkeby, Ropsten, and Görli. Besu implements Proof of Work (Ethash) and Proof of Authority (IBFT 2.0 and Clique) consensus mechanisms.

With Besu we can develop enterprise applications requiring secure, high-performance transaction processing in a private network.

Besu supports enterprise features including privacy and permissioning.

We believe that POA Network will close a gap between private and public networks, and will become a model for open networks based on PoA consensus.

## Proof of Authority consensus protocols

Cat'owner POA implements the Clique and IBFT 2.0 Proof of Authority consensus protocols. Proof of Authority consensus protocols work when participants know each other and there is a level of trust between them.

Proof of Authority consensus protocols have faster block times and a much greater transaction throughput than the Ethash Proof of Work consensus protocol used on the Ethereum MainNet.

In Clique and IBFT 2.0, a group of nodes in the network act as signers (Clique) or validators (IBFT 2.0). The existing nodes in the signer/validator pool vote to add nodes to or remove nodes from the pool.


## Distribution of keys

During a creation of the `Genesis file`, the master of ceremony distributes keys to 3 independent validators. There is a single validator that haven't any keys.

A concerned third party can cross-validate validators' identities using open data sources and ensure that each validator is a good actor with no criminal record. In the proposed network, the identity of an individual validator and the trust of independent and non-affiliated participants secures the consensus.

You can check the validators on ours network at this link: <a href="https://graphana.catsowner.tk/d/XE4V0WGZz/besu-overview?orgId=1&refresh=10s&from=now-30m&to=now&var-system=All" target="_blank">Grafana</a>


## Use Cases

### Inexpensive Network

CZN Network provides inexpensive consensus to secure the network. Users can run Ethereum programs on CZN Network and spend less money on transaction fees. Overall cost of the network's security will also be cheaper due to lower market cap.

### Validators with known identity

Each validator of the network will prove his/her identity using "proof of identity". Each block will be attributed with the identity of a validator. If a miner breaks the rules of the open network, e.g. will not accept a transaction to a specific address, participants of the network will have legal instruments to resolve that problem.

### Fast network

Validators in CZN Network create blocks every 2 (two) seconds. A faster network allows for building new types of applications where response rate from the distributed consensus is important.


## CZN Token

The CZN token is the native token or coin of the CZN Cat's owner Network. It is used on the CZN Network for transactional purposes, for transaction fees (gas), and as a reward mechanism for validators. Apps such as poawallet use CZN for purchases as well as transaction costs, while others for gas fees while providing users with their own tokens.

The CZN token is a representation of the ERC20 token available to use on the Ethereum mainnet. It is an ERC20 token which has all of the same properties as the CZN token but is compatible with the mainnet.


## Distribution & Emissions

### Initial Supply

CZN's initial token supply when the core network was launched was 168,884,986,026,394,000 CZN.

These are the addresses wich have the total amount of tokens distributed in equal parts:
- <a href="https://explorer.catsowner.tk/account/0x8422396197a0a0e7d8d799923064e997b6648390" target="_blank">0x8422396197a0a0e7d8d799923064e997b6648390</a>
- <a href="https://explorer.catsowner.tk/account/0x34e6c301a9785a2a3e1ac24b5b3c383fac1428ac" target="_blank">0x34e6c301a9785a2a3e1ac24b5b3c383fac1428ac</a>
- <a href="https://explorer.catsowner.tk/account/0xc62b77856b1ce588ed14ca88dbe2ce6636964c78" target="_blank">0xc62b77856b1ce588ed14ca88dbe2ce6636964c78</a>

Click on the address to check the current value on <a href="https://explorer.catsowner.tk" target="_blank">Cat's owner Explorer</a>

### CZN Token Distribution

From these three addresses the CZN tokens wil be distributed in this way:

- 20% was reserved for founders/foundation/legal and released over two years.
- 10% was distributed to partners and advisors of CZN Network.
- 10% was reserved for the token pre-sale.
- 60% was reserved for the token sale.

### Circulating Supply

There is no inflation in CZN. All tokens are been minted on Genesis block.


## CZN on Binance Smart Chain

The BEP20 copy of the CZN token was created on Binance Smart Chain on Jun-03-2021 06:18:22 AM +UTC

You can check the transaction detail by clicking at transaction hash link: <a href="0xebbb2ceb871273bf7bfbfd4fc7d5a3361e9426a166d5dac7a81dea0af0a72cae" target="_blank">0xebbb2ceb871273bf7bfbfd4fc7d5a3361e9426a166d5dac7a81dea0af0a72cae</a>

## CZN Wallet

The wallet is a Progressive Web App. It works with several crypto tokens and blockchains. With Poa Wallet, you are in control over your funds. Receive, send, store and exchange your cryptocurrency within the mobile interface.

You can get the wallet at this link: <a href="https://wallet.catsowner.tk" target="_blank">Wallet</a>



### References
- https://github.com/jambtc/catsowner
- https://github.com/jambtc/poawallet
- https://github.com/jambtc/BSC-Contracts
