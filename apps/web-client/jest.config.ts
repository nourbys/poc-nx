/* eslint-disable */
export default {
  displayName: 'web-client',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/web-client',
};
