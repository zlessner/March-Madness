let right = document.querySelectorAll(".right")
let tourneyHeader= document.querySelector(".tournament-header")

function size(x) {
    for (let i=0; i<right.length; i++) {
    if (x.matches) { 
      right[i].remove()
    }
    else {
        tourneyHeader.append(right[i])
    }
  }
}
  
  let x = window.matchMedia("(max-width: 650px)")
  size(x) 
  x.addListener(size) 


let submitBracket=document.querySelector(".submitBracket")

let clear = document.querySelector(".clear")
let seed = document.querySelectorAll(".seed")
let seed2 = document.querySelectorAll(".seed2")
let seed3 = document.querySelectorAll(".seed3")
let seed4 = document.querySelectorAll(".seed4")
let seed5 = document.querySelectorAll(".seed5")
let seed6 = document.querySelectorAll(".seed6")
let seed7 = document.querySelectorAll(".seed7")
let team = document.querySelectorAll(".team")
let team2 = document.querySelectorAll(".team2")
let team3 = document.querySelectorAll(".team3")
let team4 = document.querySelectorAll(".team4")
let team5 = document.querySelectorAll(".team5")
let team6 = document.querySelectorAll(".team6")
let team7 = document.querySelectorAll(".team7")

let points1=document.querySelector(".points1")
let points2=document.querySelector(".points2")
let points3=document.querySelector(".points3")
let points4=document.querySelector(".points4")
let points5=document.querySelector(".points5")
let points6=document.querySelector(".points6")

let bonus1=document.querySelector(".bonus1")
let bonus2=document.querySelector(".bonus2")
let bonus3=document.querySelector(".bonus3")
let bonus4=document.querySelector(".bonus4")
let bonus5=document.querySelector(".bonus5")
let bonus6=document.querySelector(".bonus6")

let teams = document.querySelector(".teams")
let popPicks = document.querySelector(".popPicks")
fiveThirtyEightURL = 'https://marchmadnessapi.herokuapp.com/api/538Tournament'
popPicksURL = 'https://marchmadnessapi.herokuapp.com/api/popPicksTournament'


//all arbitrary values- goal is to finish as high in standings as possible


let simulations = 5000
let firstPlaceFinishes = 0
let secondPlaceFinishes= 0
let thirdPlaceFinishes=0
let medalFinishes=0



//load all 3 APIs whatever way before running functionality
//crud funtionality in new api where user can store results of simulation
//429 too many requests heroku error still a problem




