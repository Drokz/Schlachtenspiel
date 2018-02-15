var whatIdClicked;
var whatHighlighted;
var isHighlighted = false;
var cells = new Array();
var res = [];

var hoverBuildHouse = false;
var hoverBuildFoodfield = false;
var hoverBuildWoodcutter = false;
var hoverBuildMine = false;
var hoverBuildBarracks = false;
var hoverBuildTrainingplace = false;
var hoverBuildForge = false;
var hoverCell = {empty: false, house: false, foodfield: false, woodcutter: false, mine: false, barracks: false, trainingplace: false, forge: false};
var whatIdHovered;
var whatResHovered;

var houses = [];
var housesAllLvl = 0;
var housesAllMax = 0;

var foodfields = [];
var startFood = false;
var addAllFood = [];
var foodArrayCount = 1;
var allFood = 0;

var woodcutter = [];
var startWood = false;
var addAllWood = [];
var woodArrayCount = 1;
var allWood = 0;

var mine = [];
var startStone = false;
var addAllStone = [];
var stoneArrayCount = 1;
var allStone = 0;

var barracks = [];

var recruitmentStart = false;

var deathTime = 0;
$(document).ready(function() {
    $(document).mousemove(function(e) {
            MausX = e.pageX;
            MausY = e.pageY;
            $('#info-box').offset({left:MausX +10, top:MausY +10});
    });
    $("#info-box").hide();
    $("#fightInfo").hide();
    $("#fight-screen").hide();
    $("#barracks").hide();
    $("#to-barracks").hide();
    $("#create-troop").hide();
    $("#trainingplace").hide();
    $("#to-trainingplace").hide();
    $("#forge").hide();
    $("#to-forge").hide();
    
    $("#world-grid").hide();
    
    $("#troops").hide();
    
    $("#afterFightLose").hide();
    $("#afterFightWin").hide();
    
    $("#to-city").click(function() {
        $("#city-grid").show();
        $("#world-grid").hide();
        $("#barracks").hide();
        $("#create-troop").hide();
        $("#trainingplace").hide();
        $("#forge").hide();
    });
    
    $("#to-world").click(function() {
        $("#city-grid").hide();
        $("#world-grid").show();
        $("#barracks").hide();
        $("#create-troop").hide();
        $("#trainingplace").hide();
        $("#forge").hide();
    });
    
    $("#to-barracks").click(function() {
        $("#city-grid").hide();
        $("#world-grid").hide();
        $("#barracks").show();
        $("#create-troop").hide();
        $("#trainingplace").hide();
        $("#forge").hide();
    });
    
    $("#to-create-troop").click(function() {
        $("#city-grid").hide();
        $("#world-grid").hide();
        $("#barracks").hide();
        $("#create-troop").show();
        $("#trainingplace").hide();
        $("#forge").hide();
    });
    
    $("#to-trainingplace").click(function() {
        $("#city-grid").hide();
        $("#world-grid").hide();
        $("#barracks").hide();
        $("#create-troop").hide();
        $("#trainingplace").show();
        $("#forge").hide();
    });
    
    $("#to-forge").click(function() {
        $("#city-grid").hide();
        $("#world-grid").hide();
        $("#barracks").hide();
        $("#create-troop").hide();
        $("#trainingplace").hide();
        $("#forge").show();
    });
    
    $("#to-fighter").click(function() {
        $("#fighter").show();
        $("#troops").hide();
    });
    
    $("#to-troops").click(function() {
        $("#fighter").hide();
        $("#troops").show();
    });
    
    for(var i = 1; i < 6; i++) {
        res[i] = new Ressources();
        $("#ressources").append("<tr><td class='resCell'>"+res[i].name+"</td><td class='resCell' id='amount"+whatRes+"'>"+res[i].amount.toFixed(2)+"</td><td class='resCell' id='max"+whatRes+"'>/ "+res[i].max.toFixed(2)+"</td></tr>");
        whatRes ++;
    }
    
    
    
    $("#max2").hover(function() {
        $("#info-box").show();
        foodHover = true;
    }, function() {
        $("#info-box").hide();
        foodHover = false;
    });
    
    for(i = 1; i < 11; i++) {
        for(var n = 1; n < 11; n++){
            cells[i+"-"+n] = new Object();
            cells[i+"-"+n]["whatBuild"] = "empty";
            cells[i+"-"+n]["whatBuild"] = "empty";
            cells[i+"-"+n]["whatBuild"] = "empty";
            cells[i+"-"+n]["whatBuild"] = "empty";
            cells[i+"-"+n]["whatBuild"] = "empty";
            cells[i+"-"+n]["whatBuild"] = "empty";
            cells[i+"-"+n]["whatBuild"] = "empty";
            cells[i+"-"+n]["whatBuild"] = "empty";
            cells[i+"-"+n]["whatBuild"] = "empty";
            cells[i+"-"+n]["whatBuild"] = "empty";
        }
    }
    
    
    
    
    
    var birthTime = 0;
    var z = 1;
    setInterval(function() {
        $("#amount1").html(res[1].amount);
        $("#max1").html(housesAllMax);
        $("#amount2").html(res[2].amount.toFixed(2));
        $("#max2").html(res[2].max);
        $("#amount3").html(res[3].amount.toFixed(2));
        $("#max3").html(res[3].max);
        $("#amount4").html(res[4].amount.toFixed(2));
        $("#max4").html(res[4].max);
        $("#amount5").html(res[5].amount.toFixed(2));
        $("#max5").html(res[5].max);
        
        $("#recruit-amount").html(recruit.amount);
        
        if(res[1].amount < housesAllMax) {
            birthTime ++;
            if(birthTime === 100) {
                birthTime = 0;
                res[1].amount ++;
            }
        }
        
        if(res[1].amount > 0 && res[2].amount > 0) {
            res[2].amount = res[2].amount - (0.034 * res[1].amount);
        }
        if(res[2].amount <= 0 && res[1].amount > 0) {
            deathTime ++;
            if(deathTime === 5) {
                res[1].amount --;
                deathTime = 0;
            }
        }
        
        
        if(startFood === true && res[2].amount < res[2].max) {
            res[2].amount = res[2].amount + allFood;
        }
        if(startWood === true && res[3].amount < res[3].max) {
            res[3].amount = res[3].amount + allWood;
        }
        if(startStone === true && res[4].amount < res[4].max) {
            res[4].amount = res[4].amount + allStone;
        }
        
        
        if(hoverBuildHouse === true) {
            $("#info-box").html("Haus bauen für 2 Bewohner.<br>Kosten: 10 Holz.");
        }
        if(hoverBuildFoodfield === true) {
            $("#info-box").html("Nahrungsfeld bauen.<br>Produziert 0.1 Nahrung pro Sekunde.<br>Kosten: 5 Holz.");
        }
        if(hoverBuildWoodcutter === true) {
            $("#info-box").html("Holzfäller bauen.<br>Produziert 0.17 Holz pro Sekunde.<br>Kosten: 13 Holz, 6 Stein.");
        }
        if(hoverBuildMine === true) {
            $("#info-box").html("Mine bauen.<br>Produziert 0.15 Stein pro Sekunde.<br>Kosten: 20 Holz");
        }
        if(hoverBuildBarracks === true) {
            $("#info-box").html("Kaserne bauen.<br>Reduziert die Ausbildungszeit um x pro Lvl<br>Kosten: 40 Holz, 35 Stein.");
        }
        if(hoverBuildTrainingplace === true) {
            $("#info-box").html("Übungsplatz bauen.<br>Reduziert Kosten für Ausbildung / Übungsplatzlvl<br>Kosten: 45 Holz, 30 Stein.");
        }
        if(hoverBuildForge === true) {
            $("#info-box").html("Schmiede bauen.<br>Reduziert Herstellungskosten pro Schmiedelvl<br>Kosten: 40 Holz, 50 Stein.");
        }
        
        if(foodHover === true) {
            $("#info-box").html("Gesamtförderrate: +"+allFood.toFixed(2));
        }
        if(woodHover === true) {
            $("#info-box").html("Gesamtförderrate: +"+allWood.toFixed(2));
        }
        if(stoneHover === true) {
            $("#info-box").html("Gesamtförderrate: +"+allStone.toFixed(2));
        }
        
        if(hoverCell.empty === true) {
            $("#info-box").html("Baue etwas!");
        }
        if(hoverCell.house === true) {
            $("#info-box").html("Lvl: "+ houses[whatIdHoverd].lvl);
        }
        if(hoverCell.foodfield === true) {
            $("#info-box").html("Lvl: "+ foodfields[whatIdHovered].lvl +"<br>Förderrate: +"+ foodfields[whatIdHovered].addPerTick.toFixed(2) +"<br>Upgrade Kosten:<br>"+ foodfields[whatIdHovered].costWood.toFixed(2) +" Holz");
        }
        if(hoverCell.woodcutter === true) {
            $("#info-box").html("Lvl: "+ woodcutter[whatIdHovered].lvl +"<br>Förderrate: +"+ woodcutter[whatIdHovered].addPerTick.toFixed(2) +"<br>Upgrade Kosten:<br>"+ woodcutter[whatIdHovered].costWood.toFixed(2) +" Holz<br>"+ woodcutter[whatIdHovered].costStone.toFixed(2) +" Stein");
        }
        if(hoverCell.mine === true) {
            $("#info-box").html("Lvl: "+ mine[whatIdHovered].lvl +"<br>Förderrate: +"+ mine[whatIdHovered].addStonePerTick.toFixed(2) +"<br>Upgrade Kosten:<br>"+ mine[whatIdHovered].costWood.toFixed(2) +" Holz");
        }
        if(hoverCell.barracks === true) {
            $("#info-box").html("Lvl: "+ barracks[whatIdHovered].lvl +"<br>Upgrade Kosten:<br>"+ barracks[whatIdHovered].costWood.toFixed(2) +" Holz<br>"+ barracks[whatIdHovered].costStone.toFixed(2) +" Stein");
        }
        if(hoverCell.trainingplace === true) {
            $("#info-box").html("Lvl: "+ trainingplace[whatIdHovered].lvl +"<br>Upgrade Kosten:<br>"+ trainingplace[whatIdHovered].costWood.toFixed(2) +" Holz<br>"+ trainingplace[whatIdHovered].costStone.toFixed(2) +" Stein");
        }
        if(hoverCell.forge === true) {
            $("#info-box").html("Lvl: "+ forge[whatIdHovered].lvl +"<br>Upgrade Kosten:<br>"+ forge[whatIdHovered].costWood.toFixed(2) +" Holz<br>"+ forge[whatIdHovered].costStone.toFixed(2) +" Stein");
        }
        
        if(woodsword.hover1 === true) {
            $("#info-box").html("Kosten: "+ woodsword.costWood +"Holz<br>Dauer: "+woodsword.time.toFixed(0)+"sec");
        }
        if(woodsword.hover25 === true) {
            $("#info-box").html("Kosten: "+ woodsword.costWood * 25 +"Holz<br>Dauer: "+(woodsword.time * 25).toFixed(0)+"sec");
        }
        if(woodsword.hover50 === true) {
            $("#info-box").html("Kosten: "+ woodsword.costWood * 50 +"Holz<br>Dauer: "+(woodsword.time * 50).toFixed(0)+"sec");
        }
        if(woodsword.hover100 === true) {
            $("#info-box").html("Kosten: "+ woodsword.costWood * 100 +"Holz<br>Dauer: "+(woodsword.time * 100).toFixed(0)+"sec");
        }
        
        if(recruit.hover === true) {
            $("#info-box").html("Kosten:<br> 1 Siedler, 1 Holzschwert<br><br>Dauer:<br>"+recruit.time.toFixed(0)+"sec<br><br>Werte:<br>HP: "+recruit.hp+"<br>Block: "+recruit.block+"<br>AP: "+recruit.ap+"<br>Dmg: "+recruit.minDmg+"-"+recruit.maxDmg);
        }
        
        if(troop1.hover === true && troop1.empty === false) {
            $("#info-box").html("Anzahl Rekruten: "+troop1.recruits+"<br>Truppenwerte:<br>HP: "+troop1.hp+"<br>Block: "+troop1.block+"<br>AP: "+troop1.ap+"<br>Dmg: "+troop1.minDmg+"-"+troop1.maxDmg);
        }
        
    }, 200);
});