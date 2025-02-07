import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en GifExpertApp', () => { 
    
    test('debe de agregar una nueva categoria', () => { 
        
        render(<GifExpertApp/>)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form');

        
        fireEvent.input(input, { target: { value: 'Naruto' } });
        fireEvent.submit(form);

        expect(screen.getByText('Naruto')).toBeTruthy();

     })

     test('no debe de agregar una categoria existente',()=>{

        render(<GifExpertApp/>)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {target:{value: 'One Punch'}})
        fireEvent.submit(form)

        expect(screen.getAllByText('One Punch').length).toBe(1)


     })

    


 })
