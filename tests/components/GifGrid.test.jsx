import { screen, render} from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


jest.mock("../../src/hooks/useFetchGifs");


describe('Testing of <GifGrid/> component', () => { 
    const category = "One Punch";

    //Estamos simulando el hook
    test('should show the loading', () => { 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category } /> );
        screen.debug();

        expect( screen.getByText("Cargando..."));
        expect( screen.getByText( category ));
    });

    test('should show items when the images ', () => { 
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'http://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'goku',
                url: 'http://localhost/goku.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        
        render( <GifGrid category={ category } /> );
        expect( screen.getAllByRole('img').length ).toBe(2);
        screen.debug()
        
    });
});