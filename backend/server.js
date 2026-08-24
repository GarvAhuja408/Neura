import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();

const PORT = 8080;

app.use(cors());
app.use(express.json());

// POST /test here

app.post("/test", async (req, res) => {

    const { message } = req.body;

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

        const result = data.choices[0].message.content;

        console.log("AI Response:", result);

        res.json(data.choices[0].message.content);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            error: err.message
        });

    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});