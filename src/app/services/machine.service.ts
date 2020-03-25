export class MachineService{
    appareils = [
        {
          name:"Machine à Laver",
          status:"éteint"
        },
        {
          name:"Télévision",
          status:"allumé"
        },
        {
          name:"Ordinateur",
          status:"éteint"
        }
      ];

      toutAllumer(){
          for(let appareil of this.appareils){
              appareil.status = 'allumé'
          }
      }

      toutEteindre(){
          for(let appareil of this.appareils){
              appareil.status = 'éteint'
          }
      }

      allumerAppareil(index: number){
          this.appareils[index].status = 'allumé'

      }

      eteindreAppareil(index: number){
        this.appareils[index].status = 'éteint'

    }

}