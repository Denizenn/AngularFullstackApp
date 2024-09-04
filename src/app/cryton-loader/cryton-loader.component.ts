// cryton-loader.component.ts
import { Component, inject, OnInit, Renderer2 } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { OidcSecurityService } from 'angular-auth-oidc-client';


@Component({
  selector: 'app-cryton-loader',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './cryton-loader.component.html',
  styleUrls: ['./cryton-loader.component.css']
})
export class CrytonLoaderComponent implements OnInit {

  httpClient = inject(HttpClient);
  data: any[] = [];

  private readonly oidcSecurityService = inject(OidcSecurityService);

  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData}) => {
      // add your code here
    });
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff().subscribe((result) => console.log(result));
  }
  
  
  
}
