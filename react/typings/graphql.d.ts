declare module '*.graphql' {
  // eslint-disable-next-line no-unused-vars
  import type { DocumentNode } from 'graphql'

  const value: DocumentNode
  export default value
}
