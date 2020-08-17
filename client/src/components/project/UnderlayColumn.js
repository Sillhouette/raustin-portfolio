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
            className="zero-padding"
          >
            <Menu.Item
              as={Link}
              to={"/projects/" + name}
              name={name}
              onMouseOver={() => handleTransition(imageId)}
              onMouseOut={() => handleTransition(imageId)}
              onClick={onClick}
            >
              <Header
                inverted
                size="huge"
                className="large-header header-style"
                textAlign="center"
              >
                {name.replace(/-/g, " ")}
              </Header>
              <Header
                inverted
                size="medium"
                className="medium-header header-style"
                textAlign="center"
              >
                {name.replace(/-/g, " ")}
              </Header>
            </Menu.Item>
          </Grid.Column>
    )
}

export default UnderlayColumn