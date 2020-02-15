import React, { useState, useEffect } from 'react';

export default function Profile() {
  const [user, setUser] = useState();

  useEffect(() => {
    fetch('https://api.randomuser.me')
      .then((res) => res.json())
      .then((result) => {
        console.log(result.results[0]);
        setUser(result.results[0]);
        //ser.picture.thumbnail;
      });
  }, []);

  return <>{user && <img className="profile" src={user.picture.thumbnail} />}</>;
}
