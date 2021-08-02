import React, {FC, ReactElement} from "react";

import { CellItem } from "./CellItem";

export interface Props {
  // array representing field state
  x: number;
  y: number;
  // calback to fire event on field interaction
  onClick: (x: number, y: number) => void;
}

export const Field = ({ x, y, onClick }: Props) => {
/* export const Field = ({ x, y, onClick }) => { */

  const rowsArr: Array<ReactElement> = [];
  const width = y * 32;

  let k = 1;

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      const cellId = i + '_' + j;

      rowsArr.push(
          <CellItem
              className='baseCell'   
              x={i}
              y={j}
              cellId={cellId}
              key={cellId}
              onClick={() => onClick(i, j)}
              np={k}
          />
      );
      k++;
    }
  }

  return (
      <div>
        <div>Компонент Field</div>    
        <div style={{ width: width, lineHeight: 0.5}}>
          {rowsArr}
        </div>
      </div>
  );

};
