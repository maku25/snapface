import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.sevice";

@Injectable({
    providedIn: 'root'
})
export class AuthGard implements CanActivate {

    constructor(private auth: AuthService,
                private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.auth.getToken()) return true;
        else {
            this.router.navigateByUrl('/auth/login'); return false;
        }
    }
}