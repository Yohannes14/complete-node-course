const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data', 'products.json'
);

//helper function
const getproductsFromFile =(cd)=>{
    fs.readFile(p, (err, fileContent) => {
        if (err) {
          return cd([]);
        }else{
        cd(JSON.parse(fileContent));
        }
    });

}

module.exports = class Product {
    constructor(t) {
        this.title = t;

    }
    save() {
        getproductsFromFile(products =>{
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });

        });
        fs.readFile(p, (err, fileContent) => {});
    }

    static fetchAll(cd) {
       getproductsFromFile(cd);
    };
}