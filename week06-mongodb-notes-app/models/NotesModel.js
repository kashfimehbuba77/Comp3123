const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
  {
    noteTitle: {
      type: String,
      required: [true, "Title is required"],
      unique: true,
      trim: true,
      maxlength: 200,
    },
    noteDescription: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      maxlength: 2000,
    },
    priority: {
      type: String,
      enum: ['HIGH', 'MEDIUM', 'LOW'],
      trim: true,
      default: 'MEDIUM',
    },
  },
  {
    timestamps: { createdAt: 'dateAdded', updatedAt: 'dateUpdated' },
  }
);

module.exports = mongoose.model('Notes', noteSchema);
