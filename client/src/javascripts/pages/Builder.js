import React, { Component } from 'react';
import axios from 'axios';

class Builder extends Component {
  state = {
    name: '',
    type: '',
    selectedCSS: '',
    selectedTags: [],
    selectedHTML: '',
  }

  handleSubmit = async event => {
    event.preventDefault();

    await axios.post('/api/components', {
      name: this.state.name,
      type: this.state.type,
      tags: this.state.selectedTags,
      styles: this.state.selectedCSS,
      markup: this.state.selectedHTML,
    });

    this.setState({
      name: '',
      type: '',
      selectedCSS: '',
      selectedTags: [],
      selectedHTML: ''
    });
  }

  render() {
    return (
      <div className='cl-builder'>
        <h1 className='cl-builder__header'>Builder</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name Your Component</label>
          <input
            name='name'
            value={this.state.name}
          />
          <input
            name='html'
            className='cl-builder__hidden'
            value={this.state.selectedHTML}
          />
          <input
            name='css'
            value={this.state.selectedCSS}
          />
          <p>Select Component Type</p>
          <input
            name='type'
            type='radio'
            value='some type'
          />
          <label>some type</label>
          <p>Select Tags</p>
          <input
            name='tags'
            type='checkbox'
            value='some tag'
          />
          <label>some tag</label>
          <p>Enter Desired Tags separated by a comma (just,like,this)</p>
          <input
            id='custom'
            name='custom'
            value='custom, tag, names'
          />
          <button>Add Component</button>
        </form>
      </div>
    )
  }
}

export default Builder;
