/*
    netlify 배포를 위한 모듈
    : netlify-cli, netlify-lambda, serverless-http
*/
// dotenv: .env파일에 선언한 환경변수를 process.env로 로드하는 모듈
import dotenv from "dotenv";
import OpenAI from "openai";
import cors from "cors"; /* HTML에서 온 요청을 받기 위해 */
import express from "express"; /* 웹 서버 생성을 위해 */
import serverless from "serverless-http";
dotenv.config();
const apikey = screats.API_KEY;
const openai = new OpenAI({ apiKey: apikey});
const app = express();
const router = express.Router();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('Hello World')
})

/* POST요청이 들어오면 실행*/
app.post('/keyword', async function(req, res) {
    let { userMessage } = req.body;

let messages = [
    { "role": "system", "content": screats.KEYWORD_SYSTEM },
    { "role": "user", "content": screats.KEYWORD_USER },
    { "role": "assistant", "content": screats.KEYWORD_ASSISTANT },
    { "role": "user", "content": screats.EX_RANDOM_USER },
    { "role": "assistant", "content": screats.EX_RANDOM_ASSISTANT }
]


    messages.push({
        "role": "user",
        "content": userMessage
    });

    const completion = await openai.chat.completions.create({
        messages: messages,
        model: "gpt-3.5-turbo",
    });
    res.send(completion.choices[0].message.content);
})

/* POST요청이 들어오면 실행*/
app.post('/random', async function(req, res) {
    let { userMessage } = req.body;

let messages = [
    { "role": "system", "content": screats.RAMDOM_SYSTEM },
    { "role": "user", "content": screats.RANDOM_USER },
    { "role": "assistant", "content": screats.RANDOM_ASSISTANT },
    { "role": "user", "content": screats.EX_RANDOM_USER },
    { "role": "assistant", "content": screats.EX_RANDOM_ASSISTANT}
]


    messages.push({
        "role": "user",
        "content": userMessage
    });

    const completion = await openai.chat.completions.create({
        messages: messages,
        model: "gpt-3.5-turbo",
    });
    res.send(completion.choices[0].message.content);
})

app.listen(3000)