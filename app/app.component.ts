import { Component } from '@angular/core';

export class Hero{
	id: number;
	name: string;
}

@Component({
	selector:	'angular2-heroes',
	template: `
		<h1>{{title}}</h1>
		<h2>{{hero.name}} details!</h2>
		<div><label>id: </label>{{hero.id}}</div>
  		<div>
  			<label>name: </label>
  			<!-- ONE WAY BINDING -->
  			<!-- <input value="{{hero.name}}" placeholder="name"> -->
  			<!-- TWO WAY BINDING -->
  			<input [(ngModel)]="hero.name" name="name" placeholder="name">
  		</div>`
})

export class AppComponent { 
	title = 'Tour of Heroes';
	hero: Hero = {
		id: 1,
		name: 'Windstorm'
	}
}	