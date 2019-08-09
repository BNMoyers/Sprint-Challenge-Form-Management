import React from 'react';
import './App.css';
import FormikUserForm from './Form';
import RecipeList from './RecipeList';


class App extends React.Component {
 constructor(){
   super();
   this.state=({});
 }
  render(){
    return (
    <div className="App">
      <FormikUserForm />
      <RecipeList />
    </div>
  );
}}

export default App;
