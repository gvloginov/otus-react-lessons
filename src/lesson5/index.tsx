/*
import React from "react";
import ReactDOM from "react-dom";

const HelloWorld = () => <h1>Hello world!</h1>;

ReactDOM.render(<HelloWorld />,document.getElementById('root')); 
*/

import React, { FC } from "react";
import ReactDOM from "react-dom";

interface FullNameProps{
    name : string;
    surname : string;
    showSurname? : boolean;
}

export interface LevelProps{
    optionNames:string[];
}

const FullName: FC<FullNameProps> = (props) => <h2>{props.name} {props.showSurname && props.surname}</h2>;

export const Select: FC<LevelProps> = ({optionNames}) => (
    <select >
        {optionNames.map((item:string) => (
            <option key={item} value={item}>
                {item}
            </option>
            )
        )}
    </select>
);

const HelloWorld = () => (
    <div>
        <h1>Hello <FullName showSurname name="Gennadiy" surname="Loginov"/>!</h1>
        <Select optionNames={["admin","user","maintainer"]}></Select>
    </div>

);

ReactDOM.render(<HelloWorld />, document.getElementById("root"));

