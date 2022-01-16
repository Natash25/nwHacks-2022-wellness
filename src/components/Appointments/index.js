import React from 'react'
import { Component } from 'react';
import { withRouter } from 'react-router';
import { Container, Card, Header } from 'semantic-ui-react'
import CardGroup from './CardGroup/index.js'


// class Appointments extends React.Component {
//     render() {
//         return (
//         <div>
//         <h1>Appointments</h1>
  
//         <Container>
//           <CardGroup/>
//       </Container>
//       </div>);
//     }
// }
const INITIALSTATE = {};

class AppointmentsBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ... INITIALSTATE };
    }

    render() {
      return(         
      <div>
      <h1 style={{paddingBottom: "20px", paddingLeft: "20px"}}>Appointments</h1>
      <div style={{alignItems:"center", justify:"center"}}>
      <Container fluid>
        <CardGroup/>
    </Container>
    </div>
    </div>);
    }
}
  
const Appointments = withRouter(AppointmentsBase);

export default Appointments;