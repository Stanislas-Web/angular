import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  appareils=[
    {
      name:'Machine à laver',
      status:'éteint'
    },
    {
      name:'Frigo',
      status:'allumé'
    },
    {
      name:'Ordinateur',
      status:'éteint'
    }
  ];
  constructor(){
    setTimeout(()=>{
      this.isAuth= true;
    },4000)
  }
  onAllumer(appareils){
    this.appareils=[
      {
        name:'Machine à laver',
        status:'allumé'
      },
      {
        name:'Frigo',
        status:'allumé'
      },
      {
        name:'Ordinateur',
        status:'allumé'
      }
    ];

  }
  onEteint(appareils){
    this.appareils=[
      {
        name:'Machine à laver',
        status:'éteint'
      },
      {
        name:'Frigo',
        status:'éteint'
      },
      {
        name:'Ordinateur',
        status:'éteint'
      }
    ];
  }
  onAll(appareils){
    this.appareils=[
      {
        name:'Machine à laver',
        status:'allumé'
      },
      {
        name:'Frigo',
        status:'allumé'
      },
      {
        name:'Ordinateur',
        status:'allumé'
      }
    ];

  }
}
