var Nightmare = require('nightmare');
var nightmare = Nightmare({  show: false });
let nameList = [];
let companyList = [];

nightmare
  .goto('http://www.builtincolorado.com/jobs')
  .click('a[href="/jobs?category=developer-engineer-78"]')
  .wait(8000)
  .click('a[href="/jobs?category=javascript-8726"]')
  .wait(8000)
  .click('a[href="/jobs?location=Greater%20Denver%20Area"]')
  .wait(8000)
  .evaluate(function () {
    let nameNodes = document.querySelectorAll('.job-title')
    let companyNodes = document.querySelectorAll('.job-company')
    nameList = [].slice.call(nameNodes);
    companyList = [].slice.call(companyNodes);
  })
  .click('.pager-next')
  .wait(8000)
  .evaluate(function () {
    let nameNodes = document.querySelectorAll('.job-title')
    let companyNodes = document.querySelectorAll('.job-company')
    let moreNames = [].slice.call(nameNodes);
    let moreCompanies = [].slice.call(companyNodes);
    nameList = nameList.concat(moreNames);
    companyList = companyList.concat(moreCompanies);
  })
  .click('.pager-next')
  .wait(8000)
  .evaluate(function () {
    let nameNodes = document.querySelectorAll('.job-title')
    let companyNodes = document.querySelectorAll('.job-company')
    let moreNames = [].slice.call(nameNodes);
    let moreCompanies = [].slice.call(companyNodes);
    nameList = nameList.concat(moreNames);
    companyList = companyList.concat(moreCompanies);
    return nameList.map(function(node, i){
      return (node.innerText + " - " +companyList[i].innerText)
    });
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .then(function(){
    console.log('that\'s all folks!')
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
