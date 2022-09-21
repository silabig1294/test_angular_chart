import { Component, OnInit } from '@angular/core';
import { User } from './interface/user';
// import { Year } from './interface2/year';

// import { Observable } from 'rxjs';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-charts-app';
  // private user:User =  {
  //   'id': 5,
  //   'name': 'Silas',
  //   'username': 'Jetdo',
  //   'email': 'Sincere@april.biz',
  //   'address': {
  //     'street': 'Kulas Light',
  //     'suite': 'Apt. 556',
  //     'city': 'Gwenborough',
  //     'zipcode': '92998-3874',
  //     'geo': {
  //       'lat': '-37.3159',
  //       'lng': '81.1496'
  //     }
  //   },
  //   'phone': '1-770-736-8031 x56442',
  //   'website': 'silas.org',
  //   'company': {
  //     'name': 'Romaguera-Crona',
  //     'catchPhrase': 'Multi-layered client-server neural-net',
  //     'bs': 'harness real-time e-markets'
  //   }
  // }
  // private year:Year = {
  //   'year_back': ''
  // }
  // private year1:Year = {
  //   'year_back': '1'
  // }
  // private year2:Year = {
  //   'year_back': '2'
  // }
  // private year3:Year = {
  //   'year_back': '3'
  // }
  // private year4:Year = {
  //   'year_back': '4'
  // }
  constructor(private testService:TestService){}

  ngOnInit(): void {
    this.onGetAccountAll();
    this.onGetAccountTotal();
    this.onGetPercentOfYearPerYears();
    this.onGetAccountOfYearPerYear();
    this.onGetGatherAccountOfYearPerYears();
    this.onGetGatherAccount();
    // this.onUpdateUser();
    // this.onCreateUser();
    // this.onGetUsers();
    // this.onCreateUser();
    // this.onGetData();
    // this.onGetUser();
    // throw new Error('Method not implemented.');
  }

  //  onGetData(): void{
  //   this.testService.getData().subscribe(
  //     (response) => console.log(response),
  //     (error : any) => console.log(error),
  //     () => console.log('Done getting users')
  //   );
  // }
  // onGetDatas(): void{
  //   this.testService.getDatas().subscribe(
  //     (response) => console.log(response),
  //     (error : any) => console.log(error),
  //     () => console.log('Done getting users')
  //   );
  // }

  // onGetUsers(): void{
  //   this.testService.getUsers().subscribe(
  //     (response) => console.table(response),
  //     (error : any) => console.log(error),
  //     () => console.log('Done getting users')
  //   );
  // }

  // onCreateUser(): void{
  //   this.testService.createUser(this.user).subscribe(
  //     (response) => console.log(response),
  //     (error : any) => console.log(error),
  //     () => console.log('Done creating user')
  //   );
  // }

  // onUpdateUser(): void{
  //   this.testService.updateUser(this.user).subscribe(
  //     (response) => console.log(response),
  //     (error : any) => console.log(error),
  //     () => console.log('Done updating user')
  //   );
  // }
      onGetAccountAll(): void{
        this.testService.getAllAccount().subscribe(
        (response) => console.log(response),
        (error : any) => console.log(error),
        () => console.log('Done getting all accounts')
      );
      }
      onGetAccountTotal(): void{
        this.testService.getTotalAccount().subscribe(
        (response) => console.log(response),
        (error : any) => console.log(error),
        () => console.log('Done getting total accounts')
      );
      }
      onGetPercentOfYearPerYears(): void{
        this.testService.getPercentOfYearPerYears().subscribe(
        (response) => console.log(response),
        (error : any) => console.log(error),
        () => console.log('Done getting total accounts')
      );
      }
      onGetAccountOfYearPerYear(): void{
        this.testService.getAccountOfYearPerYear().subscribe(
        (response) => console.log(response),
        (error : any) => console.log(error),
        () => console.log('Done getting account')
      );
      }
      onGetGatherAccountOfYearPerYears(): void{
        this.testService.getGatherAccountOfYearPerYears().subscribe(
        (response) => console.log(response),
        (error : any) => console.log(error),
        () => console.log('Done getting account')
      );
      }
      onGetGatherAccount(): void{
        this.testService.getAllYearlyMonthlyAccount().subscribe(
        (response) => console.log(response),
        (error : any) => console.log(error),
        () => console.log('Done getting account')
      );
      }
  // onGetUser(): void{
  //   this.testService.getUser().subscribe(
  //   (response) => console.log(response),
  //   (error : any) => console.log(error),
  //   () => console.log('Done getting users')
  // );
  // }
  // constructor() {
  //   type HttpResponse = {code:number,data:string};

  //   const observable = new Observable<HttpResponse>(subscriber => {
  //     console.log('Inside subscriber...');
  //     subscriber.next({code:200,data:'this is data 1...'});
  //     subscriber.next({code:200,data:'this is data 2...'});
  //     subscriber.next({code:200,data:'this is data 3...'});
  //     // subscriber.next({code:200,data:'this is data 4...'});
  //     subscriber.error({code:500,data:'An error occurred'})
  //     setTimeout(()=>{
  //       subscriber.next({code:200,data:'this is data more data...'});
  //       subscriber.complete();
  //     },3*1000);
  //     console.log('subscriber is done emitting...');
  //   });

  //   observable.subscribe({
  //     next(response:HttpResponse){
  //       console.log('got Response: ', response);
  //     },
  //     error(error : any) {
  //       console.error('something wrong occurred: ', error);
  //     },
  //     complete() {
  //         console.log('done')
  //     },
  //   });
  // }
}
