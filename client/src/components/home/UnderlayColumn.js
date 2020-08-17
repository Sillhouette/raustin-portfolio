import React from 'react'
import { Link } from "react-router-dom";
import { Grid, Header, Menu } from "semantic-ui-react";

const UnderlayColumn = ({ name, imageId, onClick }) => {

    const handleTransition = id => {
        let target = document.getElementById(id);
        if (target.classList.contains("visible")) {
          target.classList.remove("visible");
        } else {
          target.classList.add("visible");
        }
      };

    return (
        <Grid.Column
            textAlign="center"
            verticalAlign="middle"
            className="home-grid-column"
          >
            <Menu.Item
              as={Link}
              to={"/" + name}
              name={name}
              onMouseOver={() => handleTransition(imageId)}
              onMouseOut={() => handleTransition(imageId)}
              onClick={onClick}
            >
              <Header
                inverted
                size="large"
                className="large-header home-header"
                textAlign="center"
              >
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Header>
              <Header
                inverted
                size="medium"
                className="medium-header home-header"
                textAlign="center"
              >
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Header>
            </Menu.Item>
          </Grid.Column>
    )
}

export default UnderlayColumn