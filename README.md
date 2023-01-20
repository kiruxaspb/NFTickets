# NFTickets
![logo](https://i.imgur.com/wY3kRFB.png)![logo](https://i.imgur.com/rApJ4Oj.png)

The project is dedicated to the development of a web application with the integration of the Cardano blockchain for checking tickets interpreted into NFT tokens.

The application generates a QR code to create a unique ticket based on NFT-token data: Public key, PolicyID and Asset Name.
To check the input data , the following are used [Blockfrost](https://blockfrost.io/) and [Cardanoscan](https://cardanoscan.io/).

#### Functionality:
* Manual verification of the ticket address and token
* QR code generation based on input data
* Scan the QR code and check the read data

![web](https://i.imgur.com/FRCELIH.png)
## Description

The verification is carried out on the basis of comparing the input data with the information placed in the Cardano blockchain network, which have already been placed in it in advance.

The input data can be of the following types:
* ***The address of the owner[1] and the Asset of the token ("ticket")[2]:***

**Address** represents the public wallet identifier from the Cardano blockchain network. **Asset** is an identifier of the form: policy id (NFT token) + asset name token.
```
[1]addr_test1qzqxrr3kjv3qlmkveqmqpnle305zdmzkdsugqnw09652pts0r7c7dgry3k3tck962653ez9qkx51yfthd3qmk4v6r54qz90e67

[2]2246630c3fc744720afec1daa0dc4e797afc11d0ce82a4d7904767f34d794e4654
```
* ***QR code in which a JSON object of the format is formed:***
```
{
"address": "addr_test1qzqxrr3kjv3qlmkveqmqpnle30s...yftsahd3qmk4v6r54qz90e6722",
"policyid": "2246630c3fc744720afec1daa0dc4e797afc11d0ce82a4d7904767f34d794e4654"
}
```
## User Manual
Two situations are considered:
1. The user **does not** have a ready-made QR code to check the ticket. In this case, you need to enter data about the **Address** and **Policy id** of the ticket holder in the appropriate fields. Next, using the button **Check the ticket** you can find out about the status of the ticket and the address related to it. It is also possible to generate a QR code based on the entered data using the **Generate QR** button. The QR code will be displayed in the corresponding field.
2. The user has a ready QR code to check the ticket. By pressing the **Scan QR** button, the camera is activated, with which you can scan the ticket. Verification is performed automatically after reading the QR code.

## Token verification

1) Reading input data using data entry forms or after scanning a QR code.
2) Verification is carried out by accessing the Cardano blockchain network using the Blockfrost SDK.
3) The data obtained is compared with the current information on the network: first, the address is checked, and then, if the address exists, the token is searched in assets at the wallet address.

You can learn more about the verification method: ```/NFTickets/bootstrap_app/src/js/CheckTokenByAddress.js```

**Tests results:**
1) A valid address and an existing token:

	![valid](https://i.imgur.com/DQIfSE5.png)
2) A valid address and a non-existent token:

	![invalid](https://i.imgur.com/eXm9bIz.png)
3) Incorrect address. In this case, the token search is not performed:

	![invalid](https://i.imgur.com/Y9fzi4u.png)

## Installation

The application requires a Node to work.js, which must be installed before you start working with the application.

#### Installing and launching a web application
1) Clone the application repository to the working directory:
```
git clone https://github.com/kiruxaspb/NFTickets.git
```
2) Go to the source code folder of the application:
```
cd /NFTickets/bootstrap_app
```
3) Install all the dependencies for the application to work:
```
npm i
```
4) Launch the application
```
npm start
```
## Stack

1. JavaScript - used to write the verification module and work with the Backend part of the application
2. Node.js - the server part of the application
3. Blockfrost SDK - used for the operation of the verification module
4. CardanoScan - cardano network explorer
