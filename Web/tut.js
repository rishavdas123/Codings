const fs=require("fs");
let text=fs.readFile("text.txt","utf-8",(a,b)=>{
    console.log(a,b)
});
console.log("I an Rishav")