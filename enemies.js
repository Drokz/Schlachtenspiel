var enemies = [];
var whatEnemy = 1;

function Enemies() {
    if(whatEnemy === 1) {
        this.name = "Wolf";
        this.amount = 1;
        this.hp = 15;
        this.block = 1;
        this.ap = 7;
        this.minDmg = 4;
        this.maxDmg = 7;
        this.atkspeed = 1.1;
    }
    if(whatEnemy === 2) {
        this.name = "Wildschwein";
        this.amount = 1;
        this.hp = 17;
        this.block = 1;
        this.ap = 10;
        this.minDmg = 6;
        this.maxDmg = 11;
        this.atkspeed = 1;
    }
    if(whatEnemy === 3) {
        this.name = "Bär";
        this.amount = 1;
        this.hp = 30;
        this.block = 3;
        this.ap = 18;
        this.minDmg = 13;
        this.maxDmg = 25;
        this.atkspeed = 0.8;
    }
    if(whatEnemy === 4) {
        this.name = "Gorilla";
        this.amount = 1;
        this.hp = 25;
        this.block = 1;
        this.ap = 18;
        this.minDmg = 18;
        this.maxDmg = 30;
        this.atkspeed = 0.9;
    }
}

$(document).ready(function() {
    
    for(var i = 1; i < 5; i++) {
        enemies[i] = new Enemies();
        whatEnemy ++;
    }
    
    
});
