const Blockfrost = require("@blockfrost/blockfrost-js");

const API = new Blockfrost.BlockFrostAPI({
    projectId: "testnet8cFXCdT1HoKuqhOGtnFq93Pb6MZVlKI3",
});

const target_err = "Invalid address for this network or malformed address format.";
// @@ WALLET_ADDR & POLICY_ID get from site @@
module.exports.checkTicket = async function(WALLET_ADDR, POLICY_ID) {
    let checked = new Object;
    try {
        const address = await API.addresses(WALLET_ADDR);
        const adr = address.address;

        // @@ Address comparison @@
        if (adr === WALLET_ADDR) {
            checked.addressChecked = true;
            console.log("Correct address:", checked.addressChecked);

            // @@ Search token in assets @@
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
        }
        console.log("exited checker");
        return checked;
}