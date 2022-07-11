import fetch from "node-fetch";

const walletAddress = "addr_test1qzuxrr3kjv3qlmkveqmqpnle305zdmzkdsugqnw09652pts0r7c7dgry3k3tck962853ez9qkx59yfthd3qmk4v6r54qz90e67";
const policyid = "2746630c3fc744720afec1daa0dc4e797ffc11d0ce82a4d7904767f34d794e4654";

const target_err = "Invalid address for this network or malformed address format."

let addressCheckStatus = new Boolean;
let tokenCheckStatus = new Boolean;

function queryAddress(WALLET_ADDRESS,POLICY_ID) {
    // @@ Get data from API @@
    fetch(`https://cardano-testnet.blockfrost.io/api/v0/addresses/${WALLET_ADDRESS}`,
        {
            headers: {
                project_id: "testnet8cFXCdT1HoKuqhOGtnFq93Pb6MZVlKI3",
            },
        })
        .then((res) => res.json())
        .then((data) => {

        // @@ Trap error if address incorrect @@ 
        if (data.message === target_err) {
            addressCheckStatus = false;
            console.log("invalid address", addressCheckStatus);
            return;
        } else {
            addressCheckStatus = true;
            console.log("valid address:", addressCheckStatus);
            console.log("address:", data.address);

            // @@ Search for a token in assets @@
            let trap;
            for (let i = 0; i < data.amount.length; i++) {
                if (data.amount[i].unit === POLICY_ID) {
                    trap = i;
                    tokenCheckStatus = true;
                }
            }
            
            if (tokenCheckStatus == true) {
                console.log("valid token:", tokenCheckStatus);
                console.log("token:", data.amount[trap].unit); // Output found target token
            } else {
                tokenCheckStatus = false;
                console.log("invalid token:", tokenCheckStatus);
            }
        }
    });
}

queryAddress(walletAddress, policyid);
