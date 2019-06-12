let body = document.querySelector("body")
let empty = document.querySelector(".empty")
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

let fiveThreeEight = document.querySelector(".fiveThreeEight")
let teams = document.querySelector(".teams")
let popPicks = document.querySelector(".popPicks")
var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
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
let simulations = 20
firstPlaceFinishes = 0

upsetArray1 = []
upsetArray2 = []
upsetArray3 = []
upsetArray4 = []
upsetArray5 = []
upsetArray6 = []



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


myBracketRound1 = ['Duke', 'Central Florida', 'Virginia Tech', 'Mississippi State', 'Maryland', 'Louisiana State', 'Minnesota', 'Michigan State', 'Gonzaga', 'Baylor', 'Florida State', 'Murray State', 'Arizona State', 'Texas Tech', 'Florida', 'Michigan', 'Virginia', 'Oklahoma', 'UC-Irvine', 'Oregon', 'Villanova', 'Purdue', 'Iowa', 'Tennessee', 'North Carolina', 'Washington', 'Kansas', 'Auburn', 'Iowa State', 'Houston', 'Seton Hall', 'Kentucky']
myBracketRound2 = ['Duke', 'Mississippi State', 'Maryland', 'Michigan State', 'Gonzaga', 'Florida State', 'Texas Tech', 'Michigan', 'Virginia', 'Oregon', 'Villanova', 'Tennessee', 'North Carolina', 'Auburn', 'Iowa State', 'Kentucky']
myBracketRound3 = ['Duke', 'Michigan State', 'Gonzaga', 'Texas Tech', 'Virginia', 'Tennessee', 'North Carolina', 'Kentucky']
myBracketRound4 = ['Michigan State', 'Gonzaga', 'Virginia', 'North Carolina']
myBracketRound5 = ['Gonzaga', 'Virginia']
myBracketRound6 = ['Gonzaga']

myBracketRound1Seed = [1, 9, 4, 5, 6, 3, 10, 2, 1, 9, 4, 14, 11, 3, 10, 2, 1, 9, 13, 12, 6, 3, 10, 2, 1, 9, 4, 5, 6, 3, 10, 2]
myBracketRound2Seed = [1, 5, 6, 2, 1, 4, 3, 2, 1, 12, 6, 2, 1, 5, 6, 2]
myBracketRound3Seed = [1, 2, 1, 3, 1, 2, 1, 2]
myBracketRound4Seed = [2, 1, 1, 1]
myBracketRound5Seed = [1, 1]
myBracketRound6Seed = [1]

standingsArray = []


let ptsRound1 = [
    { winPoints: 2 },
    { bonus: 3 },
    { totalBonus: 0 }
]

let ptsRound2 = [
    { winPoints: 2 },
    { bonus: 3 },
    { totalBonus: 0 }
]

let ptsRound3 = [
    { winPoints: 4 },
    { bonus: 3 },
    { totalBonus: 0 }
]

let ptsRound4 = [
    { winPoints: 4 },
    { bonus: 3 },
    { totalBonus: 0 }
]

let ptsRound5 = [
    { winPoints: 8 },
    { bonus: 0 },
    { totalBonus: 0 }
]

let ptsRound6 = [
    { winPoints: 16 },
    { bonus: 0 },
    { totalBonus: 0 }
]

//load all 3 APIs whatever way before running functionality
//crud funtionality in new api where user can store results of simulation
//429 too many requests heroku error still a problem

//fiveThreeEight.addEventListener("click", function () { load538('fiveThree') });



//popPicks.addEventListener("click", function () { loadpopPicks() });



