import "dotenv/config";

const getGroqResponse = async(message)=>{

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
            model: "openai/gpt-oss-20b",
            messages: [
                {
                    role: "user",
                    content: message
                }
            ]
        })
    };

    try {

        const response = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            options
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || "API request failed");
        }

        // const result = data.choices[0].message.content;
        // console.log("AI Response:", result);
        return data.choices[0].message.content;

    } catch (err) {
        console.log("Groq Error:", err.message);
        throw err;
    }
}


export default getGroqResponse;