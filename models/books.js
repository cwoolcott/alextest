const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BookSchema = new Schema({ 
	title: { 
		type: String, 
		required: [true, 'The field is required'] 
    },
    authors: { 
		type: Array, 
		required: [true, 'The field is required'] 
    },
    description: { 
		type: String, 
		required: [true, 'The field is required'] 
    },
    image: { 
		type: String, 
		required: [true, 'The field is required'] 
    },
    link: {
        type: String,
        require: [true, 'The field is required']
    }
})

const Book = mongoose.model('googlebooks', BookSchema);

module.exports = Book;