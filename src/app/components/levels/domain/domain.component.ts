import { Component, OnInit } from '@angular/core';
import { BasicService }from '../../../services/basic.service';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {

  data = []

  constructor(
    private basicService:BasicService
  ) {
    this.basicService.getData(
      'level3/?start=0&limit=10'
    ).subscribe((observer)=>{
      console.log(observer)
      this.data = observer
    })
  }

  ngOnInit() {
    
  }

}
