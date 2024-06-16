const fs = require('fs');

// reading files

// fs.readFile('newNinja/README.md', (err, data)=>{
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// console.log('last line of code');

// writing files 

// fs.writeFile('newNinja/README.md', '# newNinja - A new ninja is born', () => {
//   console.log('new readMe available');  
// })

// fs.writeFile('newNinja/randomFile.txt', 'The random file shall strike again!', () => {
//     console.log(`new file, who's this`);  
//   }) // will create a new file if you make a mistake in the file path


// directories - making and removing 


// if (!fs.existsSync('./mkdir.tx')){
//    fs.mkdir('./mkdir.tx', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('new dir created'); 
//     });
// } else {
//     fs.rmdir('./mkdir.tx', (err) => {
//        if (err) {
//         console.log(err);
//        }
//     })
//     console.log('new dir deleted');
// }

// deleting files 

if (fs.existsSync('./newNinja/deleteDir.txt')) {
 fs.unlink('./newNinja/deleteDir.txt', (err) =>{
    if (err) {
        console.log(err);
    }
    console.log('dir deleted');
 })
}
// } else {fs.mkdir('./newNinja/deleteDir.txt', (err) =>{
//    if (err) {
//     console.log(err);
//    }
//     console.log('dir created, now delete it');
// })

// streams and buffers
