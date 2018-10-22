import React from 'react'
import { object } from 'prop-types'
import moment from 'moment'

import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar'

class Photo extends React.Component{
  state = {
    author: '',
    date: '',
    description: '',
  }

  componentDidMount() {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=1649bb2d4393700c1740c303b20be07a&photo_id=${this.props.photo.id}&format=json&nojsoncallback=1`

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        author: data.photo.owner.username,
        date: moment.unix(data.photo.dates.posted).format('YYYY-MM-DD'),
        description: data.photo.title._content,
      }))
  }

  render() {
    const{ photo } = this.props
    const { author, date, description } = this.state

    if (author && date && description ) {
      return (
        <GridListTile key={photo.id} cols={1}>
          <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
               alt=""/>
          <GridListTileBar
            title={description || ''}
            subtitle={<span>by: {author || ''}  |  {date}</span>}
          />
        </GridListTile>
      )
    } else { return null }
  }
}

Photo.propTypes = {
  photo: object,
}

export default Photo