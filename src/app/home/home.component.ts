import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  details: any = {
    name: '',
    sirname: '',
    srno: ''
  }
  constructor(private demoService: DemoService) { }

  ngOnInit() {
    this.gatDetail();
  }

  onSave(){
    this.demoService.onSave(this.details).subscribe(res => {

    })
  }

  gatDetail(){
    this.demoService.onGet().subscribe(res => {
      
    })
  }
}
