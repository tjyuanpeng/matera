import antfu from '@antfu/eslint-config'

export default antfu(
  {
    lessOpinionated: true,
    typescript: true,
    formatters: {
      markdown: true,
    },
    ignores: [
      './pnpm-workspace.yaml',
    ],
  },
  {
    rules: {
      'no-console': 'off',
      'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    },
  },
)
