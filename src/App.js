import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';

class App extends Component {

  state={
    categories:[],
    subcategories:[]
  }
  componentDidMount(){
    fetch("http://127.0.0.1:8000/api/categories/",{
      'method':'GET',
    }).then(resp=>resp.json())
    .then(resp=>this.setState({categories:resp}))
    .catch(err=>console.log(err))

    fetch("http://127.0.0.1:8000/api/subcategories/",{
      'method':'GET',
    }).then(resp=>resp.json())
    .then(resp=>this.setState({subcategories:resp}))
    .catch(err=>console.log(err))
  }

  render (){
    return (
      <div className="App">
        <Header categories={this.state.categories} subcategories={this.state.subcategories}/>
        <Footer/>
        </div>
    );
  }
}


export default App;

