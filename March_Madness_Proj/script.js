let body=document.querySelector("body")
let empty=document.querySelector(".empty")
let fiveThreeEight=document.querySelector(".fiveThreeEight")
let teams=document.querySelector(".teams")
let popPicks=document.querySelector(".popPicks")
var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
fiveThirtyEightURL = 'https://marchmadnessapi.herokuapp.com/api/538Tournament'
teamsURL='https://marchmadnessapi.herokuapp.com/'
popPicksURL='https://marchmadnessapi.herokuapp.com/api/popPicksTournament'


fiveThreeEight.addEventListener("click", function() { load538('fiveThree')});
teams.addEventListener("click", function() { load538('teams')});
//popPicks.addEventListener("click", function() { load538('popPick')});

popPicks.addEventListener("click", function() { loadpopPicks()});

//click PopPicks button first now to load in pop picks API before clicking on FiveThirtyEight

function loadpopPicks() {
   fetch(
       proxyUrl + popPicksURL) 
   .then(woof => woof.json())
   
   .then(YCST => {
       write = JSON.stringify(YCST, null, 2);
       console.log(write)
       console.log(YCST)
       yahooData = YCST[0].Bracket
       console.log(yahooData)
       console.log(yahooData.length)
       empty.innerHTML=write //worked bofore with yahooData (just displayed object[object])
   })
}


 function load538(x,y) {
     if (x=='teams') {
        y=teamsURL
     }
     //if (x=='popPick') {
       // y=popPicksURL
     //}
     if (x=='fiveThree') {
        y=fiveThirtyEightURL
     }
    fetch(
        proxyUrl + y) 
    .then(blob => blob.json())
    
    .then(json => {
        scraping = JSON.stringify(json, null, 2);
        console.log(scraping)
        console.log(json)
        silverData = json[0].Bracket
        console.log(silverData)
        console.log(silverData.length)
        empty.innerHTML=scraping
        
        
        
        let entryFee=5
        let participants=150
        let pot=entryFee*participants
        //all arbitrary values- goal is to finish as high in standings as possible
        //change window widths for different screen sizes
        let firstPrize= (.75*participants*entryFee)
        let secondPrize= (.2*participants*entryFee)
        let thirdPrize= (.05*participants*entryFee)
        let bracket1='x' 
        let bracket2='y'
        //needs some editing
        let winnings=firstPrize*bracket1-entryFee
        let simulations=5
        
        //let user input their bracket to see how it would do and also put in ideal brackets 
        
        console.log(firstPrize)
        
        let ptsRound1=[
            {points:2},
            {bonus:3}
        ]
        
        let ptsRound2=[
            {points:2},
            {bonus:3}
        ]
        
        let ptsRound3=[
            {points:4},
            {bonus:3}
        ]
        
        let ptsRound4=[
            {points:4},
            {bonus:3}
        ]
        
        let ptsRound5=[
            {points:8},
            {bonus:0}
        ]
        
        let ptsRound16=[
            {points:16},
            {bonus:0}
        ]
        
             
        console.log(silverData[0].Round6)
        
        //track if silverData picks entered in correctly
        
        
        let round1OddsTrack=0
        let round2OddsTrack=0
        let round3OddsTrack=0
        let round4OddsTrack=0
        let round5OddsTrack=0
        let round6OddsTrack=0
        
        
        function fiveThirtyEightValidOdds () {
            for (var i=0; i<silverData.length; i++) {
                round1OddsTrack=round1OddsTrack+silverData[i].Round1
                round2OddsTrack=round2OddsTrack+silverData[i].Round2
                round3OddsTrack=round3OddsTrack+silverData[i].Round3
                round4OddsTrack=round4OddsTrack+silverData[i].Round4
                round5OddsTrack=round5OddsTrack+silverData[i].Round5
                round6OddsTrack=round6OddsTrack+silverData[i].Round6
            }
        
                if (round1OddsTrack<31.5 || round1OddsTrack>32.5) {
                alert("Round 1 odds must total 32")
                throw new error("Re-submit odds")
            }
                if (round2OddsTrack<15.75 || round2OddsTrack>16.25) {
                alert ("Round 2 odds must total 16")
                throw ("Re-submit odds")
            } 
                if (round3OddsTrack<7.8 || round3OddsTrack>8.2) {
                alert ("Round 3 odds must total 8")
                throw ("Re-submit odds")
            }
                if (round4OddsTrack<3.9 || round4OddsTrack>4.1) {
                alert ("Round 4 odds must total 4")
                throw ("Re-submit odds")
            }
                if (round5OddsTrack<1.95 || round5OddsTrack>2.05) {
                alert ("Round 5 odds must total 2")
                throw ("Re-submit odds")
            }
                if (round6OddsTrack<.97 || round6OddsTrack>1.03) {
                alert ("Round 6 odds must total 1")
                throw ("Re-submit odds")
            }
        
            console.log(round1OddsTrack)
              
         }
             
         fiveThirtyEightValidOdds()
        
        
            console.log(yahooData[0].Round6)
        
        //track if popular picks entered in correctly
        
        
        let round1OddsTrackPop=0
        let round2OddsTrackPop=0
        let round3OddsTrackPop=0
        let round4OddsTrackPop=0
        let round5OddsTrackPop=0
        let round6OddsTrackPop=0
        
        function popPicksValidOdds () {
            for (var i=0; i<yahooData.length; i++) {
                round1OddsTrackPop=round1OddsTrackPop+yahooData[i].Round1
                round2OddsTrackPop=round2OddsTrackPop+yahooData[i].Round2
                round3OddsTrackPop=round3OddsTrackPop+yahooData[i].Round3
                round4OddsTrackPop=round4OddsTrackPop+yahooData[i].Round4
                round5OddsTrackPop=round5OddsTrackPop+yahooData[i].Round5
                round6OddsTrackPop=round6OddsTrackPop+yahooData[i].Round6
            }
        
                if (round1OddsTrackPop<31.5 || round1OddsTrackPop>32.5) {
                alert ("Popular picks Round 1 odds must total 32")
                throw ("Re-submit odds")
            }
                if (round2OddsTrackPop<15.75 || round2OddsTrackPop>16.25) {
                alert ("Popular picks Round 2 odds must total 16")
                throw ("Re-submit odds")
            } 
                if (round3OddsTrackPop<7.8 || round3OddsTrackPop>8.2) {
                alert ("Popular picks Round 3 odds must total 8")
                throw ("Re-submit odds")
            }
                if (round4OddsTrackPop<3.9 || round4OddsTrackPop>4.1) {
                alert ("Popular picks Round 4 odds must total 4")
                throw ("Re-submit odds")
            }
                if (round5OddsTrackPop<1.95 || round5OddsTrackPop>2.05) {
                alert ("Popular picks Round 5 odds must total 2")
                throw ("Re-submit odds")
            }
                if (round6OddsTrackPop<.97 || round6OddsTrackPop>1.03) {
                alert ("Popular picks Round 6 odds must total 1")
                throw ("Re-submit odds")
            }
        
            console.log(round1OddsTrackPop)
        
         }
             
         popPicksValidOdds()
        
        
        //Win the game- returns true or false
        
         function probability (roundOdds) {
             for (var i=0; i<simulations; i++)
            console.count(Math.random() <= roundOdds)
        };
        
        probability(yahooData[0].Round6)
        
               
        var champ=[]
        var total=0
        function champion() {
        for(var i=0; i<yahooData.length; i++) {
            champ.push((yahooData[i].Round6))
            total=total+yahooData[i].Round6
        }
        }
        
        champion()
        
        champ
        
        total
        
        
        
        //if number is less than champ[0], pick champ[0], else if between champ[0] and champ [1], pick champ 1...
        
        //count number of times 1 champ was picked
        //for (var i=0; i<200; i++) {
        winnerArray=[]
        
        function chooseWinner() {
        
        while (winnerArray.length < 1) {
               
        for (var i=0; i<champ.length;i++) {
            if(Math.random() <= champ[i]) {
                winnerArray.push(yahooData[i].Team)
            
            if (winnerArray.length>1) {
                winnerArray=[]
            }    
        
        }
        
        }}}
        
        
        chooseWinner()
        console.log(winnerArray)
        //}
        
        
        //count number of times Duke was picked
        
        
        //use filter method or for each or for loop to eliminate teams that can't possbily advance now that winner is set  
        
        
        return json;
        
    })
    .catch(e => {
      console.log("You have an error");
      return e;
    });
 }





