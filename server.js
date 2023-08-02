const app = express(); //서버 구동 -> 서버이름은 app

const PORT = process.env.PORT || 7958; // 주의 판드시 대문자 PORT

// app.get('/', (req, res) =>{  res.send(' 주소창에 localhost:8000로 요청이 와서 이 문자를 보내줘서 띄워줄께'); })

// app.get('/company', (req, res) =>{  res.send('회사소개'); })

// app.get('/way', (req, res) =>{  res.send('오시는길'); })

app.get('/node', (req, res) =>{  res.send('노드서버 첫 화면'); })

app.listen(PORT, () =>{
    console.log('콘솔에서 시간으로 확인해보면 바로 알게됨');
})
//서버는 듣겠다. 8080에 대한 요청이 발생시 콘솔창에 아래의 메세지 출력.