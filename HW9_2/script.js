

const jsonStringHW9 = `
{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }`;


const dataHW9 = JSON.parse(jsonStringHW9);

console.log("dataHW9", dataHW9);

//  ........................................Ответ ожидают такой:

//  {
//   list: [
//     { name: 'Petr', age: 20, prof: 'mechanic' },
//     { name: 'Vova', age: 60, prof: 'pilot' },
//   ]
// }
