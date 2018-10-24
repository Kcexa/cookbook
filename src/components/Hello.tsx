import * as React from "react";

export interface HelloProps {
    compiler: string;
    framework: string;
}

/**
 * Test component
 * @param props
 * @constructor
 */
const Hello = (props: HelloProps) => (
    <h1>Hello from {props.compiler} and {props.framework}!</h1>
);

export default Hello;
