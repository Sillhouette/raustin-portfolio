import React from "react";
import { Image, Grid, Popup } from "semantic-ui-react";

const SkillColumn = props => {
  const style = {
    borderRadius: "10px",
    opacity: 0.8
  };

  return (
    <Grid.Column textAlign="center" verticalAlign="middle">
      <Popup
        trigger={
          <Image
            alt={props.name}
            circular={props.circular}
            verticalAlign="middle"
            src={props.image}
            size="small"
          />
        }
        header={props.name}
        content={props.description}
        style={style}
        size="mini"
        position="top center"
      />
    </Grid.Column>
  );
};

export default SkillColumn;
