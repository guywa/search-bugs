import React, { Component } from 'react';
import PropTypes from 'prop-types';


class BugsInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testsearch: '',
      errors: ''
    };

    this.handleTestChange = this.handleTestChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTestChange(event) {
  const value = event.target.value;

  this.setState(() => ({testsearch: value}));
  }

  handleSubmit(event) {
    event.preventDefault();
    let value = this.state.testsearch;

    if(value.length < 2 ){
      document.getElementById("bugs").style.color = "red";
      this.setState(() => ({errors: 'The input length cannot be less than two charecters!'}));
    }else if (value.length > 12) {
      document.getElementById("bugs").style.color = "red";
      this.setState(() => ({errors: 'The input length cannot be greater than twelve charecters!'}));
    }else{
      document.getElementById("bugs").style.color = "initial";
      this.setState(() => ({errors: ''}));
      this.props.onSubmit(this.state.testsearch);
    }
  }

  render(){
    const { testsearch, errors } = this.state;

    return(
      <form className='column' onSubmit={this.handleSubmit}>
        <label className='header' htmlFor='bugs'>Tester Name</label>
        <input
          id='bugs'
          placeholder='Enter the tester name'
          type='text'
          value={testsearch}
          autoComplete='off'
          onChange={this.handleTestChange}
        />
        {errors !== '' &&
          <span style={{color: "red"}}>{errors}</span>
        }
        <button
          className='button'
          type='submit'
          disabled={!testsearch}>
            Fetch
        </button>
      </form>
    )
  }
}

export default BugsInput;