function load538() {
    fetch(
        fiveThirtyEightURL)
        .then(blob => blob.json())

        .then(json => {
            scraping = JSON.stringify(json, null, 2);
            //console.log(scraping)
            silverData = []
            for (var i = 0; i < json[0].Bracket.length; i++) {
                for (var j = 0; j < json[0].Bracket[i].Schools.length; j++) {
                    silverData.push(json[0].Bracket[i].Schools[j])
                }
            }
        }
        )




        .then((fetch(
            popPicksURL)
            .then(woof => woof.json())

            .then(YCST => {
                write = JSON.stringify(YCST, null, 2);
                //console.log(write)
                yahooData = []
                regionData = []
                for (var i = 0; i < YCST[0].Bracket.length; i++) {
                    for (var j = 0; j < YCST[0].Bracket[i].Schools.length; j++) {
                        yahooData.push(YCST[0].Bracket[i].Schools[j])
                        regionData.push(YCST[0].Bracket[i].Region)
                    }
                }
 
            }
            )


            .then(() => {


                for (let j = 0; j < seed.length; j++) {

                    seed[j].innerHTML=yahooData[j].Seed
                    team[j].innerHTML=yahooData[j].Team
        
        
                }


                //move to top eventually in order to push into standings array when point total is captured

for (let q=0; q<team.length; q++) {
    team[q].addEventListener("click", chooseRound);
    seed[q].addEventListener("click", chooseRound);
             function chooseRound(evt) {
               if (team[q].contains(evt.target) || seed[q].contains(evt.target)) {
                   team2[Math.floor(q/2)].innerHTML=team[q].innerHTML
                   seed2[Math.floor(q/2)].innerHTML=seed[q].innerHTML
               }
   
               if (q%2==0) {
               if (team3[Math.floor(q/4)].innerHTML==team[q+1].innerHTML) {
                   team3[Math.floor(q/4)].innerHTML=''
                   seed3[Math.floor(q/4)].innerHTML=''
               }
   
               if (team4[Math.floor(q/8)].innerHTML==team[q+1].innerHTML) {
                   team4[Math.floor(q/8)].innerHTML=''
                   seed4[Math.floor(q/8)].innerHTML=''
               }
   
               if (team5[Math.floor(q/16)].innerHTML==team[q+1].innerHTML) {
                   team5[Math.floor(q/16)].innerHTML=''
                   seed5[Math.floor(q/16)].innerHTML=''
               }
   
               if (team6[Math.floor(q/32)].innerHTML==team[q+1].innerHTML) {
                   team6[Math.floor(q/32)].innerHTML=''
                   seed6[Math.floor(q/32)].innerHTML=''
               }
   
               if (team7[Math.floor(q/64)].innerHTML==team[q+1].innerHTML) {
                   team7[Math.floor(q/64)].innerHTML=''
                   seed7[Math.floor(q/64)].innerHTML=''
               }
           }
   
           else {
   
               if (team3[Math.floor(q/4)].innerHTML==team[q-1].innerHTML) {
                   team3[Math.floor(q/4)].innerHTML=''
                   seed3[Math.floor(q/4)].innerHTML=''
               }
   
               if (team4[Math.floor(q/8)].innerHTML==team[q-1].innerHTML) {
                   team4[Math.floor(q/8)].innerHTML=''
                   seed4[Math.floor(q/8)].innerHTML=''
               }
   
               if (team5[Math.floor(q/16)].innerHTML==team[q-1].innerHTML) {
                   team5[Math.floor(q/16)].innerHTML=''
                   seed5[Math.floor(q/16)].innerHTML=''
               }
   
               if (team6[Math.floor(q/32)].innerHTML==team[q-1].innerHTML) {
                   team6[Math.floor(q/32)].innerHTML=''
                   seed6[Math.floor(q/32)].innerHTML=''
               }
   
               if (team7[Math.floor(q/64)].innerHTML==team[q-1].innerHTML) {
                   team7[Math.floor(q/64)].innerHTML=''
                   seed7[Math.floor(q/64)].innerHTML=''
               }
   
           }
       }
   }
   
   for (let u=0; u<team2.length; u++) {
       team2[u].addEventListener("click", chooseRound2);
       seed2[u].addEventListener("click", chooseRound2);
                function chooseRound2(evt) {
                  if (team2[u].contains(evt.target) || seed2[u].contains(evt.target)) {
                      team3[Math.floor(u/2)].innerHTML=team2[u].innerHTML
                      seed3[Math.floor(u/2)].innerHTML=seed2[u].innerHTML
                  }
   
                  if (u%2==0) {
       
                   if (team4[Math.floor(u/4)].innerHTML==team2[u+1].innerHTML) {
                       team4[Math.floor(u/4)].innerHTML=''
                       seed4[Math.floor(u/4)].innerHTML=''
                   }
       
                   if (team5[Math.floor(u/8)].innerHTML==team2[u+1].innerHTML) {
                       team5[Math.floor(u/8)].innerHTML=''
                       seed5[Math.floor(u/8)].innerHTML=''
                   }
       
                   if (team6[Math.floor(u/16)].innerHTML==team2[u+1].innerHTML) {
                       team6[Math.floor(u/16)].innerHTML=''
                       seed6[Math.floor(u/16)].innerHTML=''
                   }
       
                   if (team7[Math.floor(u/32)].innerHTML==team2[u+1].innerHTML) {
                       team7[Math.floor(u/32)].innerHTML=''
                       seed7[Math.floor(u/32)].innerHTML=''
                   }
               }
       
               else {
       
                   if (team4[Math.floor(u/4)].innerHTML==team2[u-1].innerHTML) {
                       team4[Math.floor(u/4)].innerHTML=''
                       seed4[Math.floor(u/4)].innerHTML=''
                   }
       
                   if (team5[Math.floor(u/8)].innerHTML==team2[u-1].innerHTML) {
                       team5[Math.floor(u/8)].innerHTML=''
                       seed5[Math.floor(u/8)].innerHTML=''
                   }
       
                   if (team6[Math.floor(u/16)].innerHTML==team2[u-1].innerHTML) {
                       team6[Math.floor(u/16)].innerHTML=''
                       seed6[Math.floor(u/16)].innerHTML=''
                   }
       
                   if (team7[Math.floor(u/32)].innerHTML==team2[u-1].innerHTML) {
                       team7[Math.floor(u/32)].innerHTML=''
                       seed7[Math.floor(u/32)].innerHTML=''
                   }
       
               }
   
                }
      
      }
   
   for (let s=0; s<team3.length; s++) {
   team3[s].addEventListener("click", chooseRound3);
   seed3[s].addEventListener("click", chooseRound3);
               function chooseRound3(evt) {
               if (team3[s].contains(evt.target) || seed3[s].contains(evt.target)) {
                   team4[Math.floor(s/2)].innerHTML=team3[s].innerHTML
                   seed4[Math.floor(s/2)].innerHTML=seed3[s].innerHTML
               }
   
               if (s%2==0) {
       
                   if (team5[Math.floor(s/4)].innerHTML==team3[s+1].innerHTML) {
                       team5[Math.floor(s/4)].innerHTML=''
                       seed5[Math.floor(s/4)].innerHTML=''
                   }
       
                   if (team6[Math.floor(s/8)].innerHTML==team3[s+1].innerHTML) {
                       team6[Math.floor(s/8)].innerHTML=''
                       seed6[Math.floor(s/8)].innerHTML=''
                   }
       
                   if (team7[Math.floor(s/16)].innerHTML==team3[s+1].innerHTML) {
                       team7[Math.floor(s/16)].innerHTML=''
                       seed7[Math.floor(s/16)].innerHTML=''
                   }
               }
       
               else {
       
                   if (team5[Math.floor(s/4)].innerHTML==team3[s-1].innerHTML) {
                       team5[Math.floor(s/4)].innerHTML=''
                       seed5[Math.floor(s/4)].innerHTML=''
                   }
       
                   if (team6[Math.floor(s/8)].innerHTML==team3[s-1].innerHTML) {
                       team6[Math.floor(s/8)].innerHTML=''
                       seed6[Math.floor(s/8)].innerHTML=''
                   }
       
                   if (team7[Math.floor(s/16)].innerHTML==team3[s-1].innerHTML) {
                       team7[Math.floor(s/16)].innerHTML=''
                       seed7[Math.floor(s/16)].innerHTML=''
                   }
       
               }
   
               }
   
   }
   
   for (let t=0; t<team4.length; t++) {
   team4[t].addEventListener("click", chooseRound4);
   seed4[t].addEventListener("click", chooseRound4);
               function chooseRound4(evt) {
               if (team4[t].contains(evt.target) || seed4[t].contains(evt.target)) {
                   team5[Math.floor(t/2)].innerHTML=team4[t].innerHTML
                   seed5[Math.floor(t/2)].innerHTML=seed4[t].innerHTML
               }
   
               if (t%2==0) {
       
                   if (team6[Math.floor(t/4)].innerHTML==team4[t+1].innerHTML) {
                       team6[Math.floor(t/4)].innerHTML=''
                       seed6[Math.floor(t/4)].innerHTML=''
                   }
       
                   if (team7[Math.floor(t/8)].innerHTML==team4[t+1].innerHTML) {
                       team7[Math.floor(t/8)].innerHTML=''
                       seed7[Math.floor(t/8)].innerHTML=''
                   }
               }
       
               else {
       
                   if (team6[Math.floor(t/4)].innerHTML==team4[t-1].innerHTML) {
                       team6[Math.floor(t/4)].innerHTML=''
                       seed6[Math.floor(t/4)].innerHTML=''
                   }
       
                   if (team7[Math.floor(t/8)].innerHTML==team4[t-1].innerHTML) {
                       team7[Math.floor(t/8)].innerHTML=''
                       seed7[Math.floor(t/8)].innerHTML=''
                   }
       
               }
   
               }
   
   }
   
   for (let v=0; v<team5.length; v++) {
   team5[v].addEventListener("click", chooseRound5);
   seed5[v].addEventListener("click", chooseRound5);
               function chooseRound5(evt) {
               if (team5[v].contains(evt.target) || seed5[v].contains(evt.target)) {
                   team6[Math.floor(v/2)].innerHTML=team5[v].innerHTML
                   seed6[Math.floor(v/2)].innerHTML=seed5[v].innerHTML
               }
   
               if (v%2==0) {
       
                   if (team7[Math.floor(v/4)].innerHTML==team5[v+1].innerHTML) {
                       team7[Math.floor(v/4)].innerHTML=''
                       seed7[Math.floor(v/4)].innerHTML=''
                   }
               }
       
               else {
       
                   if (team7[Math.floor(v/4)].innerHTML==team5[v-1].innerHTML) {
                       team7[Math.floor(v/4)].innerHTML=''
                       seed7[Math.floor(v/4)].innerHTML=''
                   }
       
               }
   
               }
   
   }
   
   for (let w=0; w<team6.length; w++) {
       team6[w].addEventListener("click", chooseRound6);
       seed6[w].addEventListener("click", chooseRound6);
                   function chooseRound6(evt) {
                   if (team6[w].contains(evt.target) || seed6[w].contains(evt.target)) {
                       team7[Math.floor(w/2)].innerHTML=team6[w].innerHTML
                       seed7[Math.floor(w/2)].innerHTML=seed6[w].innerHTML
                   }
                   }
       
       }
   
   clear.addEventListener("click", clearBracket);
       function clearBracket() {
           for (let i=0; i<team2.length; i++) {
           team2[i].innerHTML=[]
           seed2[i].innerHTML=[]
       }
           for (let a=0; a<team3.length; a++) {
               team3[a].innerHTML=[]
               seed3[a].innerHTML=[]
           }
           for (let b=0; b<team4.length; b++) {
               team4[b].innerHTML=[]
               seed4[b].innerHTML=[]
           }
           for (let c=0; c<team5.length; c++) {
               team5[c].innerHTML=[]
               seed5[c].innerHTML=[]
           }
           for (let d=0; d<team6.length; d++) {
               team6[d].innerHTML=[]
               seed6[d].innerHTML=[]
           }
           for (let e=0; e<team7.length; e++) {
               team7[e].innerHTML=[]
               seed7[e].innerHTML=[]
           }
   }
   
   //if array lengths are greater than certain length, able to submit, if not show pop up error



submitBracket.addEventListener("click", loadWinners);
                function loadWinners () {


                    // myBracketRound1 = ['Duke', 'Central Florida', 'Virginia Tech', 'Mississippi State', 'Maryland', 'Louisiana State', 'Minnesota', 'Michigan State', 'Gonzaga', 'Baylor', 'Florida State', 'Murray State', 'Arizona State', 'Texas Tech', 'Florida', 'Michigan', 'Virginia', 'Oklahoma', 'UC-Irvine', 'Oregon', 'Villanova', 'Purdue', 'Iowa', 'Tennessee', 'North Carolina', 'Washington', 'Kansas', 'Auburn', 'Iowa State', 'Houston', 'Seton Hall', 'Kentucky']
                    // myBracketRound2 = ['Duke', 'Mississippi State', 'Maryland', 'Michigan State', 'Gonzaga', 'Florida State', 'Texas Tech', 'Michigan', 'Virginia', 'Oregon', 'Villanova', 'Tennessee', 'North Carolina', 'Auburn', 'Iowa State', 'Kentucky']
                    // myBracketRound3 = ['Duke', 'Michigan State', 'Gonzaga', 'Texas Tech', 'Virginia', 'Tennessee', 'North Carolina', 'Kentucky']
                    // myBracketRound4 = ['Michigan State', 'Gonzaga', 'Virginia', 'North Carolina']
                    // myBracketRound5 = ['Gonzaga', 'Virginia']
                    // myBracketRound6 = ['Gonzaga']

                    // myBracketRound1Seed = [1, 9, 4, 5, 6, 3, 10, 2, 1, 9, 4, 14, 11, 3, 10, 2, 1, 9, 13, 12, 6, 3, 10, 2, 1, 9, 4, 5, 6, 3, 10, 2]
                    // myBracketRound2Seed = [1, 5, 6, 2, 1, 4, 3, 2, 1, 12, 6, 2, 1, 5, 6, 2]
                    // myBracketRound3Seed = [1, 2, 1, 3, 1, 2, 1, 2]
                    // myBracketRound4Seed = [2, 1, 1, 1]
                    // myBracketRound5Seed = [1, 1]
                    // myBracketRound6Seed = [1]



                    let numberOfPartcipants = document.querySelector(".numberOfPartcipants")
                    let prizeWinnings= document.querySelector(".prizeWinnings")
                    let prizeDescription= document.querySelector(".prizeDescription")
                    let firstPercentage= document.querySelector(".firstPercentage")
                    let firstDescription= document.querySelector(".firstDescription")
                    let medalPercentage= document.querySelector(".medalPercentage")
                    let medalDescription= document.querySelector(".medalDescription")
                    let regularPercentage= document.querySelector(".regularPercentage")
                    let regularDescription= document.querySelector(".regularDescription")
                    let field= document.querySelectorAll(".field")
                    let feex= document.querySelector(".fee")
                    let winner1x= document.querySelector(".winner1")
                    let winner2x= document.querySelector(".winner2")
                    let winner3x= document.querySelector(".winner3")

                    let fee=Number(feex.value)
                    let winner1=Number(winner1x.value)
                    let winner2=Number(winner2x.value)
                    let winner3=Number(winner3x.value)

                    let participants =Number(numberOfPartcipants.value)
                    if (participants<=5) {
                        alert ("Please enter participant number greater than 5")
                        return
                    }
   
                    



                    for (let c=0; c<field.length; c++) {
                        if (field[c].value.length<1) {
                            alert("Please fill in all input fields")
                            return;
                        }
                        
                    }

                    let ptsRound1 = [
                        { winPoints: Number(points1.value) },
                        { bonus: Number(bonus1.value) },
                        { totalBonus: 0 }
                    ]

                    
                    
                    let ptsRound2 = [
                        { winPoints: Number(points2.value) },
                        { bonus: Number(bonus2.value) },
                        { totalBonus: 0 }
                    ]
                    
                    let ptsRound3 = [
                        { winPoints: Number(points3.value) },
                        { bonus: Number(bonus3.value) },
                        { totalBonus: 0 }
                    ]
                    
                    let ptsRound4 = [
                        { winPoints: Number(points4.value) },
                        { bonus: Number(bonus4.value) },
                        { totalBonus: 0 }
                    ]
                    
                    let ptsRound5 = [
                        { winPoints: Number(points5.value) },
                        { bonus: Number(bonus5.value) },
                        { totalBonus: 0 }
                    ]
                    
                    let ptsRound6 = [
                        { winPoints: Number(points6.value) },
                        { bonus: Number(bonus6.value) },
                        { totalBonus: 0 }
                    ]




                for (let r = 0; r < simulations; r++) {


                    totalPointsPersonal = 0
                    totalBonusPersonal1 = 0
                    totalBonusPersonal2 = 0
                    totalBonusPersonal3 = 0
                    totalBonusPersonal4 = 0
                    totalBonusPersonal5 = 0
                    totalBonusPersonal6 = 0
                    upsetArraySilver1 = []
                    upsetArraySilver2 = []
                    upsetArraySilver3 = []
                    upsetArraySilver4 = []
                    upsetArraySilver5 = []
                    upsetArraySilver6 = []

                    standingsArray = [] 



                    let round1OddsTrack = 0
                    let round2OddsTrack = 0
                    let round3OddsTrack = 0
                    let round4OddsTrack = 0
                    let round5OddsTrack = 0
                    let round6OddsTrack = 0



                    function fiveThirtyEightValidOdds() {
                        for (var i = 0; i < silverData.length; i++) {
                            round1OddsTrack = round1OddsTrack + silverData[i].Round1
                            round2OddsTrack = round2OddsTrack + silverData[i].Round2
                            round3OddsTrack = round3OddsTrack + silverData[i].Round3
                            round4OddsTrack = round4OddsTrack + silverData[i].Round4
                            round5OddsTrack = round5OddsTrack + silverData[i].Round5
                            round6OddsTrack = round6OddsTrack + silverData[i].Round6
                        }

                        if (round1OddsTrack < 31.5 || round1OddsTrack > 32.5) {
                            alert("Round 1 odds must total 32")
                            throw new error("Re-submit odds")
                        }
                        if (round2OddsTrack < 15.75 || round2OddsTrack > 16.25) {
                            alert("Round 2 odds must total 16")
                            throw ("Re-submit odds")
                        }
                        if (round3OddsTrack < 7.8 || round3OddsTrack > 8.2) {
                            alert("Round 3 odds must total 8")
                            throw ("Re-submit odds")
                        }
                        if (round4OddsTrack < 3.9 || round4OddsTrack > 4.1) {
                            alert("Round 4 odds must total 4")
                            throw ("Re-submit odds")
                        }
                        if (round5OddsTrack < 1.95 || round5OddsTrack > 2.05) {
                            alert("Round 5 odds must total 2")
                            throw ("Re-submit odds")
                        }
                        if (round6OddsTrack < .97 || round6OddsTrack > 1.03) {
                            alert("Round 6 odds must total 1")
                            throw ("Re-submit odds")
                        }

                        //console.log(round1OddsTrack)

                    }

                    fiveThirtyEightValidOdds()



                    firstRoundWinners538 = []
                    secondRoundWinners538 = []
                    thirdRoundWinners538 = []
                    finalFourTeams538 = []
                    championshipTeams538 = []
                    winningTeam538 = []



                    let champOddsEveryTeam538 = []




                    function firstRound538() {

                        for (let i = 0; i < silverData.length; i++) {

                            if (i % 2 == 0) {
                                let ranNumber1 = Math.random()
                                //console.log(ranNum)
                                if (ranNumber1 <= silverData[i].Round1) {
                                    firstRoundWinners538.push(silverData[i])
                                }

                                else {
                                    firstRoundWinners538.push(silverData[i + 1])
                                }

                                ranNumber1 = Math.random()
                                //console.log(ranNum)
                            }

                        }
                    }

                    firstRound538()




                    function secondRound538() {

                        for (let i = -1; i < firstRoundWinners538.length; i++) {

                            if (i % 2 == 0) {
                                let ranNumber2 = Math.random()

                                if (ranNumber2 <= ((firstRoundWinners538[i].Round2)/((firstRoundWinners538[i].Round2)+(firstRoundWinners538[i+1].Round2)))) {
                                    secondRoundWinners538.push(firstRoundWinners538[i])
                                }

                                else  {
                                    secondRoundWinners538.push(firstRoundWinners538[i + 1])

                                }

                                ranNumber2 = Math.random()
                            }

                        }

                    }


                    secondRound538()




                    function thirdRound538() {

                        for (let i = -1; i < secondRoundWinners538.length; i++) {

                            if (i % 2 == 0) {
                                let ranNumber3 = Math.random()

                                if (ranNumber3 <= ((secondRoundWinners538[i].Round3)/((secondRoundWinners538[i].Round3)+(secondRoundWinners538[i+1].Round3)))) {
                                    thirdRoundWinners538.push(secondRoundWinners538[i])
                                }

                                else {
                                    thirdRoundWinners538.push(secondRoundWinners538[i + 1])

                                }

                                ranNumber3 = Math.random()

                            }

                        }

                    }


                    thirdRound538()





                    function fourthRound538() {

                        for (let i = -1; i < thirdRoundWinners538.length; i++) {

                            if (i % 2 == 0) {
                                let ranNumber4 = Math.random()

                                if (ranNumber4 <= ((thirdRoundWinners538[i].Round4)/((thirdRoundWinners538[i].Round4)+(thirdRoundWinners538[i+1].Round4)))) {
                                    finalFourTeams538.push(thirdRoundWinners538[i])
                                }

                                else  {
                                    finalFourTeams538.push(thirdRoundWinners538[i + 1])

                                }

                                ranNumber4 = Math.random()

                            }

                        }

                    }


                    fourthRound538()




                    function fifthRound538() {

                        for (let i = -1; i < finalFourTeams538.length; i++) {

                            if (i % 2 == 0) {
                                let ranNumber5 = Math.random()

                                if (ranNumber5 <= ((finalFourTeams538[i].Round5)/((finalFourTeams538[i].Round5)+(finalFourTeams538[i+1].Round5)))) {
                                    championshipTeams538.push(finalFourTeams538[i])
                                }

                                else {
                                    championshipTeams538.push(finalFourTeams538[i + 1])

                                }

                                ranNumber5 = Math.random()

                            }

                        }

                    }


                    fifthRound538()




                    function sixthRound538() {

                        for (let i = -1; i < championshipTeams538.length; i++) {

                            if (i % 2 == 0) {
                                let ranNumber6 = Math.random()

                                if (ranNumber6 <= ((championshipTeams538[i].Round6)/((championshipTeams538[i].Round6)+(championshipTeams538[i+1].Round6)))) {
                                    winningTeam538.push(championshipTeams538[i])
                                }

                                else  {
                                    winningTeam538.push(championshipTeams538[i + 1])

                                }

                                ranNumber6 = Math.random()

                            }

                        }

                    }


                    sixthRound538()




                    function personalScore() {


                        for (let i = 0; i < silverData.length; i++) {
                            if (i % 2 == 0) {
                                if (silverData[i].Seed > silverData[i + 1].Seed) {
                                    upsetArraySilver1.push(silverData[i].Team)
                                }

                                else {
                                    upsetArraySilver1.push(silverData[i + 1].Team)
                                }
                            }
                        }


                        silverTeamsRound1 = []
                        for (let x = 0; x < firstRoundWinners538.length; x++) {
                            silverTeamsRound1.push(firstRoundWinners538[x].Team)
                        }


                        //console.log(myBracketRound1)
                        //console.log(upsetArraySilver1)


                        const bonusTeamsSilver1 = silverTeamsRound1.filter(r => upsetArraySilver1.includes(r))
                        team2Value=[]
                        for (let p=0; p<team2.length; p++) {
                            team2Value.push(team2[p].innerHTML)
                        }
                        const myTeamsSilver1 = team2Value.filter(r => bonusTeamsSilver1.includes(r))
                        totalBonusPersonal1 = myTeamsSilver1.length * ptsRound1[1].bonus

                        //console.log(totalBonusPersonal1)


                        seed2Value=[]
                        for (let h=0; h<seed2.length; h++) {
                            seed2Value.push(seed2[h].innerHTML)
                        }


                        for (let i = 0; i < team2Value.length; i++) {
                            if (i % 2 == 0) {
                                if (seed2Value[i] > firstRoundWinners538[i + 1].Seed) {
                                    upsetArraySilver2.push(team2Value[i])
                                    
                                }
                                

                                else {
                                    upsetArraySilver2.push(team2Value[i + 1])
                                }

                            }
                        }


                        silverTeamsRound2 = []
                        for (let x = 0; x < secondRoundWinners538.length; x++) {
                            silverTeamsRound2.push(secondRoundWinners538[x].Team)
                        }


                        //console.log(myBracketRound2)
                        //console.log(upsetArraySilver2)


                        const bonusTeamsSilver2 = silverTeamsRound2.filter(r => upsetArraySilver2.includes(r))
                        team3Value=[]
                        for (let p=0; p<team3.length; p++) {
                            team3Value.push(team3[p].innerHTML)
                        }
                        const myTeamsSilver2 = team3Value.filter(r => bonusTeamsSilver2.includes(r))
                        totalBonusPersonal2 = myTeamsSilver2.length * ptsRound2[1].bonus

                        //console.log(totalBonusPersonal2)




                        seed3Value=[]
                        for (let h=0; h<seed3.length; h++) {
                            seed3Value.push(seed3[h].innerHTML)
                        }


                        for (let i = 0; i < team3Value.length; i++) {
                            if (i % 2 == 0) {
                                if (seed3Value[i] > secondRoundWinners538[i + 1].Seed) {
                                    upsetArraySilver3.push(team3Value[i])
                                }

                                else {
                                    upsetArraySilver3.push(team3Value[i + 1])
                                }

                            }
                        }


                        silverTeamsRound3 = []
                        for (let x = 0; x < thirdRoundWinners538.length; x++) {
                            silverTeamsRound3.push(thirdRoundWinners538[x].Team)
                        }


                        //console.log(team3Value)
                        //console.log(upsetArraySilver2)


                        const bonusTeamsSilver3 = silverTeamsRound3.filter(r => upsetArraySilver3.includes(r))
                        team4Value=[]
                        for (let p=0; p<team4.length; p++) {
                            team4Value.push(team4[p].innerHTML)
                        }
                        const myTeamsSilver3 = team4Value.filter(r => bonusTeamsSilver3.includes(r))
                        totalBonusPersonal3 = myTeamsSilver3.length * ptsRound3[1].bonus

                        //console.log(totalBonusPersonal3)



                        seed4Value=[]
                        for (let h=0; h<seed4.length; h++) {
                            seed4Value.push(seed4[h].innerHTML)
                        }



                        for (let i = 0; i < team4Value.length; i++) {
                            if (i % 2 == 0) {
                                if (seed4Value[i] > thirdRoundWinners538[i + 1].Seed) {
                                    upsetArraySilver4.push(team4Value[i])
                                }

                                else {
                                    upsetArraySilver4.push(team4Value[i + 1])
                                }

                            }
                        }


                        silverTeamsRound4 = []
                        for (let x = 0; x < finalFourTeams538.length; x++) {
                            silverTeamsRound4.push(finalFourTeams538[x].Team)
                        }


                        //console.log(team3Value)
                        //console.log(upsetArraySilver2)


                        const bonusTeamsSilver4 = silverTeamsRound4.filter(r => upsetArraySilver4.includes(r))
                        team5Value=[]
                        for (let p=0; p<team5.length; p++) {
                            team5Value.push(team5[p].innerHTML)
                        }
                        const myTeamsSilver4 = team5Value.filter(r => bonusTeamsSilver4.includes(r))
                        totalBonusPersonal4 = myTeamsSilver4.length * ptsRound4[1].bonus

                        //console.log(totalBonusPersonal4)




                        seed5Value=[]
                        for (let h=0; h<seed5.length; h++) {
                            seed5Value.push(seed5[h].innerHTML)
                        }


                        for (let i = 0; i < team5Value.length; i++) {
                            if (i % 2 == 0) {
                                if (seed5Value[i] > finalFourTeams538[i + 1].Seed) {
                                    upsetArraySilver5.push(team5Value[i])
                                }

                                else {
                                    upsetArraySilver5.push(team5Value[i + 1])
                                }

                            }
                        }


                        silverTeamsRound5 = []
                        for (let x = 0; x < championshipTeams538.length; x++) {
                            silverTeamsRound5.push(championshipTeams538[x].Team)
                        }


                        //console.log(team3Value)
                        //console.log(upsetArraySilver2)


                        const bonusTeamsSilver5 = silverTeamsRound5.filter(r => upsetArraySilver5.includes(r))
                        team6Value=[]
                        for (let p=0; p<team6.length; p++) {
                            team6Value.push(team6[p].innerHTML)
                        }
                        const myTeamsSilver5 = team6Value.filter(r => bonusTeamsSilver5.includes(r))
                        totalBonusPersonal5 = myTeamsSilver5.length * ptsRound5[1].bonus

                        //console.log(totalBonusPersonal5)



                        seed6Value=[]
                        for (let h=0; h<seed6.length; h++) {
                            seed6Value.push(seed6[h].innerHTML)
                        }


                        for (let i = 0; i < team6Value.length; i++) {
                            if (i % 2 == 0) {
                                if (seed6Value[i] > championshipTeams538[i + 1].Seed) {
                                    upsetArraySilver6.push(team6Value[i])
                                }

                                else {
                                    upsetArraySilver6.push(team6Value[i + 1])
                                }

                            }
                        }


                        silverTeamsRound6 = []
                        for (let x = 0; x < winningTeam538.length; x++) {
                            silverTeamsRound6.push(winningTeam538[x].Team)
                        }


                        //console.log(team3Value)
                        //console.log(upsetArraySilver2)


                        const bonusTeamsSilver6 = silverTeamsRound6.filter(r => upsetArraySilver6.includes(r))
                        team7Value=[]
                        for (let p=0; p<team7.length; p++) {
                            team7Value.push(team7[p].innerHTML)
                        }
                        const myTeamsSilver6 = team7Value.filter(r => bonusTeamsSilver6.includes(r))
                        totalBonusPersonal6 = myTeamsSilver6.length * ptsRound6[1].bonus

                        // console.log(totalBonusPersonal6)




                        for (let i = 0; i < team2Value.length; i++) {
                            if (team2Value[i] == firstRoundWinners538[i].Team) {
                                totalPointsPersonal = ptsRound1[0].winPoints + totalPointsPersonal

                            }
                        }

                        totalPointsPersonal = totalPointsPersonal + totalBonusPersonal1




                        for (let i = 0; i < team3Value.length; i++) {

                            if (team3Value[i] == secondRoundWinners538[i].Team) {
                                totalPointsPersonal = ptsRound2[0].winPoints + totalPointsPersonal

                            }
                        }


                        totalPointsPersonal = totalPointsPersonal + totalBonusPersonal2

                        for (let i = 0; i < team4Value.length; i++) {

                            if (team4Value[i] == thirdRoundWinners538[i].Team) {
                                totalPointsPersonal = ptsRound3[0].winPoints + totalPointsPersonal

                            }
                        }

                        totalPointsPersonal = totalPointsPersonal + totalBonusPersonal3

                        for (let i = 0; i < team5Value.length; i++) {

                            if (team5Value[i] == finalFourTeams538[i].Team) {
                                totalPointsPersonal = ptsRound4[0].winPoints + totalPointsPersonal

                            }
                        }


                        totalPointsPersonal = totalPointsPersonal + totalBonusPersonal4

                        for (let i = 0; i < team6Value.length; i++) {

                            if (team6Value[i] == championshipTeams538[i].Team) {
                                totalPointsPersonal = ptsRound5[0].winPoints + totalPointsPersonal

                            }
                        }


                        totalPointsPersonal = totalPointsPersonal + totalBonusPersonal5

                        for (let i = 0; i < team7Value.length; i++) {

                            if (team7Value[i] == winningTeam538[i].Team) {
                                totalPointsPersonal = ptsRound6[0].winPoints + totalPointsPersonal

                            }
                        }
                    }

                    totalPointsPersonal = totalPointsPersonal + totalBonusPersonal6

                    personalScore()
                    //console.log(totalPointsPersonal)




                    //track if popular picks entered in correctly


                    for (let k = 0; k < participants; k++) {


                        let round1OddsTrackPop = 0
                        let round2OddsTrackPop = 0
                        let round3OddsTrackPop = 0
                        let round4OddsTrackPop = 0
                        let round5OddsTrackPop = 0
                        let round6OddsTrackPop = 0

                        function popPicksValidOdds() {
                            for (var i = 0; i < yahooData.length; i++) {
                                round1OddsTrackPop = round1OddsTrackPop + yahooData[i].Round1
                                round2OddsTrackPop = round2OddsTrackPop + yahooData[i].Round2
                                round3OddsTrackPop = round3OddsTrackPop + yahooData[i].Round3
                                round4OddsTrackPop = round4OddsTrackPop + yahooData[i].Round4
                                round5OddsTrackPop = round5OddsTrackPop + yahooData[i].Round5
                                round6OddsTrackPop = round6OddsTrackPop + yahooData[i].Round6
                            }

                            if (round1OddsTrackPop < 31.5 || round1OddsTrackPop > 32.5) {
                                alert("Popular picks Round 1 odds must total 32")
                                throw ("Re-submit odds")
                            }
                            if (round2OddsTrackPop < 15.75 || round2OddsTrackPop > 16.25) {
                                alert("Popular picks Round 2 odds must total 16")
                                throw ("Re-submit odds")
                            }
                            if (round3OddsTrackPop < 7.8 || round3OddsTrackPop > 8.2) {
                                alert("Popular picks Round 3 odds must total 8")
                                throw ("Re-submit odds")
                            }
                            if (round4OddsTrackPop < 3.9 || round4OddsTrackPop > 4.1) {
                                alert("Popular picks Round 4 odds must total 4")
                                throw ("Re-submit odds")
                            }
                            if (round5OddsTrackPop < 1.95 || round5OddsTrackPop > 2.05) {
                                alert("Popular picks Round 5 odds must total 2")
                                throw ("Re-submit odds")
                            }
                            if (round6OddsTrackPop < .97 || round6OddsTrackPop > 1.03) {
                                alert("Popular picks Round 6 odds must total 1")
                                throw ("Re-submit odds")
                            }

                            //console.log(round1OddsTrackPop)

                        }

                        popPicksValidOdds()


                        let champOddsEveryTeam = []
                        function hundredPercentChamp() {
                            for (var i = 0; i < yahooData.length; i++) {
                                champOddsEveryTeam.push((yahooData[i].Round6))
                            }
                        }

                        hundredPercentChamp()



                        firstRoundWinners = []
                        secondRoundWinners = []
                        thirdRoundWinners = []
                        finalFourTeams = []
                        championshipTeams = []
                        winningTeam = []
                        totalTeams = []


                        for (var i = 0; i < yahooData.length; i++) {

                            totalTeams.push(yahooData[i].Team)
                        }




                        function firstRound() {

                            upsetArray1 = []

                            for (let i = 0; i < yahooData.length; i++) {

                                if (i % 2 == 0) {
                                    let ranNum1 = Math.random()
                                    //console.log(ranNum)
                                    if (ranNum1 <= yahooData[i].Round1) {
                                        firstRoundWinners.push(yahooData[i])

                                        if (yahooData[i].Seed > yahooData[i + 1].Seed) {
                                            upsetArray1.push(yahooData[i].Team)
                                        }


                                    }

                                    else {
                                        firstRoundWinners.push(yahooData[i + 1])

                                        if (yahooData[i].Seed < yahooData[i + 1].Seed) {
                                            upsetArray1.push(yahooData[i + 1].Team)
                                        }

                                    }

                                    ranNum1 = Math.random()
                                    //console.log(ranNum)
                                }

                            }


                            firstRoundWinners538Teams = []
                            for (let m = 0; m < firstRoundWinners538.length; m++) {
                                firstRoundWinners538Teams.push(firstRoundWinners538[m].Team)
                            }

                            const bonusTeams1 = firstRoundWinners538Teams.filter(r => upsetArray1.includes(r))
                            ptsRound1[2].totalBonus = bonusTeams1.length * ptsRound1[1].bonus


                        }

                        firstRound()



                        //why do I need to start at -1 instead of 0
                        function secondRound() {
                            upsetArray2 = []

                            for (let i = -1; i < firstRoundWinners.length; i++) {

                                if (i % 2 == 0) {
                                    let ranNum = Math.random()

                                    if (ranNum <= ((firstRoundWinners[i].Round2)/((firstRoundWinners[i].Round2)+(firstRoundWinners[i+1].Round2)))) {
                                        secondRoundWinners.push(firstRoundWinners[i])
                                        if (firstRoundWinners[i].Seed > firstRoundWinners538[i + 1].Seed) {
                                            upsetArray2.push(firstRoundWinners[i].Team)
                                        }
                                    }

                                    else {
                                        secondRoundWinners.push(firstRoundWinners[i + 1])
                                        if (firstRoundWinners538[i].Seed < firstRoundWinners[i + 1].Seed) {
                                            upsetArray2.push(firstRoundWinners[i + 1].Team)
                                        }

                                    }

                                    ranNum = Math.random()


                                }

                            }


                            secondRoundWinners538Teams = []
                            for (let m = 0; m < secondRoundWinners538.length; m++) {
                                secondRoundWinners538Teams.push(secondRoundWinners538[m].Team)
                            }

                            const bonusTeams2 = secondRoundWinners538Teams.filter(r => upsetArray2.includes(r))
                            ptsRound2[2].totalBonus = bonusTeams2.length * ptsRound2[1].bonus


                        }


                        secondRound()




                        function thirdRound() {
                            upsetArray3 = []

                            for (let i = -1; i < secondRoundWinners.length; i++) {

                                if (i % 2 == 0) {
                                    let ranNum3 = Math.random()

                                    if (ranNum3 <= ((secondRoundWinners[i].Round3)/((secondRoundWinners[i].Round3)+(secondRoundWinners[i+1].Round3)))) {
                                        thirdRoundWinners.push(secondRoundWinners[i])
                                        if (secondRoundWinners[i].Seed > secondRoundWinners538[i + 1].Seed) {
                                            upsetArray3.push(secondRoundWinners[i].Team)
                                        }
                                    }

                                    else {
                                        thirdRoundWinners.push(secondRoundWinners[i + 1])
                                        if (secondRoundWinners538[i].Seed < secondRoundWinners[i + 1].Seed) {
                                            upsetArray3.push(secondRoundWinners[i + 1].Team)

                                        }
                                    }

                                    ranNum3 = Math.random()

                                }

                            }


                            thirdRoundWinners538Teams = []
                            for (let m = 0; m < thirdRoundWinners538.length; m++) {
                                thirdRoundWinners538Teams.push(thirdRoundWinners538[m].Team)
                            }

                            const bonusTeams3 = thirdRoundWinners538Teams.filter(r => upsetArray3.includes(r))
                            ptsRound3[2].totalBonus = bonusTeams3.length * ptsRound3[1].bonus


                        }


                        thirdRound()






                        function FourthRound() {

                            upsetArray4 = []

                            for (let i = -1; i < thirdRoundWinners.length; i++) {

                                if (i % 2 == 0) {
                                    let ranNum4 = Math.random()

                                    if (ranNum4 <= ((thirdRoundWinners[i].Round4)/((thirdRoundWinners[i].Round4)+(thirdRoundWinners[i+1].Round4)))) {
                                        finalFourTeams.push(thirdRoundWinners[i])

                                        if (thirdRoundWinners[i].Seed > thirdRoundWinners538[i + 1].Seed) {
                                            upsetArray4.push(thirdRoundWinners[i].Team)
                                        }

                                    }

                                    else {
                                        finalFourTeams.push(thirdRoundWinners[i + 1])

                                        if (thirdRoundWinners538[i].Seed < thirdRoundWinners[i + 1].Seed) {
                                            upsetArray4.push(thirdRoundWinners[i + 1].Team)
                                        }


                                    }

                                    ranNum4 = Math.random()

                                }

                            }
                            finalFourTeams538Teams = []
                            for (let m = 0; m < finalFourTeams538.length; m++) {
                                finalFourTeams538Teams.push(finalFourTeams538[m].Team)
                            }
                            //console.log(finalFourTeams538Teams)
                            //console.log(upsetArray4)
                            const bonusTeams4 = finalFourTeams538Teams.filter(r => upsetArray4.includes(r))
                            //console.log(bonusTeams4)
                            ptsRound4[2].totalBonus = bonusTeams4.length * ptsRound4[1].bonus

                        }




                        FourthRound()



                        function FifthRound() {
                            upsetArray5 = []

                            for (let i = -1; i < finalFourTeams.length; i++) {

                                if (i % 2 == 0) {
                                    let ranNum5 = Math.random()

                                    if (ranNum5 <= ((finalFourTeams[i].Round5)/((finalFourTeams[i].Round5)+(finalFourTeams[i+1].Round5)))) {
                                        championshipTeams.push(finalFourTeams[i])
                                        if (finalFourTeams[i].Seed > finalFourTeams538[i + 1].Seed) {
                                            upsetArray5.push(finalFourTeams[i].Team)
                                        }
                                    }

                                    else {
                                        championshipTeams.push(finalFourTeams[i + 1])
                                        if (finalFourTeams538[i].Seed < finalFourTeams[i + 1].Seed) {
                                            upsetArray5.push(finalFourTeams[i + 1].Team)
                                        }

                                    }

                                    ranNum5 = Math.random()

                                }

                            }


                            championshipTeams538Teams = []
                            for (let m = 0; m < championshipTeams538.length; m++) {
                                championshipTeams538Teams.push(championshipTeams538[m].Team)
                            }

                            const bonusTeams5 = championshipTeams538Teams.filter(r => upsetArray5.includes(r))
                            ptsRound5[2].totalBonus = bonusTeams5.length * ptsRound5[1].bonus


                        }


                        FifthRound()






                        function SixthRound() {
                            upsetArray6 = []

                            for (let i = -1; i < championshipTeams.length; i++) {

                                if (i % 2 == 0) {
                                    let ranNum6 = Math.random()

                                    if (ranNum6 <= ((championshipTeams[i].Round6)/((championshipTeams[i].Round6)+(championshipTeams[i+1].Round6)))) {
                                        winningTeam.push(championshipTeams[i])
                                        if (championshipTeams[i].Seed > championshipTeams538[i + 1].Seed) {
                                            upsetArray6.push(championshipTeams[i].Team)
                                        }
                                    }

                                    else {
                                        winningTeam.push(championshipTeams[i + 1])
                                        if (championshipTeams538[i].Seed < championshipTeams[i + 1].Seed) {
                                            upsetArray6.push(championshipTeams[i + 1].Team)
                                        }

                                    }

                                    ranNum6 = Math.random()

                                }

                            }

                            winningTeam538Teams = []
                            for (let m = 0; m < winningTeam538.length; m++) {
                                winningTeam538Teams.push(winningTeam538[m].Team)
                            }

                            const bonusTeams6 = winningTeam538Teams.filter(r => upsetArray6.includes(r))
                            ptsRound6[2].totalBonus = bonusTeams6.length * ptsRound6[1].bonus



                        }


                        SixthRound()
        


                        totalPoints = 0

                        function tourneyPoints() {
                            for (let i = 0; i < firstRoundWinners.length; i++) {
                                if (firstRoundWinners[i].Team == firstRoundWinners538[i].Team) {
                                    totalPoints = ptsRound1[0].winPoints + totalPoints

                                }

                            }


                            //console.log(finalFourTeams)
                            totalPoints = totalPoints + ptsRound1[2].totalBonus
                            //console.log(ptsRound4[2].totalBonus)

                            //console.log(totalPoints)

                            for (let i = 0; i < secondRoundWinners.length; i++) {
                                if (secondRoundWinners[i].Team == secondRoundWinners538[i].Team) {

                                    totalPoints = ptsRound2[0].winPoints + totalPoints
                                }

                            }
                            //console.log(ptsRound2[2].totalBonus)

                            //console.log(totalPoints)
                            totalPoints = totalPoints + ptsRound2[2].totalBonus

                            for (let i = 0; i < thirdRoundWinners.length; i++) {
                                if (thirdRoundWinners[i].Team == thirdRoundWinners538[i].Team) {
                                    totalPoints = ptsRound3[0].winPoints + totalPoints
                                }

                            }

                            //console.log(totalPoints)
                            totalPoints = totalPoints + ptsRound3[2].totalBonus

                            for (let i = 0; i < finalFourTeams.length; i++) {
                                if (finalFourTeams[i].Team == finalFourTeams538[i].Team) {
                                    totalPoints = ptsRound4[0].winPoints + totalPoints
                                }


                            }

                            //console.log(totalPoints)
                            totalPoints = totalPoints + ptsRound4[2].totalBonus

                            for (let i = 0; i < championshipTeams.length; i++) {
                                if (championshipTeams[i].Team == championshipTeams538[i].Team) {
                                    totalPoints = ptsRound5[0].winPoints + totalPoints
                                }



                            }

                            //console.log(totalPoints)
                            totalPoints = totalPoints + ptsRound5[2].totalBonus

                            for (let i = 0; i < winningTeam.length; i++) {
                                if (winningTeam[i].Team == winningTeam538[i].Team) {
                                    totalPoints = ptsRound6[0].winPoints + totalPoints
                                }

                            }

                            totalPoints = totalPoints + ptsRound6[2].totalBonus

                            // console.log(totalPoints)




                            standingsArray.push(totalPoints)


                            totalPoints = 0
                            ptsRound1[2].totalBonus = 0
                            ptsRound2[2].totalBonus = 0
                            ptsRound3[2].totalBonus = 0
                            ptsRound4[2].totalBonus = 0
                            ptsRound5[2].totalBonus = 0
                            ptsRound6[2].totalBonus = 0


                        }



                        tourneyPoints()


                    }

                    //console.log(totalPointsPersonal)
                    standingsArray.push(totalPointsPersonal)
                    standingsArray.sort(function (a, b) { return b - a });
                    //console.log(standingsArray.indexOf(totalPointsPersonal)+1)
                    //console.log(standingsArray)


                    if ((standingsArray.indexOf(totalPointsPersonal) + 1) == 1) {
                        firstPlaceFinishes = firstPlaceFinishes + 1
                    }

                    if ((standingsArray.indexOf(totalPointsPersonal) + 1) == 2) {
                        secondPlaceFinishes = secondPlaceFinishes + 1
                    }

                    if ((standingsArray.indexOf(totalPointsPersonal) + 1) == 3) {
                        thirdPlaceFinishes = thirdPlaceFinishes + 1
                    }

                    if ((standingsArray.indexOf(totalPointsPersonal) + 1) == 1 || (standingsArray.indexOf(totalPointsPersonal) + 1) == 2 || (standingsArray.indexOf(totalPointsPersonal) + 1) == 3) {
                        medalFinishes = medalFinishes + 1
                    }

                    regularFinish=(1/(participants))
                    



                }

                //console.log(firstPlaceFinishes)
                //console.log(medalFinishes)
                
                firstDescription.innerHTML=("Percent chance this bracket finishes in first: ")
                firstPercentage.innerHTML=(firstPlaceFinishes/simulations *100).toFixed(2) + "%"
                if (firstPlaceFinishes/simulations>.05) {
                    firstPercentage.style.color='green'
                }

                else {
                    firstPercentage.style.color='red'
                }

                medalDescription.innerHTML=("Percent chance this bracket finishes in the top 3: ")
                medalPercentage.innerHTML=(medalFinishes/simulations *100).toFixed(2) + "%"
                if (medalFinishes/simulations>.15) {
                    medalPercentage.style.color='green'
                }

                else {
                    medalPercentage.style.color='red'
                }

                let secondPercentage=secondPlaceFinishes/simulations
                let thirdPercentage=thirdPlaceFinishes/simulations
                let expectedPrize = (((participants * fee  * winner1 * (firstPlaceFinishes/simulations))+ (participants * fee * winner2 * (secondPlaceFinishes/simulations))+ (participants * fee * winner3 * (thirdPlaceFinishes/simulations)))-fee)

                prizeDescription.innerHTML=("Prize winning expected value: ")
                prizeWinnings.innerHTML=("$"+expectedPrize.toFixed(2))
                if (expectedPrize>fee) {
                    prizeWinnings.style.color='green'
                }

                else {
                    prizeWinnings.style.color='red'
                }

                regularDescription.innerHTML=("Percent chance a random bracket in this pool finishes in first: ")
                regularPercentage.innerHTML=(regularFinish *100).toFixed(2) + "%"
                if (regularFinish>.05) {
                    regularPercentage.style.color='green'
                }

                else {
                    regularPercentage.style.color='red'
                }


                firstPlaceFinishes=0
                secondPlaceFinishes=0
                thirdPlaceFinishes=0
                medalFinishes=0
                regularFinish=0
            


    }

            }

            )
        
                    )

        )

    // .catch(e => {
    //     console.log("You have an error");
    //     load538()
    //     return e;
    // })





}



load538()


// counter=0
// for (i=0; i<5000000; i++) {
//     for (j=0; j<150; j++) {
//         counter=counter+1
//     }
// }

// console.log(counter)

