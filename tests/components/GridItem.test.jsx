import { GifItem } from "../../src/components";
import { fireEvent, render, screen } from "@testing-library/react";

describe('Testing <GifItem/> component', () => { 

    const title = 'Saitama';
    const url = "https://one-punch.com/saitama.jpg"
    
    test('should match with the snapshot', () => {  
        const { container } = render( 
            <GifItem 
                title={title}
                url={url}
            />
        );
        expect( container ).toMatchSnapshot();
    });

    test('should show the image with the url and the alt text right', () => { 
        render( 
            <GifItem 
                title={title}
                url={url}
            />
        );

        //Sacamos los datos de la imagen desestructurandolo
        const { src, alt } =  screen.getByRole('img');

        expect( src ).toBe(url);
        expect( alt ).toBe(title);
    });

    test('should show the title in the component', () => { 
        render( 
            <GifItem 
                title={title}
                url={url}
            />
        );

        expect(screen.getByText(title)).toBeTruthy();
    })
});