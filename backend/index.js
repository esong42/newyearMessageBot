import OpenAI from "openai";
const apikey = "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";
const openai = new OpenAI({ apiKey: apikey });

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
