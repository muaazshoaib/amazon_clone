console.log('Hello, World');
// print('Hello, World')
const express = require('express');
// import 'package:express/express.dart';
const PORT = 3000;

const app = express();

// CREATING AN API
app.listen(PORT, "0.0.0.0", () => {
   console.log("Connected at port " + PORT);
})
// localhost