import React from 'react'
import { Grid, Image, Item } from "semantic-ui-react";

const ImageColumn = ({ jpg, webp, imageId }) => {
    return (
        <Grid.Column className="zero-padding grid-column" stretched>
          <Item className="background-image-container">
            <picture className="transition" id={imageId}>
              <source
                className="background-image"
                type="image/webp"
                srcSet={webp}
              />
              <source
                className="background-image"
                type="image/jpg"
                srcSet={jpg}
              />
              <Image alt="" className="background-image" fluid src={jpg} />
            </picture>
          </Item>
        </Grid.Column>
    )
}

export default ImageColumn