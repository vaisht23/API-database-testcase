const mongoose = require('mongoose')
const mongoDBconnect = 'mongodb+srv://vaishnavityagi:pass123@vaishnavicluster.fobpwle.mongodb.net/db?retryWrites=true&w=majority'

mongoose.set("strictQuery", false);
mongoose.connect(mongoDBconnect).then(() => {
    console.log('Connection successfull with DB!')
  }).catch((err) => {
    console.log('Connection with DB can not be established!')
  });