const {ethers} = require('ethers');
const fs = require('fs');

const { addresses, Qty } = require('./airdrop');

let content = '';

if (addresses.length !== Qty.length) {
    return;
}

const chunksize = 100
const chunks = []
const amountChunk = []
let temp = []
let tempAmt = []
let arrIndex = 0;
addresses.map((item, index) => {
    arrIndex++;
    if(temp.length < chunksize-1) {
        temp.push(item)
        tempAmt.push(5)
    } else {
        temp.push(item)
        tempAmt.push(5)
        console.log('Addresses', temp.length)
        console.log('amount',tempAmt.length)
        chunks.push(temp)
        amountChunk.push(tempAmt)
        temp = []
        tempAmt = []
    }

})

if (temp.length !== 0) {
    chunks.push(temp)
    console.log('Addresses',temp.length)
    temp = []
}

if (tempAmt.length !== 0) {
    amountChunk.push(tempAmt)
    console.log('amount',tempAmt.length)
    tempAmt = []
}

console.log(arrIndex)
fs.writeFileSync('./output/array_chunk.txt', JSON.stringify(chunks))
fs.writeFileSync('./output/amt_array_chunk.txt', JSON.stringify(amountChunk))