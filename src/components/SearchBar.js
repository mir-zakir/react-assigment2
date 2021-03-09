import React from "react";

class SearchBar extends React.Component {
  state = { term: ""};

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
    //this.props.onFormSubmit(this.state.loc);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>What</label>
            <input
              type="text"
              value={this.state.term}
              placeholder="Job title, keywords or company"
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
