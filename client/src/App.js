import React from 'react';
import './App.css';
import FormikUserForm from './Form';


class App extends React.Component {
 constructor(){
   super();
   this.state=({});
 }
  render(){
    return (
    <div className="App">
      <FormikUserForm />
      
    </div>
  );
}}

export default App;
