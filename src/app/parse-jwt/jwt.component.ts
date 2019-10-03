import { OnInit, Component } from '@angular/core';
import { JwtService } from './jwt.service';

@Component(
    {
        selector:'jwt-component',
        templateUrl:'./jwt.component.html'
    }
)

export class JwtComponent implements OnInit{
    jwtToken:string="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    constructor(private jwtService:JwtService){}
    ngOnInit(){}

    Decode(){        
        alert( JSON.stringify(this.jwtService.DecodeToken(this.jwtToken)));
    }
}