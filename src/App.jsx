import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import ProfileOverview from './components/RandomUser/ProfileOverview'
import TwitterPost from './components/RandomJokes/TwitterPost';
import CatGallery from './components/CatListing/CatGallery';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/random-user" />} /> {/* Redirect base URL to /random-user */}
          <Route path="/random-user" element={<ProfileOverview />} />
          <Route path="/random-jokes" element={<TwitterPost />} />
          <Route path="/cats-listing" element={<CatGallery />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App