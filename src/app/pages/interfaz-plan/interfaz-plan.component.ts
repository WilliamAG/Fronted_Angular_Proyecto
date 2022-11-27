import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interfaz-plan',
  templateUrl: './interfaz-plan.component.html',
  styleUrls: ['./interfaz-plan.component.css']
})
export class InterfazPlanComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getplan(){
    this.router.navigate(['/gallery']);
  }

}
