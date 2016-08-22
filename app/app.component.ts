import { Component }         from '@angular/core';
// import { ROUTER_DIRECTIVES } from '@angular/router';
// import { Auth }              from './auth.service';

@Component({
    selector: 'my-app',
    // providers: [ Auth ],
    // directives: [ ROUTER_DIRECTIVES ],
    template: `<nav class="navbar navbar-default">
  
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Auth0 - Angular 2</a>
    </div>
  </div>
</nav>

<main class="container">
  <router-outlet></router-outlet>
</main>
`
})
export class AppComponent {
  // constructor(private auth: Auth) {}
};
