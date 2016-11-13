const config = {
	'localhost':{
		clientId: '98707c5e5bcd0b28fec8',
		apiUrl: 'http://localhost:5000'
 	},
 	"grouplayv1.herokuapp.com":{
		clientId: '98707c5e5bcd0b28fec8',
		apiUrl: 'https://grouplayv1.herokuapp.com'	
 	}
}[window.location.hostname]

export default config