import React, { useState } from 'react';

const Events = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [input, setInput] = useState("");

  const upcomingEvents = [
    { date: "2025-05-10", title: "Library Orientation" },
    { date: "2025-05-15", title: "Junior Sports Day" },
    { date: "2025-05-20", title: "Art & Culture Fest" },
  ];

  const handleSuggestionSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setSuggestions([...suggestions, input]);
    setInput("");
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 py-12 px-6 flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg p-10 md:p-16 space-y-12">
        <h1 className="text-4xl font-bold text-gray-800 text-center">🎉 Events & Suggestions</h1>

        {/* Notice Board */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-700">📢 Upcoming Events</h2>
          <ul className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <li key={index} className="p-6 bg-blue-50 rounded-xl border border-blue-100 shadow-sm">
                <p className="text-sm text-gray-600">{new Date(event.date).toDateString()}</p>
                <p className="text-xl font-medium text-blue-800">{event.title}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Suggestion Box */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-700">💡 Suggest a New Event</h2>
          <form onSubmit={handleSuggestionSubmit} className="space-y-4">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What event would you like to see?"
              className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-400"
              rows={4}
            />
            <button
              type="submit"
              className="bg-green-600 text-white py-3 px-6 rounded-xl hover:bg-green-700 transition"
            >
              Submit Suggestion
            </button>
          </form>

          {suggestions.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-gray-800">📬 Suggestions Received</h3>
              <ul className="space-y-3">
                {suggestions.map((sug, index) => (
                  <li key={index} className="bg-gray-100 rounded-xl p-4 text-gray-700">{sug}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Events;
