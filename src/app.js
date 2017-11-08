import React, {
  ReactPropTypes
} from 'react';

class App extends React.Component{
    render(){
        <div className="container-fluid">
            <p>Header is here ...</p>
            {this.props.children}
        </div>
    }
}

App.ReactPropTypes = {
    children: ReactPropTypes.object.isRequired
}

export default App;