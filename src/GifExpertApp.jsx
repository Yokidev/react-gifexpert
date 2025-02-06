
import {useState} from 'react'
import { AddCategory, GifGrid } from './components'


export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {

        if(categories.includes(newCategory)) return;

        setCategories([ newCategory , ...categories])
        // setCategories( (categories) => [newCategory, ...categories] )
    }

    return (
        <>

           {/* titulo */}
            <h1>GifExpertApp</h1>
  
            {/* input */}
            <AddCategory 
                // setCategories={ setCategories } 
                onNewCategory = { event => onAddCategory(event) }
            />

            {/* Listado de Gif */}
                {
                categories.map(category => {
                    return (
                        <GifGrid
                            key={category}
                            category={category}
                        />                
                    )
                })
                }
                
                {/* Gif Item */}


        </>
    )
}

