const express = require('express')
const app = express()

app.get ('/' , (req, res ) => res.send("HALO AZKAAAARAHMATT"))
app.listen (3001 , () => console.log("READY TO HACK"))

// app.post ('/' , (req, res ) => res.send("HALO AZKAAAA"))
// app.put ('/' , (req, res ) => res.send("HALO AZKAAAA"))
// app.delete ('/' , (req, res ) => res.send("HALO AZKAAAA"))
// app.patch ('/' , (req, res ) => res.send("HALO AZKAAAA"))
