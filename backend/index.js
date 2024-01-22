import screats from "../screats.json" assert { type: "json" };
import OpenAI from "openai";
const apikey = screats.API_KEY;
const openai = new OpenAI({ apiKey: apikey});
import cors from "cors"; /* HTML에서 온 요청을 받기 위해 */
import express from "express"; /* 웹 서버 생성을 위해 */
const app = express();

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