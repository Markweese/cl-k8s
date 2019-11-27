import React, { Component } from 'react'
import axios from 'axios';

class LibraryFilters extends Component {
  state = {
    tags: [],
    types: [],
    selectedTags: [],
    tagsDropdownActive:false,
    typeDropdownActive: false
  };

  componentDidMount() {
    this.fetchTags();
    this.fetchTypes();
  };

  async fetchTags() {
    const tags = await axios.get('/api/tags');
    this.setState({ tags: tags.data });
  };

  async fetchTypes() {
    const types = await axios.get('/api/types');
    this.setState({ types: types.data });
  };

  renderSelectedTags() {
    let tags = [];

    this.state.selectedTags.forEach(tag => {
      tags.push(`<a className="selected-tag">${tag}</a>`);
    });

    return tags;
  };

  renderTypes() {
    let types = []

    this.state.types.forEach(type => {
      types.push(`<li className="type-select">${type.type}</li>`);
    });

    return types;
  };

  renderTags() {
    let tags = []

    this.state.tags.forEach(tag => {
      tags.push(`<li className="tag-select">${tag}</li>`);
    });

    return tags;
  }

  openTypeDropdown = event => {
    event.preventDefault();

    if (this.state.typeDropdownActive) {
      this.setState({typeDropdownActive: false});
    } else {
      this.setState({typeDropdownActive: true});
    }
  }

  render() {
    return (
      <form className="cl-library__filters mb-30">
        <div className="cl-library__filters--tags col-3">
          <input placeholder="Search Tags..."/>
          { this.state.tagsDropdownActive &&
            <ul>
              {this.renderTags()}
            </ul>
          }
          <div className="selected-tags">
            {this.renderSelectedTags()}
          </div>
        </div>
        <div className="cl-library__filters--type col-3">
          <button className="type-dropdown" onClick={this.openTypeDropdown}>
            Type ▼
            { this.state.typeDropdownActive &&
              <ul>
                {this.renderTypes()}
              </ul>
            }
          </button>
        </div>
      </form>
    )
  }
}

export default LibraryFilters;
