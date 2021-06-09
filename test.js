const fetch = require('node-fetch')
async function testing() {

	const response = await fetch('https://uipath.com/fsfdsf');
	if(response.status === 404) {
		throw new Error('This page should not be 404')
	}
}

testing().catch((err) => {
	console.error(err)
	process.exit(1);
});
