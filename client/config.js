const config = {
  server: '',
  qiwu: {
    posts: '/api/qiwu/issues'
  },
  fex: {
    posts: '/api/fex/issues'
  }
}

if (__DEV__) {
  config.server = 'http://127.0.0.1:3002'
}

export default config
