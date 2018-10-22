import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Gallery from './Gallery/Gallery'

class App extends Component {
  state = {
    photos: [],
    isLoading: true,
  }

  componentDidMount() {
    this.setState({ isLoading: true})
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1649bb2d4393700c1740c303b20be07a&tags=dog%2C+dogs&has_geo=&page=2&format=json&nojsoncallback=1')
      .then(response => response.json())
      .then(data => this.setState({ photos: data.photos.photo, isLoading: false }))
  }

  render() {
    const { photos, isLoading } = this.state
    return (
      <div>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <CameraIcon />
            <Typography variant="h6" color="inherit" noWrap>
              Gallery
            </Typography>
          </Toolbar>
        </AppBar>
        {isLoading ? <CircularProgress size={50}/> : <Gallery photos={photos}/>}
      </div>
    );
  }
}

export default App;