function load538() {
    fetch(
        //proxyUrl + 
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
        //console.log(silverData)
        // console.log(silverData[0].Round1)
        // console.log(silverData.length)
        // empty.innerHTML = scraping



        //track if fivethirtyEightData picks entered in correctly
        //run standings of 150 or so partcipants over and over for a large sample of times to find out the bracket that usually places highest
        //put winPoints associated with pop pick bracket sims with 538 results from sim



        .then((fetch(
            //proxyUrl + 
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
                //newBracket=Object.assign({}, yahooData, {})
                //trying to clone yahooData variable into new var in order to splice off winner data

                //    newBracket1=Array.prototype.slice.call(newBracket);

                //console.log(yahooData)
                //    console.log(newBracket)
                //    console.log(newBracket1) 
            }
            )




            .then(() => {

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
                    function hundredPercentChamp538() {
                        for (var i = 0; i < silverData.length; i++) {
                            champOddsEveryTeam538.push((silverData[i].Round6))
                        }
                    }

                    hundredPercentChamp538()



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

                                if (ranNumber2 <= firstRoundWinners538[i].Round2) {
                                    secondRoundWinners538.push(firstRoundWinners538[i])
                                }

                                else if ((ranNumber2 > firstRoundWinners538[i].Round2) && (ranNumber2 <= (firstRoundWinners538[i].Round2 + firstRoundWinners538[i + 1].Round2))) {
                                    secondRoundWinners538.push(firstRoundWinners538[i + 1])

                                }

                                else {
                                    secondRoundWinners538 = []
                                    i = -1
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

                                if (ranNumber3 <= secondRoundWinners538[i].Round3) {
                                    thirdRoundWinners538.push(secondRoundWinners538[i])
                                }

                                else if ((ranNumber3 > secondRoundWinners538[i].Round3) && (ranNumber3 <= (secondRoundWinners538[i].Round3 + secondRoundWinners538[i + 1].Round3))) {
                                    thirdRoundWinners538.push(secondRoundWinners538[i + 1])

                                }

                                else {
                                    thirdRoundWinners538 = []
                                    i = -1
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

                                if (ranNumber4 <= thirdRoundWinners538[i].Round4) {
                                    finalFourTeams538.push(thirdRoundWinners538[i])
                                }

                                else if ((ranNumber4 > thirdRoundWinners538[i].Round4) && (ranNumber4 <= (thirdRoundWinners538[i].Round4 + thirdRoundWinners538[i + 1].Round4))) {
                                    finalFourTeams538.push(thirdRoundWinners538[i + 1])

                                }

                                else {
                                    finalFourTeams538 = []
                                    i = -1
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

                                if (ranNumber5 <= finalFourTeams538[i].Round5) {
                                    championshipTeams538.push(finalFourTeams538[i])
                                }

                                else if ((ranNumber5 > finalFourTeams538[i].Round5) && (ranNumber5 <= (finalFourTeams538[i].Round5 + finalFourTeams538[i + 1].Round5))) {
                                    championshipTeams538.push(finalFourTeams538[i + 1])

                                }

                                else {
                                    championshipTeams538 = []
                                    i = -1
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

                                if (ranNumber6 <= championshipTeams538[i].Round6) {
                                    winningTeam538.push(championshipTeams538[i])
                                }

                                else if ((ranNumber6 > championshipTeams538[i].Round6) && (ranNumber6 <= (championshipTeams538[i].Round6 + championshipTeams538[i + 1].Round6))) {
                                    winningTeam538.push(championshipTeams538[i + 1])

                                }

                                else {
                                    winningTeam538 = []
                                    i = -1
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

                        const myTeamsSilver1 = myBracketRound1.filter(r => bonusTeamsSilver1.includes(r))
                        totalBonusPersonal1 = myTeamsSilver1.length * ptsRound1[1].bonus

                        //console.log(totalBonusPersonal1)





                        for (let i = 0; i < myBracketRound1.length; i++) {
                            if (i % 2 == 0) {
                                if (myBracketRound1Seed[i] > firstRoundWinners538[i + 1].Seed) {
                                    upsetArraySilver2.push(myBracketRound1[i])
                                }

                                else {
                                    upsetArraySilver2.push(myBracketRound1[i + 1])
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

                        const myTeamsSilver2 = myBracketRound2.filter(r => bonusTeamsSilver2.includes(r))
                        totalBonusPersonal2 = myTeamsSilver2.length * ptsRound2[1].bonus

                        //console.log(totalBonusPersonal2)







                        for (let i = 0; i < myBracketRound2.length; i++) {
                            if (i % 2 == 0) {
                                if (myBracketRound2Seed[i] > secondRoundWinners538[i + 1].Seed) {
                                    upsetArraySilver3.push(myBracketRound2[i])
                                }

                                else {
                                    upsetArraySilver3.push(myBracketRound2[i + 1])
                                }

                            }
                        }


                        silverTeamsRound3 = []
                        for (let x = 0; x < thirdRoundWinners538.length; x++) {
                            silverTeamsRound3.push(thirdRoundWinners538[x].Team)
                        }


                        //console.log(myBracketRound2)
                        //console.log(upsetArraySilver2)


                        const bonusTeamsSilver3 = silverTeamsRound3.filter(r => upsetArraySilver3.includes(r))

                        const myTeamsSilver3 = myBracketRound3.filter(r => bonusTeamsSilver3.includes(r))
                        totalBonusPersonal3 = myTeamsSilver3.length * ptsRound3[1].bonus

                        //console.log(totalBonusPersonal3)







                        for (let i = 0; i < myBracketRound3.length; i++) {
                            if (i % 2 == 0) {
                                if (myBracketRound3Seed[i] > thirdRoundWinners538[i + 1].Seed) {
                                    upsetArraySilver4.push(myBracketRound3[i])
                                }

                                else {
                                    upsetArraySilver4.push(myBracketRound3[i + 1])
                                }

                            }
                        }


                        silverTeamsRound4 = []
                        for (let x = 0; x < finalFourTeams538.length; x++) {
                            silverTeamsRound4.push(finalFourTeams538[x].Team)
                        }


                        //console.log(myBracketRound2)
                        //console.log(upsetArraySilver2)


                        const bonusTeamsSilver4 = silverTeamsRound4.filter(r => upsetArraySilver4.includes(r))

                        const myTeamsSilver4 = myBracketRound4.filter(r => bonusTeamsSilver4.includes(r))
                        totalBonusPersonal4 = myTeamsSilver4.length * ptsRound4[1].bonus

                        //console.log(totalBonusPersonal4)







                        for (let i = 0; i < myBracketRound4.length; i++) {
                            if (i % 2 == 0) {
                                if (myBracketRound4Seed[i] > finalFourTeams538[i + 1].Seed) {
                                    upsetArraySilver5.push(myBracketRound4[i])
                                }

                                else {
                                    upsetArraySilver5.push(myBracketRound4[i + 1])
                                }

                            }
                        }


                        silverTeamsRound5 = []
                        for (let x = 0; x < championshipTeams538.length; x++) {
                            silverTeamsRound5.push(championshipTeams538[x].Team)
                        }


                        //console.log(myBracketRound2)
                        //console.log(upsetArraySilver2)


                        const bonusTeamsSilver5 = silverTeamsRound5.filter(r => upsetArraySilver5.includes(r))

                        const myTeamsSilver5 = myBracketRound5.filter(r => bonusTeamsSilver5.includes(r))
                        totalBonusPersonal5 = myTeamsSilver5.length * ptsRound5[1].bonus

                        //console.log(totalBonusPersonal5)






                        for (let i = 0; i < myBracketRound5.length; i++) {
                            if (i % 2 == 0) {
                                if (myBracketRound5Seed[i] > championshipTeams538[i + 1].Seed) {
                                    upsetArraySilver6.push(myBracketRound5[i])
                                }

                                else {
                                    upsetArraySilver6.push(myBracketRound5[i + 1])
                                }

                            }
                        }


                        silverTeamsRound6 = []
                        for (let x = 0; x < winningTeam538.length; x++) {
                            silverTeamsRound6.push(winningTeam538[x].Team)
                        }


                        //console.log(myBracketRound2)
                        //console.log(upsetArraySilver2)


                        const bonusTeamsSilver6 = silverTeamsRound6.filter(r => upsetArraySilver6.includes(r))

                        const myTeamsSilver6 = myBracketRound6.filter(r => bonusTeamsSilver6.includes(r))
                        totalBonusPersonal6 = myTeamsSilver6.length * ptsRound6[1].bonus

                        // console.log(totalBonusPersonal6)







                        for (let i = 0; i < myBracketRound1.length; i++) {
                            if (myBracketRound1[i] == firstRoundWinners538[i].Team) {
                                totalPointsPersonal = ptsRound1[0].winPoints + totalPointsPersonal

                            }
                        }

                        totalPointsPersonal = totalPointsPersonal + totalBonusPersonal1








                        for (let i = 0; i < myBracketRound2.length; i++) {

                            if (myBracketRound2[i] == secondRoundWinners538[i].Team) {
                                totalPointsPersonal = ptsRound2[0].winPoints + totalPointsPersonal

                            }
                        }


                        totalPointsPersonal = totalPointsPersonal + totalBonusPersonal2

                        for (let i = 0; i < myBracketRound3.length; i++) {

                            if (myBracketRound3[i] == thirdRoundWinners538[i].Team) {
                                totalPointsPersonal = ptsRound3[0].winPoints + totalPointsPersonal

                            }
                        }

                        totalPointsPersonal = totalPointsPersonal + totalBonusPersonal3

                        for (let i = 0; i < myBracketRound4.length; i++) {

                            if (myBracketRound4[i] == finalFourTeams538[i].Team) {
                                totalPointsPersonal = ptsRound4[0].winPoints + totalPointsPersonal

                            }
                        }


                        totalPointsPersonal = totalPointsPersonal + totalBonusPersonal4

                        for (let i = 0; i < myBracketRound5.length; i++) {

                            if (myBracketRound5[i] == championshipTeams538[i].Team) {
                                totalPointsPersonal = ptsRound5[0].winPoints + totalPointsPersonal

                            }
                        }


                        totalPointsPersonal = totalPointsPersonal + totalBonusPersonal5

                        for (let i = 0; i < myBracketRound6.length; i++) {

                            if (myBracketRound6[i] == winningTeam538[i].Team) {
                                totalPointsPersonal = ptsRound6[0].winPoints + totalPointsPersonal

                            }
                        }
                    }

                    totalPointsPersonal = totalPointsPersonal + totalBonusPersonal6

                    personalScore()
                    //console.log(totalPointsPersonal)



                    // console.log(firstRoundWinners538)
                    // console.log(secondRoundWinners538)
                    // console.log(thirdRoundWinners538)
                    // console.log(finalFourTeams538)
                    // console.log(championshipTeams538)
                    // console.log(winningTeam538)



                    //console.log(seedArray)

                    // for (var l = 0; l < seedArray.length; l++) {
                    //     seedList = yahooData[l].Seed



                    //empty.appendChild(seedArray)
                    //seed.innerHTML = seedList
                    //seed.appendChild(seedList)
                    //console.log(winnerArray)
                    //console.log(teamList)


                    //}


                    // for (var i = 0; i < yahooData.length; i++) {
                    //     teamList = yahooData[i].Team
                    //     start = document.createElement('p');
                    //     start.innerHTML = teamList
                    //     empty.appendChild(start)

                    //let user input their bracket to see how it would do and also put in ideal brackets 

                    //console.log(firstPrize)




                    //console.log(yahooData[0].Round6)



                    //console.log(yahooData[0].Round6)

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


                                        for (let j = 0; j < 32; j++) {
                                            if (i == j) {
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



                        //find a way to print everything on dom



                        // for (var i = 0; i < yahooData.length; i++) {
                        //     teamList = yahooData[i].Team
                        //     start = document.createElement('p');
                        //     start.innerHTML = teamList
                        //     empty.appendChild(start)
                        //     //console.log(winnerArray)
                        //     //console.log(teamList)



                        //     if (winnerArray == teamList) {
                        //         for (var j = 0; j < 5; j++) {
                        //             win = document.createElement('span');
                        //             win.innerHTML = " " + teamList + " "
                        //             start.appendChild(win)
                        //         }
                        //     }




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



                        //}


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

                                    if (ranNum <= firstRoundWinners[i].Round2) {
                                        secondRoundWinners.push(firstRoundWinners[i])
                                        if (firstRoundWinners[i].Seed > firstRoundWinners538[i + 1].Seed) {
                                            upsetArray2.push(firstRoundWinners[i].Team)
                                        }
                                    }

                                    else if ((ranNum > firstRoundWinners[i].Round2) && (ranNum <= (firstRoundWinners[i].Round2 + firstRoundWinners[i + 1].Round2))) {
                                        secondRoundWinners.push(firstRoundWinners[i + 1])
                                        if (firstRoundWinners538[i].Seed < firstRoundWinners[i + 1].Seed) {
                                            upsetArray2.push(firstRoundWinners[i + 1].Team)
                                        }

                                    }

                                    else {
                                        secondRoundWinners = []
                                        i = -1
                                        ptsRound2[2].totalBonus = 0
                                        upsetArray2 = []
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

                                    if (ranNum3 <= secondRoundWinners[i].Round3) {
                                        thirdRoundWinners.push(secondRoundWinners[i])
                                        if (secondRoundWinners[i].Seed > secondRoundWinners538[i + 1].Seed) {
                                            upsetArray3.push(secondRoundWinners[i].Team)
                                        }
                                    }

                                    else if ((ranNum3 > secondRoundWinners[i].Round3) && (ranNum3 <= (secondRoundWinners[i].Round3 + secondRoundWinners[i + 1].Round3))) {
                                        thirdRoundWinners.push(secondRoundWinners[i + 1])
                                        if (secondRoundWinners538[i].Seed < secondRoundWinners[i + 1].Seed) {
                                            upsetArray3.push(secondRoundWinners[i + 1].Team)

                                        }
                                    }

                                    else {
                                        thirdRoundWinners = []
                                        i = -1
                                        ptsRound3[2].totalBonus = 0
                                        upsetArray3 = []
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

                                    if (ranNum4 <= thirdRoundWinners[i].Round4) {
                                        finalFourTeams.push(thirdRoundWinners[i])

                                        if (thirdRoundWinners[i].Seed > thirdRoundWinners538[i + 1].Seed) {
                                            upsetArray4.push(thirdRoundWinners[i].Team)
                                        }

                                    }

                                    else if ((ranNum4 > thirdRoundWinners[i].Round4) && (ranNum4 <= (thirdRoundWinners[i].Round4 + thirdRoundWinners[i + 1].Round4))) {
                                        finalFourTeams.push(thirdRoundWinners[i + 1])

                                        if (thirdRoundWinners538[i].Seed < thirdRoundWinners[i + 1].Seed) {
                                            upsetArray4.push(thirdRoundWinners[i + 1].Team)
                                        }


                                    }



                                    else {
                                        finalFourTeams = []
                                        i = -1
                                        ptsRound4[2].totalBonus = 0
                                        upsetArray4 = []
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

                                    if (ranNum5 <= finalFourTeams[i].Round5) {
                                        championshipTeams.push(finalFourTeams[i])
                                        if (finalFourTeams[i].Seed > finalFourTeams538[i + 1].Seed) {
                                            upsetArray5.push(finalFourTeams[i].Team)
                                        }
                                    }

                                    else if ((ranNum5 > finalFourTeams[i].Round5) && (ranNum5 <= (finalFourTeams[i].Round5 + finalFourTeams[i + 1].Round5))) {
                                        championshipTeams.push(finalFourTeams[i + 1])
                                        if (finalFourTeams538[i].Seed < finalFourTeams[i + 1].Seed) {
                                            upsetArray5.push(finalFourTeams[i + 1].Team)
                                        }

                                    }

                                    else {
                                        championshipTeams = []
                                        i = -1
                                        ptsRound5[2].totalBonus = 0
                                        upsetArray5 = []
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

                                    if (ranNum6 <= championshipTeams[i].Round6) {
                                        winningTeam.push(championshipTeams[i])
                                        if (championshipTeams[i].Seed > championshipTeams538[i + 1].Seed) {
                                            upsetArray6.push(championshipTeams[i].Team)
                                        }
                                    }

                                    else if ((ranNum6 > championshipTeams[i].Round6) && (ranNum6 <= (championshipTeams[i].Round6 + champOddsEveryTeam[i + 1].Round6))) {
                                        winningTeam.push(championshipTeams[i + 1])
                                        if (championshipTeams538[i].Seed < championshipTeams[i + 1].Seed) {
                                            upsetArray6.push(championshipTeams[i + 1].Team)
                                        }

                                    }

                                    else {
                                        winningTeam = []
                                        i = -1
                                        ptsRound6[2].totalBonus = 0
                                        upsetArray6 = []
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









                        //writes out a bunch of Abelein Christian

                        //     for (var i = 0; i < firstRoundWinners.length; i++) {

                        //         for (var j = 0; j < 2; j++) {
                        //             win = document.createElement('span');
                        //             win.innerHTML = " " + teamList + " "
                        //             start.appendChild(win)
                        //         }

                        //     console.log(firstRoundWinners[i])
                        // }

                        // console.log(firstRoundWinners)
                        // console.log(secondRoundWinners)
                        // console.log(thirdRoundWinners)
                        // console.log(finalFourTeams)
                        // console.log(championshipTeams)
                        // console.log(winningTeam)

                        //}




                        //count number of times Duke was picked

                        //make test to see if pick odds are accurate for picking each game 


                        //use filter method or for each or for loop to eliminate teams that can't possbily advance now that winner is set  


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


                    standingsArray = []
                    totalPointsPersonal = 0


                }

                console.log(firstPlaceFinishes)

            for (let j = 0; j < seed.length; j++) {

            seed[j].innerHTML=yahooData[j].Seed
            team[j].innerHTML=yahooData[j].Team


        }
            


for (let q=0; q<team.length; q++) {
 team[q].addEventListener("click", chooseRound);
 seed[q].addEventListener("click", chooseRound);
          function chooseRound(evt) {
            if (team[q].contains(evt.target) || seed[q].contains(evt.target)) {
                team2[Math.floor(q/2)].innerHTML=team[q].innerHTML
                seed2[Math.floor(q/2)].innerHTML=seed[q].innerHTML
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


//just doubling the amount of teams in the array instead of clearing it and starting over

//}




