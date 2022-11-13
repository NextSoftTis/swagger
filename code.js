const rollbarConfig = {
  accessToken: YOUR_ACCESS_TOKEN,
  captureUncaught: true,
  payload: {
    environment: process.env.REACT_APP_NODE_ENV,
    client: {
      javascript: {
        source_map_enabled: true,
        code_version: process.env.REACT_APP_GIT_SHA,
      }
    }
  }
}
