import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TokenService } from './servicios/token.service';
@Component({
selector: 'app-root',
standalone: true,
imports: [RouterOutlet, RouterModule],
templateUrl: './app.component.html',
styleUrl: './app.component.css'
})
export class AppComponent {
title = 'RutiPrice';
isLogged = false;
email: string = "";
constructor(private tokenService: TokenService) { }
ngOnInit(): void {
this.isLogged = this.tokenService.isLogged();
if (this.isLogged) {
this.email = this.tokenService.getEmail();
}
}
public logout() {
this.tokenService.logout();
}
}