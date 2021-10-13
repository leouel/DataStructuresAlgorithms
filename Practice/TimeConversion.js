function timeConversion(string) {
  let time = string.split(/[:A-Z]+/);
  if (string[8] === "A") {
    if (parseInt(time[0]) === 12) {
      time[0] = "00";
    }
  } else if (string[8] === "P") {
    if (parseInt(time[0]) === 12) {
      time[0] = "12";
    } else {
      time[0] = (parseInt(time[0]) + 12).toString();
    }
  }
  let str = time.slice(0, 3).join(":");
  return str;
}

function main() {
  let string = "12:01:00AM";
  console.log(timeConversion(string));
}

main();
