const express = require('express');
const server = express(); // server 이름 

server.get('/',(req, res)=>{
   res.send("도메인만 쳐도 노출")
})
server.get('/node',(req, res)=>{
    res.send("도메인/node 라고 치면 노출")
})


server.listen(7942, ()=>{
    console.log("정상적으로 서버구동되는 중 / 인터넷주소창에 localhost:7942 이라고 쳐서 확인하기")
})


