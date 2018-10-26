module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    modulePaths: ['src'],
    moduleNameMapper: {
        '^@App/(.*)$': '<rootDir>/src/$1',
    },
};
