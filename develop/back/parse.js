const Blockfrost = require("@blockfrost/blockfrost-js");
// import { BlockFrostAPI } from '@blockfrost/blockfrost-js'; // using import syntax

const API = new Blockfrost.BlockFrostAPI({
  projectId: "testnet8cFXCdT1HoKuqhOGtnFq93Pb6MZVlKI3",
});

async function runExample() {
  try {

    const address = await API.addresses(
      "addr_test1qzuxrr3kjv3qlmkveqmqpnle305zdmzkdsugqnw09652pts0r7c7dgry3k3tck962853ez9qkx59yfthd3qmk4v6r54qz90e67"
    );

    const adr = await address.stake_address; // wallet address

    const walletasset = await API.accountsAddressesAssetsAll(adr); // asset кошелька
    let asetsbynft = walletasset[0].unit.slice(0,56); // token w/o asset name

    const asets = await API.assetsPolicyById(asetsbynft); // ассеты по policyID

    let uaddress = address.address;
    console.log("address:", uaddress);

    // output token
    let ticket = address.amount[1].unit;
    console.log("ticket:", ticket); // token
    
    console.log("full asset:", walletasset); // выводим ассет
    console.log("asset name:", walletasset[0].unit.slice(-10)); // asset name
    console.log("policyID:", walletasset[0].unit.slice(0,56)); // policyID на кошельке
    console.log("assetByPolicyID", asetsbynft); // полный ассет по policyID на кошельке

    console.log("test", asets); // ассеты по policyID на кошельке

  } catch (err) {
    console.log("error", err);
  }
}

runExample();

