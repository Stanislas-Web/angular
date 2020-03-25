import { Component, OnInit, Input } from '@angular/core';
import { MachineService } from '../services/machine.service';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {

  @Input() appareilName : string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;

  constructor( private machineService: MachineService) { }

  ngOnInit() {
  }

  getStatus(){
    return this.appareilStatus;
  }
  getColor(){
    if(this.appareilStatus === 'allumé'){
      return "green";
    }else{
      return "red";
    }
  }

  onAllumerAppareil(){
    this.machineService.allumerAppareil(this.indexOfAppareil);
  }

  onEteindreAppareil(){
    this.machineService.eteindreAppareil(this.indexOfAppareil);
  }

}
