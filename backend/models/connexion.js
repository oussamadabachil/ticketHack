const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://SBTH29:yC4EgxkWjCu9JGSl@cluster0.l9vt189.mongodb.net/TICKETHACK';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
