import getRacingInfo from "./getRacingInfo.js";

export default function RacingCarGame() {
  const hideItems = document.querySelectorAll('#racing-form, #input-try, #result, #final-winner')
  .forEach(item => {item.style.display = 'none';})

  getRacingInfo();

}



new RacingCarGame();