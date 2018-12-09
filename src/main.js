import './site.css'

if (module.hot) {
	module.hot.accept('./print.js', function() {
		console.log('...tra ta tata...');
		printMe();
	})
}