const Blockfrost = require("@blockfrost/blockfrost-js");

const API = new Blockfrost.BlockFrostAPI({
    projectId: "testnet8cFXCdT1HoKuqhOGtnFq93Pb6MZVlKI3",
});

// @@ WALLET_ADDR & POLICY_ID will be get from site @@

//const WALLET_ADDR = "a2dr_test1qzuxrr3kjv3qlmkveqmqpnle305zdmzkdsugqnw09652pts0r7c7dgry3k3tck962853ez9qkx59yfthd3qmk4v6r54qz90e67";

//const POLICY_ID = "2746630c3fc744720afec1daa0dc4e797ffc11d0ce82a4d7904767f34d794e4654" // policy ID + asset name

const target_err = "Invalid address for this network or malformed address format.";

let checked = new Object;

module.exports.checkTicket = async function(WALLET_ADDR, POLICY_ID) {
    //const WALLET_ADDR = "addr_test1qzuxrr3kjv3qlmkveqmqpnle305zdmzkdsugqnw09652pts0r7c7dgry3k3tck962853ez9qkx59yfthd3qmk4v6r54qz90e67";

//const POLICY_ID = "2746630c3fc744720afec1daa0dc4e797ffc11d0ce82a4d7904767f34d794e4654" // policy ID + asset name
    try {
        const address = await API.addresses(WALLET_ADDR);
        const adr = address.address;

        // @@ Address comparison @@
        if (adr === WALLET_ADDR) {
            checked.addressChecked = true;
            console.log("Correct address:", checked.addressChecked);

            // @@ search token in assets @@
            for (let i = 0; i < address.amount.length; i++) {
                if (address.amount[i].unit === POLICY_ID) {
                    checked.tokenChecked = true;
                }
            }

            //  @@ Getting the search result @@
            if (checked.tokenChecked == true) {
                console.log("Token on the wallet:", checked.tokenChecked);
            } else {
                checked.tokenChecked = false;
                console.log("Token isn't on the wallet:", checked.tokenChecked);
            }
        }
    
        } catch (err) {
            if (err.message === target_err) {
                checked.addressChecked = false;
                console.log("invalid address - ", checked.addressChecked);
                checked.tokenChecked = false;
            }
            console.log("error", err);
            // console.log("error", err.message, err.status_code);
        }
        console.log("exited checker");
        return checked;
}