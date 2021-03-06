import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { CellItem } from "./CellItem";

describe("Cell", () => {
    const onClick = jest.fn();
    it("render Cell", () => {
        render(<CellItem
            className='baseCell'
            x={0}
            y={3}
            data-testid={'0_3'}
            cellId={'0_3'}
            key={'0_3'}
            onClick={onClick}
            np={4} />);
        screen.debug();

        fireEvent.click(screen.getByTestId('0_3')); // или  fireEvent.click(screen.getByRole("CellItem")); или  fireEvent.click(screen.queryAllByRole('CellItem')[0]);
        expect(onClick).toHaveBeenCalledTimes(1);
    })
})