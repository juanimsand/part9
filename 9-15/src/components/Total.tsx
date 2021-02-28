import React from "react";
import CoursePart from '../utils/types'

interface TotalProps {
    arreglo: CoursePart[];
}

const Total: React.FC<TotalProps> = (props) => {
    //return <h1>Hello, {props.name}</h1>;
    return (
        <p>
            Number of exercises{" "}
            {props.arreglo.reduce((carry, part) => carry + part.exerciseCount, 0)}
        </p>
    );
};

//const element = <Header name="Sara" />;
export default Total;