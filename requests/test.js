import fetch from "node-fetch";

// отработка ошибок согласно доке


// @@ вывод информации о policyID.
// TODO: извлечь основную информацию
function queryAsset(POLICY_ID) {
  fetch(`https://cardano-testnet.blockfrost.io/api/v0/assets/${POLICY_ID}`, {
    headers: {
      project_id: "testnet8cFXCdT1HoKuqhOGtnFq93Pb6MZVlKI3",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("policyid:", data);
    });
}
let policyId = "2746630c3fc744720afec1daa0dc4e797ffc11d0ce82a4d7904767f34d794e4654";
queryAsset(policyId);


// TODO: перебор активов + поиск токена в json
function queryAddress(WALLET_ADDRESS) {
  fetch(
    `https://cardano-testnet.blockfrost.io/api/v0/addresses/${WALLET_ADDRESS}`,
    {
      headers: {
        project_id: "testnet8cFXCdT1HoKuqhOGtnFq93Pb6MZVlKI3",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("wallet:", data);
    });
}
let walletAddress =
  "addr_test1qzuxrr3kjv3qlmkveqmqpnle305zdmzkdsugqnw09652pts0r7c7dgry3k3tck962853ez9qkx59yfthd3qmk4v6r54qz90e67";
queryAddress(walletAddress);