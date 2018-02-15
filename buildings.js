
function House() {
    this.name = "Haus";
    this.lvl = 1;
    this.max = 2;
    this.costWood = 10;
}

function Foodfield() {
    this.name = "Nahrungsfeld";
    this.lvl = 1;
    this.costWood = 5;
    this.addPerTick = 0.02;
    this.amount;
}

function Woodcutter() {
    this.name = "Holzfäller";
    this.lvl = 1;
    this.costWood = 13;
    this.costStone = 6;
    this.addPerTick = 0.035;
    this.amount;
}

function Mine() {
    this.name = "Mine";
    this.lvl = 1;
    this.costWood = 20;
    this.addStonePerTick = 0.03;
    this.amount;
}

function Barracks() {
    this.name = "Kaserne";
    this.lvl = 1;
    this.costWood = 40;
    this.costStone = 35;
    this.amount;
}

function Trainingplace() {
    this.name = "Übungsplatz";
    this.lvl = 1;
    this.costWood = 45;
    this.costStone = 30;
    this.sidesBarracks = false;
    this.amount;
}

function Forge() {
    this.name = "Schmiede";
    this.lvl = 1;
    this.costWood = 40;
    this.costStone = 50;
    this.amount;
    this.craftWoodsword = false;
}

$(document).ready(function() {
     $("#build-house").click(function() {
        if(whatHighlighted === undefined) {
            document.getElementById(this.id).style.backgroundColor ="#E6E6E6";
            whatHighlighted = this.id;
        } else if (whatHighlighted === "build-house") {
            document.getElementById(this.id).style.backgroundColor ="#FFFFFF";
            whatHighlighted = undefined;
        } else if (whatHighlighted === "build-foodfield" || whatHighlighted === "build-woodcutter" || whatHighlighted === "build-mine" || whatHighlighted === "build-barracks" || whatHighlighted === "build-trainingplace" || whatHighlighted === "build-forge") {
            
            document.getElementById("build-foodfield").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-woodcutter").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-mine").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-barracks").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-trainingplace").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-forge").style.backgroundColor ="#FFFFFF";
            
            document.getElementById(this.id).style.backgroundColor ="#E6E6E6";
            whatHighlighted = this.id;
        }
    });
    
    $("#build-house").hover(function() {
        $("#info-box").show();
        hoverBuildHouse = true;
    }, function() {
        $("#info-box").hide();
        hoverBuildHouse = false;
    });
    
    $("#build-foodfield").click(function() {
        if(whatHighlighted === undefined) {
            document.getElementById(this.id).style.backgroundColor ="#E6E6E6";
            whatHighlighted = this.id;
        } else if (whatHighlighted === "build-foodfield") {
            document.getElementById(this.id).style.backgroundColor ="#FFFFFF";
            whatHighlighted = undefined;
        } else if (whatHighlighted === "build-house" || whatHighlighted === "build-woodcutter" || whatHighlighted === "build-mine" || whatHighlighted === "build-barracks" || whatHighlighted === "build-trainingplace" || whatHighlighted === "build-forge") {
            
            document.getElementById("build-house").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-woodcutter").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-mine").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-barracks").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-trainingplace").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-forge").style.backgroundColor ="#FFFFFF";
            
            document.getElementById(this.id).style.backgroundColor ="#E6E6E6";
            whatHighlighted = this.id;
        }
    });
    
    $("#build-foodfield").hover(function() {
        $("#info-box").show();
        hoverBuildFoodfield = true;
    }, function() {
        $("#info-box").hide();
        hoverBuildFoodfield = false;
    });
    
    $("#build-woodcutter").click(function() {
        if(whatHighlighted === undefined) {
            document.getElementById(this.id).style.backgroundColor ="#E6E6E6";
            whatHighlighted = this.id;
        } else if (whatHighlighted === "build-woodcutter") {
            document.getElementById(this.id).style.backgroundColor ="#FFFFFF";
            whatHighlighted = undefined;
        } else if (whatHighlighted === "build-house" || whatHighlighted === "build-foodfield" || whatHighlighted === "build-mine" || whatHighlighted === "build-barracks" || whatHighlighted === "build-trainingplace" || whatHighlighted === "build-forge") {
            
            document.getElementById("build-house").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-foodfield").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-mine").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-barracks").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-trainingplace").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-forge").style.backgroundColor ="#FFFFFF";
            
            document.getElementById(this.id).style.backgroundColor ="#E6E6E6";
            whatHighlighted = this.id;
        }
    });
    
    $("#build-woodcutter").hover(function() {
        $("#info-box").show();
        hoverBuildWoodcutter = true;
    }, function() {
        $("#info-box").hide();
        hoverBuildWoodcutter = false;
    });
    
    $("#build-mine").click(function() {
        if(whatHighlighted === undefined) {
            document.getElementById(this.id).style.backgroundColor ="#E6E6E6";
            whatHighlighted = this.id;
        } else if (whatHighlighted === "build-mine") {
            document.getElementById(this.id).style.backgroundColor ="#FFFFFF";
            whatHighlighted = undefined;
        } else if (whatHighlighted === "build-house" || whatHighlighted === "build-foodfield" || whatHighlighted === "build-woodcutter" || whatHighlighted === "build-barracks" || whatHighlighted === "build-trainingplace" || whatHighlighted === "build-forge") {
            
            document.getElementById("build-house").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-foodfield").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-woodcutter").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-barracks").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-trainingplace").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-forge").style.backgroundColor ="#FFFFFF";
            
            document.getElementById(this.id).style.backgroundColor ="#E6E6E6";
            whatHighlighted = this.id;
        }
    });
    
    $("#build-mine").hover(function() {
        $("#info-box").show();
        hoverBuildMine = true;
    }, function() {
        $("#info-box").hide();
        hoverBuildMine = false;
    });
    
    $("#build-barracks").click(function() {
        if(whatHighlighted === undefined) {
            document.getElementById(this.id).style.backgroundColor ="#E6E6E6";
            whatHighlighted = this.id;
        } else if (whatHighlighted === "build-barracks") {
            document.getElementById(this.id).style.backgroundColor ="#FFFFFF";
            whatHighlighted = undefined;
        } else if (whatHighlighted === "build-house" || whatHighlighted === "build-foodfield" || whatHighlighted === "build-woodcutter" || whatHighlighted === "build-mine" || whatHighlighted === "build-trainingplace" || whatHighlighted === "build-forge") {
            
            document.getElementById("build-house").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-foodfield").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-woodcutter").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-mine").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-trainingplace").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-forge").style.backgroundColor ="#FFFFFF";
            
            document.getElementById(this.id).style.backgroundColor ="#E6E6E6";
            whatHighlighted = this.id;
        }
    });
    
    $("#build-barracks").hover(function() {
        $("#info-box").show();
        hoverBuildBarracks = true;
    }, function() {
        $("#info-box").hide();
        hoverBuildBarracks = false;
    });
    
    $("#build-trainingplace").click(function() {
        if(whatHighlighted === undefined) {
            document.getElementById(this.id).style.backgroundColor ="#E6E6E6";
            whatHighlighted = this.id;
        } else if (whatHighlighted === "build-trainingplace") {
            document.getElementById(this.id).style.backgroundColor ="#FFFFFF";
            whatHighlighted = undefined;
        } else if (whatHighlighted === "build-house" || whatHighlighted === "build-foodfield" || whatHighlighted === "build-woodcutter" || whatHighlighted === "build-mine" || whatHighlighted === "build-barracks" || whatHighlighted === "build-forge") {
            
            document.getElementById("build-house").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-foodfield").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-woodcutter").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-mine").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-barracks").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-forge").style.backgroundColor ="#FFFFFF";
            
            document.getElementById(this.id).style.backgroundColor ="#E6E6E6";
            whatHighlighted = this.id;
        }
    });
    
    $("#build-trainingplace").hover(function() {
        $("#info-box").show();
        hoverBuildTrainingplace = true;
    }, function() {
        $("#info-box").hide();
        hoverBuildTrainingplace = false;
    });
    
    $("#build-forge").click(function() {
        if(whatHighlighted === undefined) {
            document.getElementById(this.id).style.backgroundColor ="#E6E6E6";
            whatHighlighted = this.id;
        } else if (whatHighlighted === "build-forge") {
            document.getElementById(this.id).style.backgroundColor ="#FFFFFF";
            whatHighlighted = undefined;
        } else if (whatHighlighted === "build-house" || whatHighlighted === "build-foodfield" || whatHighlighted === "build-woodcutter" || whatHighlighted === "build-mine" || whatHighlighted === "build-barracks" || whatHighlighted === "build-trainingplace") {
            
            document.getElementById("build-house").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-foodfield").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-woodcutter").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-mine").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-barracks").style.backgroundColor ="#FFFFFF";
            document.getElementById("build-trainingplace").style.backgroundColor ="#FFFFFF";
            
            document.getElementById(this.id).style.backgroundColor ="#E6E6E6";
            whatHighlighted = this.id;
        }
    });
    
    $("#build-forge").hover(function() {
        $("#info-box").show();
        hoverBuildForge = true;
    }, function() {
        $("#info-box").hide();
        hoverBuildForge = false;
    });
    
    
    
    $(".city-grid-cell").click(function() {
        whatIdClicked = this.id;
        
        //Haus bauen
        if(whatHighlighted === "build-house" && cells[this.id].whatBuild === "empty" && res[3].amount >= 10) {
            
            document.getElementById(this.id).innerHTML = "<img src='./pic_dump/haus.bmp'/>";
            cells[this.id].whatBuild = "Haus";
            houses[this.id] = new House();
            
            housesAllLvl ++;
            housesAllMax = housesAllMax + 2;
            res[3].amount = res[3].amount - houses[this.id].costWood;
            houses[this.id].costWood = houses[this.id].costWood * 1.5;
            
            //Haus upgrade
        } else if(cells[this.id].whatBuild === "Haus" && res[3].amount >= houses[this.id].costWood) {
            houses[this.id].lvl ++;
            houses[this.id].max = houses[this.id].max + 2;
            housesAllLvl ++;
            housesAllMax = housesAllMax + 2;
            
            res[3].amount = res[3].amount - houses[this.id].costWood;
            houses[this.id].costWood = houses[this.id].costWood * 1.5;
            
        //Nahrungsfeld bauen
        } else if(whatHighlighted === "build-foodfield" && cells[this.id].whatBuild === "empty" && res[3].amount >= 5) {
            document.getElementById(this.id).innerHTML = "<img src='./pic_dump/Nahrungsfeld.bmp'/>";
            cells[this.id].whatBuild = "Nahrungsfeld";
            foodfields[this.id] = new Foodfield();
            
            addAllFood[foodArrayCount] = foodfields[this.id].addPerTick;
            foodfields[this.id].amount = foodArrayCount;
            foodArrayCount ++;
            startFood = true;
            
            var sumFood = 0;
            for(i = 1; i < addAllFood.length; i++) {
                sumFood = sumFood + addAllFood[i];
            }
            allFood = sumFood;
            
            res[3].amount = res[3].amount - foodfields[this.id].costWood;
            foodfields[this.id].costWood = foodfields[this.id].costWood * 1.7;
            
            // Nahrungsfeld upgrade
        } else if (cells[this.id].whatBuild === "Nahrungsfeld" && res[3].amount >= foodfields[this.id].costWood) {
            foodfields[this.id].lvl ++;
            foodfields[this.id].addPerTick = foodfields[this.id].addPerTick * 1.1;
            
            res[3].amount = res[3].amount - foodfields[this.id].costWood;
            foodfields[this.id].costWood = foodfields[this.id].costWood * 1.7;
            
            for(i = 1; i < foodArrayCount; i++) {
                if(i === foodfields[this.id].amount) {
                    addAllFood[i] = foodfields[this.id].addPerTick;
                }
            }
            
            sumFood = 0;
            for(i = 1; i < addAllFood.length; i++) {
                sumFood = sumFood + addAllFood[i];
            }
            allFood = sumFood;
            
        // Holzfäller bauen
        } else if (whatHighlighted === "build-woodcutter" && cells[this.id].whatBuild === "empty" && res[3].amount >= 13  && res[4].amount >= 6) {
            document.getElementById(this.id).innerHTML = "Holzäller";
            cells[this.id].whatBuild = "Holzfäller";
            woodcutter[this.id] = new Woodcutter();
            
            addAllWood[woodArrayCount] = woodcutter[this.id].addPerTick;
            woodcutter[this.id].amount = woodArrayCount;
            woodArrayCount ++;
            startWood = true;
            
            var sumWood = 0;
            for(i = 1; i < addAllWood.length; i++) {
                sumWood = sumWood + addAllWood[i];
            }
            allWood = sumWood;
            
            res[3].amount = res[3].amount - woodcutter[this.id].costWood;
            res[4].amount = res[4].amount - woodcutter[this.id].costStone;
            woodcutter[this.id].costWood = woodcutter[this.id].costWood * 1.4;
            woodcutter[this.id].costStone = woodcutter[this.id].costStone * 1.8;
            
            //Holzfäller upgrade
        } else if(cells[this.id].whatBuild === "Holzfäller" && res[3].amount >= woodcutter[this.id].costWood && res[4].amount >= woodcutter[this.id].costStone) {
            woodcutter[this.id].lvl ++;
            woodcutter[this.id].addPerTick = woodcutter[this.id].addPerTick * 1.08;
            
            res[3].amount = res[3].amount - woodcutter[this.id].costWood;
            res[4].amount = res[4].amount - woodcutter[this.id].costStone;
            
            woodcutter[this.id].costWood = woodcutter[this.id].costWood * 1.45;
            woodcutter[this.id].costStone = woodcutter[this.id].costStone * 1.8;
            
            for(i = 1; i < woodArrayCount; i++) {
                if(i === woodcutter[this.id].amount) {
                    addAllWood[i] = woodcutter[this.id].addPerTick;
                }
            }
            
            sumWood = 0;
            for(i = 1; i < addAllWood.length; i++) {
                sumWood = sumWood + addAllWood[i];
            }
            allWood = sumWood;
            
        //Mine bauen
        } else if(whatHighlighted === "build-mine" && cells[this.id].whatBuild === "empty" && res[3].amount >= 20) {
            document.getElementById(this.id).innerHTML = "Mine";
            cells[this.id].whatBuild = "Mine";
            mine[this.id] = new Mine();
            
            addAllStone[stoneArrayCount] = mine[this.id].addStonePerTick;
            mine[this.id].amount = stoneArrayCount;
            stoneArrayCount ++;
            startStone = true;
            
            var sumStone = 0;
            for(i = 1; i < addAllStone.length; i++) {
                sumStone = sumStone + addAllStone[i];
            }
            allStone = sumStone;
            
            res[3].amount = res[3].amount - mine[this.id].costWood;
            mine[this.id].costWood = mine[this.id].costWood * 1.4;
            
            //Mine upgraden
        } else if(cells[this.id].whatBuild === "Mine" && res[3].amount >= mine[this.id].costWood) {
            mine[this.id].lvl ++;
            mine[this.id].addStonePerTick = mine[this.id].addStonePerTick * 1.09;
            
            res[3].amount = res[3].amount - mine[this.id].costWood;
            mine[this.id].costWood = mine[this.id].costWood * 1.4;
            
            for(i = 1; i < stoneArrayCount; i++) {
                if(i === mine[this.id].amount) {
                    addAllStone[i] = mine[this.id].addStonePerTick;
                }
            }
            
            sumStone = 0;
            for(i = 1; i < addAllStone.length; i++) {
                sumStone = sumStone + addAllStone[i];
            }
            allStone = sumStone;
            
        //Kaserne bauen
        } else if(whatHighlighted === "build-barracks" && cells[this.id].whatBuild === "empty" && res[3].amount >= 40 && res[4].amount >= 35) {
            document.getElementById(this.id).innerHTML = "Kaserne";
            cells[this.id].whatBuild = "Kaserne";
            barracks[this.id] = new Barracks();
            $("#to-barracks").show();
            
            res[3].amount = res[3].amount - barracks[this.id].costWood;
            res[4].amount = res[4].amount - barracks[this.id].costStone;
            
            barracks[this.id].costWood = barracks[this.id].costWood * 1.4;
            barracks[this.id].costStone = barracks[this.id].costStone * 1.5;
            
            //Kaserne upgraden
        } else if(cells[this.id].whatBuild === "Kaserne" && res[3].amount >= barracks[this.id].costWood && res[4].amount >= barracks[this.id].costStone) {
            barracks[this.id].lvl ++;
            
            res[3].amount = res[3].amount - barracks[this.id].costWood;
            res[4].amount = res[4].amount - barracks[this.id].costStone;
            
            barracks[this.id].costWood = barracks[this.id].costWood * 1.4;
            barracks[this.id].costStone = barracks[this.id].costStone * 1.5;
            
        //Übungsplatz bauen
        } else if(whatHighlighted === "build-trainingplace" && cells[this.id].whatBuild === "empty" && res[3].amount >= 45 && res[4].amount >= 30) {
            document.getElementById(this.id).innerHTML = "Übungsplatz";
            cells[this.id].whatBuild = "Übungsplatz";
            trainingplace[this.id] = new Trainingplace();
            
            res[3].amount = res[3].amount - trainingplace[this.id].costWood;
            res[4].amount = res[4].amount - trainingplace[this.id].costStone;
            
            trainingplace[this.id].costWood = trainingplace[this.id].costWood * 1.47;
            trainingplace[this.id].costStone = trainingplace[this.id].costStone * 1.32;
            
            //Übungsplatz upgraden
        } else if(cells[this.id].whatBuild === "Übungsplatz" && res[3].amount >= trainingplace[this.id].costWood && res[4].amount >= trainingplace[this.id].costStone) {
            trainingplace[this.id].lvl ++;
            
            res[3].amount = res[3].amount - trainingplace[this.id].costWood;
            res[4].amount = res[4].amount - trainingplace[this.id].costStone;
            
            trainingplace[this.id].costWood = trainingplace[this.id].costWood * 1.47;
            trainingplace[this.id].costStone = trainingplace[this.id].costStone * 1.32;
            
        //Schmiede bauen
        } else if(whatHighlighted === "build-forge" && cells[this.id].whatBuild === "empty" && res[3].amount >= 40 && res[4].amount >= 50) {
            document.getElementById(this.id).innerHTML = "Schmiede";
            cells[this.id].whatBuild = "Schmiede";
            forge[this.id] = new Forge();
            $("#to-forge").show();
            
            res[3].amount = res[3].amount - forge[this.id].costWood;
            res[4].amount = res[4].amount - forge[this.id].costStone;
            
            forge[this.id].costWood = forge[this.id].costWood * 1.36;
            forge[this.id].costStone = forge[this.id].costStone * 1.3;
            
            woodsword.inStashMax ++;
            
            //Schmiede upgraden
        } else if(cells[this.id].whatBuild === "Schmiede" && res[3].amount >= forge[this.id].costWood && res[4].amount >= forge[this.id].costStone) {
            forge[this.id].lvl ++;
            
            res[3].amount = res[3].amount - forge[this.id].costWood;
            res[4].amount = res[4].amount - forge[this.id].costStone;
            
            forge[this.id].costWood = forge[this.id].costWood * 1.36;
            forge[this.id].costStone = forge[this.id].costStone * 1.3;
            
            woodsword.inStashMax ++;
            
        // bauen
        }
    });
    
    $(".city-grid-cell").hover(function() {
        $("#info-box").show();
        if(cells[this.id].whatBuild === "empty") {
            hoverCell.empty = true;
        }
        if(cells[this.id].whatBuild === "Haus") {
            hoverCell.house = true;
            whatIdHoverd = this.id;
        }
        if(cells[this.id].whatBuild === "Nahrungsfeld") {
            hoverCell.foodfield = true;
            whatIdHovered = this.id;
        }
        if(cells[this.id].whatBuild === "Holzfäller") {
            hoverCell.woodcutter = true;
            whatIdHovered = this.id;
        }
        if(cells[this.id].whatBuild === "Mine") {
            hoverCell.mine = true;
            whatIdHovered = this.id;
        }
        if(cells[this.id].whatBuild === "Kaserne") {
            hoverCell.barracks = true;
            whatIdHovered = this.id;
        }
        if(cells[this.id].whatBuild === "Übungsplatz") {
            hoverCell.trainingplace = true;
            whatIdHovered = this.id;
        }
        if(cells[this.id].whatBuild === "Schmiede") {
            hoverCell.forge = true;
            whatIdHovered = this.id;
        }
    }, function() {
        $("#info-box").hide();
        if(cells[this.id].whatBuild === "empty") {
            hoverCell.empty = false;
        }
        if(cells[this.id].whatBuild === "Haus") {
            hoverCell.house = false;
        }
         if(cells[this.id].whatBuild === "Nahrungsfeld") {
            hoverCell.foodfield = false;
        }
        if(cells[this.id].whatBuild === "Holzfäller") {
            hoverCell.woodcutter = false;
        }
        if(cells[this.id].whatBuild === "Mine") {
            hoverCell.mine = false;
        }
        if(cells[this.id].whatBuild === "Kaserne") {
            hoverCell.barracks = false;
        }
        if(cells[this.id].whatBuild === "Übungsplatz") {
            hoverCell.trainingplace = false;
        }
        if(cells[this.id].whatBuild === "Schmiede") {
            hoverCell.forge = false;
        }
    });
    
});
