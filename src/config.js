export const searchUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=62c6b1f5d8c4261d9194d578279ba4d1&tags=dog%2C+dogs&per_page=10&format=json&nojsoncallback=1'

export const imgDetailsUrl = id => `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=1649bb2d4393700c1740c303b20be07a&photo_id=${id}&format=json&nojsoncallback=1`