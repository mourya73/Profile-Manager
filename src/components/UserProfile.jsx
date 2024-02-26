import React, { useState } from 'react';

function UserProfile({ profile }) {
  const [showBio, setShowBio] = useState(false);

  const toggleBio = () => {
    // ToDo: Implement functionality to toggle bio visibility
    setShowBio(!showBio);
  };

  return (
    <div className="border p-4 rounded-lg shadow">
    <h2 className="text-lg font-semibold">{profile.name}</h2>
    <p>{profile.email}</p>
    {showBio && <p className="mt-2">{profile.bio}</p>}
    <button
      onClick={toggleBio}
      className={`mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
        showBio ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
      } focus:outline-none focus:ring-2 focus:ring-offset-2`}
    >
      {showBio ? 'Hide Bio' : 'Show Bio'}
    </button>
  </div>
  );
}

export default UserProfile;
