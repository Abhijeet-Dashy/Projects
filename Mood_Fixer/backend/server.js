import express from 'express';
import cors from 'cors';
import { moodTexts } from './moodData.js';
import axios from 'axios';

const app = express();
app.use(cors());
app.use(express.json());

const TELEGRAM_BOT_TOKEN = '8128399282:AAETVZlimM7e5px-w_m3GvzhxJ2pgr_qC2k';
const CHAT_ID = '1664749480'; // Your Telegram chat ID

function getRandomText(mood) {
  const list = moodTexts[mood] || [];
  return list[Math.floor(Math.random() * list.length)];
}

app.post('/get-text', async (req, res) => {
  const { mood } = req.body;

  // Choose response
  const selectedText = getRandomText(mood);

  // Notify you on Telegram
  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: `Someone selected mood: ${mood}`,
    });
  } catch (err) {
    console.error('Telegram error:', err.message);
  }

  res.json({ text: selectedText });
});

app.listen(3001, () => console.log('Server running on port 3001'));
