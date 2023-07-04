const parserHW9 = new DOMParser();
//console.log('parser', parserHW9);

const xmlStringHW9 = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOMHW9 = parserHW9.parseFromString(xmlStringHW9, "text/xml");
//console.log('xmlDomHW9: ', xmlDOMHW9)

const studentlistNode = xmlDOMHW9.querySelectorAll("student");

const listObjHW9 = { listHW9: [] };

for (let student of studentlistNode) {
  const name = student.querySelector("name");
  const firstName = name.querySelector("first");
  const secondName = name.querySelector("second");
  const age = student.querySelector("age");
  const prof = student.querySelector("prof");
  const langAttr = name.getAttribute("lang");

  const resultxml = {
    name: firstName.textContent + " " + secondName.textContent,
    age: Number(age.textContent),
    prof: prof.textContent,
    lang: langAttr
  };
  //console.log( resultxml );

  listObjHW9.listHW9.push(resultxml);
}

 console.log("listObjHW9", listObjHW9);
