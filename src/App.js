import { useState } from "react";
import "./App.css";
import Joke from "./components/Joke";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-10 scroll-smooth text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold italic text-white mb-8">
          Joke Generator
        </h1>
        <Joke />
      </div>
    </div>
  );
}

export default App;
