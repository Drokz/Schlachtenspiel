var whatRes = 1;

var foodHover = false;
var woodHover = false;
var stoneHover = false;

function Ressources() {
    if(whatRes === 1) {
        this.name = "Siedler";
        this.amount = 0;
        this.max = 0;
        this.hover = false;
    }
    if(whatRes === 2) {
        this.name = "Nahrung";
        this.amount = 0;
        this.max = 100;
        this.hover = false;
    }
    if(whatRes === 3) {
        this.name = "Holz";
        this.amount = /*13*/ 200;
        this.max = 200;
        this.hover = false;
    }
    if(whatRes === 4) {
        this.name = "Stein";
        this.amount = /*6*/ 200;
        this.max = 200;
        this.hover = false;
    }
    if(whatRes === 5) {
        this.name = "Holzschwerter";
        this.amount = 0;
        this.max = 50;
    }
}

$(document).ready(function() {
    $("#max2").hover(function() {
        $("#info-box").show();
        foodHover = true;
    }, function() {
        $("#info-box").hide();
        foodHover = false;
    });
    
    $("#max3").hover(function() {
        $("#info-box").show();
        woodHover = true;
    }, function() {
        $("#info-box").hide();
        woodHover = false;
    });
    
    $("#max4").hover(function() {
        $("#info-box").show();
        stoneHover = true;
    }, function() {
        $("#info-box").hide();
        stoneHover = false;
    });
})