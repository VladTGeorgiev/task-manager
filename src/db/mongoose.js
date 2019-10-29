const mongoose = require('mongoose');
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true
});

// const User = mongoose.model('User', {
// 	name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value){
//             if(value.toLowerCase().includes('password')) {
//                 throw new Error('Password cannot contain "password"')
//             }
//         }

//     },
//     email: {
//         type: String,
//         required: true,
//         lowercase: true,
//         trim: true,
//         validate(value) {
//             if(!validator.isEmail(value)){
//                 throw new Error('E-mail is invalid')
//             }
//         }
//     },
// 	age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if(value<0){
//                 throw new Error('Age must be a positive number')
//             }
//         }
// 	}
// });

// const userOne = new User({
//     name: '      Vlad',
//     email: 'vlad@gmail.com            ',
//     password: 'phone123!         '
// });

// userOne.save().then((userOne) => console.log(userOne)).catch((error) => console.log('Error', error));

const Task = mongoose.model('Task', {
	description: {
        type: String,
        required: true,
        trim: true,
	},
	completed: {
        type: Boolean,
        default: false
	}
});

const taskOne = new Task({
    description: 'Get a job!',
    completed: false
})

taskOne.save().then(res => console.log(res)).catch(error => console.log(error))
