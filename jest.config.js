/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',  // TypeScript 파일 변환
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],  // ES 모듈로 인식
  globals: {
    'ts-jest': {
      useESM: true,  // ESM 지원 활성화
    },
  },
};
