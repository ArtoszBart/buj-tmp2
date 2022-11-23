const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, './public/index.html'), function (err) {
		if (err) {
			res.status(500).send(err);
		}
	});
});

// app.listen(process.env.PORT || '3000', () => console.log(`API is running on PORT ${process.env.PORT || '3000'}`));
module.exports = app;
