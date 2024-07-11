import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import './styles.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('app')).render(
    <div>
        <Header />
        <Main />
        <Footer/>    
    </div>
)
