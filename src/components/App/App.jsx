
import axios from 'axios';
// We have two hooks we are importing from react.
import { useEffect, useState } from 'react';

import './App.css';

function App() {

  // A function to go get data from the server
  // This hasn't changed in concept.
  // It has to exist before we use it with useEffect
  const fetchCountries = () => {
    axios({
      method: 'GET',
      url: '/api/countries'
    })
      .then(
        response => {
          console.log('Full response from server:', response);
          console.log('Data array only in response from server:', response.data);
          // We have react now, which will watch data and update the DOM for us.
          // So, all we have to do, is update the useState variable with what
          // we get back from the server!  Magical!
          setCountriesList(response.data);
        })
      .catch(
        error => {
          console.log('Got an error from the server:', error);
        })
  };

  // The useEffect hook allows us to run a function when the component loads for the first time
  // and only that one time. This is awesome, because our components are constantly reloading.
  // We don't want to ask the server for the data every time the componenet reloads,
  // (every time react re-renders something).  We just want to do it when the component first loads
  // We use the useEffect hook anytime we want to run a function to 'go get data'
  // from outside the component, on page load.
  // This gives us a third way to get data into our components
  // along with: passing in props, and creating data with useState.

  useEffect(
    fetchCountries, []
    // useEffect is a function that takes in two things:
    // 1) a function to run
    // 2) a list we don't care about now, but don't forget it!
  );

  // Track data for display
  const [countriesList, setCountriesList] = useState([]);

  // Track user input
  const [newCountryName, setNewCountryName] = useState('');
  const [newCountryContinent, setNewCountryContinent] = useState('');

  // Callback we give to 'onSubmit' in our form
  // This works like it always has.
  const addCountry = (event) => {
    event.preventDefault();

    console.log('newCountryName', newCountryName);
    console.log('newCountryContinent', newCountryContinent);

    axios({
      method: 'POST',
      url: '/api/countries',
      data: {
        name: newCountryName,
        continent: newCountryContinent
      }
    })
      .then(response => {
        console.log('Full response from server:', response);
        setNewCountryName('');
        setNewCountryContinent('');
        fetchCountries();
      })
      .catch(
        error => {
          console.log('Got an error from the server:', error);
        }
      )
  }

  return (
    <>
      <div className="App">
        <header>
          <h1>Smallest Countries!</h1>
        </header>
      </div>
      <ul>
        {countriesList.map(country => (
          <li key={country.id}>The country {country.name} is located on the continent of {country.continent}</li>
        ))}
      </ul>

      <h2><u>Add Country</u></h2>

      {/* not gonna lie, the way we don't give parenteses to the callback takes a min to get used to */}
      <form onSubmit={addCountry}>
        <label htmlFor="name">Name:</label>
        <input id="name" value={newCountryName} onChange={(event) => setNewCountryName(event.target.value)} placeholder='New Country Name' />
        <label htmlFor="continent">Continent:</label>
        <input id="continent" value={newCountryContinent} onChange={(event) => setNewCountryContinent(event.target.value)} placeholder='New Country Location' />
        <button type="submit">Submit Country</button>
      </form>

    </>
  );
}

export default App;
