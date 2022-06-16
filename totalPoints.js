// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point

// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4



function points(games) {
    let points = 0
    for(stat of games){
        if(Number(stat[0] > Number(stat[2]))){
            points += 3
        }
        else if(Number(stat[0]) === Number(stat[2])){
            points += 1
        }
    }
    return points
  }

  console.log(points(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4']))

  //define a variable to hold points & set it to 0

  //iterate over the arr using a for of loop
    //if Number(statistic[0]) > Number(statistic[2])
        //points += 3
    //else if ---> Number stat[0] === Number stat[2]
        //point += 1

  //return the points