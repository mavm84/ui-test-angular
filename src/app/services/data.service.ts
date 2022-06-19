import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('../../assets/data.json').pipe(
      map((response: any) => response['data'])
    )
  }
}
