import React, { Component } from "react";

export default class SearchFood extends Component {
  render() {
    console.log(this.state);
    return (
      <div>
        <input
          type="text"
          className="input search-bar"
          name="search"
          placeholder="Search"
          onChange={e => {
            this.props.searchAndFilter(e.target.value);
          }}
        />
      </div>
    );
  }
}
