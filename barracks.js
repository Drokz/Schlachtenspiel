var recruit = {time: 30, hp: 10, block: 1, ap: 5, minDmg: 3, maxDmg: 5, atkspeed: 1, amount: 500, inRecruitment: 0, inRecruitmentMax: 5, start: false, hover: false};

var createTroopSelected;

var troop1 = {empty: true, hover: false, isfighting: false};

var noTroopSelected = true;

$(document).ready(function() {
    
    $("#recruit-recruit").click(function() {
        if(res[1].amount > 0 && recruit.inRecruitment < recruit.inRecruitmentMax && res[5].amount > 0) {
            
            res[1].amount --;
            res[5].amount --;
            
            recruit.inRecruitment ++;
            $("#in-recruitment-recruit").html(recruit.inRecruitment);
            
            
        }
    });
    
    $("#recruit-recruit").hover(function() {
        $("#info-box").show();
        recruit.hover = true;
    }, function() {
        $("#info-box").hide();
        recruit.hover = false;
    });
    
    
    
    $("#create-troop1-Select").click(function() {
        createTroopSelected = 1;
        $("#create-troop-dropbtn").html("1");
        noTroopSelected = false;
    });
    
    $("#create-troop2-Select").click(function() {
        createTroopSelected = 2;
        $("#create-troop-dropbtn").html("2");
        noTroopSelected = false;
    });
    
    $("#create-troop3-Select").click(function() {
        createTroopSelected = 3;
        $("#create-troop-dropbtn").html("3");
        noTroopSelected = false;
    });
    
    $("#create-troop4-Select").click(function() {
        createTroopSelected = 4;
        $("#create-troop-dropbtn").html("4");
        noTroopSelected = false;
    });
    
    $("#create-troop5-Select").click(function() {
        createTroopSelected = 5;
        $("#create-troop-dropbtn").html("5");
        noTroopSelected = false;
    });
    
    $("#create-troop6-Select").click(function() {
        createTroopSelected = 6;
        $("#create-troop-dropbtn").html("6");
        noTroopSelected = false;
    });
    
    $("#create-troop7-Select").click(function() {
        createTroopSelected = 7;
        $("#create-troop-dropbtn").html("7");
        noTroopSelected = false;
    });
    
    $("#create-troop8-Select").click(function() {
        createTroopSelected = 8;
        $("#create-troop-dropbtn").html("8");
        noTroopSelected = false;
    });
    
    $("#create-troop9-Select").click(function() {
        createTroopSelected = 9;
        $("#create-troop-dropbtn").html("9");
        noTroopSelected = false;
    });
    
    $("#create-troop10-Select").click(function() {
        createTroopSelected = 10;
        $("#create-troop-dropbtn").html("10");
        noTroopSelected = false;
    });
    
    
    var recruitSlider = document.getElementById("recruitRange");
    recruitSlider.value = 0;
    recruitSlider.oninput = function() {
        recruitSlider.max = recruit.amount;
        $("#howManyRecruits").html(this.value);
    }
    
    
    $("#create-troop-button").click(function() {
        if(recruitSlider.value === 0 || noTroopSelected === true) {
            alert("Bitte Truppe und Anzahl Rekruten auswählen!");
        }
        if(recruitSlider.value > 0 && noTroopSelected === false) {
            
            if(createTroopSelected === 1) {
                if(troop1.empty === true) {
                    troop1.recruits = recruitSlider.value;
                    troop1.empty = false;
                    troop1.hp = recruitSlider.value * recruit.hp;
                    troop1.block = recruitSlider.value * recruit.block;
                    troop1.ap = recruitSlider.value * recruit.ap;
                    troop1.minDmg = recruitSlider.value * recruit.minDmg;
                    troop1.maxDmg = recruitSlider.value * recruit.maxDmg;
                    
                    recruit.amount = recruit.amount - recruitSlider.value;
                    
                    
                    $("#troop1").html("Belegt");
                    alert("Truppe "+createTroopSelected+" erfolgreich erstellt. Enthält "+recruitSlider.value+" Rekruten")
                } else if(troop1.empty === false) {
                    alert("Truppe belegt. Bitte andere auswählen oder Truppe in Rente schicken.");
                }
            }
        }
    });
    
    $("#troop1").hover(function() {
        if(troop1.empty === false) {
            $("#info-box").show();
            troop1.hover = true;
        }
    }, function() {
        $("#info-box").hide();
        troop1.hover = false;
    });
    
    
    setInterval(function() {
        
        if(recruit.start === false && recruit.inRecruitment > 0) {
                recruit.start = true;
                var elem = document.getElementById("recruit-bar");
                var width = 0;
                var id = setInterval(frame, 1);
                function frame() {
                        if(width >= 100) {
                            clearInterval(id);
                            width = 0;
                            elem.style.width = width + '%';
                            $("#recruit-bar").html(width +"%");
                            recruit.time = 30;
                            $("#recruitment-timer-recruit").html((recruit.time).toFixed(0) +"sec");
                            recruit.inRecruitment --;
                            $("#in-recruitment-recruit").html(recruit.inRecruitment);
                            recruit.amount ++;
                            $("#recruit-amount").html(recruit.amount);
                            recruit.start = false;
                        } else {
                            width = width + 0.01; 
                            elem.style.width = width + '%';
                            $("#recruit-bar").html(width.toFixed(2) +"%");
                            recruit.time = recruit.time - 0.003;
                            $("#recruitment-timer-recruit").html(recruit.time.toFixed(0));
                        }
                    }
        }
        
    }, 200);
});