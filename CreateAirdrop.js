const {ethers} = require('ethers');
const fs = require('fs');

const { addresses, Qty } = require('./airdrop');

let content = '';

if (addresses.length !== Qty.length) {
    return;
}
let tokenId = 1;
addresses.map((item, index) => {
  for(let i=0; i < Qty[index]; i++ ) {
    content += item + ',' + tokenId + '\n'
    tokenId++
  }
})

fs.writeFileSync('./output/Airdrop.csv', content)