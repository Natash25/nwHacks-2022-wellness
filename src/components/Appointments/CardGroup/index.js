import React from 'react'
import { Component } from 'react'
import { Button, Card, Image, Item } from 'semantic-ui-react'
import SingleCard from "../SingleCard"

// const FullName = "Fred"
// const Title = "Counsellor"
// const PurposeOfSession = "Saying Hello"
// const Time = "January 25th, 12:00 - 1:00"


class CardGroup extends Component {
  render() {
    // firebase.auth().onAuthStateChanged((user) => {
    //   // Check if user is signed in:
    //   if (user) {
    //       //go to the correct user document by referencing to the user uid
    //       currentUser = db.collection("users").doc(user.uid);
    //       //get the document for current user.
    //       currentUser.get().then((userDoc) => {
    //           //get the data fields of the user
    //           var userName = userDoc.data().name;
    //           //console.log(userName)
    //           var userEmail = userDoc.data().email;

    //           var userAppointments = userDoc.collection('appointments').data();
    //           const appointmentCards = userAppointments.map((appointment) => {

                return (
                  <SingleCard
                  name="Fred"
                  title="Dietician"
                  startTime="12:00"
                  endTime="1:00"
                  callLink="www.google.com"
                  />
                
                )
  //             }) 

  //             //if the data fields are not empty, then write them in to the form.
  //             if (userName != null) {
  //                 document.getElementById("nameInput").value = userName;
  //             }
  //             if (userEmail != null) {
  //                 document.getElementById("emailInput").value = userEmail;
  //             }
  //         });
  //     } else {
  //         // No user is signed in.
  //         console.log("No user is signed in");
  //     }
  // });
  }
}

// const CardGroup = () => (
//   <div>
//     <Card.Group id={"Appointments"}>
//       Hello
//   </Card.Group>);
//   hello
//   </div>
// );


// function AppointmentCard(props) {
//   return(
//     <Card>
//       <Card.Content>
//         <Image
//           floated='right'
//           size='mini'
//           src='/images/avatar/large/steve.jpg'
//         />
//         <Card.Header class="Name"></Card.Header>
//         <Card.Meta class="Title"></Card.Meta>
//         <Card.Description class="Time"></Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div className='ui two buttons'>
//           <Button basic color='green' class="JoinCall">
//             Join Call
//           </Button>
//           <Button basic color='red'>
//             Cancel
//           </Button>
//         </div>
//       </Card.Content>
//     </Card>
//   );
// }

// const AppointmentCard = () => (
//   <div id="Template">
//     <Card>
//       <Card.Content>
//         <Image
//           floated='right'
//           size='mini'
//           src='/images/avatar/large/steve.jpg'
//         />
//         <Card.Header class="Name"></Card.Header>
//         <Card.Meta class="Title"></Card.Meta>
//         <Card.Description class="Time"></Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div className='ui two buttons'>
//           <Button basic color='green' class="JoinCall">
//             Join Call
//           </Button>
//           <Button basic color='red'>
//             Cancel
//           </Button>
//         </div>
//       </Card.Content>
//     </Card>
//   </div>
// )

// function populate() {
//   let CardTemplate = document.getElementById("Template")
//   let Name = "Fred"
//   let Title = "Dietitian"
//   let StartTime = "12:00"
//   let EndTime = "1:00"
//   let CallLink = "www.google.com"
//   let NewAppointment = CardTemplate.content.cloneNode(true);
  
//   NewAppointment.querySelector('.Name').innerHTML = Name;
//   NewAppointment.querySelector('.Title').innerHTML = Title;
//   NewAppointment.querySelector('.Time').src = StartTime + " - " + EndTime;
//   NewAppointment.querySelector('.JoinCall').onClick = function () {
//     window.location.href = CallLink;
//   }

//   document.getElementById("Appointments").appendChild(NewAppointment)

// }
// populate();



// function populate() {
//   let CardTemplate = document.getElementById("Template")



//   ItemArray.forEach (doc => {
//     let Name = doc.data().fullName;
//     let Title = doc.data().Title;
//     let StartTime = doc.data().StartTime;
//     let EndTime = doc.data().EndTime;
//     let CallLink = doc.data().CallLink
//     let NewAppointment = CardTemplate.content.cloneNode(true);
    
//     newcard.querySelector('.Name').innerHTML = Name;
//     newcard.querySelector('.Title').innerHTML = Title;
//     newcard.querySelector('.Time').src = StartTime + " - " + EndTime;
//     newcard.querySelector('.JoinCall').onClick = function () {
//       location.href = CallLink;
//     }

//     document.getElementById("Appointments").appendChild(NewAppointment)
//   })
// }
// populate();



export default CardGroup;