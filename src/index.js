const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// USER

app.post('/users', (req, res) => {
	const user = new User(req.body);

	user.save()
		.then(user => res.status(201).send(user))
		.catch(error => res.status(400).send(error))
});

app.get('/users', (req, res) => {
	User.find({})
		.then(users => res.send(users))
		.catch(error => res.status(500).send())
})

app.get('/users/:id', (req, res) => {
	const _id = req.params.id

	User.findById(_id)
		.then((user) => {
			if(!user){
				return res.status(404).send()
			}
			res.status(200).send(user)
		})
		.catch(error => res.status(500).send(error))
})

// TASK

app.get('/tasks', (req, res) => {
	Task.find({})
		.then(tasks => res.send(tasks))
		.catch(error => res.status(500).send())
})

app.get('/tasks/:id', (req, res) => {
	const _id = req.params.id

	Task.findById(_id)
		.then((task) => {
			if(!task){
				return res.status(404).send()
			}
			res.status(200).send(task)
		})
		.catch(error => res.status(500).send(error))
})

app.post('/tasks', (req, res) => {
	const task = new Task(req.body);

	task.save()
	.then(task => res.status(201).send(task))
	.catch(error => res.status(400).send(error))
});

// PORT

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});