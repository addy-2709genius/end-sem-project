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
      return;
    }
    setSubmittedComments([...submittedComments, comment]);
    setComment("");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Senior Forum</h2>
          <p className="text-xl text-gray-600">Welcome to the senior discussion space!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Senior Announcements */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Senior Announcements</h3>
            {seniorAnnouncements.map((announcement) => (
              <motion.div
                key={announcement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-semibold mb-3">{announcement.title}</h4>
                <p className="text-gray-600">{announcement.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Right side - Comment Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Leave a Comment</h3>
            <textarea
              value={comment}
              onChange={handleCommentChange}
              placeholder="What's on your mind?"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none mb-4"
              rows="6"
            />
            <button
              onClick={handleCommentSubmit}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit Comment
            </button>

            {/* Comments Display */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Comments</h4>
              {submittedComments.length === 0 ? (
                <p className="text-gray-500">No comments yet. Be the first to share!</p>
              ) : (
                <div className="space-y-4">
                  {submittedComments.map((comment, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gray-50 p-4 rounded-lg"
                    >
                      <p className="text-gray-700">{comment}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section - Our Seniors */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Seniors</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {seniorPhotos.map((photo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-lg shadow-md aspect-w-1 aspect-h-1"
              >
                <img
                  src={photo}
                  alt={`Senior ${idx + 1}`}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
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
