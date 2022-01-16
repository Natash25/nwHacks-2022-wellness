import React from "react";
import Component from "react";
import PropTypes from "prop-types";
import { Button, Card, Image, Item } from "semantic-ui-react";

function SingleCard({
  photo,
  name,
  title,
  date,
  startTime,
  endTime,
  callLink,
}) {
  return (
    <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
      <Card>
        <Card.Content>
          <Image floated="right" size="mini" src={photo} />
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{title}</Card.Meta>
          <Card.Description>
            {date}, {startTime} - {endTime}
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
  photo: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  callLink: PropTypes.string,
};

SingleCard.defaultProps = {
  photo: "https://semantic-ui.com/images/avatar2/small/kristy.png",
  name: "Full Name",
  title: "Role",
  date: "Month Day",
  startTime: "12:00",
  endTime: "11:59",
  callLink: "wwww.google.com",
};

export default SingleCard;
