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

let fiveThirtyEight = [

    {Team:"	Duke	" ,Seed:	1	 ,Region:"	East	" ,Round1:	0.991789442	 ,Round2:	0.908115588	 ,Round3:	0.717264438	 ,Round4:	0.524229344	 ,Round5:	0.321658475	 ,Round6:	0.193334432	},
    {Team:"	Virginia	" ,Seed:	1	 ,Region:"	South	" ,Round1:	0.981433839	 ,Round2:	0.882198803	 ,Round3:	0.726784067	 ,Round4:	0.493112679	 ,Round5:	0.315199717	 ,Round6:	0.172234608	},
    {Team:"	Gonzaga	" ,Seed:	1	 ,Region:"	West	" ,Round1:	0.98918991	 ,Round2:	0.882550424	 ,Round3:	0.714553937	 ,Round4:	0.49504743	 ,Round5:	0.261609939	 ,Round6:	0.147749856	},
    {Team:"	North Carolina	" ,Seed:	1	 ,Region:"	Midwest	" ,Round1:	0.977912625	 ,Round2:	0.862688419	 ,Round3:	0.567248609	 ,Round4:	0.351064506	 ,Round5:	0.178717242	 ,Round6:	0.087316713	},
    {Team:"	Michigan State	" ,Seed:	2	 ,Region:"	East	" ,Round1:	0.964466023	 ,Round2:	0.739581919	 ,Round3:	0.542835477	 ,Round4:	0.224791201	 ,Round5:	0.123678242	 ,Round6:	0.067166883	},
    {Team:"	Kentucky	" ,Seed:	2	 ,Region:"	Midwest	" ,Round1:	0.969115415	 ,Round2:	0.731389742	 ,Round3:	0.473552877	 ,Round4:	0.242296583	 ,Round5:	0.113744476	 ,Round6:	0.05148869	},
    {Team:"	Tennessee	" ,Seed:	2	 ,Region:"	South	" ,Round1:	0.949730551	 ,Round2:	0.688962368	 ,Round3:	0.441466892	 ,Round4:	0.205959064	 ,Round5:	0.110637675	 ,Round6:	0.04996195	},
    {Team:"	Michigan	" ,Seed:	2	 ,Region:"	West	" ,Round1:	0.939970362	 ,Round2:	0.690616653	 ,Round3:	0.395631068	 ,Round4:	0.166022802	 ,Round5:	0.078238193	 ,Round6:	0.040085909	},
    {Team:"	Texas Tech	" ,Seed:	3	 ,Region:"	West	" ,Round1:	0.906052267	 ,Round2:	0.648334068	 ,Round3:	0.34121274	 ,Round4:	0.141156655	 ,Round5:	0.056323408	 ,Round6:	0.025034073	},
    {Team:"	Purdue	" ,Seed:	3	 ,Region:"	South	" ,Round1:	0.880954341	 ,Round2:	0.506146028	 ,Round3:	0.248497224	 ,Round4:	0.102969987	 ,Round5:	0.052164143	 ,Round6:	0.022144049	},
    {Team:"	Virginia Tech	" ,Seed:	4	 ,Region:"	East	" ,Round1:	0.888465655	 ,Round2:	0.617061364	 ,Round3:	0.187703899	 ,Round4:	0.102976697	 ,Round5:	0.044953667	 ,Round6:	0.019771609	},
    {Team:"	Auburn	" ,Seed:	5	 ,Region:"	Midwest	" ,Round1:	0.774212863	 ,Round2:	0.491551426	 ,Round3:	0.209451877	 ,Round4:	0.10957863	 ,Round5:	0.045057709	 ,Round6:	0.018024761	},
    {Team:"	Houston	" ,Seed:	3	 ,Region:"	Midwest	" ,Round1:	0.891457523	 ,Round2:	0.532146811	 ,Round3:	0.234664774	 ,Round4:	0.095596543	 ,Round5:	0.034666721	 ,Round6:	0.012343243	},
    {Team:"	Florida State	" ,Seed:	4	 ,Region:"	West	" ,Round1:	0.790291943	 ,Round2:	0.536401098	 ,Round3:	0.153666053	 ,Round4:	0.072505178	 ,Round5:	0.026997386	 ,Round6:	0.011306507	},
    {Team:"	Kansas	" ,Seed:	4	 ,Region:"	Midwest	" ,Round1:	0.825215986	 ,Round2:	0.382696173	 ,Round3:	0.156335057	 ,Round4:	0.079138098	 ,Round5:	0.027770796	 ,Round6:	0.009591921	},
    {Team:"	Iowa State	" ,Seed:	6	 ,Region:"	Midwest	" ,Round1:	0.672818443	 ,Round2:	0.328697223	 ,Round3:	0.145097609	 ,Round4:	0.059168841	 ,Round5:	0.022819593	 ,Round6:	0.008601787	},
    {Team:"	Wisconsin	" ,Seed:	5	 ,Region:"	South	" ,Round1:	0.600613747	 ,Round2:	0.330328696	 ,Round3:	0.088253984	 ,Round4:	0.037995757	 ,Round5:	0.018055747	 ,Round6:	0.007172178	},
    {Team:"	Villanova	" ,Seed:	6	 ,Region:"	South	" ,Round1:	0.752671355	 ,Round2:	0.390544905	 ,Round3:	0.148670882	 ,Round4:	0.048236918	 ,Round5:	0.020356284	 ,Round6:	0.007164165	},
    {Team:"	Kansas State	" ,Seed:	4	 ,Region:"	South	" ,Round1:	0.766624334	 ,Round2:	0.409934254	 ,Round3:	0.10153103	 ,Round4:	0.041188869	 ,Round5:	0.018410351	 ,Round6:	0.006868172	},
    {Team:"	Louisiana State	" ,Seed:	3	 ,Region:"	East	" ,Round1:	0.844167126	 ,Round2:	0.490698182	 ,Round3:	0.156626336	 ,Round4:	0.037265107	 ,Round5:	0.013234956	 ,Round6:	0.004831416	},
    {Team:"	Cincinnati	" ,Seed:	7	 ,Region:"	South	" ,Round1:	0.676901805	 ,Round2:	0.228691031	 ,Round3:	0.109691831	 ,Round4:	0.036514807	 ,Round5:	0.014440923	 ,Round6:	0.004761396	},
    {Team:"	Louisville	" ,Seed:	7	 ,Region:"	East	" ,Round1:	0.677598713	 ,Round2:	0.194237036	 ,Round3:	0.108708949	 ,Round4:	0.028928764	 ,Round5:	0.010905327	 ,Round6:	0.00420111	},
    {Team:"	Nevada	" ,Seed:	7	 ,Region:"	West	" ,Round1:	0.577826724	 ,Round2:	0.183307318	 ,Round3:	0.095437305	 ,Round4:	0.035917956	 ,Round5:	0.011209847	 ,Round6:	0.004027577	},
    {Team:"	Maryland	" ,Seed:	6	 ,Region:"	East	" ,Round1:	0.620621966	 ,Round2:	0.312838109	 ,Round3:	0.125344416	 ,Round4:	0.037636526	 ,Round5:	0.011819823	 ,Round6:	0.003860648	},
    {Team:"	Buffalo	" ,Seed:	6	 ,Region:"	West	" ,Round1:	0.658103312	 ,Round2:	0.23760056	 ,Round3:	0.088649971	 ,Round4:	0.026022614	 ,Round5:	0.00884455	 ,Round6:	0.003422894	},
    {Team:"	Mississippi State	" ,Seed:	5	 ,Region:"	East	" ,Round1:	0.786447979	 ,Round2:	0.308244649	 ,Round3:	0.055504569	 ,Round4:	0.021225928	 ,Round5:	0.007158257	 ,Round6:	0.002493726	},
    {Team:"	Marquette	" ,Seed:	5	 ,Region:"	West	" ,Round1:	0.640227661	 ,Round2:	0.263693311	 ,Round3:	0.053412403	 ,Round4:	0.019290271	 ,Round5:	0.006281539	 ,Round6:	0.002342107	},
    {Team:"	Wofford	" ,Seed:	7	 ,Region:"	Midwest	" ,Round1:	0.633499193	 ,Round2:	0.185529987	 ,Round3:	0.078656488	 ,Round4:	0.025003347	 ,Round5:	0.007437319	 ,Round6:	0.002204709	},
    {Team:"	Syracuse	" ,Seed:	8	 ,Region:"	West	" ,Round1:	0.602978207	 ,Round2:	0.079203168	 ,Round3:	0.037510623	 ,Round4:	0.013019723	 ,Round5:	0.00381602	 ,Round6:	0.001297587	},
    {Team:"	Florida	" ,Seed:	10	 ,Region:"	West	" ,Round1:	0.422173276	 ,Round2:	0.113816075	 ,Round3:	0.042057355	 ,Round4:	0.011017028	 ,Round5:	0.003108224	 ,Round6:	0.00102201	},
    {Team:"	Ohio State	" ,Seed:	11	 ,Region:"	Midwest	" ,Round1:	0.327181557	 ,Round2:	0.116970136	 ,Round3:	0.036446373	 ,Round4:	0.010599842	 ,Round5:	0.002977808	 ,Round6:	0.000837254	},
    {Team:"	Oklahoma	" ,Seed:	9	 ,Region:"	South	" ,Round1:	0.529087523	 ,Round2:	0.062473829	 ,Round3:	0.028344385	 ,Round4:	0.00849249	 ,Round5:	0.002822743	 ,Round6:	0.00078335	},
    {Team:"	Iowa	" ,Seed:	10	 ,Region:"	South	" ,Round1:	0.323098195	 ,Round2:	0.073558729	 ,Round3:	0.026239668	 ,Round4:	0.006412181	 ,Round5:	0.002360138	 ,Round6:	0.000724427	},
    {Team:"	Belmont	" ,Seed:	11	 ,Region:"	East	" ,Round1:	0.379378034	 ,Round2:	0.156506176	 ,Round3:	0.037338535	 ,Round4:	0.006634669	 ,Round5:	0.001781968	 ,Round6:	0.000504969	},
    {Team:"	Arizona State	" ,Seed:	11	 ,Region:"	West	" ,Round1:	0.341896688	 ,Round2:	0.088434285	 ,Round3:	0.030690071	 ,Round4:	0.008404625	 ,Round5:	0.001883649	 ,Round6:	0.000504548	},
    {Team:"	Oregon	" ,Seed:	12	 ,Region:"	South	" ,Round1:	0.399386253	 ,Round2:	0.188559936	 ,Round3:	0.026181271	 ,Round4:	0.006493741	 ,Round5:	0.001937321	 ,Round6:	0.000483557	},
    {Team:"	Seton Hall	" ,Seed:	10	 ,Region:"	Midwest	" ,Round1:	0.366500807	 ,Round2:	0.079082807	 ,Round3:	0.027712217	 ,Round4:	0.007234187	 ,Round5:	0.001861258	 ,Round6:	0.000482366	},
    {Team:"	Saint Mary's (CA)	" ,Seed:	11	 ,Region:"	South	" ,Round1:	0.247328645	 ,Round2:	0.078327583	 ,Round3:	0.020556445	 ,Round4:	0.004720205	 ,Round5:	0.001641347	 ,Round6:	0.000476224	},
    {Team:"	Utah State	" ,Seed:	8	 ,Region:"	Midwest	" ,Round1:	0.505994712	 ,Round2:	0.06773532	 ,Round3:	0.022125786	 ,Round4:	0.007009077	 ,Round5:	0.001784128	 ,Round6:	0.000457803	},
    {Team:"	Mississippi	" ,Seed:	8	 ,Region:"	South	" ,Round1:	0.470912477	 ,Round2:	0.051603653	 ,Round3:	0.022253211	 ,Round4:	0.006280413	 ,Round5:	0.001813964	 ,Round6:	0.000438658	},
    {Team:"	Virginia Commonwealth	" ,Seed:	8	 ,Region:"	East	" ,Round1:	0.504988959	 ,Round2:	0.046189203	 ,Round3:	0.017935617	 ,Round4:	0.006254439	 ,Round5:	0.001535455	 ,Round6:	0.000400841	},
    {Team:"	Washington	" ,Seed:	9	 ,Region:"	Midwest	" ,Round1:	0.494005288	 ,Round2:	0.065142172	 ,Round3:	0.020542703	 ,Round4:	0.006295407	 ,Round5:	0.001580508	 ,Round6:	0.000400393	},
    {Team:"	Minnesota	" ,Seed:	10	 ,Region:"	East	" ,Round1:	0.322401287	 ,Round2:	0.060590913	 ,Round3:	0.021971166	 ,Round4:	0.00337425	 ,Round5:	0.00106164	 ,Round6:	0.000347336	},
    {Team:"	Murray State	" ,Seed:	12	 ,Region:"	West	" ,Round1:	0.359772339	 ,Round2:	0.111988913	 ,Round3:	0.017033857	 ,Round4:	0.004843959	 ,Round5:	0.0011509	 ,Round6:	0.000324854	},
    {Team:"	Central Florida	" ,Seed:	9	 ,Region:"	East	" ,Round1:	0.495011041	 ,Round2:	0.04466934	 ,Round3:	0.01463705	 ,Round4:	0.004326066	 ,Round5:	0.001053004	 ,Round6:	0.000272753	},
    {Team:"	New Mexico State	" ,Seed:	12	 ,Region:"	Midwest	" ,Round1:	0.225787137	 ,Round2:	0.09046318	 ,Round3:	0.01853298	 ,Round4:	0.005270449	 ,Round5:	0.001152597	 ,Round6:	0.0002568	},
    {Team:"	Baylor	" ,Seed:	9	 ,Region:"	West	" ,Round1:	0.397021793	 ,Round2:	0.036919247	 ,Round3:	0.014291283	 ,Round4:	0.0039562	 ,Round5:	0.000814537	 ,Round6:	0.000202097	},
    {Team:"	Vermont	" ,Seed:	13	 ,Region:"	West	" ,Round1:	0.209708057	 ,Round2:	0.087916679	 ,Round3:	0.009395211	 ,Round4:	0.001955814	 ,Round5:	0.000350774	 ,Round6:	0	},
    {Team:"	Northeastern	" ,Seed:	13	 ,Region:"	Midwest	" ,Round1:	0.174784014	 ,Round2:	0.035289221	 ,Round3:	0.005376261	 ,Round4:	0.001170888	 ,Round5:	0.000211488	 ,Round6:	0	},
    {Team:"	Liberty	" ,Seed:	12	 ,Region:"	East	" ,Round1:	0.213552021	 ,Round2:	0.041506648	 ,Round3:	0.004376007	 ,Round4:	0.001088284	 ,Round5:	0.000197461	 ,Round6:	0	},
    {Team:"	UC-Irvine	" ,Seed:	13	 ,Region:"	South	" ,Round1:	0.233375666	 ,Round2:	0.071177114	 ,Round3:	0.006111064	 ,Round4:	0.000971059	 ,Round5:	0.00019088	 ,Round6:	0	},
    {Team:"	Yale	" ,Seed:	14	 ,Region:"	East	" ,Round1:	0.155832874	 ,Round2:	0.039957533	 ,Round3:	0.006337374	 ,Round4:	0.00075052	 ,Round5:	0.000119518	 ,Round6:	0	},
    {Team:"	Northern Kentucky	" ,Seed:	14	 ,Region:"	West	" ,Round1:	0.093947733	 ,Round2:	0.025631088	 ,Round3:	0.004062416	 ,Round4:	0.000532259	 ,Round5:	0	 ,Round6:	0	},
    {Team:"	Saint Louis	" ,Seed:	13	 ,Region:"	East	" ,Round1:	0.111534345	 ,Round2:	0.033187339	 ,Round3:	0.002497006	 ,Round4:	0.000462462	 ,Round5:	0	 ,Round6:	0	},
    {Team:"	Old Dominion	" ,Seed:	14	 ,Region:"	South	" ,Round1:	0.119045659	 ,Round2:	0.024981485	 ,Round3:	0.003621364	 ,Round4:	0.000479721	 ,Round5:	0	 ,Round6:	0	},
    {Team:"	Georgia State	" ,Seed:	14	 ,Region:"	Midwest	" ,Round1:	0.108542477	 ,Round2:	0.02218583	 ,Round3:	0.003396765	 ,Round4:	0.000497137	 ,Round5:	0	 ,Round6:	0	},
    {Team:"	Montana	" ,Seed:	15	 ,Region:"	West	" ,Round1:	0.060029638	 ,Round2:	0.012259953	 ,Round3:	0.002259072	 ,Round4:	0.000297938	 ,Round5:	0	 ,Round6:	0	},
    {Team:"	Colgate	" ,Seed:	15	 ,Region:"	South	" ,Round1:	0.050269449	 ,Round2:	0.008787872	 ,Round3:	0.001255694	 ,Round4:	0.000125275	 ,Round5:	0	 ,Round6:	0	},
    {Team:"	Bradley	" ,Seed:	15	 ,Region:"	East	" ,Round1:	0.035533977	 ,Round2:	0.005590132	 ,Round3:	0.000837748	 ,Round4:	0	 ,Round5:	0	 ,Round6:	0	},
    {Team:"	Gardner-Webb	" ,Seed:	16	 ,Region:"	South	" ,Round1:	0.018566161	 ,Round2:	0.003723714	 ,Round3:	0.000540989	 ,Round4:	0	 ,Round5:	0	 ,Round6:	0	},
    {Team:"	Abilene Christian	" ,Seed:	15	 ,Region:"	Midwest	" ,Round1:	0.030884585	 ,Round2:	0.003997463	 ,Round3:	0.000472897	 ,Round4:	0	 ,Round5:	0	 ,Round6:	0	},
    {Team:"	Iona	" ,Seed:	16	 ,Region:"	Midwest	" ,Round1:	0.022087375	 ,Round2:	0.004434089	 ,Round3:	0.000386727	 ,Round4:	0	 ,Round5:	0	 ,Round6:	0	},
    {Team:"	North Dakota State	" ,Seed:	16	 ,Region:"	East	" ,Round1:	0.008210558	 ,Round2:	0.001025869	 ,Round3:	0	 ,Round4:	0	 ,Round5:	0	 ,Round6:	0	},
    {Team:"	Fairleigh Dickinson	" ,Seed:	16	 ,Region:"	West	" ,Round1:	0.01081009	 ,Round2:	0.001327161	 ,Round3:	0.000136633	 ,Round4:	0	 ,Round5:	0	 ,Round6:	0	}
    
]

console.log(fiveThirtyEight[0].Round6)

//track if fiveThirtyEight picks entered in correctly


let round1OddsTrack=0
let round2OddsTrack=0
let round3OddsTrack=0
let round4OddsTrack=0
let round5OddsTrack=0
let round6OddsTrack=0


function fiveThirtyEightValidOdds () {
    for (var i=0; i<fiveThirtyEight.length; i++) {
        round1OddsTrack=round1OddsTrack+fiveThirtyEight[i].Round1
        round2OddsTrack=round2OddsTrack+fiveThirtyEight[i].Round2
        round3OddsTrack=round3OddsTrack+fiveThirtyEight[i].Round3
        round4OddsTrack=round4OddsTrack+fiveThirtyEight[i].Round4
        round5OddsTrack=round5OddsTrack+fiveThirtyEight[i].Round5
        round6OddsTrack=round6OddsTrack+fiveThirtyEight[i].Round6
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

winners=[]
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



//count number of times Duke was picked


//use filter method or for each or for loop to eliminate teams that can't possbily advance now that winner is set