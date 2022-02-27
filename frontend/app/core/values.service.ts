import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CovidFaelleDto } from '../models/covidFaelleDto';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {
  private url = "http://localhost:5000/values"

  constructor(private httpClient:HttpClient) { }

  getCovidFaelle(): Observable<CovidFaelleDto>{
    return this.httpClient.get<CovidFaelleDto>(`${this.url}/GetCovidFaelle`);
  }

  getCovidFaelleAltersgruppe(): Observable<CovidFaelleDto>{
    return this.httpClient.get<CovidFaelleDto>(`${this.url}/GetCovidFaelleAltersgruppe`);
  }

  getCovidFaelleGender(): Observable<CovidFaelleDto>{
    return this.httpClient.get<CovidFaelleDto>(`${this.url}/GetCovidFaelleGender`);
  }

  getCovidFaelleBundeslaender(): Observable<CovidFaelleDto>{
    return this.httpClient.get<CovidFaelleDto>(`${this.url}/GetCovidFaelleBundeslaender`);
  }
}
