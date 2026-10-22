import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GiphyResponse } from '../models/giphy.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
    private readonly httpClient = inject(HttpClient);
    private readonly apiUrl = 'https://api.giphy.com/v1/gifs';
    private readonly apiKey = 'eBmtzMMOc4GvgjXKMBeGADlmCHut192i';

    private createParams(extra: Record<string, string | number>): HttpParams {
        let params = new HttpParams().set('api_key', this.apiKey);

        for (const [key, value] of Object.entries(extra)) {
            params = params.set(key, String(value));
        }

        return params;
    }

    getTrending(limit = 20): Observable<GiphyResponse> {
        const params = this.createParams({
            limit,
            rating: 'g',
        });

        return this.httpClient.get<GiphyResponse>(
        `${this.apiUrl}/trending`,
        { params },
        );
    }

    search(
        query: string,
        limit = 20,
        offset = 0,
    ): Observable<GiphyResponse> {
        const params = this.createParams({
            q: query,
            limit,
            offset,
            rating: 'g',
        });

        return this.httpClient.get<GiphyResponse>(
            `${this.apiUrl}/search`,
            { params },
        );
    }
}
