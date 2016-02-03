/**
 * Created by KoopaAilay on 27/01/2016.
 */
angular.module("app").controller("controllerForm", [function(){
    this.message = "";
    this.note = "";
    this.info = "";

    this.load = function(){
        this.note = this.message;
    }

    this.save = function(){
        this.message = this.note;
        this.info = "Note sauvegardée";
    };

    this.clear = function(){
        this.note = "";
        this.info = "";
    }

    this.count = function(){
        return 100 - this.note.length;
    };
}]);