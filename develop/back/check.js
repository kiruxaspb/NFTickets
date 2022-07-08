const Blockfrost = require("@blockfrost/blockfrost-js");
const { assetsPolicyByIdAll } = require("@blockfrost/blockfrost-js/lib/endpoints/api/assets");
// import { BlockFrostAPI } from '@blockfrost/blockfrost-js'; // using import syntax

const API = new Blockfrost.BlockFrostAPI({
  projectId: "testnet8cFXCdT1HoKuqhOGtnFq93Pb6MZVlKI3",
});

const testadr = "addr_test1qzuxrr3kjv3qlmkveqmqpnle305zdmzkdsugqnw09652pts0r7c7dgry3k3tck962853ez9qkx59yfthd3qmk4v6r54qz90e67";
const testpolicyID = "2746630c3fc744720afec1daa0dc4e797ffc11d0ce82a4d7904767f3";

async function checkTicket() {
    try {
      const address = await API.addresses(testadr);
      const adr = address.address;
      // проверка адреса
    if (adr === testadr) {
        console.log("correct address");
        // получить все активы (full asset)
        // найти токен и его элемент перебором по массиву
        // если элемент найден -> проверка транзакции(сравнить mint hash)
        console.log("length:", address.amount.length);

        // перебор
        for (let i = 0; i < address.amount.length; i++) {
        // длина токена!
            if (address.amount[i].unit.slice(0,56) === testpolicyID) {
                console.log("true");
            }
        }
        const ticket = address.amount[1].unit.slice(0,56);
        // поиск и проверка билета на кошельке
        if (ticket === testpolicyID) {
          console.log("correct ticket");
        }
        else {
          console.log("there is no ticket on the wallet");
        }
      } else {
        console.log("invalid address");
      }
  
  
    } catch (err) {
      console.log("error", err);
    }
  }

  checkTicket();