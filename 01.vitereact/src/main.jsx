import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const anotherElement =(
  <a href="https://google.com" target="_blank">visite google</a>
)

const Reactelement = React.createElement(
  "a",
  {href : 'https://google.com', target:'_blank'},
  'click me to google'
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
