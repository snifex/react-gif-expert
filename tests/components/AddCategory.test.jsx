import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe('Testing <AddCategory/> component', () => {  
   
    test('should change the value of the textbox', () => { 
        render(<AddCategory onNewCategory={ () => {} }/>);

        //Tenemos que sacar el elemento doncde se esta haciendo el cambio en este caso es el textbox
        const input = screen.getByRole("textbox");

        fireEvent.input( input , { target: { value: 'Saitama' }});

        expect(input.value).toEqual('Saitama');
    });

    test('should call onNewCategory if the input has a new value', () => { 
        const inputValue = "Saitama";
        const onNewCategory = jest.fn();
        
        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input( input , { target: { value: inputValue }});
        fireEvent.submit( form );
        
        expect( input.value ).toBe("");
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    });

    // test('should not call onNewCategory if the input is empty', () => { 
    //     const onNewCategory = jest.fn();
    //     render(<AddCategory onNewCategory={ onNewCategory }/>);

    //     const form = screen.getByRole("form");
    //     fireEvent.submit(form);

    //     expect( onNewCategory ).not.toHaveBeenCalled();
    // });
});