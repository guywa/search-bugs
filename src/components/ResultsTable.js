import React from 'react';

export default function ResultsTable (props){

  return(
    <div className='tableContainer'>
    <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>
              Country
              <button
                className='arrowButton'
                onClick={() => props.sortBy('country')}
                disabled={!props.data.length}>
                  <i className="arrow arrow-down"></i>
              </button>
              </th>
            <th>
              Bugs
              <button
                className='arrowButton'
                onClick={() => props.sortBy('bugs')}
                disabled={!props.data.length}>
                  <i className="arrow arrow-down"></i>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
        {props.data.length > 1
          ? props.data.map(row => (
              <tr key={row.firstName}>
                <td >{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.country}</td>
                <td>{row.bugs.map((bug) => ( bug.title)).join(", ")}</td>
              </tr>
            ))
          : <tr key={props.data.firstName}>
              <td >{props.data.firstName}</td>
              <td>{props.data.lastName}</td>
              <td>{props.data.country}</td>
              <td>{ props.data.bugs.map((bug) => ( bug.title)).join(", ")}</td>
            </tr>
        }
        </tbody>
      </table>
    </div>
  )
}
