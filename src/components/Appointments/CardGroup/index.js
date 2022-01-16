import React from "react";
import { Component } from "react";
import { Fragment } from "react";
import { Button, Card, Image, Item } from "semantic-ui-react";
import SingleCard from "../SingleCard";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

import { withFirebase } from "../../Firebase";

// const FullName = "Fred"
// const Title = "Counsellor"
// const PurposeOfSession = "Saying Hello"
// const Time = "January 25th, 12:00 - 1:00"

class CardGroup extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "right",
          alignItems: "center",
          justify: "center",
        }}
      >
        <SingleCard
          photo="https://semantic-ui.com/images/avatar2/small/mark.png"
          name="Fred Benedict"
          title="Registered Dietitian"
          date="January 14"
          startTime="12:00pm"
          endTime="1:00pm"
        />
        <SingleCard
          photo="https://semantic-ui.com/images/avatar/small/stevie.jpg"
          name="Joy Wong"
          title="Registered Dietitian"
          date="January 17"
          startTime="12:00pm"
          endTime="1:00pm"
        />
        <SingleCard
          photo="https://semantic-ui.com/images/avatar2/small/lena.png"
          name="Anne Johnson"
          title="Occupational Therapist"
          date="January 27"
          startTime="11:00am"
          endTime="12:00pm"
        />
        <SingleCard
          photo="https://semantic-ui.com/images/avatar2/small/molly.png"
          name="Jenny Jane"
          title="Registered Dietitian"
          date="January 28"
          startTime="9:00am"
          endTime="10:00am"
        />
        <SingleCard
          photo="https://semantic-ui.com/images/avatar2/small/matthew.png"
          name="Max Mark"
          title="Registered Dietitian"
          date="January 29"
          startTime="12:00pm"
          endTime="1:00pm"
        />
      </div>
    );
  }
}

// class CardGroup extends Component {
//   render() {
//     const auth = getAuth();
//     const db = getFirestore();
//     auth.onAuthStateChanged((user) => {
//       // Check if user is signed in:
//       if (user) {
//         const userAppointments = getDoc(
//           doc(db, "users", user.uid, "appointments")
//         );
//         //get the document for current user.
//         if (userAppointments.exists()) {
//           userAppointments.get().then((listDoc) => {
//             listDoc.map((appointment) => {
//               return (
//                 <SingleCard
//                   name={appointment.data().name}
//                   title={appointment.data().title}
//                   startTime={appointment.data().startTime}
//                   endTime={appointment.data().endTime}
//                 />
//               );
//             });
//           });
//         }
//       } else {
//         // No user is signed in.
//         return (<SingleCard/>);
//       }
//     });
//   }
// }

export default CardGroup;
