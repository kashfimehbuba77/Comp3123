const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    noteTitle: {
        type: String,
        required: [true, "Title is required"],
        unique: true,
        trim: true,
        maxlength: 200
    },
    noteDescription: {
        
        type: String,
        required: [true, "Description is required"],
        trim: true,
        maxlength: 2000
    },
    priority: {
        type: String,
        values: ['HIGH', 'MEDIUM', 'LOW'],
        trim: true
    }
},
{
    timestamps: { dateAdded: 'dated_added', dateUpdated: 'date_updated' },
  });

module.exports = mongoose.model('Notes', noteSchema);


//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated