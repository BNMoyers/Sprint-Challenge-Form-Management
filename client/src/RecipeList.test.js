import React from 'react'
import { render } from '@testing-library/react'
import RecipeList from './RecipeList'

describe('<RecipeList />', () => {
    it('renders without crashing', () => {
        render(<RecipeList />);
    });

});