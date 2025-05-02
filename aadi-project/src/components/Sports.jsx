import React from 'react';

const Sports = () => {
  const sportsFacilities = [
    {
      name: 'Football Ground',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/10/350327019/NU/WB/TZ/38215148/7-a-side-football-turf.jpg',
    },
    {
      name: 'Basketball Court',
      image: 'https://content.jdmagicbox.com/comp/pune/z2/020pxx20.xx20.220930041350.p4z2/catalogue/falcons-basketball-pune-basketball-courts-s7sfz2ozak.jpg',
    },
    {
      name: 'Tennis Court',
      image: 'https://3.imimg.com/data3/HN/BA/MY-3232042/outdoor-tennis-court.jpg',
    },
    {
      name: 'Swimming Pool',
      image: 'https://content.jdmagicbox.com/comp/pune/i3/020pxx20.xx20.160629173023.k8i3/catalogue/bluewater-swimming-academy-baner-pashan-link-road-pashan-pune-swimming-classes-77oncydnyw.jpg',
    },
  ];

  const turfBookings = [
    { date: '2025-05-05', time: '10:00 AM - 12:00 PM', facility: 'Football Ground' },
    { date: '2025-05-06', time: '2:00 PM - 4:00 PM', facility: 'Basketball Court' },
    { date: '2025-05-07', time: '8:00 AM - 10:00 AM', facility: 'Tennis Court' },
    { date: '2025-05-08', time: '3:00 PM - 5:00 PM', facility: 'Swimming Pool' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Sports Facilities</h2>
      <p className="text-center text-lg text-gray-700 mb-10 max-w-xl mx-auto">
        Explore the different sports facilities available on campus.
      </p>

      {/* Card Grid View for Facilities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {sportsFacilities.map((facility, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl">
            <img
              src={facility.image}
              alt={facility.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900">{facility.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Turf Bookings */}
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Future Turf Bookings</h3>
        <ul>
          {turfBookings.map((booking, index) => (
            <li key={index} className="mb-4 p-4 bg-gray-50 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg text-gray-900">{booking.facility}</h4>
              <p className="text-gray-700">{booking.date}</p>
              <p className="text-gray-700">{booking.time}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sports;
