import styled from "@emotion/styled";
import { css } from "@emotion/core";
import './cell.style.css';
import * as React from "react";


type TCellItem = {
  /**
   * Класс
   */
  className: string;
  /**
   * Индефикатор ячейки
   */
  cellId: string;
  /**
   * Строка
   */
  x: number;
  /**
   * Колнка
   */
  y: number;
  /**
   * Click handler
   */
  onClick: (row: number, col: number) => void;
  /**
   * № п/п
   */
  np: number;
};

export const CellItem = ({ className, cellId, x, y, onClick, np }: TCellItem) => {
  const BaseCell = 'baseCell';
  className = (className === undefined) ? BaseCell : className;
  return (
    <div data-testid={cellId} id={cellId} className={className} onClick={() => onClick(x, y)} role="CellItem">{np}</div>
  );
};
