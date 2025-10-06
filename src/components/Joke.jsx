import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import { toast } from 'react-toastify';

const Joke = () => {
    const API_URL = "https://official-joke-api.appspot.com/jokes/random";
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchJoke() {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const out = await res.json();
            setJoke(out);
        } catch (e) {
            toast.error("Server Not Responding");
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchJoke();
    }, []);

    function jokeHandler() {
        fetchJoke();
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                {loading ? (
                    <Spinner />
                ) : (
                    <div>
                        <p className="text-xl font-bold text-gray-800 mb-4">{joke?.setup || "Loading joke..."}</p>
                        <p className="text-lg text-gray-600">{joke?.punchline || ""}</p>
                    </div>
                )}
                <button
                    onClick={jokeHandler}
                    className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Generate Joke
                </button>
            </div>
        </div>
    );
};

export default Joke;