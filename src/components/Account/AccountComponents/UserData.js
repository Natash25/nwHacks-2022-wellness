import React from 'react';
import { getAuth } from "firebase/auth";
import {collection, getFirestore, getDocs} from "firebase/firestore";

export default function UserData() {
  return(
    <div>
      <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center' }}>
        <input
            name="Name"
            value="Test"
            type="text"
            placeholder="Test"
            style={{width: '25vw', height: '50px', margin: '10px', borderRadius: '5px', border: '1px solid #ccc',
              padding: '25px'}}
        />
        <input
            name="email"
            value="test@test.com"
            type="text"
            placeholder="test@test.com"
            style={{width: '25vw', height: '50px', margin: '10px', borderRadius: '5px', border: '1px solid #ccc',
              padding: '25px'}}
        />
        <input
            name="password"
            value="1234567890"
            type="password"
            placeholder="●●●●●●●●●●●●●●●●●●●"
            style={{width: '25vw', height: '50px', margin: '10px', borderRadius: '5px', border: '1px solid #ccc',
              padding: '25px'}}
        />
        <button
            type="submit"
            style={{width: '10vw', margin: '10px', borderRadius: '5px', border: '2px solid black',
              padding: '15px'}}
        >
          Save
        </button>
      </form>
    </div>
  )
}
