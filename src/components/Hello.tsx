import * as React from 'react';

export interface HelloProps {
    compiler: string;
    framework: string;
}

/**
 * Adds two numbers
 * @function
 * @param a
 * @param b
 */
export const sum = (a: number, b: number) => {
    return a + b;
};

/**
 * Test component
 * @param props
 * @constructor
 */
const Hello = (props: HelloProps) => (
    <>
        <h1>
            Hello from {props.compiler} and {props.framework}!
        </h1>
        <h3>I can add numbers. Check it out: 1 + 2 = {`${sum(1, 2)}`}</h3>
    </>
);

export default Hello;
