const QRCode = require('qrcode')

const test = `{"address": "addr_test1qzuxrr3kjv3qlmkveqmqpnle305zdmzkds
ugqnw09652pts0r7c7dgry3k3tck962853ez9qkx59yfthd3qmk4v6r54qz90e67","asset": "2746630c3fc744720afec1da
a0dc4e797ffc11d0ce82a4d7904767f34d794e4654"}`;

QRCode.toFile('./test.png', test, {
    color: {
      dark: '#000',  // daer dots
      light: '#FFF' // white background
    }
  }, function (err) {
    if (err) throw err
    console.log('done')
  }
)
