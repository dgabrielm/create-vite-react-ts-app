module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:storybook/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'no-console': ['warn', {
      allow: ['warn']
    }],
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'quotes': ['error', 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'jsx-quotes': ['error', 'prefer-double'],
    'indent': ['error', 2],
    'no-trailing-spaces': 'error',
    '@typescript-eslint/no-misused-promises': ['error', {
      'checksVoidReturn': false
    }]
  },
  ignorePatterns: [
    'src/**/*.test.tsx',
    'src/**/*.test.tsx.snap',
    'src/**/*.css',
    'src/**/**/*.scss',
    'src/**/*.module.scss',
    'src/assets/*',
    'bin/*',
    'public/*',
    'package.json',
    'package-lock.json',
    'tsconfig.json',
    'tsconfig.node.json',
    '.eslintrc.cjs',
    'alias.js',
    'testSetup.js',
    'commitlint.config.cjs',
    'vite.config.ts',
    'README.md',
    'env.d.ts',
    'index.html'
  ]
}
