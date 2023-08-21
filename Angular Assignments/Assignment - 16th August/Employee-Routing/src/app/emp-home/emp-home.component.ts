import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-home',
  templateUrl: './emp-home.component.html',
  styleUrls: ['./emp-home.component.sass']
})
export class EmpHomeComponent {
  constructor(private router: Router) {
       
        
  }
  backToHome() {
    this.router.navigate(['.'])
}
onViewClick() {
  this.router.navigate(['./employee/list'])
}

onAddClick() {
    this.router.navigate(['./employee/add'])
}
onSearchClick() {
  this.router.navigate(['./employee/search'])
}
}
