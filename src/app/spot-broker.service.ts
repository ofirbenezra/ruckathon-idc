import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {interval, Observable, timer} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotBrokerService {

  private host = '172.21.19.45';
  private port = '8080';
  private macAddress = '10D07ACD53A5';
  pollingData: any;

  constructor(private httpClient: HttpClient) { }

  public getMacLocation(): Observable<any> {
    return interval(500).pipe(
      switchMap(() => this.httpClient.get(`http://${this.host}:${this.port}/locations/mac/mock?id=${this.macAddress}`))
    );
    // return this.httpClient.get(`http://${this.host}:${this.port}/locations/mac/mock?id=${this.macAddress}`);
  }
}
