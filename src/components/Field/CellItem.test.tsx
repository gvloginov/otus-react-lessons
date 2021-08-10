import React from "react";
import {render,screen} from "@testing-library/react";

import {CellItem} from "./CellItem";

describe("Cell", () => {
    it("render Cell", () => {
        render(<CellItem
        className='baseCell'   
        x={0}
        y={3}
        cellId={'0_3'}
        key={'0_3'}
        onClick={jest.fn()}
        np={4} />);
        screen.debug();
    })
})