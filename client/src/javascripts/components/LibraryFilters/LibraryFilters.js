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
        <div className="cl-library__filters--dropdown-container col-3">
          <input className="cl-library__filters--tags" placeholder="Search Tags..."/>
          { this.state.tagsDropdownActive &&

            <ul className="cl-library__filters--dropdown">
              {this.state.tags &&

                this.state.tags.map(item => (
                  <>
                  <li className="item">{item.tags}</li>
                  </>
                ))
              }
            </ul>
          }
          <div className="selected-tags">
            {this.state.selectedTags &&

              this.state.selectedTags.map(item => (
                <>
                <p>{item}</p>
                </>
              ))
            }
          </div>
        </div>
        <div className="cl-library__filters--dropdown-container col-3">
          <button className="cl-library__filters--type" onClick={this.openTypeDropdown}>
            Type ▼
            { this.state.typeDropdownActive &&

              <ul className="cl-library__filters--dropdown">
                { this.state.types &&

                this.state.types.map(item => (
                  <>
                  <li className="item">{item.type}</li>
                  </>
                ))
                }
              </ul>
            }
          </button>
        </div>
      </form>
    )
  }
}

export default LibraryFilters;
