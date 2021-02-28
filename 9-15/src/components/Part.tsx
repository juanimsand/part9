import React from "react";
import CoursePart from '../utils/types'

interface PartProps {
    part: CoursePart;
}

/**
 * Helper function for exhaustive type checking
*/
const assertNever = (value: never): never => {
    throw new Error(
        `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
};

const Part: React.FC<PartProps> = (props) => {

    switch (props.part.name) {
        case "Fundamentals":
            return (<p>{props.part.name} {props.part.exerciseCount} {props.part.description}</p>);
        case "Using props to pass data":
            return (<p>{props.part.name} {props.part.exerciseCount} {props.part.groupProjectCount}</p>);
        case "Deeper type usage":
            return (<p>{props.part.name} {props.part.exerciseCount} {props.part.description} {props.part.exerciseSubmissionLink}</p>);
        case "Testing my react app":
            return (<p>{props.part.name} {props.part.exerciseCount} {props.part.description} {props.part.testCount}</p>);
        default:
            return assertNever(props.part);
    }
    /*
    props.arreglo.forEach(p => {
        switch (props.part.name) {
            case "Fundamentals":
                return (<p>{props.part.name} {props.part.exerciseCount} {props.part.description}</p>);
            //break;
            case "Using props to pass data":
                return (<p>{props.part.name} {props.part.exerciseCount} {props.part.groupProjectCount}</p>);
            //break;
            case "Deeper type usage":
                return (<p>{props.part.name} {props.part.exerciseCount} {props.part.description} {props.part.exerciseSubmissionLink}</p>);
            //break;
            default:
                return assertNever(p);
        }
    });*/
};

export default Part;