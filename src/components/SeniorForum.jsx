import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

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
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Senior Forum</h2>
          <p className="text-xl text-gray-600">Welcome to the senior discussion space!</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Senior Announcements */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
          >
            <motion.h3 
              className="text-2xl font-semibold text-gray-900"
              variants={itemVariants}
            >
              Senior Announcements
            </motion.h3>
            {seniorAnnouncements.map((announcement) => (
              <motion.div
                key={announcement.id}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-semibold mb-3">{announcement.title}</h4>
                <p className="text-gray-600">{announcement.content}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side - Comment Section */}
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6"
            variants={containerVariants}
          >
            <motion.h3 
              className="text-2xl font-semibold text-gray-900 mb-6"
              variants={itemVariants}
            >
              Leave a Comment
            </motion.h3>
            <textarea
              value={comment}
              onChange={handleCommentChange}
              placeholder="What's on your mind?"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none mb-4"
              rows="6"
            />
            <motion.button
              onClick={handleCommentSubmit}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Comment
            </motion.button>

            {/* Comments Display */}
            <motion.div 
              className="mt-8"
              variants={containerVariants}
            >
              <motion.h4 
                className="text-xl font-semibold text-gray-900 mb-4"
                variants={itemVariants}
              >
                Comments
              </motion.h4>
              <AnimatePresence>
                {submittedComments.length === 0 ? (
                  <motion.p 
                    className="text-gray-500"
                    variants={itemVariants}
                  >
                    No comments yet. Be the first to share!
                  </motion.p>
                ) : (
                  <motion.div 
                    className="space-y-4"
                    variants={containerVariants}
                  >
                    {submittedComments.map((comment, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-50 p-4 rounded-lg"
                      >
                        <p className="text-gray-700">{comment}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section - Our Seniors */}
        <motion.div 
          className="mt-16"
          variants={containerVariants}
        >
          <motion.h3 
            className="text-3xl font-bold text-center text-gray-900 mb-8"
            variants={itemVariants}
          >
            Our Seniors
          </motion.h3>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
            variants={containerVariants}
          >
            {seniorPhotos.map((photo, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-md aspect-w-1 aspect-h-1"
              >
                <img
                  src={photo}
                  alt={`Senior ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SeniorForum;
