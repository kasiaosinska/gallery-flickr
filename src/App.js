import React, { Component } from 'react';
import { observer } from 'mobx-react'

import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Gallery from './Gallery/Gallery'

import { searchUrl } from './config'

const App = observer(
  class App extends Component {
    state = {
      photos: [],
      isLoading: true,
    }

    componentDidMount() {
      this.setState({ isLoading: true })
      fetch(searchUrl)
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

)

export default App;