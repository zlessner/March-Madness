# March Madness Simulator

Every March Madness bracket has the potential to win its respective pool. However, 
some brackets have much better chances than others.

## Gathering the Data

In order to form a system that maximizes expected outcome in a pool, I first had to gather data based on how users pick their brackets. [Yahoo](https://tournament.fantasysports.yahoo.com/t1/pickdistribution) gathers the picks from every user who submits a bracket in any given pool, and shows the percetage of people who picked particular teams in any given game. Using this data, I created a [user picks API](https://marchmadnessapi.herokuapp.com/api/popPicksTournament) in order to simulate various brackets using the odds that Yahoo users entered in for their brackets.

Alongside the Yahoo user picks, I needed a gold standard input of simulated picks in order to compare against. I chose to use [FiveThirtyEight's](https://projects.fivethirtyeight.com/2019-march-madness-predictions/) trusty March Madness model, given their strong reputation with data analysis and forecasting. Using this model, I created [another API](https://marchmadnessapi.herokuapp.com/api/538Tournament) in order to simulate the user picks against the more likely scenarios from FiveThirtyEight.   

## Bringing it Together With the User Interface

No simulator would be complete without the ability to compare one's own selections against that of the the different models. The interface I created allows the user to input all of important information about their pool and bracket in order to compare themselves against the results of the masses. 

After entering their pool entry fee, number of participants, percentage of the pot going to the top three winners, custom scoring system, and last but not least, the actual bracket itself, the user can then cue the bracket for submission and submit it into the simulation. After waiting a few seconds for the thousands of simulations to complete, the user can then see the odds that their bracket finishes in first, finishes in the top 3, their prize winning expected value, and the percent chance that a random bracket in their pool finishes in first place.


## How it all works

The simulator works through a series of nested loops throughout the code. The amount of participants specified in the interface are all run separately using the Yahoo API data. For example, in the first round matchup of the 2019 tournament between Maryland and Belmont, Yahoo users picked Maryland 69% of the time, and Belmont 31% of the time. Therefore, during the simulations, each bracket had a 69% of Maryland advancing, and a 31% chance of Belmont advancing.

For each simulation of brackets, a FiveThirtyEight bracket was also simulated in order to score the brackets against. Using that same matchup as above, FiveThirtyEight's model had Maryland with a 62% chance of winning, and Belmont with a 38% chance of winning. With each simulation, a FiveThirtyEight bracket was produced, with Maryland advancing in 62% of simuluations and Belmont advancing in 38% of simulations. In the FiveThirtyEight results with Maryland winner, if a particular bracket also had Maryland winning, that bracket would be awarded with the amount of points the user specified in the interface. If the FiveThirtyeight results had Maryland winning but the bracket pushed through Belmont, no points would be awarded.

The same logic applies to the bracket entered in through the user interface. This bracket is compared to the FiveThirtyEight simulated results, and is then pushed into a standings of the amount of Yahoo brackets that are specified when the user identifies how many participants are in the pool. After scoring the user bracket compared to a changing FiveThirtyEight bracket for each simulation and different Yahoo brackets for each participant in each simulation, data is produced to show how well the user bracket is likely to do in the pool. 

