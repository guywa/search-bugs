import React from 'react';

export default function ResultsTable (props){
  console.log(props, 'uu');
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
                onClick={() => props.sortBy('country')}>
                  <i className="arrow arrow-down"></i>
              </button>
              </th>
            <th>
              Bugs
              <button
                className='arrowButton'
                onClick={() => props.sortBy('bugs')}>
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
                <td>{row.bugs}</td>
              </tr>
            ))
          : <tr key={props.data.firstName}>
              <td >{props.data.firstName}</td>
              <td>{props.data.lastName}</td>
              <td>{props.data.country}</td>
              <td>{props.data.bugs.split(',')}</td>
            </tr>
        }
        </tbody>
      </table>
    </div>
  )
}
