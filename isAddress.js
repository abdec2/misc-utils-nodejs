const {ethers} = require('ethers');
const fs = require('fs');

const { addresses } = require('./airdrop');

let content = '';

addresses.map((item, index) => {
    const isAddress = ethers.utils.isAddress(item)
    if(!isAddress) {
        content += item + ',' + isAddress + '\n'
    }
})

fs.writeFileSync('./output/addresscheck.csv', content)