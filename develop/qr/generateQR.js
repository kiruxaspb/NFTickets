const QRCode = require('qrcode')

// @@ Can get address & asset from site @@
const WALLET_ADDRESS = `"addr_test1qzuxrr3kjv3qlmkveqmqpnle305zdmzkdsugqnw09652pts0r7c7dgry3k3tck962853ez9qkx59yfthd3qmk4v6r54qz90e67"`;
const ASSET = `"2746630c3fc744720afec1daa0dc4e797ffc11d0ce82a4d7904767f34d794e4654"`;

// @@ Forming json in QR @@
const data = `{"address": ${WALLET_ADDRESS},"asset": ${ASSET}}`;

QRCode.toFile('./test.png', data, {
    color: {
      dark: '#000',  // black dots
      light: '#FFF' // white background
      // if background black -> scanners cant reading QR
    }
  }, function (err) {
    if (err) throw err
    console.log('done')
  }
)