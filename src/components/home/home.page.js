import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render(){
        return (<div className="jumbotron">
        <h1>Welcome to home</h1>
        <p>React hello component</p>
        <Link to="about" className="btn btn-primary">Learn more</Link>
    </div>);
    }
}

export default HomePage;