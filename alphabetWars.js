// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

function alphabetWar(fight){
   let right = 0
   let left = 0
   const rightPoints = {
    w : 4,
    p : 3,
    b : 2,
    s : 1,
   }
   const leftPoints = {
    m : 4,
    q : 3,
    d : 2,
    z : 1,
   }
   for (letter of fight){
        if(rightPoints[letter]){
            right += rightPoints[letter]
        }
        else if(leftPoints[letter]){
            left += leftPoints[letter]
        }
    }
    return right > left ? 'Right side wins!' : left > right ? 'Right side wins!' : "Let's fight again!"
}

console.log(alphabetWar('zzz'))