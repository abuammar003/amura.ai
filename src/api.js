import axios from "axios";

 const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

//  console.log(API_KEY);
 
 export async function generateResponse(prompt) {
    try {
        const response = await axios.post(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                model: "llama-3.3-70b-versatile",
                messages: [{
                        role: "user",
                        content: prompt,
                    }]
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${API_KEY}`    
                },                    
            }
        );

        return response.data.choices[0].message.content;

    } catch (error) {
        console.log(error);
        return "Something went wrong.";
    }
 }