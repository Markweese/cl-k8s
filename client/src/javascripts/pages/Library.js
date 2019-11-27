import React, { Component } from 'react'
import axios from 'axios';
import LibraryFilters from '../components/LibraryFilters/LibraryFilters';

class Library extends Component {
  state = {
    tags: [],
    name: '',
    type: '',
    currentComponents: []
  };

  componentDidMount() {
    this.fetchComponents();
  }

  async fetchComponents() {
    const components = await axios.get('/api/components');
    this.setState({ currentComponents: components.data });
  }

  render() {
    return (
      <div className="cl-library">
        <h1 className="cl-library__header pb-20">Component Library</h1>
        <LibraryFilters />
        <div class="cl-library__components">
          { this.state.currentComponents &&

            this.state.currentComponents.map(item => (
            <div>
              <>
                <h3>{item.name}</h3>
                <p>{item.type}</p>
              </>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Library;
