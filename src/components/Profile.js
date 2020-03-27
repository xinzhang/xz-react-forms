import React, { useState, useEffect } from 'react';

export default function Profile({ showHide }) {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchData = () => {
      fetch('https://api.randomuser.me')
        .then((res) => res.json())
        .then((result) => {
          setUser(result.results[0]);
        });
    };
    fetchData();
  }, [showHide]);

  return (
    <>
      {showHide && user && (
        <figure className="image">
          <img alt="{user.id.name}" className="profile" src={user.picture.thumbnail} />
        </figure>
      )}
    </>
  );
}
