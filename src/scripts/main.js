'use strict';

const salaryElems = [...document.querySelectorAll('[data-salary]')];
const list = document.getElementsByTagName('ul')[0];

getEmployees(salaryElems);
sortList(salaryElems, 'salary', list);

function sortList(array, attribute, listElement) {
  const sortedArray = array.sort((elem, elem2) => {
    const num = parseFloat(elem.dataset[attribute].replace(/[^\d.,]/g, '').replace(',', ''));
    const num2 = parseFloat(elem2.dataset[attribute].replace(/[^\d.,]/g, '').replace(',', ''));
    return num2 - num;
  });

  sortedArray.forEach((li) => {
    listElement.appendChild(li);
  });
}


function getEmployees(l) {
  const array = l.map((element) => {
    return {
      name: element.textContent.trim(),
      position: element.dataset.position,
      age: parseInt(element.dataset.age),
      salary: parseFloat(element.dataset.salary.replace(/[$,]/g, '')),
    };
  });

  return array;
}
