// import carInputValid from "./carInputValid.js"

export default function getRacingInfo(){
  const $carNameSubmit = document.querySelector('#car-names-submit')
  $carNameSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('#input-try, #racing-form').forEach(item => {item.style.display = 'block';})
    // const carNameInputArray = racingCarList(document.querySelector('#car-names-input').value.split(','));
    const carNameInputArray = document.querySelector('#car-names-input').value.split(',');
    
    const $racingCountSubmit = document.querySelector('#racing-count-submit');
    $racingCountSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#result').style.display = 'block';
      const racingCount = document.querySelector('#racing-count-input').value;
      
      getScore(carNameInputArray, racingCount)
    })
  })
}

function Car(name) {
  this.name = name;
  // this.speed = 0;
  this.score = '';
}

function racingCarList(carNameInputArray) {
  const makeCarList = carNameInputArray.map(i => {
    const car = new Car(i);
    return car;
  })
  return makeCarList;
}

function getScore(carNameInputArray, racingCount) {
  const rideCarArray = racingCarList(carNameInputArray);
  let cnt = 0;
  
  let plusDiv =`📄 실행 결과</br>`;

  while(cnt<racingCount){
    rideCarArray.map(i => {
      let rand = MissionUtils.Random.pickNumberInRange(0,9);
      if(rand >= 4) {
        return i.score += '-'
      }
    })

    plusDiv += (rideCarArray.map(i => {
      return `${i.name} : ${i.score}</br>`
    }))

    cnt++;
  }

  document.querySelector('#result').innerHTML = plusDiv
  console.log(rideCarArray);
  
}


function raceTimes() {
  
}

// function getKeyByValue(obj, value) {
//   return Object.keys(obj).find(key => obj[key] === value);
// }