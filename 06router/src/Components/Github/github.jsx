import React, { useEffect, useState } from 'react';

function Github() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://api.github.com/users/vKousik')
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  return (
    <div className="min-h-screen px-6 lg:px-12 bg-white text-gray-800 pt-32 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center p-8 bg-gray-600 text-white rounded-2xl shadow-lg relative z-10">
        <h2 className="text-4xl font-extrabold mb-8">GitHub Profile</h2>
        <p className="text-2xl mb-6">Name: {data.login}</p>
        <img
          src={data.avatar_url}
          alt="GitHub Avatar"
          width={300}
          className="mx-auto rounded-full border-4 border-white shadow-md hover:scale-105 transition-transform"
        />
      </div>
    </div>
  );
}

export default Github;
