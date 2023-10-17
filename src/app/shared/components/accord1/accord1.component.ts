import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accord1',
  templateUrl: './accord1.component.html',
  styleUrls: ['./accord1.component.scss']
})
export class Accord1Component implements OnInit {

isCollapsed : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onTabClick(){
    this.isCollapsed = !this.isCollapsed
  }

}
