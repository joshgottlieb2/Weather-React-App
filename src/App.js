
import { useState, useContext } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import CityList from './components/CityList';
import Weather from './views/Weather';
import Favorites from './views/Favorites';
import Login from './views/Login'
import firebase from './firebase'
import { AuthContext } from './contexts/AuthProvider'

export default function App() {
  const { login, logout, user } = useContext
    (AuthContext)

  return (
    <>
      <Router>
        {/* <h2>Current User: {user.username}</h2> */}

        <Routes>
          <Route path="/" element={
            (user.loggedIn) ?
              <Favorites />
              :
              <Login />} />

          <Route path="/Weather" element={<Weather />} />
          <Route path="/Weather/:location" element={<Weather />} />
        </Routes>
      </Router>
    </>
  )
}