import React, { Component } from 'react';
import Layout from '../containers/Layout_container';


class App extends Component {
  componentDidMount(){
  	this.props.get_youtube()
  }
	
  render() { 
    return (<div>
		    {this.props.youtube ? (<Layout/>) : (<div>Loading ....</div>)}
	    </div>
    	)
  }
}

export default App;
