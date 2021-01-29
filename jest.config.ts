export default {
    roots: ['<rootDir>/src', '<rootDir>/test'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    "coverageDirectory": "./coverage",
    "collectCoverage": true,
    "coveragePathIgnorePatterns": [
        "/node_modules/"
    ],
    "coverageReporters": [
        "json",
        "lcov",
        "text",
        "text-summary"
    ],
}
