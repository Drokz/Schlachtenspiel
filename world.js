var worldCells = new Array();
var whatWorldCellClicked;
var troopHighlighted = false;
var whatTroopHighlighted;
var whatTroopSelected;

var enemyHorde1 = new Array();
var enemyHorde2 = new Array();
var enemyHorde3 = new Array();
var enemyHorde4 = new Array();
var enemyHorde5 = new Array();
var enemyHorde6 = new Array();

var allHordes = new Array();

$(document).ready(function() {
    
    $("#hordeEnemy2").hide();
    $("#hordeEnemy2Amount").hide();
    $("#hordeEnemy3").hide();
    $("#hordeEnemy3Amount").hide();
    $("#hordeEnemy4").hide();
    $("#hordeEnemy4Amount").hide();
    $("#hordeEnemy5").hide();
    $("#hordeEnemy5Amount").hide();
    $("#hordeEnemy6").hide();
    $("#hordeEnemy6Amount").hide();
    
    for(var i = 1; i < 11; i++) {
        for(var n = 1; n < 11; n++){
            worldCells[i+"-"+n] = new Object();
            worldCells[i+"-"+n]["enemy1"] = "empty";
            worldCells[i+"-"+n]["enemy1Amount"] = 0;
            
            worldCells[i+"-"+n]["enemy2"] = "empty";
            worldCells[i+"-"+n]["enemy2Amount"] = 0;
            
            worldCells[i+"-"+n]["enemy3"] = "empty";
            worldCells[i+"-"+n]["enemy3Amount"] = 0;
            
            worldCells[i+"-"+n]["enemy4"] = "empty";
            worldCells[i+"-"+n]["enemy4Amount"] = 0;
            
            worldCells[i+"-"+n]["enemy5"] = "empty";
            worldCells[i+"-"+n]["enemy5Amount"] = 0;
            
            worldCells[i+"-"+n]["enemy6"] = "empty";
            worldCells[i+"-"+n]["enemy6Amount"] = 0;
            
            worldCells[i+"-"+n]["hover"] = false;
            
            enemyHorde1[i+"-"+n] = new Object();
            enemyHorde1[i+"-"+n]["name"] = undefined;
            enemyHorde1[i+"-"+n]["amount"] = undefined;
            enemyHorde1[i+"-"+n]["hp"] = undefined;
            enemyHorde1[i+"-"+n]["block"] = undefined;
            enemyHorde1[i+"-"+n]["ap"] = undefined;
            enemyHorde1[i+"-"+n]["minDmg"] = undefined;
            enemyHorde1[i+"-"+n]["maxDmg"] = undefined;
            enemyHorde1[i+"-"+n]["atkSpeed"] = undefined;
            
            if(recruit.amount >= 50) {
                enemyHorde2[i+"-"+n] = new Object();
                enemyHorde2[i+"-"+n]["name"] = undefined;
                enemyHorde2[i+"-"+n]["amount"] = undefined;
                enemyHorde2[i+"-"+n]["hp"] = undefined;
                enemyHorde2[i+"-"+n]["block"] = undefined;
                enemyHorde2[i+"-"+n]["ap"] = undefined;
                enemyHorde2[i+"-"+n]["minDmg"] = undefined;
                enemyHorde2[i+"-"+n]["maxDmg"] = undefined;
                enemyHorde2[i+"-"+n]["atkSpeed"] = undefined;
            }
            if(recruit.amount >= 150) {
                enemyHorde3[i+"-"+n] = new Object();
                enemyHorde3[i+"-"+n]["name"] = undefined;
                enemyHorde3[i+"-"+n]["amount"] = undefined;
                enemyHorde3[i+"-"+n]["hp"] = undefined;
                enemyHorde3[i+"-"+n]["block"] = undefined;
                enemyHorde3[i+"-"+n]["ap"] = undefined;
                enemyHorde3[i+"-"+n]["minDmg"] = undefined;
                enemyHorde3[i+"-"+n]["maxDmg"] = undefined;
                enemyHorde3[i+"-"+n]["atkSpeed"] = undefined;
            }
            if(recruit.amount >= 250) {
                enemyHorde4[i+"-"+n] = new Object();
                enemyHorde4[i+"-"+n]["name"] = undefined;
                enemyHorde4[i+"-"+n]["amount"] = undefined;
                enemyHorde4[i+"-"+n]["hp"] = undefined;
                enemyHorde4[i+"-"+n]["block"] = undefined;
                enemyHorde4[i+"-"+n]["ap"] = undefined;
                enemyHorde4[i+"-"+n]["minDmg"] = undefined;
                enemyHorde4[i+"-"+n]["maxDmg"] = undefined;
                enemyHorde4[i+"-"+n]["atkSpeed"] = undefined;
            }
            if(recruit.amount >= 350) {
                enemyHorde5[i+"-"+n] = new Object();
                enemyHorde5[i+"-"+n]["name"] = undefined;
                enemyHorde5[i+"-"+n]["amount"] = undefined;
                enemyHorde5[i+"-"+n]["hp"] = undefined;
                enemyHorde5[i+"-"+n]["block"] = undefined;
                enemyHorde5[i+"-"+n]["ap"] = undefined;
                enemyHorde5[i+"-"+n]["minDmg"] = undefined;
                enemyHorde5[i+"-"+n]["maxDmg"] = undefined;
                enemyHorde5[i+"-"+n]["atkSpeed"] = undefined;
            }
            if(recruit.amount >= 500) {
                enemyHorde6[i+"-"+n] = new Object();
                enemyHorde6[i+"-"+n]["name"] = undefined;
                enemyHorde6[i+"-"+n]["amount"] = undefined;
                enemyHorde6[i+"-"+n]["hp"] = undefined;
                enemyHorde6[i+"-"+n]["block"] = undefined;
                enemyHorde6[i+"-"+n]["ap"] = undefined;
                enemyHorde6[i+"-"+n]["minDmg"] = undefined;
                enemyHorde6[i+"-"+n]["maxDmg"] = undefined;
                enemyHorde6[i+"-"+n]["atkSpeed"] = undefined;
            }
        }
    }
    
    $(".world-grid-cell").hover(function() {
        $("#info-box").show();
        if(worldCells[this.id].hover === false) {
            worldCells[this.id].hover = true;
            $("#info-box").html("Gegner 1: "+worldCells[this.id].enemy1Amount+"x "+worldCells[this.id].enemy1);
            if(worldCells[this.id].enemy2 != "empty") {
                $("#info-box").html("Gegner 1: "+worldCells[this.id].enemy1Amount+"x "+worldCells[this.id].enemy1+"<br>Gegner 2: "+worldCells[this.id].enemy2Amount+"x "+worldCells[this.id].enemy2);
            }
            if(worldCells[this.id].enemy3 != "empty") {
                $("#info-box").html("Gegner 1: "+worldCells[this.id].enemy1Amount+"x "+worldCells[this.id].enemy1+"<br>Gegner 2: "+worldCells[this.id].enemy2Amount+"x "+worldCells[this.id].enemy2+"<br>Gegner 3: "+worldCells[this.id].enemy3Amount+"x "+worldCells[this.id].enemy3);
            }
            if(worldCells[this.id].enemy4 != "empty") {
                $("#info-box").html("Gegner 1: "+worldCells[this.id].enemy1Amount+"x "+worldCells[this.id].enemy1+"<br>Gegner 2: "+worldCells[this.id].enemy2Amount+"x "+worldCells[this.id].enemy2+"<br>Gegner 3: "+worldCells[this.id].enemy3Amount+"x "+worldCells[this.id].enemy3+"<br>Gegner 4: "+worldCells[this.id].enemy4Amount+"x "+worldCells[this.id].enemy4);
            }
            if(worldCells[this.id].enemy5 != "empty") {
                $("#info-box").html("Gegner 1: "+worldCells[this.id].enemy1Amount+"x "+worldCells[this.id].enemy1+"<br>Gegner 2: "+worldCells[this.id].enemy2Amount+"x "+worldCells[this.id].enemy2+"<br>Gegner 3: "+worldCells[this.id].enemy3Amount+"x "+worldCells[this.id].enemy3+"<br>Gegner 4: "+worldCells[this.id].enemy4Amount+"x "+worldCells[this.id].enemy4+"<br>Gegner 5: "+worldCells[this.id].enemy5Amount+"x "+worldCells[this.id].enemy5);
            }
            if(worldCells[this.id].enemy6 != "empty") {
                $("#info-box").html("Gegner 1: "+worldCells[this.id].enemy1Amount+"x "+worldCells[this.id].enemy1+"<br>Gegner 2: "+worldCells[this.id].enemy2Amount+"x "+worldCells[this.id].enemy2+"<br>Gegner 3: "+worldCells[this.id].enemy3Amount+"x "+worldCells[this.id].enemy3+"<br>Gegner 4: "+worldCells[this.id].enemy4Amount+"x "+worldCells[this.id].enemy4+"<br>Gegner 5: "+worldCells[this.id].enemy5Amount+"x "+worldCells[this.id].enemy5+"<br>Gegner 6: "+worldCells[this.id].enemy6Amount+"x "+worldCells[this.id].enemy6);
            }
        }
    }, function() {
        $("#info-box").hide();
        worldCells[this.id].hover = false;
            
    });
    
    $(".troop-cell").click(function() {
        if(troopHighlighted === false) {
            document.getElementById(this.id).style.backgroundColor ="#E6E6E6";
            troopHighlighted = true;
            whatTroopHighlighted = this.id;
        } else if (troopHighlighted === true && whatTroopHighlighted === this.id) {
            document.getElementById(this.id).style.backgroundColor ="#FFFFFF";
            troopHighlighted = false;
            whatTroopHighlighted = undefined;
        }
    });
    
    $(".world-grid-cell").click(function() {
        whatWorldCellClicked = this.id;
        if(whatTroopHighlighted === undefined) {
            alert("Bitter Truppe auswählen.");
        }
        if(whatTroopHighlighted != undefined && troop1.empty === true) {
            alert("Bitte Truppe erstellen.");
        }
        if(whatTroopHighlighted === "troop1" && troop1.empty === false) {
            $("#fightInfo").show();
            
            $("#fIRecruits").html(troop1.recruits);
            $("#fIHP").html(troop1.hp);
            $("#fIBlock").html(troop1.block);
            $("#fIAP").html(troop1.ap);
            $("#fIDmg").html(troop1.minDmg+" - "+troop1.maxDmg);
        }
        
        
        
        $("#hordeEnemy1").html(worldCells[this.id].enemy1);
        $("#hordeEnemy1Amount").html(enemyHorde1[whatWorldCellClicked].amount);
        $("#hordeEnemy2").html(worldCells[this.id].enemy2);
        $("#hordeEnemy2Amount").html(enemyHorde2[whatWorldCellClicked].amount);
        $("#hordeEnemy3").html(worldCells[this.id].enemy3);
        $("#hordeEnemy3Amount").html(enemyHorde3[whatWorldCellClicked].amount);
        $("#hordeEnemy4").html(worldCells[this.id].enemy4);
        $("#hordeEnemy4Amount").html(enemyHorde4[whatWorldCellClicked].amount);
        $("#hordeEnemy5").html(worldCells[this.id].enemy5);
        $("#hordeEnemy5Amount").html(enemyHorde5[whatWorldCellClicked].amount);
        $("#hordeEnemy6").html(worldCells[this.id].enemy6);
        $("#hordeEnemy6Amount").html(enemyHorde6[whatWorldCellClicked].amount);
        
        if(worldCells[this.id].enemy2 != "empty") {
            allHordes.hp = enemyHorde1[this.id].hp + enemyHorde2[this.id].hp;
            
            allHordes.block = enemyHorde1[this.id].block + enemyHorde2[this.id].block;
            
            allHordes.ap = enemyHorde1[this.id].ap + enemyHorde2[this.id].ap;
            
            allHordes.minDmg = enemyHorde1[this.id].minDmg + enemyHorde2[this.id].minDmg;
            
            allHordes.maxDmg = enemyHorde1[this.id].maxDmg + enemyHorde2[this.id].maxDmg;
            
            $("#hordeEnemy2").show();
            $("#hordeEnemy2Amount").show();
        }
        if(worldCells[this.id].enemy3 != "empty") {
            allHordes.hp = enemyHorde1[this.id].hp + enemyHorde2[this.id].hp + enemyHorde3[this.id].hp;
            
            allHordes.block = enemyHorde1[this.id].block + enemyHorde2[this.id].block + enemyHorde3[this.id].block;
            
            allHordes.ap = enemyHorde1[this.id].ap + enemyHorde2[this.id].ap + enemyHorde3[this.id].ap;
            
            allHordes.minDmg = enemyHorde1[this.id].minDmg + enemyHorde2[this.id].minDmg + enemyHorde3[this.id].minDmg;
            
            allHordes.maxDmg = enemyHorde1[this.id].maxDmg + enemyHorde2[this.id].maxDmg + enemyHorde3[this.id].maxDmg;
            
            $("#hordeEnemy3").show();
            $("#hordeEnemy3Amount").show();
        }
        if(worldCells[this.id].enemy4 != "empty") {
            allHordes.hp = enemyHorde1[this.id].hp + enemyHorde2[this.id].hp + enemyHorde3[this.id].hp + enemyHorde4[this.id].hp;
            
            allHordes.block = enemyHorde1[this.id].block + enemyHorde2[this.id].block + enemyHorde3[this.id].block + enemyHorde4[this.id].block;
            
            allHordes.ap = enemyHorde1[this.id].ap + enemyHorde2[this.id].ap + enemyHorde3[this.id].ap + enemyHorde4[this.id].ap;
            
            allHordes.minDmg = enemyHorde1[this.id].minDmg + enemyHorde2[this.id].minDmg + enemyHorde3[this.id].minDmg + enemyHorde4[this.id].minDmg;
            
            allHordes.maxDmg = enemyHorde1[this.id].maxDmg + enemyHorde2[this.id].maxDmg + enemyHorde3[this.id].maxDmg + enemyHorde4[this.id].maxDmg;
            
            $("#hordeEnemy4").show();
            $("#hordeEnemy4Amount").show();
        }
        if(worldCells[this.id].enemy5 != "empty") {
            allHordes.hp = enemyHorde1[this.id].hp + enemyHorde2[this.id].hp + enemyHorde3[this.id].hp + enemyHorde4[this.id].hp + enemyHorde5[this.id].hp;
            
            allHordes.block = enemyHorde1[this.id].block + enemyHorde2[this.id].block + enemyHorde3[this.id].block + enemyHorde4[this.id].block + enemyHorde5[this.id].block;
            
            allHordes.ap = enemyHorde1[this.id].ap + enemyHorde2[this.id].ap + enemyHorde3[this.id].ap + enemyHorde4[this.id].ap + enemyHorde5[this.id].ap;
            
            allHordes.minDmg = enemyHorde1[this.id].minDmg + enemyHorde2[this.id].minDmg + enemyHorde3[this.id].minDmg + enemyHorde4[this.id].minDmg + enemyHorde5[this.id].minDmg;
            
            allHordes.maxDmg = enemyHorde1[this.id].maxDmg + enemyHorde2[this.id].maxDmg + enemyHorde3[this.id].maxDmg + enemyHorde4[this.id].maxDmg + enemyHorde5[this.id].maxDmg;
            
            $("#hordeEnemy5").show();
            $("#hordeEnemy5Amount").show();
        }
        if(worldCells[this.id].enemy6 != "empty") {
            allHordes.hp = enemyHorde1[this.id].hp + enemyHorde2[this.id].hp + enemyHorde3[this.id].hp + enemyHorde4[this.id].hp + enemyHorde5[this.id].hp + enemyHorde6[this.id].hp;
        
            allHordes.block = enemyHorde1[this.id].block + enemyHorde2[this.id].block + enemyHorde3[this.id].block + enemyHorde4[this.id].block + enemyHorde5[this.id].block + enemyHorde6[this.id].block;

            allHordes.ap = enemyHorde1[this.id].ap + enemyHorde2[this.id].ap + enemyHorde3[this.id].ap + enemyHorde4[this.id].ap + enemyHorde5[this.id].ap + enemyHorde6[this.id].ap;

            allHordes.minDmg = enemyHorde1[this.id].minDmg + enemyHorde2[this.id].minDmg + enemyHorde3[this.id].minDmg + enemyHorde4[this.id].minDmg + enemyHorde5[this.id].minDmg + enemyHorde6[this.id].minDmg;

            allHordes.maxDmg = enemyHorde1[this.id].maxDmg + enemyHorde2[this.id].maxDmg + enemyHorde3[this.id].maxDmg + enemyHorde4[this.id].maxDmg + enemyHorde5[this.id].maxDmg + enemyHorde6[this.id].maxDmg;
            
            $("#hordeEnemy6").show();
            $("#hordeEnemy6Amount").show();
        }
        
        $("#hordeHP").html(allHordes.hp);
        $("#hordeBlock").html(allHordes.block);
        $("#hordeAP").html(allHordes.ap);
        $("#hordeDmg").html(allHordes.minDmg+" - "+allHordes.maxDmg);
        
    });
    
    $("#fight").click(function() {
        $("#world-grid").hide();
        
        $("#fightInfo").hide();
        $("#fight-screen").show();
        troop1.isfighting = true;
    });
    
    $("#abortFight").click(function() {
        $("#fightInfo").hide();
    });
    
    
    
    setInterval(function() {
        for(i = 1; i < 11; i++) {
            for(n = 1; n < 11; n++) {
                if(worldCells[i+"-"+n]["enemy1"] === "empty") {
                    worldCells[i+"-"+n]["enemy1"] = enemies[Math.floor((Math.random() * (enemies.length - 1)) + 1)].name;
                    worldCells[i+"-"+n]["enemy1Amount"] = Math.floor((Math.random() * 10) + 1);
                }
                for(var x = 1; x < enemies.length; x++) {
                    if(worldCells[i+"-"+n].enemy1 === enemies[x].name) {
                        enemyHorde1[i+"-"+n].name = enemies[x].name;
                        enemyHorde1[i+"-"+n].amount = enemies[x].amount * worldCells[i+"-"+n].enemy1Amount;
                        enemyHorde1[i+"-"+n].hp = enemies[x].hp;
                        enemyHorde1[i+"-"+n].block = enemies[x].block;
                        enemyHorde1[i+"-"+n].ap = enemies[x].ap;
                        enemyHorde1[i+"-"+n].minDmg = enemies[x].minDmg;
                        enemyHorde1[i+"-"+n].maxDmg = enemies[x].maxDmg;
                        enemyHorde1[i+"-"+n].atkSpeed = enemies[x].atkspeed;
                    }
                }
                
                if(worldCells[i+"-"+n]["enemy2"] === "empty" && recruit.amount >= 50) {
                    worldCells[i+"-"+n]["enemy2"] = enemies[Math.floor((Math.random() * (enemies.length - 1)) + 1)].name;
                    worldCells[i+"-"+n]["enemy2Amount"] = Math.floor((Math.random() * 10) + 1);
                }
                for(var x = 1; x < enemies.length; x++) {
                    if(worldCells[i+"-"+n].enemy2 === enemies[x].name) {
                        enemyHorde2[i+"-"+n].name = enemies[x].name;
                        enemyHorde2[i+"-"+n].amount = enemies[x].amount * worldCells[i+"-"+n].enemy2Amount;
                        enemyHorde2[i+"-"+n].hp = enemies[x].hp * worldCells[i+"-"+n].enemy2Amount;
                        enemyHorde2[i+"-"+n].block = enemies[x].block * worldCells[i+"-"+n].enemy2Amount;
                        enemyHorde2[i+"-"+n].ap = enemies[x].ap * worldCells[i+"-"+n].enemy2Amount;
                        enemyHorde2[i+"-"+n].minDmg = enemies[x].minDmg * worldCells[i+"-"+n].enemy2Amount;
                        enemyHorde2[i+"-"+n].maxDmg = enemies[x].maxDmg * worldCells[i+"-"+n].enemy2Amount;
                        enemyHorde2[i+"-"+n].atkSpeed = enemies[x].atkspeed;
                    }
                }
                
                if(worldCells[i+"-"+n]["enemy3"] === "empty" && recruit.amount >= 150) {
                    worldCells[i+"-"+n]["enemy3"] = enemies[Math.floor((Math.random() * (enemies.length - 1)) + 1)].name;
                    worldCells[i+"-"+n]["enemy3Amount"] = Math.floor((Math.random() * 10) + 1);
                }
                for(var x = 1; x < enemies.length; x++) {
                    if(worldCells[i+"-"+n].enemy3 === enemies[x].name) {
                        enemyHorde3[i+"-"+n].name = enemies[x].name;
                        enemyHorde3[i+"-"+n].amount = enemies[x].amount * worldCells[i+"-"+n].enemy3Amount;
                        enemyHorde3[i+"-"+n].hp = enemies[x].hp * worldCells[i+"-"+n].enemy3Amount;
                        enemyHorde3[i+"-"+n].block = enemies[x].block * worldCells[i+"-"+n].enemy3Amount;
                        enemyHorde3[i+"-"+n].ap = enemies[x].ap * worldCells[i+"-"+n].enemy3Amount;
                        enemyHorde3[i+"-"+n].minDmg = enemies[x].minDmg * worldCells[i+"-"+n].enemy3Amount;
                        enemyHorde3[i+"-"+n].maxDmg = enemies[x].maxDmg * worldCells[i+"-"+n].enemy3Amount;
                        enemyHorde3[i+"-"+n].atkSpeed = enemies[x].atkspeed;
                    }
                }
                
                if(worldCells[i+"-"+n]["enemy4"] === "empty" && recruit.amount >= 250) {
                    worldCells[i+"-"+n]["enemy4"] = enemies[Math.floor((Math.random() * (enemies.length - 1)) + 1)].name;
                    worldCells[i+"-"+n]["enemy4Amount"] = Math.floor((Math.random() * 10) + 1);
                }
                for(var x = 1; x < enemies.length; x++) {
                    if(worldCells[i+"-"+n].enemy4 === enemies[x].name) {
                        enemyHorde4[i+"-"+n].name = enemies[x].name;
                        enemyHorde4[i+"-"+n].amount = enemies[x].amount * worldCells[i+"-"+n].enemy4Amount;
                        enemyHorde4[i+"-"+n].hp = enemies[x].hp * worldCells[i+"-"+n].enemy4Amount;
                        enemyHorde4[i+"-"+n].block = enemies[x].block * worldCells[i+"-"+n].enemy4Amount;
                        enemyHorde4[i+"-"+n].ap = enemies[x].ap * worldCells[i+"-"+n].enemy4Amount;
                        enemyHorde4[i+"-"+n].minDmg = enemies[x].minDmg * worldCells[i+"-"+n].enemy4Amount;
                        enemyHorde4[i+"-"+n].maxDmg = enemies[x].maxDmg * worldCells[i+"-"+n].enemy4Amount;
                        enemyHorde4[i+"-"+n].atkSpeed = enemies[x].atkspeed;
                    }
                }
                
                if(worldCells[i+"-"+n]["enemy5"] === "empty" && recruit.amount >= 350) {
                    worldCells[i+"-"+n]["enemy5"] = enemies[Math.floor((Math.random() * (enemies.length - 1)) + 1)].name;
                    worldCells[i+"-"+n]["enemy5Amount"] = Math.floor((Math.random() * 10) + 1);
                }
                for(var x = 1; x < enemies.length; x++) {
                    if(worldCells[i+"-"+n].enemy5 === enemies[x].name) {
                        enemyHorde5[i+"-"+n].name = enemies[x].name;
                        enemyHorde5[i+"-"+n].amount = enemies[x].amount * worldCells[i+"-"+n].enemy5Amount;
                        enemyHorde5[i+"-"+n].hp = enemies[x].hp * worldCells[i+"-"+n].enemy5Amount;
                        enemyHorde5[i+"-"+n].block = enemies[x].block * worldCells[i+"-"+n].enemy5Amount;
                        enemyHorde5[i+"-"+n].ap = enemies[x].ap * worldCells[i+"-"+n].enemy5Amount;
                        enemyHorde5[i+"-"+n].minDmg = enemies[x].minDmg * worldCells[i+"-"+n].enemy5Amount;
                        enemyHorde5[i+"-"+n].maxDmg = enemies[x].maxDmg * worldCells[i+"-"+n].enemy5Amount;
                        enemyHorde5[i+"-"+n].atkSpeed = enemies[x].atkspeed;
                    }
                }
                
                if(worldCells[i+"-"+n]["enemy6"] === "empty" && recruit.amount >= 500) {
                    worldCells[i+"-"+n]["enemy6"] = enemies[Math.floor((Math.random() * (enemies.length - 1)) + 1)].name;
                    worldCells[i+"-"+n]["enemy6Amount"] = Math.floor((Math.random() * 10) + 1);
                }
                for(var x = 1; x < enemies.length; x++) {
                    if(worldCells[i+"-"+n].enemy6 === enemies[x].name) {
                        enemyHorde6[i+"-"+n].name = enemies[x].name;
                        enemyHorde6[i+"-"+n].amount = enemies[x].amount * worldCells[i+"-"+n].enemy6Amount;
                        enemyHorde6[i+"-"+n].hp = enemies[x].hp * worldCells[i+"-"+n].enemy6Amount;
                        enemyHorde6[i+"-"+n].block = enemies[x].block * worldCells[i+"-"+n].enemy6Amount;
                        enemyHorde6[i+"-"+n].ap = enemies[x].ap * worldCells[i+"-"+n].enemy6Amount;
                        enemyHorde6[i+"-"+n].minDmg = enemies[x].minDmg * worldCells[i+"-"+n].enemy6Amount;
                        enemyHorde6[i+"-"+n].maxDmg = enemies[x].maxDmg * worldCells[i+"-"+n].enemy6Amount;
                        enemyHorde6[i+"-"+n].atkSpeed = enemies[x].atkspeed;
                    }
                }
            }
        }
    }, 1000);
});