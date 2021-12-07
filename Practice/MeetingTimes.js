/*
Given an array of meeting time intervals consisting of start and end times [[s1, e1], [s2, e2]], ...] (s1 < e1), find the minimum number of conference rooms required.

Example 1:
  Input: [[0, 30], [5, 10], [15, 20]]
  Output: 2

Example 2:
  Input: [[7, 10], [2, 4]]
  Output: 1
*/

// Time = O(nlog(n)) || Space = O(1)
function conferenceRooms(meetingTimeIntervals) {
  meetingTimeIntervals.sort((a, b) => a[0] - b[0]);
  let rooms = 1;
  let i = 0;
  while (meetingTimeIntervals[i + 1]) {
    let endTime = meetingTimeIntervals[i][1];
    let nextStartTime = meetingTimeIntervals[i + 1][0];
    if (endTime > nextStartTime) rooms++;
    i++;
  }
  return rooms;
}

function main() {
  // let meetingTimeIntervals = [
  //   [0, 30],
  //   [5, 10],
  //   [15, 20],
  // ];
  let meetingTimeIntervals = [
    [0, 30],
    [5, 10],
    [7, 20],
  ];
  console.log(conferenceRooms(meetingTimeIntervals));
}

main();
