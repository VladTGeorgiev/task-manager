const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();

MongoClient.connect(connectionURL, { useUnifiedTopology: true, useNewUrlParser: true }, (error, client) => {
	if (error) {
		return console.log('Unable to connect ot database.');
	}

	const db = client.db(databaseName);

	db.collection('count').findOne({ _id: new ObjectID('5db737a7eab61719d5ccdd9b') }, (error, user) => {
		if (error) {
			return console.log('Unable to fetch.');
		}
		console.log(user);
	});

	db.collection('users').find({ age: 33 }).toArray((error, users)=> {
		console.log(users)
	});

	db.collection('tasks').findOne({ _id: new ObjectID("5db72f8ad4517016d04ca7c9") }, (error, task) => {
		console.log(task)
	})

	db.collection('tasks').find({ completed: true }).toArray((error, tasks) => {
		console.log(tasks)
	})
});
