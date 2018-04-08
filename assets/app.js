// JavaScript Document
'use strict';

var applicationTitle = 'inside out - js';


var applicationTagLine = 'continuosly falling forward into the light...';
elHeader.appendChild(elHeaderTitle);

window.addEventListener('load, initializeApplication');


function initializeApplication () {
	document.title = applicationTitle;
	
    document.body.style.backgroundColor = 'BBB';
	document.body.style.textAlign = 'center';
	documeny.body.style.fontsize = '3em';
	
	var elwrapper = document.createElement('div');
	elwrapper.id = 'applicationWrapper';
	
	var elHeader = document.createElement('header');
	elwrapper.appendChild(elHeader);
	
	var elHeaderTitle = document.creteElement('h1');
	elHeaderTitle.innerHTML = applicationTitle;
	elHeader.appendChild(elHeaderTitle);
	
	var elHeaderTagLine = document.createElement('h2');
	elHeader.textContent = applicationTagLine;
	elHeaderTagline.style.fontsize = '.4em';
    elHeader.appendChild(elHeaderTagLine);
	
	var elMain = document.createElement('main');
	elMain.innerHTML = '<p>Hello World!'</p>
	elWrapper.appendChild(elMain);
	
	elFooter = document.createElement('footer');
	elFooter.innerHTML = '<h4>get excited about leaning javascript...</h4>';
	elwrapper.appendChild(elFooter);
	
	elHeaderTitle.className = 'animated bounceInDown';
	elHeaderTagLine.className = 'animated bounceInLeft';
	elMain.className = 'animated zoomIn';
	elFooter.className = 'animated bounceInRight';
	
	
	
	
	
	
}