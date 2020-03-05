function isValidTime(time) {
  let timeArr = time.split(":");
  if (Number(timeArr[0]) > 23) return false;
  else if (Number(timeArr[1]) > 59) return false;
  else return true;
}

console.log(isValidTime("24:00"));
console.log(isValidTime("23:90"));
console.log(isValidTime("23:58"));
console.log(isValidTime("00:03"));
