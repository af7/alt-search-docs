import React from 'react'
import AltContainer from 'alt/AltContainer'
import SearchStore from '../stores/SearchStore'

class SearchBox extends React.Component {
  constructor() {
    super()

    this.state = { value: '' }
  }

  componentDidUpdate() {
    // fire search action
    console.log('@@@@@@@', this.state.value)
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={(ev) => this.setState({ value: ev.target.value })}
      />
    )
  }
}

// XXX use autobind decorator?

class SearchView extends React.Component {
  componentWillMount() {
    SearchStore.listen((state) => {
      console.log('@', state)
    })

    SearchStore.loadIndex()
  }

  render() {
    return (
      <div>
        <SearchBox />
      </div>
    )
  }
}

export default SearchView
