// import vendors
import './vendor';

// app 
import '../index.scss';
import '../index'; 

angular.element(document).ready(function () {  
	angular.bootstrap(document, ['app'], {
	//strictDi: true
	});
});