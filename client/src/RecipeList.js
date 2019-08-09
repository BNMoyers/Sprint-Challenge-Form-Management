import React, { useState, useEffect } from 'react';
import axios from 'axios'; 



function RecipeList() {
    const [recipe, setRecipe] = useState([]);
    useEffect(() => {
        axios
        .get('http://localhost:5000/api/restricted/data')
        .then(res => {
            console.log('results', res.data);
            setRecipe(res.data);
        })
    },[])

    return(
<div>
<h2>Recipe List</h2>

<table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Course</th>
                <th>Technique</th>
               
            </tr>
        </thead>
        <tbody>
            {recipe.map(recipe => (
                    <tr key ={recipe.id}>
                        <td>{recipe.name}</td>
                        <td>{recipe.course}</td>
                        <td>{recipe.technique}</td>
                    </tr> ),)}
        </tbody>
    </table>
    </div>)
}

export default RecipeList

