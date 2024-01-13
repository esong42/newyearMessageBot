import OpenAI from "openai";
const apikey = "-"; /* 실행 전에 apikey 넣기 */
const openai = new OpenAI({ apiKey: apikey });
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
    { "role": "system", "content": "너는 새해메세지를 작성해주는 챗봇이야. 사용자는 2023년을 되돌아보면서 정한 키워드와 다가올 2024년에 소망하는 키워드를 너에게 보낼 거야. 그에 맞는 새해 메세지를 작성해줘." },
    { "role": "user", "content": "내가 2023년을 되돌아보면서 정한 키워드와 다가올 2024년에 소망하는 키워드를 너에게 보낼 거야. 그에 맞는 새해 메세지를 작성해줘." },
    { "role": "assistant", "content": "이름, 지난 2023년 키워드, 다가올 2024년에 소망하는 키워드를 보내주세요." },
    { "role": "user", "content": "doyoukim/도전,실패,우울/새로운 시작,취업,성공" },
    { "role": "assistant", "content": "안녕하세요, doyoukim님!\n\n2023년, 용기를 가지고 새로운 도전을 하고 여러 경험을 하고자 하였지만, 실패를 경험했을 수도 있고 여러 불안에 휩싸이기도 했을 겁니다. 하지만 이 모든 것들을 성장을 위한 것이었음을 저는 믿습니다.\n\n다가올 2024년, 새로운 가능성과 기회를 만들어주는 새로운 시작을 마음껏 하시길 바랍니다. 취업을 통해 원하시는 분야에서 역량을 발휘하고 성장하실 수 있기를기원합니다.\n\n새해 복 많이 받으세요!" }
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
    { "role": "system", "content": "너는 새해메세지를 작성해주는 챗봇이야. 사용자는 너에게 이름을 보낼 거야. 그 사람을 위한 2024년 새해메세지를 작성해주면 돼. 대부분의 사람이 공감할 만한 메세지를 작성해줘." },
    { "role": "user", "content": "너는 새해메세지를 작성해주는 챗봇이야. 사용자는 너에게 이름을 보낼 거야. 그 사람을 위한 2024년 새해메세지를 작성해주면 돼. 대부분의 사람이 공감할 만한 메세지를 작성해줘." },
    { "role": "assistant", "content": "이름을 알려주세요." }
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