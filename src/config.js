const config = {
	'localhost':{
		authUrl: 'https://tester-localhost.herokuapp.com/authenticate/',
		clientId: '98707c5e5bcd0b28fec8',
		apiUrl: 'http://localhost:5000'
 	},
	'labelr.surge.sh':{
		authUrl: 'xx',
		clientId: 'xx'
	}
}[window.location.hostname]

export default config