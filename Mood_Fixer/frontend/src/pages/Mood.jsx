import React from "react";
import Card from "../components/Card";
import { useNavigate, useLocation } from "react-router-dom";

const Mood = () => {
  const navi = useNavigate();
  const { state } = useLocation();
  const message = state?.message || "No message found.";

  return (
    <div>
      <Card message={message} />
      <div className="flex justify-center gap-50 mt-8">
        <button className="bg-purple-300/50 rounded-xl px-8 py-4 backdrop-blur-2xl font-mono text-purple-600 hover:scale-107 hover:bg-purple-400/50 duration-300">
          Save
        </button>
        <button
          onClick={() => navi("/")}
          className="bg-purple-300/50 rounded-xl px-8 py-4 backdrop-blur-2xl font-mono text-purple-600 hover:scale-107 hover:bg-purple-400/50 duration-300"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Mood;
