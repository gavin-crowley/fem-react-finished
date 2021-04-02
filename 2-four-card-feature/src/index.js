import React from 'react'
import ReactDOM from 'react-dom'
import './css/styles.css'
import FourCard from './pages/FourCard/FourCard'

export const App = () => {
  return (
    <>
      <FourCard />
    </>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)




