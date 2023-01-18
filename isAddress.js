const {ethers} = require('ethers');
const fs = require('fs');

const { addresses } = require('./addresses');

let content = '';

addresses.map((item, index) => {
    const isAddress = ethers.utils.isAddress(item)
    if(!isAddress) {
        content += item + ',' + isAddress + '\n'
    }
})

fs.writeFileSync('./addresscheck.csv', content)