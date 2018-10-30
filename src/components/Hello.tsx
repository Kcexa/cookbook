import * as React from 'react';
import translations from '../translations';

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
        <h1>{translations.helloFrom(props.compiler, props.framework)}</h1>
        <h3>{`${translations.iCanAddNumbers} ${translations.checkItOut} 1 + 2 = ${sum(1, 2)}`}</h3>
    </>
);

export default Hello;
