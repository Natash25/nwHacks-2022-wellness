import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardDescription, Image } from "semantic-ui-react";

const Catalogue = () => (
  <div>
    <h1>Dietitians</h1> <Dietitian />
    <h1>Personal Trainers</h1> <Trainers />
    <h1>Physio Therapists</h1>
    <PhysioTherapists />
    {/* <Note /> */}
  </div>
);

const Dietitian = () => (
  <Card.Group>
    <Card>
      <Card size="large">
        <Image
          floated="right"
          src="https://react.semantic-ui.com/images/avatar/large/stevie.jpg"
        />
        <Card.Header>Joy Wong</Card.Header>
        <Card.Meta>Registered Dietitian </Card.Meta>
        <CardDescription>Weight Management Specialist</CardDescription>
      </Card>
      <Card extra>
        <div className="ui two buttons">
          <Button basic color="green">
            <Link to="../Individual">View More Details</Link>
          </Button>
        </div>
      </Card>
    </Card>
    <Card>
      <Card>
        <Image
          float="right"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>Molly</Card.Header>
        <Card.Meta>Nutrition Consultant </Card.Meta>
        <CardDescription>Malnutrition Specialist </CardDescription>
      </Card>
      <Card extra>
        <div className="ui two buttons">
          <Button basic color="green">
            View More Details
          </Button>
        </div>
      </Card>
    </Card>
    <Card>
      <Card>
        <Image
          floated="right"
          src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
        />
        <Card.Header>Jenny Lawrence</Card.Header>
        <Card.Meta>Registered Dietitian</Card.Meta>
        <CardDescription>Sports Nutritionist</CardDescription>
      </Card>
      <Card extra>
        <div className="ui two buttons">
          <Button basic color="green">
            View More Details
          </Button>
        </div>
      </Card>
    </Card>
  </Card.Group>
);
const Trainers = () => (
  <Card.Group>
    <Card>
      <Card size="large">
        <Image
          floated="right"
          src="https://react.semantic-ui.com/images/avatar/large/joe.jpg"
        />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Personal Trainer</Card.Meta>
        <CardDescription>Weight Loss Specialist</CardDescription>
      </Card>
      <Card extra>
        <div className="ui two buttons">
          <Button basic color="green">
            View More Details
          </Button>
        </div>
      </Card>
    </Card>
    <Card>
      <Card>
        <Image
          float="right"
          src="https://react.semantic-ui.com/images/avatar/large/elyse.png"
        />
        <Card.Header>Molly</Card.Header>
        <Card.Meta>Physical Fitness Trainer</Card.Meta>
        <CardDescription>Strength Specialist</CardDescription>
      </Card>
      <Card extra>
        <div className="ui two buttons">
          <Button basic color="green">
            View More Details
          </Button>
        </div>
      </Card>
    </Card>
    <Card>
      <Card>
        <Image
          floated="right"
          src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
        />
        <Card.Header>Jenny Lawrence</Card.Header>
        <Card.Meta>Cardio Trainer</Card.Meta>
        <CardDescription>Zumba Instructor</CardDescription>
      </Card>
      <Card extra>
        <div className="ui two buttons">
          <Button basic color="green">
            View More Details
          </Button>
        </div>
      </Card>
    </Card>
    <Card>
      <Card>
        <Image
          floated="right"
          src="https://react.semantic-ui.com/images/avatar/large/chris.jpg"
        />
        <Card.Header>Jenny Lawrence</Card.Header>
        <Card.Meta>Basketball Coach</Card.Meta>
        <CardDescription>Agility and Balance Specialist</CardDescription>
      </Card>
      <Card extra>
        <div className="ui two buttons">
          <Button basic color="green">
            View More Details
          </Button>
        </div>
      </Card>
    </Card>
  </Card.Group>
);

const PhysioTherapists = () => (
  <Card.Group>
    <Card>
      <Card>
        <Image
          floated="right"
          src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
        />
        <Card.Header>Jenny Lawrence</Card.Header>
        <Card.Meta>Sports Injury PhysioTherapist</Card.Meta>
      </Card>
      <Card extra>
        <div className="ui two buttons">
          <Button basic color="green">
            View More Details
          </Button>
        </div>
      </Card>
    </Card>
    <Card>
      <Card>
        <Image
          floated="right"
          src="https://react.semantic-ui.com/images/avatar/large/chris.jpg"
        />
        <Card.Header>Jenny Lawrence</Card.Header>
        <Card.Meta>Knee Pain PhysioTherapist</Card.Meta>
        <CardDescription>Agility and Balance Specialist</CardDescription>
      </Card>
      <Card extra>
        <div className="ui two buttons">
          <Button basic color="green">
            View More Details
          </Button>
        </div>
      </Card>
    </Card>
  </Card.Group>
);

export default Catalogue;
