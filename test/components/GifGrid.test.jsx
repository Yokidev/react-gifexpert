import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs'); // se usa para simular el hook useFetchGifs  y poder controlar la información que devuelve


describe('Pruebas en GifGrid', () => { 

    const category = 'One Punch';
    
    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })


        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))


    })

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/cualquiercosa.jpg',
                title: 'Cualquier cosa'
            },
            {
                id: '123' ,
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(gifs.length);


    })



})