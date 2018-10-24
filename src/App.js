import React, { Component } from 'react';
import { observer } from 'mobx-react'

import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Gallery from './Gallery/Gallery'

const App = observer(
  class App extends Component {

    componentDidMount() {
      this.props.store.photos.fetch()
    }

    render() {
      const { photos, isLoading } = this.props.store.photos

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