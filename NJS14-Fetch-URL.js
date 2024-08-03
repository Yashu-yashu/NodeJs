const https=require("https");
https.get('https://jsonplaceholder.typicode.com/todos',(resp)=>{
    let data='';
    resp.on('data',(chunk)=>{
        data+=chunk;
    });
    resp.on('end',()=>{
        console.log(JSON.parse(data))
        console.log(data)
    })
}).on("error",(err)=>{
    console.log("Error:"+err.message);
});