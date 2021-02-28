// new types
interface CoursePartBase {
    name: string;
    exerciseCount: number;
}

interface CourseDescription extends CoursePartBase {
    description: string;
}

interface CoursePartOne extends CourseDescription {
    name: "Fundamentals";
}

interface CoursePartTwo extends CoursePartBase {
    name: "Using props to pass data";
    groupProjectCount: number;
}

interface CoursePartThree extends CourseDescription {
    name: "Deeper type usage";
    exerciseSubmissionLink: string;
}

interface coursePartFour extends CourseDescription {
    name: "Testing my react app";
    testCount: number;
}

type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree | coursePartFour;

export default CoursePart;