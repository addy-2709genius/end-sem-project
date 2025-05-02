import React, { useState } from 'react';
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
  const [comment, setComment] = useState("");
  const [submittedComments, setSubmittedComments] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() === "") {
      alert("Please write something before submitting!");
    } else {
      setSubmittedComments([...submittedComments, comment]);
      setComment("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Senior Forum</h2>
        <p className="text-xl text-gray-600 mb-8">Welcome to the senior discussion space!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Senior Announcements */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Senior Announcements</h3>
            {seniorAnnouncements.map((announcement) => (
              <div
                key={announcement.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-semibold mb-2">{announcement.title}</h4>
                <p className="text-gray-600">{announcement.content}</p>
              </div>
            ))}
          </div>

          {/* Right side - Comment Section */}
          <div className="bg-blue-50 rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Leave a Comment about Your Day</h3>
            <textarea
              value={comment}
              onChange={handleCommentChange}
              placeholder="What's on your mind?"
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
              rows="6"
            />
            <button
              onClick={handleCommentSubmit}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit Comment
            </button>

            {/* Displaying Submitted Comments */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Your Comments:</h4>
              {submittedComments.length === 0 ? (
                <p className="text-gray-600">No comments yet. Be the first to share!</p>
              ) : (
                <ul className="space-y-4">
                  {submittedComments.map((comment, index) => (
                    <li
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <p className="text-gray-700">{comment}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section - Our Seniors */}
        <div className="mt-12 bg-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">Our Seniors</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {seniorPhotos.map((photo, idx) => (
              <motion.div 
                key={idx}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.2 }}
                className="overflow-hidden rounded-lg"
              >
                <img
                  src={photo}
                  alt={`Senior ${idx + 1}`}
                  className="w-full h-auto rounded-lg hover:scale-105 transition-transform"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeniorForum;
