import { action } from 'mobx'

import { searchUrl } from '../config'

export const get = action(fetch(searchUrl, {
    method: 'GET',
  }).then(response => response.json()))