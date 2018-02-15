var waitingFighters = {recruits: undefined, bla: undefined};
var waitingEnemies1 = {amount: undefined, name: undefined, hp: undefined, minDmg: undefined, maxDmg: undefined, atkSpeed: undefined};

var fightingFighter1 = {empty: true, name: undefined, hp: undefined, isAttacking: false, minDmg: undefined, maxDmg: undefined, atkSpeed: undefined};
var fightingEnemies1 = {empty: true, name: undefined, hp: undefined, isAttacking: false, minDmg: undefined, maxDmg: undefined, atkSpeed: undefined};

var yourDmgMade;
var yourPercentDmg;
var fightingEnemiesHP;
var enemyHPwidth = 100;

var enemyDmgMade;
var enemyPercentDmg;
var fightingFighterHP;
var yourHPwidth = 0;


function yourHPmove() {
    var yourHPelem = document.getElementById("your-hpBar1");
    
    yourHPwidth = yourHPwidth + enemyPercentDmg;
    yourHPelem.style.width = yourHPwidth + '%'; 
    
    if(fightingFighter1.hp <= 0) {
        yourHPwidth = 0;
        yourHPelem.style.width = yourHPwidth + '%';
    }
};

function yourATKmove() {
    var yourATKelem = document.getElementById("your-atkBar1"); 
    var yourATKwidth = 100;
    var yourATKid = setInterval(yourATKframe, fightingFighter1.atkSpeed * 10);
    fightingEnemiesHP = fightingEnemies1.hp;
    
    function yourATKframe() {
        if (yourATKwidth === 0) {
            yourATKwidth = 100;
            yourATKelem.style.width = yourATKwidth + '%';
            yourDmgMade = (Math.floor((Math.random() * fightingFighter1.maxDmg) + fightingFighter1.minDmg));
            yourPercentDmg = yourDmgMade / fightingEnemiesHP * 100;
            fightingEnemies1.hp = fightingEnemies1.hp - yourDmgMade;
            enemyHPmove();
            if(fightingEnemies1.hp <= 0) {
                fightingEnemies1.hp = 0;
                fightingEnemies1.empty = true;
                fightingFighter1.isAttacking = false;
                clearInterval(yourATKid);
                
            }
            if(fightingFighter1.hp <= 0) {
                fightingFighter1.isAttacking = false;
                clearInterval(yourATKid);
            }
        } else {
            yourATKwidth--; 
            yourATKelem.style.width = yourATKwidth + '%';
            if(fightingFighter1.hp <= 0) {
                fightingEnemies1.hp = 0;
                fightingEnemies1.empty = true;
                fightingFighter1.isAttacking = false;
                clearInterval(yourATKid);
            }
        }
    }
};

function enemyHPmove() {
    var enemyHPelem = document.getElementById("enemy-hpBar1"); 
    
    enemyHPwidth = enemyHPwidth - yourPercentDmg;
    enemyHPelem.style.width = enemyHPwidth + '%';
    if(fightingEnemies1.hp <= 0) {
        enemyHPwidth = 100;
        enemyHPelem.style.width = enemyHPwidth + '%';
    }
};
   

function enemyATKmove() {
    var enemyATKelem = document.getElementById("enemy-atkBar1"); 
    var enemyATKwidth = 0;
    var enemyATKid = setInterval(enemyATKframe, fightingEnemies1.atkSpeed * 10);
    fightingFighterHP = fightingFighter1.hp;
    
    function enemyATKframe() {
        if (enemyATKwidth === 100) {
            enemyATKwidth = 0;
            enemyATKelem.style.width = enemyATKwidth + '%';
            enemyDmgMade = (Math.floor((Math.random() * fightingEnemies1.maxDmg) + fightingEnemies1.minDmg));
            enemyPercentDmg = enemyDmgMade / fightingFighterHP * 100;
            fightingFighter1.hp = fightingFighter1.hp - enemyDmgMade;
            yourHPmove();
            if(fightingFighter1.hp <= 0) {
                fightingFighter1.hp = 0;
                fightingFighter1.empty = true;
                fightingEnemies1.isAttacking = false;
                clearInterval(enemyATKid);
                
            }
            if(fightingEnemies1.hp <= 0) {
                fightingFighter1.hp = 0;
                fightingFighter1.empty = true;
                fightingEnemies1.isAttacking = false;
                clearInterval(enemyATKid);
            }
        } else {
            enemyATKwidth++; 
            enemyATKelem.style.width = enemyATKwidth + '%';
            if(fightingEnemies1.hp <= 0) {
                fightingEnemies1.isAttacking = false;
                clearInterval(enemyATKid);
            }
        }
    } 
};

