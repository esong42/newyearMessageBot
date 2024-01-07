import OpenAI from "openai";
const apikey = "[API_KEY]"; /* 실행 전에 apikey 넣기 */
const openai = new OpenAI({ apiKey: apikey });
import express from "express"; /* 웹 서버 생성을 위해 */
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
})

async function main() {
    const completion = await openai.chat.completions.create({
        messages: [{ "role": "system", "content": "너는 새해메세지를 작성해주는 챗봇이야." },
        { "role": "user", "content": "너는 새해메세지를 작성해주는 챗봇이야." },
        { "role": "assistant", "content": "이름이 뭔가요?" },
        { "role": "user", "content": "doyoukim" }],
        model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0].message.content);
}
main();

app.listen(3000)