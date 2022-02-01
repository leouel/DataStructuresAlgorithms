// round a float to nearest int

// 0.4 -> 0
// 0.5 -> 1
// 1.2 => parseInt => 1

function fltToInt(float) {
  // return Math.round(float)
  // float = -1.6
  let wholeNum = parseInt(float); //-> -1
  let decimal = float - wholeNum; //
  // -1.6 - (-1) = -.6
  if (decimal < 0) {
    if (decimal < -0.5) {
      return wholeNum - 1; // -2
    } else {
      return wholeNum;
    }
  } else {
    if (decimal < 0.5) {
      return wholeNum; // -1
    } else {
      return wholeNum + 1;
    }
  }
}

function main() {
  console.log(fltToInt(-2934.0034234));
}

main();
// test cases:
// positive round down: 0.4 -> 0
// positive round up because middle: 0.5 -> 1
// positive round up: 0.6 ->1
// 1.4 -> 1
// 1.5 -> 2
// 1.6 -> 2
// -0.4 -> 0
// -0.5 -> 0
// -0.6 -> -1
// -1.4 -> -1
// -1.5 -> -1
// -1.6 -> -2
// 0 -> 0
// 1 -> 1
// 10 -> 10
// -1 -> -1
// -10 -> -10
// 234.2939 -> 234
// -2934.0034234 -> -2934
// 8920384902.89089304132 (overflow test)
// javascript type
// null input
