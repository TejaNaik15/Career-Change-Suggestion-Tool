require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Groq = require('groq-sdk'); 

const app = express();
const PORT = process.env.PORT || 3000; 


const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});


app.use(cors({
  origin: ["http://localhost:5173", "https://career-change-suggestion-tool-f.onrender.com"],
  methods: ['GET', 'POST'],
  //allowedHeaders: ['Content-Type'],
}));
app.use(express.json()); 


app.post('/api/suggest-careers', async (req, res) => {
  const { currentJobTitle } = req.body;

  
  if (!currentJobTitle) {
    return res.status(400).json({ error: 'Current job title is required.' });
  }

  try {
    
    const prompt = `Suggest 5 radically different or whimsical career options for someone who is currently a ${currentJobTitle}. Make them short and creative. Provide only the list of careers, one per line, with no additional text or numbering.`;

  
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama3-8b-8192", 
      temperature: 0.9, 
      max_tokens: 150, 
    });

    
    const rawSuggestions = chatCompletion.choices[0]?.message?.content || '';
    const suggestions = rawSuggestions
      .split('\n')
      .map(line => line.replace(/^\s*\d+\.\s*/, '').trim()) 
      .filter(line => line.length > 0); 

    
    res.json({ suggestions });

  } catch (error) {
    console.error('Error fetching career suggestions from Groq:', error);
    if (error.response) {
      
      console.error('Groq API Error Response Data:', error.response.data);
      console.error('Groq API Error Response Status:', error.response.status);
      console.error('Groq API Error Response Headers:', error.response.headers);
    }
    
    res.status(500).json({ error: 'Failed to generate suggestions. Please check your API key or try again later.' });
  }
});


app.get('/', (req, res) => {
  res.send('Career Change Suggestion Tool Backend is running!');
});


app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
