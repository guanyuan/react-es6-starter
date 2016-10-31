import React, {Component} from 'react';

class SearchBar extends Component {

  componentDidMount() {
    this.refs.filterTextInput.addEventListener('keydown', this.handleKeyPress)
  }

  handleKeyPress = e => {
    let index = 0
    console.log(e.code)
    console.log(typeof (e.code))
    switch(e.code) {
      case 'ArrowDown':
        //arrow-down
        index = index + 1
        break
      case 'ArrowUp':
        //arrow-up
        index = index -1
        break
      default:
        break
    }
    console.log(index)
  }

  handleChange = () => {
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.inStockOnlyInput.checked
    );
  }

  render () {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar