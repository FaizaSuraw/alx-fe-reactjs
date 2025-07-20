import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  const { name, age, bio } = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '20px', margin: '15px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: 'blue', fontSize: '1.5rem' }}>{name}</h2>
      <p style={{ fontSize: '1.1rem' }}>Age: <span style={{ fontWeight: 'bold' }}>{age}</span></p>
      <p style={{ fontStyle: 'italic', marginTop: '10px' }}>Bio: {bio}</p>
    </div>
  );
}

export default UserProfile;
