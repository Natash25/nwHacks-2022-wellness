
import { useState, useEffect } from "react";
import React from "react";
import { Form, Card, CardDescription, Button, Header, Image, Modal } from "semantic-ui-react";
import RadioTest from "../Radio";
import { render } from "@testing-library/react";

function ModalExample() {
  const [open, setOpen] = React.useState(false);

  return (
      <div>
      <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"
}}>
          <Image size="massive" src="https://react.semantic-ui.com/images/avatar/large/stevie.jpg" wrapped ui={false}/>
          <h1>Registered Dietician </h1> 
          <h2>Weight Management Specialist</h2>
          <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>View Available Times</Button>}
      >
          
        <Modal.Header> Avaialable Times </Modal.Header>

        <Modal.Content image>
          <Modal.Description>
            <Header>Times</Header>
            <RadioTest />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            content="Select Time"
            onClick={() => setOpen(false)}
            labelPosition="right"
            icon="checkmark"
            positive
          />
        </Modal.Actions>
      </Modal>
      </div>
      </div>


    // <Card size="tiny">
    //     <h1>Joy Wong </h1>
    //   <Image size="massive" src="https://react.semantic-ui.com/images/avatar/large/stevie.jpg" wrapped ui={false}/>
    //   <Card.Meta> <h1>Registered Dietician </h1>   </Card.Meta>
    //     <CardDescription><h2>Weight Management Specialist</h2></CardDescription>
    //   <Modal
    //     onClose={() => setOpen(false)}
    //     onOpen={() => setOpen(true)}
    //     open={open}
    //     image="rose.jpg"
    //     header="Rosè From Black Pink"
    //     trigger={<Button>View Available Times</Button>}
    //   >
          
    //     <Modal.Header> Avaialable Times </Modal.Header>

    //     <Modal.Content image>
    //       <Modal.Description>
    //         <Header>Times</Header>
    //         <RadioTest />
    //       </Modal.Description>
    //     </Modal.Content>
    //     <Modal.Actions>
    //       <Button color="black" onClick={() => setOpen(false)}>
    //         Cancel
    //       </Button>
    //       <Button
    //         content="Select Time"
    //         onClick={() => setOpen(false)}
    //         labelPosition="right"
    //         icon="checkmark"
    //         positive
    //       />
    //     </Modal.Actions>
    //   </Modal>
      
    // </Card>
  );
}
export default ModalExample;
