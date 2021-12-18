const dotenv = require('dotenv')
const mongoose = require('mongoose');

dotenv.config();

// Connecting to the mongo database
mongoose.connect(
    process.env.DB_CONNECT, { useNewUrlParser: true }
    )
        .then(() => {
        console.log('Conectamos ao banco de dados')
    })
    .catch((err) => console.log(err)
)

mongoose.Promise = global.Promise;

module.exports = mongoose;