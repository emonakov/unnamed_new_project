module.exports = {
    verbose: true,
    timers: 'fake',
    setupFiles: [
        './jest-setup.js',
    ],
    testMatch: ['**/?(*.)(spec|test).js?(x)'],
    testPathIgnorePatterns: ['/node_modules/'],
    collectCoverage: false,
    collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/**/*.mock.js'],
    coveragePathIgnorePatterns: ['/node_modules/'],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    notify: true,
    moduleNameMapper: {
        '^.+\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/cssMock.js',
        '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/__mocks__/filesMock.js',
    },
    cacheDirectory: './coverage/cache',
    testURL: 'http://www.example.com/',
};
