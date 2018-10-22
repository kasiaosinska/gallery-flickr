import React from 'react'
import { array } from 'prop-types'

import Photo from '../Photo'
import GridList from '@material-ui/core/GridList';

class Gallery extends React.Component{
  render() {
    const { photos } = this.props
    const photoGallery = photos.map(photo => <Photo photo={photo} />)

    return(
      <GridList cellHeight={400} cols={3}>
        {photoGallery}
      </GridList>
    )
  }
}

Gallery.propTypes = {
  photos: array,
}

export default Gallery