const {ethers} = require('ethers');
const fs = require('fs');

const { addresses, Qty } = require('./airdrop');

let content = '';

if (addresses.length !== Qty.length) {
    return;
}

addresses.map((item, index) => {
  for(let i=0; i < Qty[index]; i++ ) {
    content += item + ',' + 1 + '\n'
  }
})

fs.writeFileSync('./Airdrop.csv', content)