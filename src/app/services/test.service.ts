import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
// import {Body,RootObject} from "./test";
import { Observable } from 'rxjs';
// import { User } from "../interface/user";
// import {Root} from "../interface1/root1";
// import {Root} from "../interface2/root";
// import {Year} from "../interface2/year";
import { environment } from 'src/environments/environment';
import { Account } from '../interface3/account';
import { Percentyearofall } from "../interface3/percentyearofall";
import { Root } from "../interface4/root";
import { Gatherbyyearall } from "../interface5/gatherbyyearall";
import { Test } from "../interface6/test";


@Injectable({
  providedIn: 'root'
})
export class TestService {


  private apiUrl = environment.apiUrl;
  // baseurl = 'https://09d6-203-150-21-70.ngrok.io'

  // private url = "https://09d6-203-150-21-70.ngrok.io/api/v1/service/citizen";
  constructor(private http: HttpClient) { }

  // createUser(user:User):Observable<User>{
  //   return this.http.post<User>(`https://jsonplaceholder.typicode.com/users`,user);
  // }

  // updateUser(user:User): Observable<User>{
  //   return this.http.put<User>(`https://jsonplaceholder.typicode.com/users/${user.id}`,user)
  // }

  getAllAccount(): Observable<Account[]>{
    return this.http.get<Account[]>(`${this.apiUrl}/api/v1/all/account`);
  }

  getTotalAccount():Observable<Account[]>{
    return this.http.get<Account[]>(`${this.apiUrl}/api/v1/total/account`);
  }

  getPercentOfYearPerYears():Observable<Percentyearofall[]>{
    return this.http.get<Percentyearofall[]>(`${this.apiUrl}/api/v1/percent/user`);
  }

  getAccountOfYearPerYear(): Observable<Root[]>{
    return this.http.get<Root[]>(`${this.apiUrl}/api/v2/separation/1`);
  }

  getGatherAccountOfYearPerYears(): Observable<Gatherbyyearall[]>{
    return this.http.get<Gatherbyyearall[]>(`${this.apiUrl}/api/v1/gather/2`);
  }

  getAllYearlyMonthlyAccount(): Observable<Test[]>{
    return this.http.get<Test[]>(`${this.apiUrl}/api/v2/service/citizen/2018/2022`);
  }
  // success
  // getDatas(): Observable<Root1[]>{
  //   // let httpHeaders = new HttpHeaders().set('Accept','application/json')
  //   return this.http.get<Root1[]>(`${this.apiUrl}/api/v2/service/citizen`);//,{headers: httpHeaders,responseType:'json'}
  // }
  // 
  // getData(): Observable<Root>{
  //   // let httpHeaders = new HttpHeaders().set('Accept','application/json')
  //   return this.http.get<Root>(`${this.apiUrl}/api/v2/service/citizen`);//,{headers: httpHeaders,responseType:'json'}
  // }

//  public getDatas(): Observable<Root[]>{
//     // let httpHeaders = new HttpHeaders().set('Accept','application/json')
//     // let year = new HttpParams();
//     // year = year.append("year_back","2");
//     // let year = {"year_back":""}; 
//     return this.http.get<Root[]>(`${this.apiUrl}/api/v1/service/citizen`); //{params:year} //{headers: httpHeaders,responseType:'json',params:year}
//   }
  // getUsers(): Observable<User[]>{
  //   return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`)
  // }

  // getUser(): Observable<User>{
  //   return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/1`)
  // }
  // getUser(): Observable<User>{
  //   return this.http.get<User>(`${this.apiUrl}/users/1`);
  // }



  // getData(payload:Body) {
  //   return this.http.get<RootObject[]>("https://8601-203-150-21-70.ngrok.io/api/v1/service/citizen");
  // }

  // body = {
  //   year_back: "2",
  // };

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   }),
  // };
  // GetData(): Observable<RootObject[]>{
  //   return this.http.get<RootObject[]>(this.baseurl+'/api/v1/service/citizen',JSON.stringify(this.body),this.httpOptions);
  // }
  // getData(){
    
  //   return this.httpClient.get<RootObject[]>("https://09d6-203-150-21-70.ngrok.io/api/v1/service/citizen");
  // }
  // public getData(): Observable<RootObject[]>{
  //   return this.http.get<RootObject[]>(`${this.apiServerUrl}/api/v1/service/citizen`,body);
  // }

}
