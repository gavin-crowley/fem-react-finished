import React from 'react'
import ReactDOM from 'react-dom'
import './css/styles.css'
import ProfileCard from './pages/ProfileCard/ProfileCard'

export const App = () => {
  return (
    <>
      <ProfileCard />
    </>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)




