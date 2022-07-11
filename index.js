const testFolder = './foldername/';
const fs = require('fs');
var path = require('path')

fs.readdirSync(testFolder).forEach(folder =>{
    if(fs.lstatSync(testFolder+folder).isFile() && path.extname(folder)!== ".mp4"){
        fs.unlink(testFolder+folder, (err) => {
                    if (err) {
                        throw err;
                    }
                
                    console.log(folder+" deleted successfully !");
                
        }) 
    }else if (fs.lstatSync(testFolder+folder).isDirectory()){
        fs.readdirSync(testFolder+folder).forEach(file => {
            if(path.extname(file)!== ".mp4"){
                fs.unlink(testFolder+folder+"/"+file, (err) => {
                    if (err) {
                        throw err;
                    }
                
                    console.log(file +" deleted successfully !");
                
                })
            }
            
          }); 
    }
});

