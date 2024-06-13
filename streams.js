// read and write streams / chunks, buffering and shit

const fs = require('fs')

const readStream = fs.createReadStream('newNinja/README.md', {encoding: 'utf8'}) 
const writeStream = fs.createWriteStream('newNinja/blog3.txt')


// readStream.on('data', (chunk) => {
//     console.log('---NEW CHUNK---');
//     console.log(chunk.toString()); // to string makes it readable
//     // you can also do encoding to achieve the same results
//     writeStream.write('\n NEW CHUNK \n')
//     writeStream.write(chunk)
// })
// this reads, logs what it read to the console 
// then writes it into a new file.

// there's an easier way- Piping 
readStream.pipe(writeStream)