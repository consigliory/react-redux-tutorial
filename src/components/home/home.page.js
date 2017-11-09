import React from 'react';
import {Link} from 'react-router';
import '../../styles/styles.css'

class HomePage extends React.Component{
    render(){
        return (<div className="jumbotron body">
        <h1>Welcome to home</h1>
        <p>React hello component</p>
        <Link to="about" className="btn btn-primary">Learn more</Link>
    </div>);
    }
}

export default HomePage;