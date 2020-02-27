// convert temperature from celsius to fahrenheit
function toFahrenheit(celsius) {
    let toFahrenheit = Math.round((9 / 5) * celsius + 32);
    return toFahrenheit;
  }
  console.log(toFahrenheit(-30));