<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <link rel="stylesheet" href="style.css">
        <script src="general.js"></script>
        <script src="res.js"></script>
        <script src="buildings.js"></script>
        <script src="barracks.js"></script>
        <script src="enemies.js"></script>
        <script src="world.js"></script>
        <script src="fight1.js"></script>
        <script src="forge.js"></script>
    </head>
    <body>
        <div id="info-box"></div>
        <table id="content">
            <tr>
                <td id="top-menu" colspan="3">
                    <table>
                        <tr>
                            <td class="placeholder1"></td>
                            <td class="menu-button" id="to-city">
                                Stadt
                            </td>
                            <td class="placeholder2"></td>
                            <td class="menu-button" id="to-world">
                                Welt
                            </td>
                            <td class="placeholder2"></td>
                            <td class="menu-button" id="to-barracks">
                                Kaserne
                            </td>
                            <td class="placeholder2"></td>
                            <td class="menu-button" id="to-trainingplace">
                                Übungsplatz
                            </td>
                            <td class="placeholder2"></td>
                            <td class="menu-button" id="to-forge">
                                Schmiede
                            </td>
                            <td class="placeholder2"></td>
                            <td id="special"></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td id="left-screen">
                    <table id="ressources"></table>
                </td>
                <td id="mid-screen">
                    <table id="city-grid">
                        <tr>
                            <td id="1-1" class="city-grid-cell"></td>
                            <td id="1-2" class="city-grid-cell"></td>
                            <td id="1-3" class="city-grid-cell"></td>
                            <td id="1-4" class="city-grid-cell"></td>
                            <td id="1-5" class="city-grid-cell"></td>
                            <td id="1-6" class="city-grid-cell"></td>
                            <td id="1-7" class="city-grid-cell"></td>
                            <td id="1-8" class="city-grid-cell"></td>
                            <td id="1-9" class="city-grid-cell"></td>
                            <td id="1-10" class="city-grid-cell"></td>
                        </tr>
                        <tr>
                            <td id="2-1" class="city-grid-cell"></td>
                            <td id="2-2" class="city-grid-cell"></td>
                            <td id="2-3" class="city-grid-cell"></td>
                            <td id="2-4" class="city-grid-cell"></td>
                            <td id="2-5" class="city-grid-cell"></td>
                            <td id="2-6" class="city-grid-cell"></td>
                            <td id="2-7" class="city-grid-cell"></td>
                            <td id="2-8" class="city-grid-cell"></td>
                            <td id="2-9" class="city-grid-cell"></td>
                            <td id="2-10" class="city-grid-cell"></td>
                        </tr>
                        <tr>
                            <td id="3-1" class="city-grid-cell"></td>
                            <td id="3-2" class="city-grid-cell"></td>
                            <td id="3-3" class="city-grid-cell"></td>
                            <td id="3-4" class="city-grid-cell"></td>
                            <td id="3-5" class="city-grid-cell"></td>
                            <td id="3-6" class="city-grid-cell"></td>
                            <td id="3-7" class="city-grid-cell"></td>
                            <td id="3-8" class="city-grid-cell"></td>
                            <td id="3-9" class="city-grid-cell"></td>
                            <td id="3-10" class="city-grid-cell"></td>
                        </tr>
                        <tr>
                            <td id="4-1" class="city-grid-cell"></td>
                            <td id="4-2" class="city-grid-cell"></td>
                            <td id="4-3" class="city-grid-cell"></td>
                            <td id="4-4" class="city-grid-cell"></td>
                            <td id="4-5" class="city-grid-cell"></td>
                            <td id="4-6" class="city-grid-cell"></td>
                            <td id="4-7" class="city-grid-cell"></td>
                            <td id="4-8" class="city-grid-cell"></td>
                            <td id="4-9" class="city-grid-cell"></td>
                            <td id="4-10" class="city-grid-cell"></td>
                        </tr>
                        <tr>
                            <td id="5-1" class="city-grid-cell"></td>
                            <td id="5-2" class="city-grid-cell"></td>
                            <td id="5-3" class="city-grid-cell"></td>
                            <td id="5-4" class="city-grid-cell"></td>
                            <td id="5-5" class="city-grid-cell"></td>
                            <td id="5-6" class="city-grid-cell"></td>
                            <td id="5-7" class="city-grid-cell"></td>
                            <td id="5-8" class="city-grid-cell"></td>
                            <td id="5-9" class="city-grid-cell"></td>
                            <td id="5-10" class="city-grid-cell"></td>
                        </tr>
                        <tr>
                            <td id="6-1" class="city-grid-cell"></td>
                            <td id="6-2" class="city-grid-cell"></td>
                            <td id="6-3" class="city-grid-cell"></td>
                            <td id="6-4" class="city-grid-cell"></td>
                            <td id="6-5" class="city-grid-cell"></td>
                            <td id="6-6" class="city-grid-cell"></td>
                            <td id="6-7" class="city-grid-cell"></td>
                            <td id="6-8" class="city-grid-cell"></td>
                            <td id="6-9" class="city-grid-cell"></td>
                            <td id="6-10" class="city-grid-cell"></td>
                        </tr>
                        <tr>
                            <td id="7-1" class="city-grid-cell"></td>
                            <td id="7-2" class="city-grid-cell"></td>
                            <td id="7-3" class="city-grid-cell"></td>
                            <td id="7-4" class="city-grid-cell"></td>
                            <td id="7-5" class="city-grid-cell"></td>
                            <td id="7-6" class="city-grid-cell"></td>
                            <td id="7-7" class="city-grid-cell"></td>
                            <td id="7-8" class="city-grid-cell"></td>
                            <td id="7-9" class="city-grid-cell"></td>
                            <td id="7-10" class="city-grid-cell"></td>
                        </tr>
                        <tr>
                            <td id="8-1" class="city-grid-cell"></td>
                            <td id="8-2" class="city-grid-cell"></td>
                            <td id="8-3" class="city-grid-cell"></td>
                            <td id="8-4" class="city-grid-cell"></td>
                            <td id="8-5" class="city-grid-cell"></td>
                            <td id="8-6" class="city-grid-cell"></td>
                            <td id="8-7" class="city-grid-cell"></td>
                            <td id="8-8" class="city-grid-cell"></td>
                            <td id="8-9" class="city-grid-cell"></td>
                            <td id="8-10" class="city-grid-cell"></td>
                        </tr>
                        <tr>
                            <td id="9-1" class="city-grid-cell"></td>
                            <td id="9-2" class="city-grid-cell"></td>
                            <td id="9-3" class="city-grid-cell"></td>
                            <td id="9-4" class="city-grid-cell"></td>
                            <td id="9-5" class="city-grid-cell"></td>
                            <td id="9-6" class="city-grid-cell"></td>
                            <td id="9-7" class="city-grid-cell"></td>
                            <td id="9-8" class="city-grid-cell"></td>
                            <td id="9-9" class="city-grid-cell"></td>
                            <td id="9-10" class="city-grid-cell"></td>
                        </tr>
                        <tr>
                            <td id="10-1" class="city-grid-cell"></td>
                            <td id="10-2" class="city-grid-cell"></td>
                            <td id="10-3" class="city-grid-cell"></td>
                            <td id="10-4" class="city-grid-cell"></td>
                            <td id="10-5" class="city-grid-cell"></td>
                            <td id="10-6" class="city-grid-cell"></td>
                            <td id="10-7" class="city-grid-cell"></td>
                            <td id="10-8" class="city-grid-cell"></td>
                            <td id="10-9" class="city-grid-cell"></td>
                            <td id="10-10" class="city-grid-cell"></td>
                        </tr>
                    </table>
                    <table id="world-grid">
                        <tr>
                            <td id="1-1" class="world-grid-cell"></td>
                            <td id="1-2" class="world-grid-cell"></td>
                            <td id="1-3" class="world-grid-cell"></td>
                            <td id="1-4" class="world-grid-cell"></td>
                            <td id="1-5" class="world-grid-cell"></td>
                            <td id="1-6" class="world-grid-cell"></td>
                            <td id="1-7" class="world-grid-cell"></td>
                            <td id="1-8" class="world-grid-cell"></td>
                            <td id="1-9" class="world-grid-cell"></td>
                            <td id="1-10" class="world-grid-cell"></td>
                        </tr>
                        <tr>
                            <td id="2-1" class="world-grid-cell"></td>
                            <td id="2-2" class="world-grid-cell"></td>
                            <td id="2-3" class="world-grid-cell"></td>
                            <td id="2-4" class="world-grid-cell"></td>
                            <td id="2-5" class="world-grid-cell"></td>
                            <td id="2-6" class="world-grid-cell"></td>
                            <td id="2-7" class="world-grid-cell"></td>
                            <td id="2-8" class="world-grid-cell"></td>
                            <td id="2-9" class="world-grid-cell"></td>
                            <td id="2-10" class="world-grid-cell"></td>
                        </tr>
                        <tr>
                            <td id="3-1" class="world-grid-cell"></td>
                            <td id="3-2" class="world-grid-cell"></td>
                            <td id="3-3" class="world-grid-cell"></td>
                            <td id="3-4" class="world-grid-cell"></td>
                            <td id="3-5" class="world-grid-cell"></td>
                            <td id="3-6" class="world-grid-cell"></td>
                            <td id="3-7" class="world-grid-cell"></td>
                            <td id="3-8" class="world-grid-cell"></td>
                            <td id="3-9" class="world-grid-cell"></td>
                            <td id="3-10" class="world-grid-cell"></td>
                        </tr>
                        <tr>
                            <td id="4-1" class="world-grid-cell"></td>
                            <td id="4-2" class="world-grid-cell"></td>
                            <td id="4-3" class="world-grid-cell"></td>
                            <td id="4-4" class="world-grid-cell"></td>
                            <td id="4-5" class="world-grid-cell"></td>
                            <td id="4-6" class="world-grid-cell"></td>
                            <td id="4-7" class="world-grid-cell"></td>
                            <td id="4-8" class="world-grid-cell"></td>
                            <td id="4-9" class="world-grid-cell"></td>
                            <td id="4-10" class="world-grid-cell"></td>
                        </tr>
                        <tr>
                            <td id="5-1" class="world-grid-cell"></td>
                            <td id="5-2" class="world-grid-cell"></td>
                            <td id="5-3" class="world-grid-cell"></td>
                            <td id="5-4" class="world-grid-cell"></td>
                            <td id="5-5" class="world-grid-cell"></td>
                            <td id="5-6" class="world-grid-cell"></td>
                            <td id="5-7" class="world-grid-cell"></td>
                            <td id="5-8" class="world-grid-cell"></td>
                            <td id="5-9" class="world-grid-cell"></td>
                            <td id="5-10" class="world-grid-cell"></td>
                        </tr>
                        <tr>
                            <td id="6-1" class="world-grid-cell"></td>
                            <td id="6-2" class="world-grid-cell"></td>
                            <td id="6-3" class="world-grid-cell"></td>
                            <td id="6-4" class="world-grid-cell"></td>
                            <td id="6-5" class="world-grid-cell"></td>
                            <td id="6-6" class="world-grid-cell"></td>
                            <td id="6-7" class="world-grid-cell"></td>
                            <td id="6-8" class="world-grid-cell"></td>
                            <td id="6-9" class="world-grid-cell"></td>
                            <td id="6-10" class="world-grid-cell"></td>
                        </tr>
                        <tr>
                            <td id="7-1" class="world-grid-cell"></td>
                            <td id="7-2" class="world-grid-cell"></td>
                            <td id="7-3" class="world-grid-cell"></td>
                            <td id="7-4" class="world-grid-cell"></td>
                            <td id="7-5" class="world-grid-cell"></td>
                            <td id="7-6" class="world-grid-cell"></td>
                            <td id="7-7" class="world-grid-cell"></td>
                            <td id="7-8" class="world-grid-cell"></td>
                            <td id="7-9" class="world-grid-cell"></td>
                            <td id="7-10" class="world-grid-cell"></td>
                        </tr>
                        <tr>
                            <td id="8-1" class="world-grid-cell"></td>
                            <td id="8-2" class="world-grid-cell"></td>
                            <td id="8-3" class="world-grid-cell"></td>
                            <td id="8-4" class="world-grid-cell"></td>
                            <td id="8-5" class="world-grid-cell"></td>
                            <td id="8-6" class="world-grid-cell"></td>
                            <td id="8-7" class="world-grid-cell"></td>
                            <td id="8-8" class="world-grid-cell"></td>
                            <td id="8-9" class="world-grid-cell"></td>
                            <td id="8-10" class="world-grid-cell"></td>
                        </tr>
                        <tr>
                            <td id="9-1" class="world-grid-cell"></td>
                            <td id="9-2" class="world-grid-cell"></td>
                            <td id="9-3" class="world-grid-cell"></td>
                            <td id="9-4" class="world-grid-cell"></td>
                            <td id="9-5" class="world-grid-cell"></td>
                            <td id="9-6" class="world-grid-cell"></td>
                            <td id="9-7" class="world-grid-cell"></td>
                            <td id="9-8" class="world-grid-cell"></td>
                            <td id="9-9" class="world-grid-cell"></td>
                            <td id="9-10" class="world-grid-cell"></td>
                        </tr>
                        <tr>
                            <td id="10-1" class="world-grid-cell"></td>
                            <td id="10-2" class="world-grid-cell"></td>
                            <td id="10-3" class="world-grid-cell"></td>
                            <td id="10-4" class="world-grid-cell"></td>
                            <td id="10-5" class="world-grid-cell"></td>
                            <td id="10-6" class="world-grid-cell"></td>
                            <td id="10-7" class="world-grid-cell"></td>
                            <td id="10-8" class="world-grid-cell"></td>
                            <td id="10-9" class="world-grid-cell"></td>
                            <td id="10-10" class="world-grid-cell"></td>
                        </tr>
                    </table>
                    <div id="fightInfo">
                        <table class="fightInfo" id="yourTroop" style="width: 100%;">
                            <th colspan="4">Deine Truppe:</th>
                            <tr>
                                <td>Rekruten:</td>
                                <td id="fIRecruits">1</td>
                                <td>bla</td>
                                <td>1</td>
                            </tr>
                        </table>
                        <br>
                        <table class="fightInfo" id="yourStats" style="width: 100%;">
                            <th colspan="4">Werte deiner Truppe:</th>
                            <tr>
                                <td>HP:</td>
                                <td id="fIHP">1</td>
                                <td>Block:</td>
                                <td id="fIBlock">1</td>
                            </tr>
                            <tr>
                                <td>AP:</td>
                                <td id="fIAP">1</td>
                                <td>Dmg:</td>
                                <td id="fIDmg">1</td>
                            </tr>
                        </table>
                        <br>
                        <br>
                        <table class="fightInfo" id="enemyHorde" style="width: 100%;">
                            <th colspan="4">Gegnerhorde:</th>
                            <tr>
                                <td id="hordeEnemy1">1</td>
                                <td id="hordeEnemy1Amount">1</td>
                                <td id="hordeEnemy2">1</td>
                                <td id="hordeEnemy2Amount">1</td>
                            </tr>
                            <tr>
                                <td id="hordeEnemy3">1</td>
                                <td id="hordeEnemy3Amount">1</td>
                                <td id="hordeEnemy4">1</td>
                                <td id="hordeEnemy4Amount">1</td>
                            </tr>
                            <tr>
                                <td id="hordeEnemy5">1</td>
                                <td id="hordeEnemy5Amount">1</td>
                                <td id="hordeEnemy6">1</td>
                                <td id="hordeEnemy6Amount">1</td>
                            </tr>
                        </table>
                        <br>
                        <table class="fightInfo" id="hordeStats" style="width: 100%;">
                            <th colspan="4">Werte der Gegnerhorde:</th>
                            <tr>
                                <td>HP:</td>
                                <td id="hordeHP">1</td>
                                <td>Block:</td>
                                <td id="hordeBlock">1</td>
                            </tr>
                            <tr>
                                <td>AP:</td>
                                <td id="hordeAP">1</td>
                                <td>Dmg:</td>
                                <td id="hordeDmg">1</td>
                            </tr>
                        </table>
                        <br>
                        <span id="abortFight" style="margin-left: 50px; cursor: pointer;">Abbrechen</span>
                        <span id="fight" style="margin-left: 135px; cursor: pointer;">Kämpfen</span>
                    </div>
                    <table id="fight-screen">
                        <tr>
                            <td class="fighter-screen-cell" id="yourFightingFighter1">
                                <div id="your-fighter1"></div>
                                <div id="your-hp1">
                                    <div id="your-hpBar1"></div>
                                </div>
                            </td>
                            <td>
                                <div id="your-atk1">
                                    <div id="your-atkBar1"></div>
                                </div>
                            </td>
                            <td class="fighter-screen-cell" id="enemyFightingFighter1">
                                <div id="enemy-atk1">
                                    <div id="enemy-atkBar1"></div>
                                </div>
                            </td>
                            <td>
                                <div id="enemy-fighter1"></div>
                                <div id="enemy-hp1">
                                    <div id="enemy-hpBar1"></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="fighter-screen-cell" id="yourFightingFighter2"></td>
                            <td></td>
                            <td></td>
                            <td class="fighter-screen-cell" id="enemyFightingFighter2"></td>
                        </tr>
                        <tr>
                            <td class="fighter-screen-cell" id="yourFightingFighter3"></td>
                            <td></td>
                            <td></td>
                            <td class="fighter-screen-cell" id="enemyFightingFighter3"></td>
                        </tr>
                        <tr>
                            <td class="fighter-screen-cell" id="yourFightingFighter4"></td>
                            <td></td>
                            <td></td>
                            <td class="fighter-screen-cell" id="enemyFightingFighter4"></td>
                        </tr>
                        <tr>
                            <td class="fighter-screen-cell" id="yourFightingFighter5"></td>
                            <td></td>
                            <td></td>
                            <td class="fighter-screen-cell" id="enemyFightingFighter5"></td>
                        </tr>
                        <tr>
                            <td id="yourWaitingFighters" style="width: 25%; border: 1px solid black;">
                                <table>
                                    <tr>
                                        <td>Rekruten:</td>
                                        <td id="waiting-recruits"></td>
                                    </tr>
                                </table>
                            </td>
                            <td></td>
                            <td></td>
                            <td id="enemyWaitingFighters" style="width: 25%; border: 1px solid black;">
                                <table>
                                    <tr>
                                        <td id="waiting-enemy1"></td>
                                        <td id="waiting-enemy1Amount"></td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <div id="afterFightWin">
                        Du hast Gewonnen.<br>
                        Dein Loot:<br>
                        Kehre zur <span id="backToCityWin" style="cursor: pointer;">Stadt</span> zurück.
                    </div>
                    <div id="afterFightLose">
                        Du hast den Kampf Verloren.<br>
                        Kehre zur <span id="backToCityLose" style="cursor: pointer;">Stadt</span> zurück.
                    </div>
                    <table id="barracks">
                        <tr>
                            <td class="barracks-cell">Rekrut</td>
                            <td class="barracks-cell">
                                <div class="recruit-button" id="recruit-recruit">
                                    Ausbilden
                                </div>
                            </td>
                            <td class="barracks-cell" id="in-recruitment-recruit"></td>
                            <td class="barracks-cell" id="recruitment-timer-recruit"></td>
                            <td class="barracks-cell" id="timer-bar-recruit">
                                <div id="recruit-bar"></div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="5">
                                <div id="to-create-troop" class="built-troop-button">Truppe bilden</div>
                            </td>
                        </tr>
                    </table>
                    <table id="create-troop">
                        <tr>
                            <td>
                                Rekruten zum Trupp
                                <div id="create-troopDropdown">
                                    <div id="create-troop-dropbtn" class="dropbtn">[Bitte Auswählen]</div>
                                      <div id="create-troopDropdown-content">
                                        <div id="create-troop1-Select">1</div>
                                        <div id="create-troop2-Select">2</div>
                                        <div id="create-troop3-Select">3</div>
                                        <div id="create-troop4-Select">4</div>
                                        <div id="create-troop5-Select">5</div>
                                        <div id="create-troop6-Select">6</div>
                                        <div id="create-troop7-Select">7</div>
                                        <div id="create-troop8-Select">8</div>
                                        <div id="create-troop9-Select">9</div>
                                        <div id="create-troop10-Select">10</div>
                                      </div>
                                </div>
                                hinzufügen
                            </td>
                            <td>
                                Wieviele? <span id="howManyRecruits"></span>
                                <div class="slidecontainer">
                                    <input type="range" id="recruitRange">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div id="create-troop-button" class="built-troop-button">Truppe zusammenstellen</div>
                            </td>
                        </tr>
                    </table>
                    <table id="trainingplace">
                        <tr>
                            <td id="train-recruit">Rekrut trainieren</td>
                        </tr>
                    </table>
                    <table id="forge">
                        <tr>
                            <td class="forge-cell">
                                Holzschwert herstellen
                            </td>
                            <td class="forge-cell">
                                <table>
                                    <tr>
                                        <td>
                                            <div class="craft-button" id="craft-1-woodsword">
                                                +1
                                            </div>
                                        </td>
                                        <td>
                                            <div class="craft-button" id="craft-25-woodsword">
                                                +25
                                            </div>
                                        </td>
                                        <td>
                                            <div class="craft-button" id="craft-50-woodsword">
                                                +50
                                            </div>
                                        </td>
                                        <td>
                                            <div class="craft-button" id="craft-100-woodsword">
                                                +100
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td class="forge-cell" id="craft-timer-woodsword"></td>
                            <td class="forge-cell" id="timer-bar-woodsword">
                                <div id="woodsword-bar"></div>
                            </td>
                            <td class="forge-cell" id="woodsword-stash">
                                <table style="width: 100%">
                                    <tr>
                                        <td style="width: 33%">
                                            <div id="woodsword-amount-stash"></div>
                                        </td>
                                        <td style="width: 33%">
                                            <div id="woodsword-max-stash"></div>
                                        </td>
                                        <td style="width: 33%">
                                            <div class="pickUp-button" id="pickUp-woodsword">Holzschwerter abholen</div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
                <td id="right-screen">
                    <span id="to-fighter">Zu Kämpfer</span>
                    <span id="to-troops">Zu Truppen</span>
                    <table id="fighter">
                        <tr>
                            <td class="fighter-cell">Rekrut</td>
                            <td class="fighter-cell" id="recruit-amount"></td>
                        </tr>
                    </table>
                    <table id="troops" style="width: 100%;">
                        <tr>
                            <td class="troop-cell">Truppe 1</td>
                            <td id="troop1" class="troop-cell"></td>
                        </tr>
                        <tr>
                            <td class="troop-cell">Truppe 2</td>
                            <td id="troop2" class="troop-cell"></td>
                        </tr>
                        <tr>
                            <td class="troop-cell">Truppe 3</td>
                            <td id="troop3" class="troop-cell"></td>
                        </tr>
                        <tr>
                            <td class="troop-cell">Truppe 4</td>
                            <td id="troop4" class="troop-cell"></td>
                        </tr>
                        <tr>
                            <td class="troop-cell">Truppe 5</td>
                            <td id="troop5" class="troop-cell"></td>
                        </tr>
                        <tr>
                            <td class="troop-cell">Truppe 6</td>
                            <td id="troop6" class="troop-cell"></td>
                        </tr>
                        <tr>
                            <td class="troop-cell">Truppe 7</td>
                            <td id="troop7" class="troop-cell"></td>
                        </tr>
                        <tr>
                            <td class="troop-cell">Truppe 8</td>
                            <td id="troop8" class="troop-cell"></td>
                        </tr>
                        <tr>
                            <td class="troop-cell">Truppe 9</td>
                            <td id="troop9" class="troop-cell"></td>
                        </tr>
                        <tr>
                            <td class="troop-cell">Truppe 10</td>
                            <td id="troop10" class="troop-cell"></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td id="bottom-menu" colspan="3">
                    <table>
                        <tr>
                            <td class="placeholder1"></td>
                            <td id="build-house" class="menu-button">Haus bauen</td>
                            <td class="placeholder2"></td>
                            <td id="build-foodfield" class="menu-button">Nahrungsfeld<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bauen</td>
                            <td class="placeholder2"></td>
                            <td id="build-woodcutter" class="menu-button">Holzfäller<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bauen</td>
                            <td class="placeholder2"></td>
                            <td id="build-mine" class="menu-button">Mine <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bauen</td>
                            <td class="placeholder2"></td>
                            <td id="build-barracks" class="menu-button">Kaserne<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bauen</td>
                            <td class="placeholder2"></td>
                            <td id="build-trainingplace" class="menu-button">Übungsplatz<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bauen</td>
                            <td class="placeholder2"></td>
                            <td id="build-forge" class="menu-button">Schmiede<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bauen</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
</html>