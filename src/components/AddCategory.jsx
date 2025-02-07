import { useState } from "react"
import  PropTypes from 'prop-types'

export const AddCategory = ( { onNewCategory } ) => {
  
    const [inputValue, setinputValue] = useState('')

    const onInputChange = ({target}) => {
        setinputValue( target.value )
    }
  

    const onSubmit = (event) => {
        event.preventDefault()

        if( inputValue.trim().length <= 1 ) {
            return
        }
        
        // setCategories ( (categories) =>  [inputValue, ...categories] )
        onNewCategory( inputValue.trim() )
        setinputValue('')

    }

    return (
        // <form onSubmit={ (event)=> onSubmit(event) }> siempre que se envie un argumento que seguidamente se utiliza se puede hacer de esta manera
        <form onSubmit={ onSubmit } aria-label="form">
            
            <input 
                type="text" 
                placeholder="Buscar Gif"
                value={ inputValue}
                onChange={ (event) => onInputChange(event) }
            />
        </form>
    )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
