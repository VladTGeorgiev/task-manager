const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true
});

const User = mongoose.model('User', {
	name: {
		type: String
	},
	age: {
		type: Number
	}
});

const userOne = new User({
	name: 'Vlad',
	age: "kguk"
});

userOne.save().then((userOne) => console.log(userOne)).catch((error) => console.log('Error', error));
