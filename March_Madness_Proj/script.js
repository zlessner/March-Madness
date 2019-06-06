let body = document.querySelector("body")
let empty = document.querySelector(".empty")
let fiveThreeEight = document.querySelector(".fiveThreeEight")
let teams = document.querySelector(".teams")
let popPicks = document.querySelector(".popPicks")
var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
fiveThirtyEightURL = 'https://marchmadnessapi.herokuapp.com/api/538Tournament'
popPicksURL = 'https://marchmadnessapi.herokuapp.com/api/popPicksTournament'

let entryFee = 5
let participants = 150
let pot = entryFee * participants
//all arbitrary values- goal is to finish as high in standings as possible
//change window widths for different screen sizes
let firstPrize = (.75 * participants * entryFee)
let secondPrize = (.2 * participants * entryFee)
let thirdPrize = (.05 * participants * entryFee)
let bracket1 = 'x'
let bracket2 = 'y'
//needs some editing
let winnings = firstPrize * bracket1 - entryFee
let simulations = 5


let ptsRound1 = [
    { points: 2 },
    { bonus: 3 }
]

let ptsRound2 = [
    { points: 2 },
    { bonus: 3 }
]

let ptsRound3 = [
    { points: 4 },
    { bonus: 3 }
]

let ptsRound4 = [
    { points: 4 },
    { bonus: 3 }
]

let ptsRound5 = [
    { points: 8 },
    { bonus: 0 }
]

let ptsRound6 = [
    { points: 16 },
    { bonus: 0 }
]

//load all 3 APIs whatever way before running functionality
//crud funtionality in new api where user can store results of simulation


//fiveThreeEight.addEventListener("click", function () { load538('fiveThree') });



//popPicks.addEventListener("click", function () { loadpopPicks() });

function load538() {
    fetch(
        proxyUrl + fiveThirtyEightURL)
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
            //console.log(silverData)
            // console.log(silverData[0].Round1)
            // console.log(silverData.length)
            // empty.innerHTML = scraping



           //track if fivethirtyEightData picks entered in correctly


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



           firstRoundWinners538=[]



           let champOddsEveryTeam538 = []
           function hundredPercentChamp538() {
               for (var i = 0; i < silverData.length; i++) {
                   champOddsEveryTeam538.push((silverData[i].Round6))
               }
           }

           hundredPercentChamp538()



           function firstRound538() {

            for (let i = 0; i < silverData.length; i++) {

                if (i%2==0) {
                    let ranNumber1= Math.random()
                    //console.log(ranNum)
                if (ranNumber1 <= silverData[i].Round1) {
                    firstRoundWinners538.push(silverData[i])
                }

                else {
                    firstRoundWinners538.push(silverData[i+1])
                }

                ranNumber1= Math.random()
                //console.log(ranNum)
        }
        
    }
}  

        firstRound538()


console.log(firstRoundWinners538)




        })
        .catch(e => {
            console.log("You have an error");
            return e;
        });



}

load538()



