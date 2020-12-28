import React, { useState, useEffect } from 'react';

const User = () => {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const data = await res.json()
      setProfile(data)
    }, 5000);
  });
  return (
    <div className="user">
      <h2>User Details</h2>
    </div>
  );
};

export default User;
