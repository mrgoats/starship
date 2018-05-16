import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class MoviesListService {

    response: any;
    url: string = 'https://swapi.co/api/films/';

    constructor(private http: HttpClient) {

    }

    getMovies() {
        return this.http.get(this.url).toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    getMovieById(id) {
        return this.http.get(this.url + id + '/').toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res;
        if (body['results']) {
            return body['results'];
        }
        else return Promise.resolve(body);
    }

    private handleError(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }

}