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
popPicks.addEventListener("click", function() { load538('popPick')});


 function load538(x,y) {
     if (x=='teams') {
        y=teamsURL
     }
     if (x=='popPick') {
        y=popPicksURL
     }
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
        
        
        
        
        
        let popularPicks = [
        
            {Team:"	Duke	" ,Seed:	1	 ,Region:"	East	" ,Round1:	0.994	 ,Round2:	0.977	 ,Round3:	0.932	 ,Round4:	0.768	 ,Round5:	0.629	 ,Round6:	0.461	},
        {Team:"	Virginia	" ,Seed:	1	 ,Region:"	South	" ,Round1:	0.985	 ,Round2:	0.934	 ,Round3:	0.799	 ,Round4:	0.445	 ,Round5:	0.182	 ,Round6:	0.067	},
        {Team:"	Gonzaga	" ,Seed:	1	 ,Region:"	West	" ,Round1:	0.988	 ,Round2:	0.879	 ,Round3:	0.704	 ,Round4:	0.462	 ,Round5:	0.146	 ,Round6:	0.09	},
        {Team:"	North Carolina	" ,Seed:	1	 ,Region:"	Midwest	" ,Round1:	0.985	 ,Round2:	0.959	 ,Round3:	0.843	 ,Round4:	0.624	 ,Round5:	0.449	 ,Round6:	0.164	},
        {Team:"	Michigan State	" ,Seed:	2	 ,Region:"	East	" ,Round1:	0.982	 ,Round2:	0.888	 ,Round3:	0.734	 ,Round4:	0.166	 ,Round5:	0.098	 ,Round6:	0.047	},
        {Team:"	Kentucky	" ,Seed:	2	 ,Region:"	Midwest	" ,Round1:	0.982	 ,Round2:	0.902	 ,Round3:	0.684	 ,Round4:	0.228	 ,Round5:	0.136	 ,Round6:	0.042	},
        {Team:"	Tennessee	" ,Seed:	2	 ,Region:"	South	" ,Round1:	0.973	 ,Round2:	0.855	 ,Round3:	0.622	 ,Round4:	0.349	 ,Round5:	0.115	 ,Round6:	0.033	},
        {Team:"	Michigan	" ,Seed:	2	 ,Region:"	West	" ,Round1:	0.981	 ,Round2:	0.833	 ,Round3:	0.615	 ,Round4:	0.295	 ,Round5:	0.061	 ,Round6:	0.029	},
        {Team:"	Texas Tech	" ,Seed:	3	 ,Region:"	West	" ,Round1:	0.953	 ,Round2:	0.688	 ,Round3:	0.242	 ,Round4:	0.091	 ,Round5:	0.013	 ,Round6:	0.005	},
        {Team:"	Purdue	" ,Seed:	3	 ,Region:"	South	" ,Round1:	0.911	 ,Round2:	0.477	 ,Round3:	0.158	 ,Round4:	0.062	 ,Round5:	0.015	 ,Round6:	0.004	},
        {Team:"	Virginia Tech	" ,Seed:	4	 ,Region:"	East	" ,Round1:	0.898	 ,Round2:	0.695	 ,Round3:	0.043	 ,Round4:	0.015	 ,Round5:	0.005	 ,Round6:	0.002	},
        {Team:"	Auburn	" ,Seed:	5	 ,Region:"	Midwest	" ,Round1:	0.819	 ,Round2:	0.407	 ,Round3:	0.054	 ,Round4:	0.022	 ,Round5:	0.009	 ,Round6:	0.003	},
        {Team:"	Houston	" ,Seed:	3	 ,Region:"	Midwest	" ,Round1:	0.93	 ,Round2:	0.641	 ,Round3:	0.201	 ,Round4:	0.058	 ,Round5:	0.022	 ,Round6:	0.006	},
        {Team:"	Florida State	" ,Seed:	4	 ,Region:"	West	" ,Round1:	0.913	 ,Round2:	0.623	 ,Round3:	0.179	 ,Round4:	0.074	 ,Round5:	0.011	 ,Round6:	0.004	},
        {Team:"	Kansas	" ,Seed:	4	 ,Region:"	Midwest	" ,Round1:	0.91	 ,Round2:	0.52	 ,Round3:	0.077	 ,Round4:	0.033	 ,Round5:	0.017	 ,Round6:	0.006	},
        {Team:"	Iowa State	" ,Seed:	6	 ,Region:"	Midwest	" ,Round1:	0.722	 ,Round2:	0.255	 ,Round3:	0.059	 ,Round4:	0.011	 ,Round5:	0.004	 ,Round6:	0.001	},
        {Team:"	Wisconsin	" ,Seed:	5	 ,Region:"	South	" ,Round1:	0.6	 ,Round2:	0.319	 ,Round3:	0.06	 ,Round4:	0.018	 ,Round5:	0.005	 ,Round6:	0.002	},
        {Team:"	Villanova	" ,Seed:	6	 ,Region:"	South	" ,Round1:	0.81	 ,Round2:	0.453	 ,Round3:	0.156	 ,Round4:	0.066	 ,Round5:	0.019	 ,Round6:	0.006	},
        {Team:"	Kansas State	" ,Seed:	4	 ,Region:"	South	" ,Round1:	0.789	 ,Round2:	0.43	 ,Round3:	0.078	 ,Round4:	0.025	 ,Round5:	0.005	 ,Round6:	0.002	},
        {Team:"	Louisiana State	" ,Seed:	3	 ,Region:"	East	" ,Round1:	0.848	 ,Round2:	0.594	 ,Round3:	0.161	 ,Round4:	0.026	 ,Round5:	0.01	 ,Round6:	0.004	},
        {Team:"	Cincinnati	" ,Seed:	7	 ,Region:"	South	" ,Round1:	0.643	 ,Round2:	0.095	 ,Round3:	0.035	 ,Round4:	0.01	 ,Round5:	0.002	 ,Round6:	0.001	},
        {Team:"	Louisville	" ,Seed:	7	 ,Region:"	East	" ,Round1:	0.677	 ,Round2:	0.083	 ,Round3:	0.042	 ,Round4:	0.006	 ,Round5:	0.002	 ,Round6:	0.001	},
        {Team:"	Nevada	" ,Seed:	7	 ,Region:"	West	" ,Round1:	0.485	 ,Round2:	0.096	 ,Round3:	0.042	 ,Round4:	0.011	 ,Round5:	0.002	 ,Round6:	0.001	},
        {Team:"	Maryland	" ,Seed:	6	 ,Region:"	East	" ,Round1:	0.69	 ,Round2:	0.254	 ,Round3:	0.04	 ,Round4:	0.005	 ,Round5:	0.002	 ,Round6:	0.001	},
        {Team:"	Buffalo	" ,Seed:	6	 ,Region:"	West	" ,Round1:	0.788	 ,Round2:	0.255	 ,Round3:	0.062	 ,Round4:	0.014	 ,Round5:	0.002	 ,Round6:	0.001	},
        {Team:"	Mississippi State	" ,Seed:	5	 ,Region:"	East	" ,Round1:	0.76	 ,Round2:	0.229	 ,Round3:	0.009	 ,Round4:	0.003	 ,Round5:	0.001	 ,Round6:	0	},
        {Team:"	Marquette	" ,Seed:	5	 ,Region:"	West	" ,Round1:	0.578	 ,Round2:	0.23	 ,Round3:	0.041	 ,Round4:	0.013	 ,Round5:	0.003	 ,Round6:	0.001	},
        {Team:"	Wofford	" ,Seed:	7	 ,Region:"	Midwest	" ,Round1:	0.522	 ,Round2:	0.059	 ,Round3:	0.021	 ,Round4:	0.005	 ,Round5:	0.002	 ,Round6:	0.001	},
        {Team:"	Syracuse	" ,Seed:	8	 ,Region:"	West	" ,Round1:	0.64	 ,Round2:	0.091	 ,Round3:	0.044	 ,Round4:	0.019	 ,Round5:	0.003	 ,Round6:	0.002	},
        {Team:"	Florida	" ,Seed:	10	 ,Region:"	West	" ,Round1:	0.512	 ,Round2:	0.063	 ,Round3:	0.026	 ,Round4:	0.006	 ,Round5:	0.002	 ,Round6:	0.001	},
        {Team:"	Ohio State	" ,Seed:	11	 ,Region:"	Midwest	" ,Round1:	0.272	 ,Round2:	0.083	 ,Round3:	0.015	 ,Round4:	0.005	 ,Round5:	0.002	 ,Round6:	0.001	},
        {Team:"	Oklahoma	" ,Seed:	9	 ,Region:"	South	" ,Round1:	0.553	 ,Round2:	0.037	 ,Round3:	0.018	 ,Round4:	0.003	 ,Round5:	0.001	 ,Round6:	0	},
        {Team:"	Iowa	" ,Seed:	10	 ,Region:"	South	" ,Round1:	0.351	 ,Round2:	0.037	 ,Round3:	0.01	 ,Round4:	0.004	 ,Round5:	0.002	 ,Round6:	0.002	},
        {Team:"	Belmont	" ,Seed:	11	 ,Region:"	East	" ,Round1:	0.308	 ,Round2:	0.109	 ,Round3:	0.007	 ,Round4:	0.001	 ,Round5:	0	 ,Round6:	0	},
        {Team:"	Arizona State	" ,Seed:	11	 ,Region:"	West	" ,Round1:	0.209	 ,Round2:	0.041	 ,Round3:	0.006	 ,Round4:	0.002	 ,Round5:	0.001	 ,Round6:	0	},
        {Team:"	Oregon	" ,Seed:	12	 ,Region:"	South	" ,Round1:	0.394	 ,Round2:	0.185	 ,Round3:	0.026	 ,Round4:	0.007	 ,Round5:	0.002	 ,Round6:	0.001	},
        {Team:"	Seton Hall	" ,Seed:	10	 ,Region:"	Midwest	" ,Round1:	0.471	 ,Round2:	0.031	 ,Round3:	0.011	 ,Round4:	0.002	 ,Round5:	0.001	 ,Round6:	0	},
        {Team:"	Saint Mary's (CA)	" ,Seed:	11	 ,Region:"	South	" ,Round1:	0.184	 ,Round2:	0.051	 ,Round3:	0.009	 ,Round4:	0.002	 ,Round5:	0.001	 ,Round6:	0	},
        {Team:"	Utah State	" ,Seed:	8	 ,Region:"	Midwest	" ,Round1:	0.53	 ,Round2:	0.016	 ,Round3:	0.006	 ,Round4:	0.002	 ,Round5:	0.001	 ,Round6:	0	},
        {Team:"	Mississippi	" ,Seed:	8	 ,Region:"	South	" ,Round1:	0.441	 ,Round2:	0.021	 ,Round3:	0.007	 ,Round4:	0.002	 ,Round5:	0.001	 ,Round6:	0	},
        {Team:"	Virginia Commonwealth	" ,Seed:	8	 ,Region:"	East	" ,Round1:	0.403	 ,Round2:	0.008	 ,Round3:	0.003	 ,Round4:	0.001	 ,Round5:	0	 ,Round6:	0	},
        {Team:"	Washington	" ,Seed:	9	 ,Region:"	Midwest	" ,Round1:	0.464	 ,Round2:	0.017	 ,Round3:	0.007	 ,Round4:	0.003	 ,Round5:	0.001	 ,Round6:	0.001	},
        {Team:"	Minnesota	" ,Seed:	10	 ,Region:"	East	" ,Round1:	0.321	 ,Round2:	0.022	 ,Round3:	0.007	 ,Round4:	0.001	 ,Round5:	0.001	 ,Round6:	0	},
        {Team:"	Murray State	" ,Seed:	12	 ,Region:"	West	" ,Round1:	0.419	 ,Round2:	0.122	 ,Round3:	0.016	 ,Round4:	0.005	 ,Round5:	0.001	 ,Round6:	0	},
        {Team:"	Central Florida	" ,Seed:	9	 ,Region:"	East	" ,Round1:	0.596	 ,Round2:	0.011	 ,Round3:	0.005	 ,Round4:	0.001	 ,Round5:	0.001	 ,Round6:	0	},
        {Team:"	New Mexico State	" ,Seed:	12	 ,Region:"	Midwest	" ,Round1:	0.175	 ,Round2:	0.051	 ,Round3:	0.004	 ,Round4:	0.001	 ,Round5:	0	 ,Round6:	0	},
        {Team:"	Baylor	" ,Seed:	9	 ,Region:"	West	" ,Round1:	0.357	 ,Round2:	0.025	 ,Round3:	0.01	 ,Round4:	0.004	 ,Round5:	0.001	 ,Round6:	0	},
        {Team:"	Vermont	" ,Seed:	13	 ,Region:"	West	" ,Round1:	0.084	 ,Round2:	0.021	 ,Round3:	0.003	 ,Round4:	0.001	 ,Round5:	0	 ,Round6:	0	},
        {Team:"	Northeastern	" ,Seed:	13	 ,Region:"	Midwest	" ,Round1:	0.084	 ,Round2:	0.017	 ,Round3:	0.003	 ,Round4:	0.001	 ,Round5:	0.001	 ,Round6:	0	},
        {Team:"	Liberty	" ,Seed:	12	 ,Region:"	East	" ,Round1:	0.238	 ,Round2:	0.041	 ,Round3:	0.002	 ,Round4:	0.001	 ,Round5:	0	 ,Round6:	0	},
        {Team:"	UC-Irvine	" ,Seed:	13	 ,Region:"	South	" ,Round1:	0.205	 ,Round2:	0.06	 ,Round3:	0.007	 ,Round4:	0.002	 ,Round5:	0.001	 ,Round6:	0	},
        {Team:"	Yale	" ,Seed:	14	 ,Region:"	East	" ,Round1:	0.151	 ,Round2:	0.04	 ,Round3:	0.006	 ,Round4:	0.002	 ,Round5:	0.001	 ,Round6:	0.001	},
        {Team:"	Northern Kentucky	" ,Seed:	14	 ,Region:"	West	" ,Round1:	0.045	 ,Round2:	0.013	 ,Round3:	0.003	 ,Round4:	0.001	 ,Round5:	0	 ,Round6:	0	},
        {Team:"	Saint Louis	" ,Seed:	13	 ,Region:"	East	" ,Round1:	0.1	 ,Round2:	0.033	 ,Round3:	0.002	 ,Round4:	0.001	 ,Round5:	0	 ,Round6:	0	},
        {Team:"	Old Dominion	" ,Seed:	14	 ,Region:"	South	" ,Round1:	0.083	 ,Round2:	0.014	 ,Round3:	0.003	 ,Round4:	0.001	 ,Round5:	0	 ,Round6:	0	},
        {Team:"	Georgia State	" ,Seed:	14	 ,Region:"	Midwest	" ,Round1:	0.064	 ,Round2:	0.015	 ,Round3:	0.003	 ,Round4:	0.001	 ,Round5:	0	 ,Round6:	0	},
        {Team:"	Montana	" ,Seed:	15	 ,Region:"	West	" ,Round1:	0.016	 ,Round2:	0.005	 ,Round3:	0.002	 ,Round4:	0.001	 ,Round5:	0	 ,Round6:	0	},
        {Team:"	Colgate	" ,Seed:	15	 ,Region:"	South	" ,Round1:	0.021	 ,Round2:	0.008	 ,Round3:	0.004	 ,Round4:	0.001	 ,Round5:	0	 ,Round6:	0	},
        {Team:"	Bradley	" ,Seed:	15	 ,Region:"	East	" ,Round1:	0.017	 ,Round2:	0.006	 ,Round3:	0.002	 ,Round4:	0.001	 ,Round5:	0	 ,Round6:	0	},
        {Team:"	Gardner-Webb	" ,Seed:	16	 ,Region:"	South	" ,Round1:	0.01	 ,Round2:	0.004	 ,Round3:	0.002	 ,Round4:	0.001	 ,Round5:	0	 ,Round6:	0	},
        {Team:"	Abilene Christian	" ,Seed:	15	 ,Region:"	Midwest	" ,Round1:	0.012	 ,Round2:	0.005	 ,Round3:	0.002	 ,Round4:	0.001	 ,Round5:	0	 ,Round6:	0	},
        {Team:"	Iona	" ,Seed:	16	 ,Region:"	Midwest	" ,Round1:	0.009	 ,Round2:	0.004	 ,Round3:	0.002	 ,Round4:	0.001	 ,Round5:	0	 ,Round6:	0	},
        {Team:"	North Dakota State	" ,Seed:	16	 ,Region:"	East	" ,Round1:	0.006	 ,Round2:	0.002	 ,Round3:	0.001	 ,Round4:	0.001	 ,Round5:	0	 ,Round6:	0	},
        {Team:"	Fairleigh Dickinson	" ,Seed:	16	 ,Region:"	West	" ,Round1:	0.01	 ,Round2:	0.003	 ,Round3:	0.002	 ,Round4:	0.001	 ,Round5:	0	 ,Round6:	0	}
                
            ]
        
        
            console.log(popularPicks[0].Round6)
        
        //track if popular picks entered in correctly
        
        
        let round1OddsTrackPop=0
        let round2OddsTrackPop=0
        let round3OddsTrackPop=0
        let round4OddsTrackPop=0
        let round5OddsTrackPop=0
        let round6OddsTrackPop=0
        
        function popPicksValidOdds () {
            for (var i=0; i<popularPicks.length; i++) {
                round1OddsTrackPop=round1OddsTrackPop+popularPicks[i].Round1
                round2OddsTrackPop=round2OddsTrackPop+popularPicks[i].Round2
                round3OddsTrackPop=round3OddsTrackPop+popularPicks[i].Round3
                round4OddsTrackPop=round4OddsTrackPop+popularPicks[i].Round4
                round5OddsTrackPop=round5OddsTrackPop+popularPicks[i].Round5
                round6OddsTrackPop=round6OddsTrackPop+popularPicks[i].Round6
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
        
        probability(popularPicks[0].Round6)
        
        
        
        var champ=[]
        var total=0
        function champion() {
        for(var i=0; i<popularPicks.length; i++) {
            champ.push((popularPicks[i].Round6))
            total=total+popularPicks[i].Round6
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
                winnerArray.push(popularPicks[i].Team)
            
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





