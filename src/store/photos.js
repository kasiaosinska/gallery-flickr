import { extendObservable } from 'mobx'

import { searchUrl } from '../config'

const PhotosStore = {}

extendObservable(PhotosStore, {
  photos: [],
  isLoading: false,
})

PhotosStore.fetch = function() {
  this.isLoading = true
  fetch(searchUrl)
    .then(response => response.json())
    .then(data => this.photos = data.photos.photo)
    this.isLoading = false;
}

export default PhotosStore