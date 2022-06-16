import React from 'react'
import { useState } from 'react';
import PropTypes from "prop-types";

export const AddCategory = ({addCategory}) => {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(value.trim().length < 1) return;
        setValue('');
        addCategory(value.trim());
    }
  return (
    <form onSubmit={handleSubmit} aria-label='form'>
        <input placeholder='agregar gifs' onChange={handleChange} value={value} />
    </form>
  )
}

AddCategory.propTypes = {
    addCategory: PropTypes.func.isRequired
}
