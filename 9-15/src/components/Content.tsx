import React from "react";
import Part from './Part';
import CoursePart from '../utils/types'

interface ContentProps {
    arreglo: Array<CoursePart>;
}

const Content: React.FC<ContentProps> = (props) => {
    return (
        <div>
            {props.arreglo.map(p => <p key={p.name} ><Part part={p} /></p>)}
        </div>
    );
};

//const element = <Header name="Sara" />;
export default Content;