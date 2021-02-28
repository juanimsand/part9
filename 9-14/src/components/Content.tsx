import React from "react";

export interface ContentProps {
    name: string;
    exerciseCount: number;
}

const Content: React.FC<ContentProps> = (props) => {
    //return <h1>Hello, {props.name}</h1>;
    return (<p>{props.name} {props.exerciseCount}</p>);
};

//const element = <Header name="Sara" />;
export default Content;