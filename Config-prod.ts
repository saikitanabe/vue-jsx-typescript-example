export default class Config {
  static rootPathName(): string {
    return '/vue-jsx-typescript-example'
  }
  static rootPath(): string {
    return `${Config.rootPathName()}/`
  }
  static publicPath(): string {
    return `${Config.rootPathName()}/dist/`
  }
}
