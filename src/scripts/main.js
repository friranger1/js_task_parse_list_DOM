'use strict';
const salaryElems = [...document.querySelectorAll('[data-salary]')];
const list = document.getElementsByTagName('ul')[0];
const sortedArray = sortList(salaryElems, 'salary');
const people = getEmployees(salaryElems);
console.log(people)

sortedArray.forEach(li => {
    list.appendChild(li);
  });




function sortList(array, attribute) {
  const sortedArray = array.sort((elem, elem2)=> {
    const val = elem.dataset[attribute];
    const cleaned = val.replace(/[^\d.,]/g, "");
    const noCommas = cleaned.replace(',', '');
    const num = parseFloat(noCommas);

    const val2 = elem2.dataset[attribute];
    const cleaned2 = val2.replace(/[^\d.,]/g, "");
    const noCommas2 = cleaned2.replace(',', '');
    const num2 = parseFloat(noCommas2);
    return num2 - num;
  });
  return sortedArray;
}

function getEmployees(list) {
  const array = list.map(element => {
    return {
      name: element.textContent.trim(), // имя из текста <li>
      position: element.dataset.position,
      age: parseInt(element.dataset.age),
      salary: parseFloat(element.dataset.salary.replace(/[$,]/g, ''))
    };
  });

  return array;
}
