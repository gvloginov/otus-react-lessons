import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import {Field} from "./Field";

afterEach(cleanup);

describe("Field", () => {
    test("renders Field components", () => {
        render(
            <Field x={3} y={4} onClick={jest.fn()} />
        )
        screen.debug();

        expect(screen.getByText('Компонент Field'));  
        expect(screen.getAllByText("Компонент Field").length).toBe(1);        
        expect(screen.getByText('1'));  
        expect(screen.getAllByText("1").length).toBe(1);        
    })
})