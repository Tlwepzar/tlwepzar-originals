import React from 'react'
import NavBar from './components/navbar/NavBar'
import Sections from './components/Content/Sections'
import Footer from './components/Content/Footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Sections/>
                <Footer/>
            </div>
        )
    }   
}

export default App