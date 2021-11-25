import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:  'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
getNamazTimings(item: string) {
    return this.http
    .get(`http://api.aladhan.com/v1/calendarByCity?city=${item}&country=pakistan&state=punjab&month=12&year=2021&annual=true&method=0`)
  }
  
} 