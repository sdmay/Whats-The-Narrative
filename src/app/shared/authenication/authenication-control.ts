import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthenicationControl {

    public storeJsonWebToken(jsonWebToken: string): void {
        sessionStorage.setItem("token", jsonWebToken);
    }

    public getJsonWebTokenFromSessionStorage(): string {
        return sessionStorage.getItem("token");
    }

    public removeJsonWebToken(): void {
        sessionStorage.removeItem("token");
    }

    public isTheUserAuthenicated(): boolean {
        const token = this.getJsonWebTokenFromSessionStorage();
        if (token === null) {
            return false;
        } else {
            return true;
        }
    }

    public createAuthorizationHeader(): RequestOptions {
        // thanks http://stackoverflow.com/questions/35375530/how-do-i-add-a-json-web-token-to-each-header
        let options = new RequestOptions({ headers: new Headers() });
        let token = this.getJsonWebTokenFromSessionStorage();
        options.headers.set("x-access-token", token);
        return options;
    }
}
