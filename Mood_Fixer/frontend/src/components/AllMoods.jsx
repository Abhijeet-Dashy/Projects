import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const moods = [
  { label: "Stressed", emoji: "😰" },
  { label: "Sad", emoji: "😞" },
  { label: "Frustrated", emoji: "😡" },
  { label: "Tired", emoji: "😴" },
  { label: "Lonely", emoji: "🥺" },
  { label: "Overwhelmed", emoji: "😵" },
  { label: "Empty", emoji: "😶‍🌫️" },
  { label: "Just need a smile", emoji: "😊" }
];

const AllMoods = () => {
  const [selectedText, setSelectedText] = useState("");
  const navi = useNavigate();

  const handleMoodClick = async (moodLabel) => {
    const res = await axios.post('http://localhost:3001/get-text', { mood: moodLabel });
     const text = res.data.text;
     navi('/mood', { state: { message: text } });
  };

  return (
    <div className="max-w-4xl mx-auto mt-20 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {moods.map((mood, idx) => (
          <div
            key={idx}
            onClick={() => handleMoodClick(mood.label)}
            className="flex flex-col items-center justify-center p-6 rounded-4xl backdrop-blur-lg border border-white/20 hover:scale-105 hover:shadow-xl transition transform cursor-pointer"
          >
            <span className="text-6xl lg:text-5xl mb-3">{mood.emoji}</span>
            <span className="text-lg font-medium text-center text-gray-700">{mood.label}</span>
          </div>
        ))}
      </div>

      {/* <AnimatePresence>
  {selectedText && (
    <motion.div
      key="mood-card"
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card message={selectedText} />
    </motion.div>
  )}
</AnimatePresence> */}

    </div>
  )
}

export default AllMoods;
