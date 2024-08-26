import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApisService {
  private baseUrl =
    'http://gateway.marvel.com/v1/public/characters?limit=20&ts=1&apikey=660ab4ded1afd792eac3eeb76ba52bbf&hash=07ceb6c4d88234818f4966fd51aeb23f';

  getCharacters(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getComicsByCharacter(characterId: string): Observable<any> {
    const comicByCharacterUrl = `http://gateway.marvel.com/v1/public/characters/${characterId}/comics?ts=1&apikey=660ab4ded1afd792eac3eeb76ba52bbf&hash=07ceb6c4d88234818f4966fd51aeb23f`;

    return this.http.get(comicByCharacterUrl);
  }

  getCharacterByName(characterName: string): Observable<any> {
    const characterByNameUrl = `http://gateway.marvel.com/v1/public/characters?name=${characterName}&ts=1&apikey=660ab4ded1afd792eac3eeb76ba52bbf&hash=07ceb6c4d88234818f4966fd51aeb23f`;

    return this.http.get(characterByNameUrl);
  }

  constructor(private http: HttpClient) {}
}
