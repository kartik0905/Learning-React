
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const variable = "Hey"

const reactElement = React.createElement(
  'a',
  {
    href:"https://google.com",
    target:"_blank"
  },
  'Click me to visit google',
  variable // This variable came as evaluated expression means you cannot inject if,else statement or anything here 
)

createRoot(document.getElementById('root')).render(
  
    <App/>
)
