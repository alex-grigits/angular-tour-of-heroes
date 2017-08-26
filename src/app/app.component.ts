import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container">
			<a class="navbar-brand" href="#">{{ title }}</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item">
						<a class="nav-link" routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" routerLink="/heroes" routerLinkActive="active">Heroes</a>
					</li>
				</ul>
				<hero-search></hero-search>

			</div>
		</div>
	</nav>
	<div class="container">
			<router-outlet></router-outlet>
	</div>
	`,
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'Tour of Heroes';
}
