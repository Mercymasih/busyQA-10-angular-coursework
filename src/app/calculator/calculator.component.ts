import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  title = "My Quadratic Calculator!";
  allowCalculation=false;
  calculated=false;
  param_a=0;
  param_b=0;
  param_c=0;
  x =0;

  first_root=0;
  second_root=0;

  constructor() { 
    setTimeout(()=> {
      this.allowCalculation = true;
    },5000);
  }

  ngOnInit(): void {
  }

  onCalculate(){
    this.first_root=0;
    this.second_root=0;
    this.x = Math.pow(this.param_b,2)-(4 * this.param_a * this.param_c);

    if(this.x >= 0){

      this.first_root= (-this.param_b + Math.sqrt(this.x))/(2 * this.param_a);
      this.second_root= (-this.param_b - Math.sqrt(this.x))/(2 * this.param_a);
      console.log(`Calculation Completed - The equation has two roots, First root=${this.first_root} and Second root=${this.second_root}`);
    
    }else {
      console.log("Calculation Completed,the equation has no real roots");
    }
     
    this.first_root = isNaN(this.first_root)?0:this.first_root;
    this.second_root = isNaN(this.second_root)?0:this.second_root;

    this.calculated= true;
    setTimeout(()=> {
      this.calculated = false;
    },5000);

  }

}
