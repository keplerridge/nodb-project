const express = require('express'),
      port = 3456,
      app= express();

app.use(express.json())

app.listen(port, () => console.log(`Up to no good on port ${port}`))