const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin (record) {
  const answer = record.find(element => element.result === "W");
  return answer != undefined ? answer.year : undefined; 
}
