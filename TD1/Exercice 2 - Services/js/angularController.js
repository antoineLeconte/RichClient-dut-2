/**
 * Created by KoopaAilay on 27/01/2016.
 */
angular.module("app").controller("controller", ["$http", function(http){
    this.services =
        [
            {
                name: 'Web Development',
                price: 300,
                active:true
            },{
            name: 'Design',
            price: 400,
            active:false
        },{
            name: 'Integration',
            price: 250,
            active:false
        },{
            name: 'Formation',
            price: 220,
            active:false
        }
        ];

    this.total = function(){
        var prixTotal = 0;
        for(index in this.services){
            if(this.services[index].active == true){
                prixTotal += this.services[index].price;
            }
        }

        return prixTotal;
    };

    this.nbActifs = function(){
        var nbActifs = 0;

        for(index in this.services){
            if(this.services[index].active)
                nbActifs++;
        }

        return nbActifs;
    }

    this.toggleActive = function(service){
        service.active = !service.active;
    };
}]);