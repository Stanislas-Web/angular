import { Component, OnInit } from '@angular/core';
import { MachineService} from './services/machine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  lastUpdate = new Date();
  isAuth= false;
  appareils :any[];




  constructor( private machineService : MachineService){
    setTimeout(() => {
      this.isAuth=true;
    },4000);
  }
  ngOnInit(){
    this.appareils = this.machineService.appareils; 
  }

  onAllumer(){
    this.machineService.toutAllumer();
  }
  onEteindre(){
    this.machineService.toutEteindre();
  }
 

}
