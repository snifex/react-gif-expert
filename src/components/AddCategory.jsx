import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState();

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    };

    const onSubmit = ( event ) => {
        event.preventDefault();
        const valueParsed = inputValue.trim()

        if( valueParsed.length <= 1 ){
            return;
        }

        //Al momento que recibimos la función del hook podemos hacer un callback
        //Donde tenemos los estados del hook anteriores en este caso categories
        setInputValue( "" );
        onNewCategory( valueParsed )
    };

    return (
        <form onSubmit={ (event) => onSubmit(event)} aria-label="form">
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>

    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}