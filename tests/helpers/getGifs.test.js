import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en getGifs()', () => { 
   
    test('should return an array of gifs', async() => { 
        const gifs = await getGifs("One punch");
        
        //Con esto estamos probando primero que el fetch no venga vacio
        //Segundo probamos que el primer elemento del arreglo sea igual a lo que sea pero que tenga esa estructura del objeto
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    });
    
});