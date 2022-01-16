import React from "react";
import Component from "react";
import PropTypes from "prop-types";
import { Button, Card, Image, Item } from "semantic-ui-react";

function SingleCard({ name, title, startTime, endTime, callLink }) {
  return (
    <div>
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="/images/avatar/large/steve.jpg"
          />
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{title}</Card.Meta>
          <Card.Description>
            {startTime} - {endTime}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button
              basic
              color="green"
            //   class="JoinCall"
              role="link"
              href={callLink}
            >
              Join Call
            </Button>
            <Button basic color="red">
              Cancel
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}

SingleCard.displayName = "SingleCard";
SingleCard.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  callLink: PropTypes.string,
};

SingleCard.defaultProps = {
  name: "Full Name",
  title: "Role",
  startTime: "12:00",
  endTime: "11:59",
  callLink: "wwww.google.com",
};

export default SingleCard;
