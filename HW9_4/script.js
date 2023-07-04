
const resultNode = document.querySelector(".j-result");

const btnNode = document.querySelector(".j-btn-request");

function wrongLimit() {
  resultNode.innerHTML = "Лимит вне диапазона от 1 до 10";
  console.log("wrongLimit");
}
function wrongNumber() {
  resultNode.innerHTML = "Номер страницы вне диапазона от 1 до 10";
  console.log("wrongNumber");
}
function wrongNumberLimit() {
  resultNode.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
  console.log("wrongNumber");
}

var checkValue = (value) => 
  !isNaN(value) &&
    value <= 10 &&
    value >= 1 ?  true :
  false;


//let storedValueArray = localStorage.getItem('storedValueArray');
let storedCards = localStorage.getItem('storedCards');
//console.log('1. storedValueArray', storedValueArray);

//storedCards = localStorage.getItem('storedCards');

let cards = storedCards;  

(function(){
  if (cards !== null) {
  console.log('onload ', cards);
  resultNode.innerHTML = cards;;
    
  // let changePreNumber1 = document.getElementById("j-input-1") ;
  // changePreNumber1.innerHTML = changePreNumber1.innerHTML
  //                       .replace(/value="2"/gi,`value="${valueArray[0]}"`);
  // console.log('changePreNumber1', changePreNumber1);
  // let changePreNumber2 = document.getElementById("j-input-2") ;
  // changePreNumber2.innerHTML = changePreNumber2.innerHTML
  //                       .replace(/value="3"/gi,`value="${valueArray[2]}"`);
  }
})()

localStorage.clear();


// fetch
function useRequest (value1, value2, callback)  {
  
  return fetch(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`)
    .then((response) => {
      //console.log('response', response);
      return response.json();
    })
    .then((json) => { return json; })
  .then((result) => {
        callback(result);
      })
    .catch(() => { console.log('error') });
  };



function displayResult(apiData) {
  let cards = '';
  // console.log('start cards', cards);
  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
  
  // console.log('end cards', cards);
    
  resultNode.innerHTML = cards;
  localStorage.setItem('storedCards',  cards); 
}


// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener(`click`, async () => {
  console.log("btnclick");
  const value1 = document.querySelector(".j-input-1").value;
  const value2 = document.querySelector(".j-input-2").value;
  if (
    checkValue(value1)) {
    if (
      checkValue(value2)) {
      valueArray = [value1, value2];   
      const requestResult = await useRequest(valueArray[0], valueArray[1], displayResult);
      //localStorage.setItem('storedValueArray', valueArray);      
      console.log('afterpush ',valueArray)
      
    }
    else {
      wrongLimit();
    }
  } else if (
   checkValue(value2)) {
    wrongNumber();
  }
  else (wrongNumberLimit())
});

