const Blockfrost = require("@blockfrost/blockfrost-js");

const API = new Blockfrost.BlockFrostAPI({
    projectId: "testnet8cFXCdT1HoKuqhOGtnFq93Pb6MZVlKI3",
});

// iaddress & itestPolicyID will be get from site
const iaddress = "addr_test1qzuxrr3kjv3qlmkveqmqpnle305zdmzkdsugqnw09652pts0r7c7dgry3k3tck962853ez9qkx59yfthd3qmk4v6r54qz90e67";
const itestpolicyID = "2746630c3fc744720afec1daa0dc4e797ffc11d0ce82a4d7904767f34d794e4654" // policyID + asset name

let addressChecked = new Boolean;
let tokenChecked = new Boolean;

async function checkTicket() {
    try {
        const address = await API.addresses(iaddress);
        const adr = address.address;

        // address comparison
        if (adr === iaddress) {
            addressChecked = true;
            console.log("Correct address.Status:", addressChecked);

            // search token in assets
            for (let i = 0; i < address.amount.length; i++) {
                if (address.amount[i].unit === itestpolicyID) {
                    tokenChecked = true;
                }
            }

            // getting the search result
            if (tokenChecked == true) {
                console.log("Token on the wallet.Status:", tokenChecked);
            } else {
                tokenChecked = false;
                console.log("Token isn't on the wallet.Status:", tokenChecked);
            }
        } else {
            addressChecked = false;
            console.log("invalid address.Status:", addressChecked);
        }
    
        } catch (err) {
            console.log("error", err);
        }
}

checkTicket();
