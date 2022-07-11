const Blockfrost = require("@blockfrost/blockfrost-js");
const { assetsPolicyByIdAll, assets } = require("@blockfrost/blockfrost-js/lib/endpoints/api/assets");
const { add } = require("@blockfrost/blockfrost-js/lib/endpoints/ipfs");
// import { BlockFrostAPI } from '@blockfrost/blockfrost-js'; // using import syntax
// testnet8cFXCdT1HoKuqhOGtnFq93Pb6MZVlKI3
const API = new Blockfrost.BlockFrostAPI({
  projectId: "testnetAkwLMd5VgcSQLCP2uBwzwIeiw4Z9qeEC", // see: https://blockfrost.io
});

async function runExample() {
  try {

    const address = await API.addresses(
      "addr_test1qzuxrr3kjv3qlmkveqmqpnle305zdmzkdsugqnw09652pts0r7c7dgry3k3tck962853ez9qkx59yfthd3qmk4v6r54qz90e67"
    );
    const pools = await API.pools({ page: 1, count: 10, order: "asc" });

    const stakeaddress = await address.stake_address; // адрес кошелька

    const twoaboba = await API.accountsAddressesAssetsAll(stakeaddress); // asset кошелька
    const polass = twoaboba[0].unit;
    const policyid = twoaboba[0].unit.slice(0,56);
    const assetid = twoaboba[0].unit.slice(-10);
    const threeaboba = await API.assetsPolicyById(policyid); // ассеты по policyID
    const transid = await API.assetsTransactions(polass);
    const assetdata = await API.metadataTxsLabel("721");
    const q = await API.txsMetadata(transid[0].tx_hash)
    const assetname = Object.keys(q[0].json_metadata[policyid]); //костыль
    const assetname2 = q[0].json_metadata[policyid][assetname].name;

    //const asets = await API.metadataTxsLabel;

    // console.log("pools", pools);
    let uaddress = address.address;
    console.log("address:", uaddress);
    // console.log("balance", address.amount);
    // вывод нфт
    let ticket = address.amount[1].unit;
    console.log("ticket:", ticket);
    
     console.log(twoaboba); // выводим ассет
    console.log("asset name:", assetid); // asset name
    console.log("policyID:", policyid); // policyID на кошельке
    console.log("assetsByPolicyID", threeaboba[0]); // ассеты по policyID на кошельке
    console.log("asetdata:", assetdata);
    console.log("transaction id:", transid[0].tx_hash);
    console.log("q",q);
    console.log("assetname:",assetname2);

        while(true){}
  } catch (err) {
    console.log("error", err);
  }
}

runExample();