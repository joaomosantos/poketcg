import { Card } from './card/card.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL_API } from '../app.api';
import { Injectable } from '@angular/core';

@Injectable()
export class PokecardsService {

    constructor(private http: HttpClient) {}

    cards(): Observable<Card[]> {
        return this.http.get<Card[]>(`${URL_API}/cards`)
            .pipe(map(response => response));
    }
}