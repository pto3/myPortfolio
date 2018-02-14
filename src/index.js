import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home.js'
import projects from './data/myProjects'

import './styles/index.css';

ReactDOM.render(
    <Home projects={projects} />,
    document.getElementById('root')
);