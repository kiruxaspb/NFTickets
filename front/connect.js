const Blockfrost = require("@blockfrost/blockfrost-js");

const API = new Blockfrost.BlockFrostAPI({
    projectId: "testnet8cFXCdT1HoKuqhOGtnFq93Pb6MZVlKI3",
});

let addressChecked = new Boolean;
let tokenChecked = new Boolean;

async function checkTicket() {
    let inputWallet = $('#inputAddress').val();
    let inputToken = $('#inputToken').val();
    
    try {
        const address = await API.addresses(inputWallet);
        const adr = address.address;

        if (adr === inputWallet) {
            addressChecked = true;
            console.log("Correct address:", addressChecked);

            for (let i = 0; i < address.amount.length; i++) {
                if (address.amount[i].unit === inputToken) {
                    tokenChecked = true;
                }
            }

            if (tokenChecked == true) {
                console.log("Token on the wallet:", tokenChecked);
            } else {
                tokenChecked = false;
                console.log("Token isn't on the wallet:", tokenChecked);
            }
        } else {
            addressChecked = false;
            console.log("invalid address:", addressChecked);
        }
    
        } catch (err) {
            console.log("error", err.message);
            addressChecked = false;
            console.log("invalid address:", addressChecked);
        }
        return addressChecked, tokenChecked;
}