import { Component } from '@angular/core';
import { DataService } from './api-resquest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'namaz-timing';
  namazTime : any;
  public data:any
  constructor(private httpService: DataService) { }
  ngOnInit() {
  }
  dynamicName() {
   console.log(this.namazTime);
   console.log('here is', this.namazTime['1']?.data.map((item:any)=>item.timings.Fajr))
  }
  a:any = "ew"
  getdataevent(item:any){
    console.log(item);
    this.a = item;
    this.httpService.getNamazTimings(item).subscribe(
      (response)=>{this.namazTime = response},
      (error) => { console.log(error); }
    )
  }

}
