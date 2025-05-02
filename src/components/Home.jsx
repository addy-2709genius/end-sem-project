import { useState } from 'react';

// Dummy data for Alerts and Latest News
const alerts = [
  { id: 1, title: "Exam Schedule Released", content: "The exam schedule for this semester is now available. Please check the official notice." },
  { id: 2, title: "Library Closed", content: "The library will be closed this weekend for maintenance. Please plan accordingly." },
  { id: 3, title: "Sports Fest Announcement", content: "Join us for the annual Sports Fest on March 15th. Registration is open now!" },
  { id: 4, title: "Guest Lecture on AI", content: "A guest lecture on Artificial Intelligence by Dr. Smith will be held on April 10th." },
  { id: 5, title: "Cultural Fest Volunteers Needed", content: "We're looking for volunteers for the upcoming Cultural Fest. Sign up now!" },
];

const news = [
  { id: 1, title: "New Tech Lab Opened", content: "The new tech lab in Building C is now open for students. Come explore the new facilities!" },
  { id: 2, title: "Student Council Elections", content: "The Student Council elections are set for next month. Prepare your campaigns!" },
  { id: 3, title: "New Cafeteria Menu", content: "The cafeteria has updated its menu with healthier options. Check it out next time!" },
  { id: 4, title: "WiFi Upgrade Completed", content: "The campus WiFi has been upgraded to faster speeds. Enjoy seamless internet access!" },
  { id: 5, title: "Course Registration Reminder", content: "Don't forget to register for your next semester's courses before the deadline." },
];

const Home = () => {
  const [likes, setLikes] = useState({});

  // Handle liking a post (alert or news)
  const handleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: (prevLikes[id] || 0) + 1,
    }));
  };

  return (
    <div className="notice-board">
      <h2>Notice Board</h2>

      {/* Alerts Section */}
      <h3>Important Alerts</h3>
      <div className="grid alerts">
        {alerts.map((alert) => (
          <div key={alert.id} className="card alert-card">
            <h4>{alert.title}</h4>
            <p>{alert.content}</p>
            <button className="like-btn" onClick={() => handleLike(alert.id)}>
              <span role="img" aria-label="like">❤️</span> Like ({likes[alert.id] || 0})
            </button>
          </div>
        ))}
      </div>

      {/* Latest News Section */}
      <h3>Latest News</h3>
      <div className="grid news">
        {news.map((item) => (
          <div key={item.id} className="card news-card">
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            <button className="like-btn" onClick={() => handleLike(item.id)}>
              <span role="img" aria-label="like">❤️</span> Like ({likes[item.id] || 0})
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
