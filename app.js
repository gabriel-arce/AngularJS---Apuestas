var apuestasApp = angular.module('apuestasApp', ['ui.bootstrap']);
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/app'));
app.listen(process.env.PORT || 3000);

apuestasApp.controller('apuestasCtrl', function() {
	var self = this;
	this.apuesta = new Apuesta();
	this.tiposApuesta = [ new Pleno(), new Docena()];
	this.fechaMinimaApuesta = new Date();
	this.verCalendario = function($event){
		$event.preventDefault();
		$event.stopPropagation();
		self.calendarioAbierto() = true;
	};

	this.apostar = function(apuestasForm) {
		try {
			self.apuesta.apostar();
		} catch (exception) {
			apuestasForm.$invalid = true;
			self.errorMessage = exception;
		}
	};	
})