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
  };

  async fetchTags() {
    const filters = await axios.get('/api/tags');
    this.setState({ currentComponents: filters.data });
  };

  renderSelectedTags() {
    let tags = [];

    this.state.selectedTags.forEach(tag => {
      tags.push(`<a class="selected-tag">${tag}</a>`);
    });

    return tags;
  };

  renderTypes() {
    let types = []

    this.state.types.forEach(type => {
      types.push(`<li class="type-select">${type}</li>`);
    });

    return types;
  };

  renderTags() {
    let tags = []

    this.state.tags.forEach(tag => {
      tags.push(`<li class="tag-select">${tag}</li>`);
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
      <form class="cl-library__filters">
        <div class="cl-library__filters--tags col-3">
          <input placeholder="Search Tags..."/>
          { this.state.tagsDropdownActive &&
            <ul>
              {this.renderTags()}
            </ul>
          }
          <div class="selected-tags">
            {this.renderSelectedTags()}
          </div>
        </div>
        <div class="cl-library__filters--type col-3">
          <button class="type-dropdown" onClick={this.openTypeDropdown}>
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
