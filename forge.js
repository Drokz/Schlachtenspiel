var woodsword = {amount: 0, time: 20, costWood: 23, start: false, inStash: 0, inStashMax: 0, hover1: false, hover25: false, hover50: false, hover100: false};

$(document).ready(function() {
    
    $("#pickUp-woodsword").hide();
    $("#craft-1-woodsword").click(function() {
        if(res[3].amount >= woodsword.costWood && woodsword.start === false && woodsword.inStash < woodsword.inStashMax) {
            res[3].amount = res[3].amount - woodsword.costWood;
            
            woodsword.start = true;
            var elem = document.getElementById("woodsword-bar"); 
            var width = 0;
            var id = setInterval(frame, 1);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    elem.style.width = width + '%';
                    $("#woodsword-bar").html(width.toFixed(2) +"%");
                    woodsword.time = 20;
                    $("#craft-timer-woodsword").html(woodsword.time.toFixed(0));
                    woodsword.inStash ++;
                    $("#woodsword-max-stash").html("Max: "+ woodsword.inStashMax);
                    $("#woodsword-amount-stash").html(woodsword.inStash);
                    if(woodsword.inStash > 0) {
                        $("#pickUp-woodsword").show();
                    }
                    
                    woodsword.start = false;
                } else {
                    width = width +0.01; 
                    elem.style.width = width + '%';
                    $("#woodsword-bar").html(width.toFixed(2) +"%");
                    woodsword.time = woodsword.time - 0.002;
                    $("#craft-timer-woodsword").html(woodsword.time.toFixed(0));
                    
                    $("#woodsword-max-stash").html("Max: "+woodsword.inStashMax);
                    if(woodsword.inStash > 0) {
                        $("#pickUp-woodsword").show();
                    }
                }
            }
        }
    });
    
    $("#craft-1-woodsword").hover(function() {
        $("#info-box").show();
        woodsword.hover1 = true;
    },function() {
        $("#info-box").hide();
        woodsword.hover1 = false;
    });
    
    $("#craft-25-woodsword").click(function() {
        if(res[3].amount >= woodsword.costWood * 25 && woodsword.start === false && woodsword.inStash + 25 < woodsword.inStashMax) {
            res[3].amount = res[3].amount - (woodsword.costWood * 25);
            
            woodsword.start = true;
            woodsword.time = woodsword.time * 25;
            var elem = document.getElementById("woodsword-bar"); 
            var width = 0;
            var id = setInterval(frame, 1);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    elem.style.width = width + '%';
                    $("#woodsword-bar").html(width.toFixed(2) +"%");
                    woodsword.time = 20;
                    $("#craft-timer-woodsword").html(woodsword.time.toFixed(0));
                    woodsword.inStash = woodsword.inStash + 25;
                    $("#woodsword-max-stash").html("Max: "+ woodsword.inStashMax);
                    $("#woodsword-amount-stash").html(woodsword.inStash);
                    if(woodsword.inStash > 0) {
                        $("#pickUp-woodsword").show();
                    }
                    
                    woodsword.start = false;
                } else {
                    width = width + (0.01 / 25); 
                    elem.style.width = width + '%';
                    $("#woodsword-bar").html(width.toFixed(2) +"%");
                    woodsword.time = woodsword.time - 0.002;
                    $("#craft-timer-woodsword").html(woodsword.time.toFixed(0));
                    
                    $("#woodsword-max-stash").html("Max: "+woodsword.inStashMax);
                    if(woodsword.inStash > 0) {
                        $("#pickUp-woodsword").show();
                    }
                }
            }
        }
    });
    
    $("#craft-25-woodsword").hover(function() {
        $("#info-box").show();
        woodsword.hover25 = true;
    },function() {
        $("#info-box").hide();
        woodsword.hover25 = false;
    });
    
    $("#craft-50-woodsword").click(function() {
        if(res[3].amount >= woodsword.costWood * 50 && woodsword.start === false && woodsword.inStash + 50 < woodsword.inStashMax) {
            res[3].amount = res[3].amount - (woodsword.costWood * 50);
            
            woodsword.start = true;
            woodsword.time = woodsword.time * 50;
            var elem = document.getElementById("woodsword-bar"); 
            var width = 0;
            var id = setInterval(frame, 1);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    elem.style.width = width + '%';
                    $("#woodsword-bar").html(width.toFixed(2) +"%");
                    woodsword.time = 20;
                    $("#craft-timer-woodsword").html(woodsword.time.toFixed(0));
                    woodsword.inStash = woodsword.inStash + 50;
                    $("#woodsword-max-stash").html("Max: "+ woodsword.inStashMax);
                    $("#woodsword-amount-stash").html(woodsword.inStash);
                    if(woodsword.inStash > 0) {
                        $("#pickUp-woodsword").show();
                    }
                    
                    woodsword.start = false;
                } else {
                    width = width + (0.01 / 50); 
                    elem.style.width = width + '%';
                    $("#woodsword-bar").html(width.toFixed(2) +"%");
                    woodsword.time = woodsword.time - 0.002;
                    $("#craft-timer-woodsword").html(woodsword.time.toFixed(0));
                    
                    $("#woodsword-max-stash").html("Max: "+woodsword.inStashMax);
                    if(woodsword.inStash > 0) {
                        $("#pickUp-woodsword").show();
                    }
                }
            }
        }
    });
    
    $("#craft-50-woodsword").hover(function() {
        $("#info-box").show();
        woodsword.hover50 = true;
    },function() {
        $("#info-box").hide();
        woodsword.hover50 = false;
    });
    
    $("#craft-100-woodsword").click(function() {
        if(res[3].amount >= woodsword.costWood * 100 && woodsword.start === false && woodsword.inStash + 100 < woodsword.inStashMax) {
            res[3].amount = res[3].amount - (woodsword.costWood * 100);
            
            woodsword.start = true;
            woodsword.time = woodsword.time * 100;
            var elem = document.getElementById("woodsword-bar"); 
            var width = 0;
            var id = setInterval(frame, 1);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    elem.style.width = width + '%';
                    $("#woodsword-bar").html(width.toFixed(2) +"%");
                    woodsword.time = 20;
                    $("#craft-timer-woodsword").html(woodsword.time.toFixed(0));
                    woodsword.inStash = woodsword.inStash + 100;
                    $("#woodsword-max-stash").html("Max: "+ woodsword.inStashMax);
                    $("#woodsword-amount-stash").html(woodsword.inStash);
                    if(woodsword.inStash > 0) {
                        $("#pickUp-woodsword").show();
                    }
                    
                    woodsword.start = false;
                } else {
                    width = width + (0.01 / 100); 
                    elem.style.width = width + '%';
                    $("#woodsword-bar").html(width.toFixed(2) +"%");
                    woodsword.time = woodsword.time - 0.002;
                    $("#craft-timer-woodsword").html(woodsword.time.toFixed(0));
                    
                    $("#woodsword-max-stash").html("Max: "+woodsword.inStashMax);
                    if(woodsword.inStash > 0) {
                        $("#pickUp-woodsword").show();
                    }
                }
            }
        }
    });
    
    $("#craft-100-woodsword").hover(function() {
        $("#info-box").show();
        woodsword.hover100 = true;
    },function() {
        $("#info-box").hide();
        woodsword.hover100 = false;
    });
    
    $("#pickUp-woodsword").click(function() {
        res[5].amount = res[5].amount + woodsword.inStash;
        $("#amount5").html(res[5].amount);
        woodsword.inStash = 0;
        $("#woodsword-amount-stash").html(woodsword.inStash);
        $("#pickUp-woodsword").hide();
    });
});