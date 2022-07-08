import fetch from "node-fetch";

const walletAddress = "addr_test1qzuxrr3kjv3qlmkveqmqpnle305zdmzkdsugqnw09652pts0r7c7dgry3k3tck962853ez9qkx59yfthd3qmk4v6r54qz90e67";
const policyid = "2746630c3fc744720afec1daa0dc4e797ffc11d0ce82a4d7904767f34d794e4654";

let addressChecked = new Boolean;
let tokenChecked = new Boolean;

function queryAddress(WALLET_ADDRESS,POLICY_ID) {
    fetch(`https://cardano-testnet.blockfrost.io/api/v0/addresses/${WALLET_ADDRESS}`,
        {
            headers: {
                project_id: "testnet8cFXCdT1HoKuqhOGtnFq93Pb6MZVlKI3",
            },
        })
        .then((res) => res.json())

        .then((data) => {

        data.address === WALLET_ADDRESS ? console.log("valid address") : console.log("invalid address");
        // TODO: отработать ошибку, если введене не верный адрес
        //   {
        //     status_code: 400,
        //     error: 'Bad Request',
        //     message: 'Invalid address for this network or malformed address format.'
        //   }
        console.log("adr:", data.address);
        let trap;
        for (let i = 0; i < data.amount.length; i++) {
            if (data.amount[i].unit === POLICY_ID) {
                trap = i;
                tokenChecked = true;
            }
        }

        // tokenChecked == true ? console.log("valid token") : console.log("invalid token");
        // console.log("test", data.amount[trap].unit);
        if (tokenChecked == true) {
            console.log("valid token");
            console.log("token:", data.amount[trap].unit); // вывод найденного токена в активах
        } else {
            console.log("invalid token");
        }
    });

// TODO: сравнить fingerprint в транзакции и токене
/*  
    fetch(`https://cardano-testnet.blockfrost.io/api/v0/assets/${POLICY_ID}`,
    {
        headers: {
            project_id: "testnet8cFXCdT1HoKuqhOGtnFq93Pb6MZVlKI3",
        },
    })
    .then((res) => res.json())
    .then((data) => {
      console.log("policyid:", data.asset);
    });
*/
}

queryAddress(walletAddress, policyid);
