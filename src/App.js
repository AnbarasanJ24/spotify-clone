import './App.css';
import { getRefreshToken } from './Helper/spotify';
import Login from './Login/Login';
import React, { useEffect, useState } from 'react'
// import SpotifyWebApi from 'spotify-web-api-js'

// const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null)

  useEffect(() => {
    const hash = getRefreshToken();
    const _token = hash.access_token;
    window.location.hash = ""

    if (_token) {
      setToken(_token);
      fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${_token}`
        }
      })
        .then(response => response.json())
        .then(user => {
          console.log("user", user)
        })
        .catch(err => console.log(err))
    }
  }, [])

  return (
    <div className="app">
      {
        token ? <h1>Logged In</h1> :
          (
            <Login />
          )
      }
    </div>
  );
}

export default App;
