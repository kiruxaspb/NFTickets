const Blockfrost = require("@blockfrost/blockfrost-js");
// import { BlockFrostAPI } from '@blockfrost/blockfrost-js'; // using import syntax

const API = new Blockfrost.BlockFrostAPI({
  projectId: "testnet8cFXCdT1HoKuqhOGtnFq93Pb6MZVlKI3", // see: https://blockfrost.io
});

async function runExample() {
  try {
    const latestBlock = await API.blocksLatest();
    const networkInfo = await API.network();
    const latestEpoch = await API.epochsLatest();
    const health = await API.health();
    const address = await API.addresses(
      "addr_test1qzuxrr3kjv3qlmkveqmqpnle305zdmzkdsugqnw09652pts0r7c7dgry3k3tck962853ez9qkx59yfthd3qmk4v6r54qz90e67"
    );
    const pools = await API.pools({ page: 1, count: 10, order: "asc" });

    console.log("pools", pools);
    console.log("address", address);
    console.log("networkInfo", networkInfo);
    console.log("latestEpoch", latestEpoch);
    console.log("latestBlock", latestBlock);
    console.log("health", health);
  } catch (err) {
    console.log("error", err);
  }
}

runExample();
