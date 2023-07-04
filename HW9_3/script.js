
const resultNode = document.querySelector(".j-result");
//const resultNodeimg = document.querySelector(".j-img");
// // Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector(".j-btn-request");

// Функция, которая возвращаем fetch
const useRequest = (value1, value2) => {
  // return resultNode.innerHTML = `<img src="{https://picsum.photos/${value1}/${value2}}">`
  return fetch(`https://picsum.photos/${value1}/${value2}`)
    .then((response) => {
      console.log("response", response);
      const result = response.json();
      console.log("result1", result);
      return result;
      
    })
    .then((result) => {
      console.log("result2", result);
      return (resultNode.innerHTML = result);
    })
    .catch(() => {
      console.log("error");
    });
};


function wrongNumber() {
  resultNode.innerHTML = "Введите значение от 100 до 300";
  console.log("wrongnumber");
}

// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener(`click`, async () => {
  console.log("btnclick");
  const value1 = document.querySelector(".j-input-1").value;
  const value2 = document.querySelector(".j-input-2").value;
  if (
    !isNaN(value1) &&
    !isNaN(value2) &&
    value1 <= 300 &&
    value1 >= 100 &&
    value2 <= 300 &&
    value2 >= 100
  ) {
    const requestResult = await useRequest(value1, value2);
    console.log("requestResult", requestResult);

    console.log("endafterrequest");

    //  resultNode.innerHTML =
  } else {
    wrongNumber();
  }
});

