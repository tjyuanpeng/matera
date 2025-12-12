import antfu from '@antfu/eslint-config'

export default antfu(
  {
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
    },
  },
)
