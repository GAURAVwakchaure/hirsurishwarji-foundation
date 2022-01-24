import Form from '../model/createApplication.js';
// import max1 from '../server.js'

// var max1 = 0;
Form.find().sort({_id:1}).limit(10).exec(function (err, doc) {
    // var max1 = doc._id
    // console.log(max1)
    console.log(doc)
})

// export default max1

