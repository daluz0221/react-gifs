import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CategoryAdd = ({setCategory}) => {


    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
       
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        // console.log('sumbit hecho');

        if (inputValue.trim().length > 2) {
            setCategory( ele => [ inputValue, ...ele ]);
            setInputValue('');
            
        }

        e.preventDefault();
    }

    return (
      
            
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
     
    )
}

CategoryAdd.propTypes = {
    setCategory:PropTypes.func.isRequired
}

export default CategoryAdd;
