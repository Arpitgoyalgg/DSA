// O(n)

function mergeMeetingTimes(meetings) {
  console.log("--BEFORE--");
  meetings.sort((a, b) => a.startTime - b.startTime);
  console.log(meetings);

  let mergedMeetings = [meetings[0]];

  for (let i = 1; i < meetings.length; i++) {
    let first = mergedMeetings[mergedMeetings.length - 1];
    let second = meetings[i];

    if (second.startTime <= first.endTime) {
      mergedMeetings[mergedMeetings.length - 1].startTime = Math.min(
        first.startTime,
        second.startTime
      );

      mergedMeetings[mergedMeetings.length - 1].endTime = Math.max(
        first.endTime,
        second.endTime
      );
    } else {
      mergedMeetings.push(second);
    }
  }
  console.log("--AFTER--");
  console.log(mergedMeetings);
}

mergeMeetingTimes([
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
]);
