"use strict";angular.module("tucargaApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html"}).when("/como_funciona",{templateUrl:"views/como.html"}).when("/ayuda",{templateUrl:"views/ayuda.html"}).when("/contacto",{templateUrl:"views/contacto.html"}).when("/directorio",{templateUrl:"views/directorio.html",controller:"DirectorioController"}).when("/registro",{templateUrl:"views/registro.html",controller:"RegistroController"}).when("/exito",{templateUrl:"views/exito.html"}).when("/cotizar/usuario",{templateUrl:"views/cotizar/usuario.html",controller:"UsuarioController"}).when("/cotizar/exito",{templateUrl:"views/exito.html"}).when("/cotizar",{templateUrl:"views/cotizar.html"}).when("/cotizar/importacion",{templateUrl:"views/cotizar/importacion.html",controller:"ImpoController"}).when("/cotizar/exportacion",{templateUrl:"views/cotizar/exportacion.html",controller:"ExpoController"}).when("/cotizar/domestica",{templateUrl:"views/cotizar/domestica.html",controller:"DomesticaController"}).when("/cotizar/contenedor",{templateUrl:"views/cotizar/contenedor.html",controller:"ContenedorController"}).when("/polls",{templateUrl:"views/polls.html",controller:"PollsController"}).when("/choices",{templateUrl:"views/choices.html",controller:"ChoicesController"}).otherwise({redirectTo:"/"})}]),angular.module("tucargaApp").controller("MainController",["$scope",function(a){a.awesomeThings=[{question:"asdf",pubDate:"12-2"},{question:"asdrytu",pubDate:"12-2"},{question:"qwer",pubDate:"12-2"},{question:"lñki",pubDate:"12-2"}]}]),angular.module("tucargaApp").controller("PollsController",["$http",function(a){var b=this;a.get("http://tctaa-avaras.dotcloud.com/polls/").success(function(a){console.log("nice"),b.question=a})}]);