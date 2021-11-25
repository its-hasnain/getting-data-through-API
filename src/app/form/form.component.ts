import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  searchTerm : string = '';

  setSearchTerm($event: any){
    this.searchTerm = $event.target.value;
  }

  
  // @Input() fajarTime:any;
  @Output() getdata = new EventEmitter<string>()
     title2 ='ali'
  ngOnInit(): void {
    // this.parentfuction.emit("tttt")
  }
 

}
