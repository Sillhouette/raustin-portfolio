import React from 'react'
import { Grid, Image, Item } from "semantic-ui-react";

const ImageColumn = props => {
    return (
        <Grid.Column className="home-grid-column">
          <Item className="background-grid-item">
            <picture className="transition" id={props.imageId}>
              <source
                className="background-image"
                type="image/webp"
                srcSet={props.webp}
              />
              <source
                className="background-image"
                type="image/jpg"
                srcSet={props.laptop}
              />
              <Image alt={""} className="background-image" fluid src={props.png} />
            </picture>
          </Item>
        </Grid.Column>
    )
}

export default ImageColumn