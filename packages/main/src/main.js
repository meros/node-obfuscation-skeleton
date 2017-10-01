// @flow

import express from "express"
import path from "path"
import reactapp from "@meros/obfuscation-skeleton-react-app"
const app = express()

app.use("/", express.static(reactapp.www))

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("This app is a web server listening on port 3000!")
})
