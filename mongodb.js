const { MongoClient, ObjectID } =require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id)

MongoClient.connect(connectionURL, { useUnifiedTopology: true, useNewUrlParser: true }, (error, client) => {
	if (error) {
		return console.log('Unable to connect ot database.');
	}

	const db = client.db(databaseName);
	// db.collection('users').insertOne({
	//     name: 'Vlad',
	//     age: 33
	// }, (error, result) => {
	//     if(error) {
	//         return console.log('Unable to insert user.')
	//     }

	//     console.log(result.ops)
	// })
	// db.collection('users').insertMany([
	//     {
	//         name: 'Jen',
	//         age: 28
	//     }, {
	//         name: 'Gunter',
	//         age: 27
	//     }
	// ], (error, result) =>{
	//     if(error){
	//         return console.log('Unable to insert dicuments')
	//     }

	//     console.log(result.ops)
	// })

	// db.collection('tasks').insertMany([
	// 	{
	// 		description: 'First',
	// 		completed: true
	// 	},
	// 	{
	// 		description: 'Second',
	// 		completed: false
	// 	},
	// 	{
	// 		description: 'third',
	// 		completed: true
	// 	}
	// ], (error, result) => {
	// 	if (error) {
	// 		return console.log('Unable to insert tasks');
	// 	}
	// 	console.log(result.ops);
	// });
});