$(document).ready(function() {
    
    $("#backToCityLose").click(function() {
        $("#afterFightLose").hide();
        $("#fight-screen").hide();
        $("#city-grid").show();
        
        enemyHorde1[whatWorldCellClicked].amount = waitingEnemies1.amount + 1;
        $("#hordeEnemy1Amount").html(enemyHorde1[whatWorldCellClicked].amount);
        worldCells[whatWorldCellClicked].enemy1Amount = waitingEnemies1.amount + 1;
        
        waitingFighters.recruits = undefined;
        waitingEnemies1.amount = undefined;
        waitingEnemies1.name = undefined;
        waitingEnemies1.hp = undefined;
        waitingEnemies1.minDmg = undefined;
        waitingEnemies1.maxDmg = undefined;
        waitingEnemies1.atkSpeed = undefined;
            
        fightingFighter1.name = undefined;
        fightingFighter1.hp = undefined;
        fightingFighter1.minDmg = undefined;
        fightingFighter1.maxDmg = undefined;
        fightingFighter1.atkSpeed = undefined;
        fightingFighter1.empty = true;
        fightingFighter1.isAttacking = false;
            
        fightingEnemies1.name = undefined;
        fightingEnemies1.hp = undefined;
        fightingEnemies1.minDmg = undefined;
        fightingEnemies1.maxDmg = undefined;
        fightingEnemies1.atkSpeed = undefined;
        fightingEnemies1.empty = true;
        fightingEnemies1.isAttacking = false;
        
        enemyDmgMade = undefined;
        enemyPercentDmg = undefined;
        fightingFighterHP = undefined;
        yourHPwidth = 0;
        
        yourDmgMade = undefined;
        yourPercentDmg = undefined;
        fightingEnemiesHP = undefined;
        enemyHPwidth = 100;
        
        var yourHPelem = document.getElementById("your-hpBar1");
        yourHPelem.style.width = yourHPwidth + '%';
        
        var enemyHPelem = document.getElementById("enemy-hpBar1");
        enemyHPelem.style.width = enemyHPwidth + '%';
    });
    
    $("#backToCityWin").click(function() {
        $("#afterFightWin").hide();
        $("#fight-screen").hide();
        $("#city-grid").show();
        
        worldCells[whatWorldCellClicked].enemy1 = "empty";
        
        troop1.recruits = waitingFighters.recruits + 1;
        
        waitingFighters.recruits = undefined;
        waitingEnemies1.amount = undefined;
        waitingEnemies1.name = undefined;
        waitingEnemies1.hp = undefined;
        waitingEnemies1.minDmg = undefined;
        waitingEnemies1.maxDmg = undefined;
        waitingEnemies1.atkSpeed = undefined;
            
        fightingFighter1.name = undefined;
        fightingFighter1.hp = undefined;
        fightingFighter1.minDmg = undefined;
        fightingFighter1.maxDmg = undefined;
        fightingFighter1.atkSpeed = undefined;
        fightingFighter1.empty = true;
        fightingFighter1.isAttacking = false;
            
        fightingEnemies1.name = undefined;
        fightingEnemies1.hp = undefined;
        fightingEnemies1.minDmg = undefined;
        fightingEnemies1.maxDmg = undefined;
        fightingEnemies1.atkSpeed = undefined;
        fightingEnemies1.empty = true;
        fightingEnemies1.isAttacking = false;
        
        enemyDmgMade = undefined;
        enemyPercentDmg = undefined;
        fightingFighterHP = undefined;
        yourHPwidth = 0;
        
        yourDmgMade = undefined;
        yourPercentDmg = undefined;
        fightingEnemiesHP = undefined;
        enemyHPwidth = 100;
        
        var yourHPelem = document.getElementById("your-hpBar1");
        yourHPelem.style.width = yourHPwidth + '%';
        
        var enemyHPelem = document.getElementById("enemy-hpBar1");
        enemyHPelem.style.width = enemyHPwidth + '%';
    });
    
    setInterval(function() {
        if(troop1.isfighting === true) {
            if(waitingFighters.recruits === undefined) {
                waitingFighters.recruits = troop1.recruits;
            }
            
            if(waitingEnemies1.name === undefined) {
                waitingEnemies1.amount = worldCells[whatWorldCellClicked].enemy1Amount;
                waitingEnemies1.name = enemyHorde1[whatWorldCellClicked].name;
                waitingEnemies1.hp = enemyHorde1[whatWorldCellClicked].hp;
                waitingEnemies1.minDmg = enemyHorde1[whatWorldCellClicked].minDmg;
                waitingEnemies1.maxDmg = enemyHorde1[whatWorldCellClicked].maxDmg;
                waitingEnemies1.atkSpeed = enemyHorde1[whatWorldCellClicked].atkSpeed;
        }
            
            if(fightingFighter1.empty === true && waitingFighters.recruits > 0) {
                waitingFighters.recruits --;
                $("#waiting-recruits").html(waitingFighters.recruits);
                fightingFighter1.name = "Rekrut";
                $("#your-fighter1").html(fightingFighter1.name);
                fightingFighter1.hp = recruit.hp;
                fightingFighter1.empty = false;
                fightingFighter1.minDmg = recruit.minDmg;
                fightingFighter1.maxDmg = recruit.maxDmg;
                fightingFighter1.atkSpeed = recruit.atkspeed;
            }
            if(fightingEnemies1.empty === true && waitingEnemies1.amount > 0) {
                waitingEnemies1.amount --;
                $("#waiting-enemy1Amount").html(waitingEnemies1.amount);
                fightingEnemies1.name = waitingEnemies1.name;
                $("#enemy-fighter1").html(fightingEnemies1.name);
                fightingEnemies1.hp = waitingEnemies1.hp;
                fightingEnemies1.minDmg = waitingEnemies1.minDmg;
                fightingEnemies1.maxDmg = waitingEnemies1.maxDmg;
                fightingEnemies1.atkSpeed = waitingEnemies1.atkSpeed;
                fightingEnemies1.empty = false;
            }
            
            if(fightingFighter1.isAttacking === false && fightingFighter1.hp > 0 && fightingEnemies1.hp > 0) {
                fightingFighter1.isAttacking = true;
                yourATKmove();
            }
            
            if(fightingEnemies1.isAttacking === false && fightingEnemies1.hp > 0 && fightingFighter1.hp > 0) {
                fightingEnemies1.isAttacking = true;
                enemyATKmove();
            }
        }
        
        if(waitingEnemies1.amount === 0 && fightingEnemies1.hp <= 0) {
            $("#afterFightWin").show();
            troop1.isfighting = false;
        } else if(waitingFighters.recruits === 0 && fightingFighter1.hp <= 0) {
            $("#afterFightLose").show();
            troop1.empty = true;
            $("#troop1").html("");
            troop1.isfighting = false;
        } else if(waitingFighters.recruits === 0 && fightingFighter1.hp <= 0 && waitingEnemies1.amount === 0 && fightingEnemies1.hp <= 0) {
            console.log("draw");
        }
        
        
        
        
        $("#waiting-recruits").html(waitingFighters.recruits);
        $("#waiting-enemy1").html(waitingEnemies1.name);
        $("#waiting-enemy1Amount").html(waitingEnemies1.amount);
        $("#your-hpBar1").html(fightingFighter1.hp);
        $("#enemy-hpBar1").html(fightingEnemies1.hp);
    }, 1);
});