import React from 'react'
import { object } from 'prop-types'
import moment from 'moment'

import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar'

import { imgDetailsUrl } from '../config'

class Photo extends React.Component{
  state = {
    author: '',
    date: '',
    description: '',
  }

  componentDidMount() {

    fetch(imgDetailsUrl(this.props.photo.id))
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