function loadpopPicks() {
    fetch(
        proxyUrl + popPicksURL)
        .then(woof => woof.json())

        .then(YCST => {
            write = JSON.stringify(YCST, null, 2);
            //console.log(write)
            yahooData = []
            regionData=[]
            for (var i = 0; i < YCST[0].Bracket.length; i++) {
                for (var j = 0; j < YCST[0].Bracket[i].Schools.length; j++) {
                    yahooData.push(YCST[0].Bracket[i].Schools[j])
                    regionData.push(YCST[0].Bracket[i].Region)
                }
                //newBracket=Object.assign({}, yahooData, {})
                //trying to clone yahooData variable into new var in order to splice off winner data

                //    newBracket1=Array.prototype.slice.call(newBracket);
            }
            //console.log(yahooData)
            //    console.log(newBracket)
            //    console.log(newBracket1)




            //let user input their bracket to see how it would do and also put in ideal brackets 

            //console.log(firstPrize)




            //console.log(yahooData[0].Round6)



            //console.log(yahooData[0].Round6)

            //track if popular picks entered in correctly


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


            //if number is less than champOddsEveryTeam[0], pick champOddsEveryTeam[0], else if between champOddsEveryTeam[0] and champOddsEveryTeam [1], pick champOddsEveryTeam 1...

            //count number of times 1 champOddsEveryTeam was picked
            //for (var i=0; i<200; i++) {
            winnerArray = []
            winnerOdds = []

            function chooseWinner() {

                while (winnerArray.length < 1) {

                    for (var i = 0; i < champOddsEveryTeam.length; i++) {
                        if (Math.random() <= champOddsEveryTeam[i]) {
                            winnerArray.push(yahooData[i].Team)
                            winnerOdds.push(champOddsEveryTeam[i])
                            //newBracket[i].splice()
                            //console.log(yahooData)
                            //console.log(winnerOdds)

                            //if two teams get selected, start process over again to pick one team
                            if (winnerArray.length > 1) {
                                winnerArray = []
                            }

                        }

                    }
                }
            }


//Assign ID's to each side of bracket and then break down and more granular as rounds get bigger and bigger?

            chooseWinner()

            runnerUpArray = []
            runnerOdds = []

            function chooseRunnerUp() {
                while (runnerUpArray.length < 1) {

                    for (var i = 0; i < champOddsEveryTeam.length; i++) {
                        if (Math.random() <= champOddsEveryTeam[i]) {
                            runnerUpArray.push(yahooData[i].Team)
                            runnerOdds.push(champOddsEveryTeam[i])


                            //if two teams get selected, start process over again to pick one team or winner array equals runner up array
                            if (runnerUpArray.length > 1) {
                                runnerUpArray = []
                            }


                            for (let j=0; j<32; j++) {
                                if (i==j) {
                                    runnerUpArray = []
                                }
                            }

                        }

                    }
                }
            }


            chooseRunnerUp()
            //  console.log(winnerArray)
            //  console.log(runnerUpArray)

             firstRoundWinners=[]
             secondRoundWinners=[]
             thirdRoundWinners=[]
             finalFourTeams=[]
             championshipTeams=[]
             winningTeam=[]
             totalTeams=[]

             for (var i = 0; i < yahooData.length; i++) {

                totalTeams.push(yahooData[i].Team)
             }
//find a way to print everything on dom

            for (var i = 0; i < yahooData.length; i++) {
                teamList = yahooData[i].Team
                start = document.createElement('p');
                start.innerHTML = teamList
                empty.appendChild(start)
                //console.log(winnerArray)
                //console.log(teamList)
                


                if (winnerArray == teamList) {
                    for (var j = 0; j < 5; j++) {
                        win = document.createElement('span');
                        win.innerHTML = " " + teamList + " "
                        start.appendChild(win)
                    }
                }

                // if (runnerUpArray == teamList) {
                //     for (var j = 0; j < 4; j++) {
                //         win = document.createElement('span');
                //         win.innerHTML = " " + teamList + " "
                //         start.appendChild(win)
                //     }
                // }

                //   if (firstRoundWinners[i] == teamList) {
                //     for (var j = 0; j < 2; j++) {
                //         win = document.createElement('span');
                //         win.innerHTML = " " + teamList + " "
                //         start.appendChild(win)
                //     }
                // }

                

            }
            

            function firstRound() {

                for (let i = 0; i < yahooData.length; i++) {

                    if (i%2==0) {
                        let ranNum1= Math.random()
                        //console.log(ranNum)
                    if (ranNum1 <= yahooData[i].Round1) {
                        firstRoundWinners.push(yahooData[i])
                    }

                    else {
                        firstRoundWinners.push(yahooData[i+1])
                    }

                    ranNum1= Math.random()
                    //console.log(ranNum)
            }
            
        }
    }  

            firstRound()



            //why do I need to start at -1 instead of 0
            function secondRound () {

                for (let i = -1; i < firstRoundWinners.length; i++) {

                    if (i%2==0) {
                        let ranNum= Math.random()
  
                    if (ranNum <= firstRoundWinners[i].Round2) {
                        secondRoundWinners.push(firstRoundWinners[i])
                    }

                    else if ((ranNum > firstRoundWinners[i].Round2) && (ranNum <= (firstRoundWinners[i].Round2 + firstRoundWinners[i+1].Round2))) {
                        secondRoundWinners.push(firstRoundWinners[i+1])

                    }

                    else {
                        secondRoundWinners=[]
                        i=-1 
                    }

                    ranNum= Math.random()


            }
            
        }

            }


            secondRound()




            function thirdRound () {

                for (let i = -1; i < secondRoundWinners.length; i++) {

                    if (i%2==0) {
                        let ranNum3= Math.random()
  
                    if (ranNum3 <= secondRoundWinners[i].Round3) {
                        thirdRoundWinners.push(secondRoundWinners[i])
                    }

                    else if ((ranNum3 > secondRoundWinners[i].Round3) && (ranNum3 <= (secondRoundWinners[i].Round3 + secondRoundWinners[i+1].Round3))) {
                        thirdRoundWinners.push(secondRoundWinners[i+1])

                    }

                    else {
                        thirdRoundWinners=[]
                        i=-1 
                    }

                    ranNum3= Math.random()

            }
            
        }

            }


            thirdRound()






            function FourthRound () {

                for (let i = -1; i < thirdRoundWinners.length; i++) {

                    if (i%2==0) {
                        let ranNum4= Math.random()
  
                    if (ranNum4 <= thirdRoundWinners[i].Round4) {
                        finalFourTeams.push(thirdRoundWinners[i])
                    }

                    else if ((ranNum4 > thirdRoundWinners[i].Round4) && (ranNum4 <= (thirdRoundWinners[i].Round4 + thirdRoundWinners[i+1].Round4))) {
                        finalFourTeams.push(thirdRoundWinners[i+1])

                    }

                    else {
                        finalFourTeams=[]
                        i=-1 
                    }

                    ranNum4= Math.random()

            }
            
        }

            }


            FourthRound()




            function FifthRound () {

                for (let i = -1; i < finalFourTeams.length; i++) {

                    if (i%2==0) {
                        let ranNum5= Math.random()
  
                    if (ranNum5 <= finalFourTeams[i].Round5) {
                        championshipTeams.push(finalFourTeams[i])
                    }

                    else if ((ranNum5 > finalFourTeams[i].Round5) && (ranNum5 <= (finalFourTeams[i].Round5 + finalFourTeams[i+1].Round5))) {
                        championshipTeams.push(finalFourTeams[i+1])

                    }

                    else {
                        championshipTeams=[]
                        i=-1 
                    }

                    ranNum5= Math.random()

            }
            
        }

            }


            FifthRound()






            function SixthRound () {

                for (let i = -1; i < championshipTeams.length; i++) {

                    if (i%2==0) {
                        let ranNum6= Math.random()
  
                    if (ranNum6 <= championshipTeams[i].Round6) {
                        winningTeam.push(championshipTeams[i])
                    }

                    else if ((ranNum6 > championshipTeams[i].Round6) && (ranNum6 <= (championshipTeams[i].Round6 + champOddsEveryTeam[i+1].Round6))) {
                        winningTeam.push(championshipTeams[i+1])

                    }

                    else {
                        winningTeam=[]
                        i=-1 
                    }

                    ranNum6= Math.random()

            }
            
        }

            }


            SixthRound()

        
            






//writes out a bunch of Abelein Christian

            //     for (var i = 0; i < firstRoundWinners.length; i++) {

            //         for (var j = 0; j < 2; j++) {
            //             win = document.createElement('span');
            //             win.innerHTML = " " + teamList + " "
            //             start.appendChild(win)
            //         }
                
            //     console.log(firstRoundWinners[i])
            // }

console.log(firstRoundWinners)
console.log(secondRoundWinners)
console.log(thirdRoundWinners)
console.log(finalFourTeams)
console.log(championshipTeams)
console.log(winningTeam)

            //}




            //count number of times Duke was picked

            //make test to see if pick odds are accurate for picking each game 


            //use filter method or for each or for loop to eliminate teams that can't possbily advance now that winner is set  




        })


        .catch(e => {
            console.log("You have an error");
            return e;
        });
}


loadpopPicks()



