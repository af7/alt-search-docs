import axios from 'axios'
import SearchActions from '../actions/SearchActions'

export default {
  loadIndex() {
    return {
      remote(state) {
        console.log('Now loading')
        return axios('/search.json')
      },

      success: SearchActions.receivedIndex,
      error: SearchActions.noIndexFound
    }
  }
}
