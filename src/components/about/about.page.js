import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component{
    render(){
        return (
            <div>
            <h1>This is about page</h1>
            <p>Some description</p>
        <Link to="/" >Go back</Link>
        </div>
        );
    }
}

module.exports =  AboutPage;