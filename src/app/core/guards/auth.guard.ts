import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'; 

@Injectable()
export class Guard implements CanActivate {
    constructor(protected router: Router) {}

    canActivate() {
        return true;
    }
}