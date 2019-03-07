import React, { Component } from 'react';
import BugsInput from './BugsInput';
import ResultsTable from './ResultsTable';
import getResults from '../utils/api';
import { compareAscend, compareDescend} from '../utils/sorting';

class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      results: null,
      error: null,
      direction: {
        countrySorted: 'asc',
        bugsSorted: 'asc'
      }
    }

    this.sortBy = this.sortBy.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  sortBy(key) {
    this.setState((prevState) => ({
      results: prevState.results.sort((a,b) => (
        this.state.direction[key] === 'asc'
          ? compareDescend(a, b, key)
          : compareAscend(a, b, key)
        )),
        direction: {
          [key]: this.state.direction[key] === 'asc'
            ? 'desc'
            : 'asc'
        }
    }));
  }

  handleSubmit(search) {
    getResults(search)
      .then((results) => {
        if(results === ''){
          return this.setState(() => ({
              error: 'Tester name is not found! try again!',
          }));
        }
        else if(results === null){
          return this.setState(() => ({
              error: 'Temporary error occurred, please try again later”',
          }));
        }else{

          for (let i = 0; i < results.length; i++) {
            results[i].bugs = results[i].bugs.join(', ');
          }
          return this.setState(() => ({
                  results: results.sort((a,b) => (compareAscend(a, b, 'firstName'))),
                  error: null,
                }));
        }
      });
  }
  render(){
    const {error, results, direction } = this.state;

    return(
      <div>
        <h1>Search Bugs</h1>
        <BugsInput onSubmit={this.handleSubmit} />
        {error !== null &&
          <p className='error'>
            {error}
          </p>
        }
        {results !== null &&
          <ResultsTable
            data={results}
            sortBy={this.sortBy}
            direction={direction}
          />
        }
      </div>
    )
  }
}

export default Main;
