import { Component, OnInit } from '@angular/core';
import { CATEGORIA } from '../core/interface/constants/cotagoria';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})



export class Tab1Page implements OnInit {
 
  

  ngOnInit(): void { 
  }
categorias = CATEGORIA


}
