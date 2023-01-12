const mongoose = require('mongoose'); //1 
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace( //1
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose //1
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log(con.connections);
    console.log('DB connections successful!');
  }).catch((err)=>{  // use this code to catch database error
    console.log(err)
  })
  

// console.log(process.env);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
