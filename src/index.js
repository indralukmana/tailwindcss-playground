import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const title = 'Tailwind on React'

ReactDOM.render(<App title={title}></App>, document.getElementById('app'))

module.hot.accept()
