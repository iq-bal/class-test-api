const mongoose = require('mongoose')
const { title } = require('process')
const { object } = require('webidl-conversions')

const ClassTestSchema = new mongoose.Schema({
    course:{
        type: String,
        required: ['true','must provide a course title']
    },
    teacher:{
        type: String
    },
    syllabus:{
        type: String
    },
    date:{
        type: Date
    },
    venue:{
        type: String
    }
})

module.exports= mongoose.model('ClassTest', ClassTestSchema)