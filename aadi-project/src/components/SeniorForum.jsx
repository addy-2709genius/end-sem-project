import { useState } from 'react';
import { motion } from 'framer-motion';

// Dummy Data for Senior Announcements
const seniorAnnouncements = [
  { id: 1, title: "Senior Research Presentation", content: "The Senior Research Presentation is scheduled for 25th May. Make sure to register!" },
  { id: 2, title: "Graduation Preparation", content: "The Graduation Ceremony will be held on 5th June. Finalize your plans!" },
  { id: 3, title: "Internship Opportunities", content: "Explore internship opportunities! Check out the list of companies visiting campus this month." },
];

// Dummy Data for Senior Photos (5 images)
const seniorPhotos = [
  'https://media.istockphoto.com/id/1351018006/photo/smiling-male-student-sitting-in-university-classroom.jpg?s=612x612&w=0&k=20&c=G9doLib_ILUijluTSD5hstZBWqHHIcw4dBHhQcs-ON4=',
  'https://as1.ftcdn.net/jpg/01/17/42/38/1000_F_117423860_bApe5ResfiVkO0G0UlUjUVNpAtFUWYYy.jpg',
  'https://media.istockphoto.com/id/1470208665/photo/multi-ethnic-group-of-latin-and-african-american-college-students-smiling-diversity-portrait.jpg?s=612x612&w=0&k=20&c=NlJzvXsDFQYbBz08z2-caVwgeTH_qK-iS9rMgv9l6o8=',
  'https://as1.ftcdn.net/jpg/01/03/32/16/1000_F_103321628_i1jlcaQGJ2FE432eDtDxDJTGbFJO73wf.jpg',
  'https://cdn9.dissolve.com/p/D1028_56_227/D1028_56_227_1200.jpg',
];

const SeniorForum = () => {
  const [comment, setComment] = useState(""); // State to hold the comment input
  const [submittedComments, setSubmittedComments] = useState([]); // State to hold the list of submitted comments

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() === "") {
      alert("Please write something before submitting!");
    } else {
      // Add the new comment to the submitted comments list
      setSubmittedComments([...submittedComments, comment]);
      setComment(""); // Clear the comment input after submission
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h2 style={{ color: "#2a3d66", marginBottom: "1rem" }}>Senior Forum</h2>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>Welcome to the senior discussion space!</p>

      <div style={{ display: "flex", gap: "2rem" }}>
        {/* Left side - Senior Announcements */}
        <div style={{ flex: 1 }}>
          <h3 style={{ color: "#2a3d66", marginBottom: "1.5rem" }}>Senior Announcements</h3>
          {seniorAnnouncements.map((announcement) => (
            <div
              key={announcement.id}
              style={{
                backgroundColor: "#f0f8ff",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                padding: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <h4 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{announcement.title}</h4>
              <p style={{ fontSize: "1.1rem" }}>{announcement.content}</p>
            </div>
          ))}
        </div>

        {/* Right side - Comment Section */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#d0e4f3",
            padding: "1.5rem",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: "#2a3d66", marginBottom: "1.5rem" }}>Leave a Comment about Your Day</h3>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="What's on your mind?"
            rows="6"
            cols="30"
            style={{
              width: "100%",
              padding: "1rem",
              fontSize: "1rem",
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginBottom: "1rem",
              resize: "none",
            }}
          />
          <button
            onClick={handleCommentSubmit}
            style={{
              backgroundColor: "#2a3d66",
              color: "white",
              border: "none",
              padding: "0.8rem 1.5rem",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s",
              fontSize: "1rem",
            }}
          >
            Submit Comment
          </button>

          {/* Displaying Submitted Comments */}
          <div style={{ marginTop: "2rem" }}>
            <h4 style={{ color: "#2a3d66" }}>Your Comments:</h4>
            {submittedComments.length === 0 ? (
              <p>No comments yet. Be the first to share!</p>
            ) : (
              <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                {submittedComments.map((comment, index) => (
                  <li
                    key={index}
                    style={{
                      backgroundColor: "#ffffff",
                      padding: "1rem",
                      marginBottom: "1rem",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    }}
                  >
                    <p>{comment}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Section - Our Seniors */}
      <div style={{
        marginTop: "4rem",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "2rem",
        borderRadius: "12px",
      }}>
        <h3 style={{
          color: "white",
          textAlign: "center",
          marginBottom: "2rem"
        }}>Our Seniors</h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "1.5rem",
          justifyItems: "center"
        }}>
          {seniorPhotos.map((photo, idx) => (
            <motion.div 
              key={idx}
              initial={{ scale: 0.9, opacity: 0 }} // Initial state: smaller and transparent
              animate={{ scale: 1, opacity: 1 }} // Final state: normal size and fully visible
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.2 }} // Delay each image animation slightly
              style={{ maxWidth: "200px", borderRadius: "8px", overflow: "hidden" }}
            >
              <img
                src={photo}
                alt={`Senior ${idx + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  transition: "transform 0.3s",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeniorForum;
