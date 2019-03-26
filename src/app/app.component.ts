import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Deep Learning Codevolution';
  public name="pankaj";
  public myid="testId";
  public sucessclass="text-success";
  public hasError=false;
  public isDisabled=false;
  public isSpecial=true;
  public heighlightcolor="orange";
  public greeting="";
  public titlestyle = {
    color:"blue",
    fontWeight:"600",
    fontStyle:"italic"
  }
  onClick(){
    console.log(event);
    this.greeting=event.type;
  }
  constructor(){}
}
