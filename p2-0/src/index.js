import ArrayProcessing from './arrayProcessing';
import DateDisplay from './dateDisplay';
import TextFormatter from './textFormatter';
import StringCalc from './stringCalculator';
import ArraySorter from './arraySorter';
import NumberConverter from './convertNum';
import CachingCalc from './cachingCalculator';
const arrayHandler = new ArrayProcessing();
const dateHandler = new DateDisplay();
const textHandler = new TextFormatter();
const expressionHandler = new StringCalc();
const arraySorter = new ArraySorter();
const numConverter = new NumberConverter();
const cachingCalc = new CachingCalc();

const formList = document.querySelectorAll('form');
Array.prototype.forEach.call(formList, (form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let result;
    switch (form.id) {
      case 'subSumN2': {
        const arrayString = document.getElementById('subSumN2-field').value;
        result = arrayHandler.subSumN2(arrayString);
        break;
      }
      case 'subSumN': {
        const arrayString = document.getElementById('subSumN-field').value;
        result = arrayHandler.subSumN(arrayString);
        break;
      }
      case 'searchMin': {
        const arrayString = document.getElementById('searchMin-field').value;
        result = arrayHandler.searchMin(arrayString);
        break;
      }
      case 'searchMax': {
        const arrayString = document.getElementById('searchMax-field').value;
        result = arrayHandler.searchMax(arrayString);
        break;
      }
      case 'searchMedian': {
        const arrayString = document.getElementById('searchMedian-field').value;
        result = arrayHandler.searchMedian(arrayString);
        break;
      }
      case 'selection': {
        const arrayString = document.getElementById('selection-field').value;
        result = arrayHandler.selection(arrayString);
        break;
      }
      case 'formatStr': {
        const dateString = document.getElementById('formatStr-field1').value;
        const inputScheme = document.getElementById('formatStr-field2').value;
        const outputScheme = document.getElementById('formatStr-field3').value;
        result = dateHandler.formatStr(dateString, inputScheme, outputScheme);
        break;
      }
      case 'formatMs': {
        const ms = document.getElementById('formatMs-ms').value;
        const outputRegEx = document.getElementById('formatMs-output').value;
        result = dateHandler.formatMs(ms, outputRegEx);
        break;
      }
      case 'fromNow': {
        const str = document.getElementById('fromNow-field1').value;
        const inputScheme = document.getElementById('fromNow-field2').value;
        result = dateHandler.fromNow(str, inputScheme);
        break;
      }
      case 'textFormatter': {
        const text = document.getElementById('textFormatter-field').value;
        const options = {
          maxSize: document.getElementById('textFormatter-maxSize').value,
          maxStrings: document.getElementById('textFormatter-maxStrings').value,
          type: document.getElementById('textFormatter-type').value,
        };
        result = textHandler.format(text, options);
        break;
      }
      case 'stringCalculator': {
        const str = document.getElementById('stringCalculator-field').value;
        result = expressionHandler.calculate(str);
        break;
      }
      case 'sort-quick-up': {
        const arrString = document.getElementById('sort-quick-up-field').value;
        result = arraySorter.quick(arrString);
        break;
      }
      case 'sort-quick-down': {
        const arrString =
          document.getElementById('sort-quick-down-field').value;
        result = arraySorter.quick(arrString, true);
        break;
      }
      case 'sort-selection-up': {
        const arrString =
          document.getElementById('sort-selection-up-field').value;
        result = arraySorter.selection(arrString);
        break;
      }
      case 'sort-selection-down': {
        const arrString =
          document.getElementById('sort-selection-down-field').value;
        result = arraySorter.selection(arrString, true);
        break;
      }
      case 'sort-insertion-up': {
        const arrString =
          document.getElementById('sort-insertion-up-field').value;
        result = arraySorter.insertion(arrString);
        break;
      }
      case 'sort-insertion-down': {
        const arrString =
          document.getElementById('sort-insertion-down-field').value;
        result = arraySorter.insertion(arrString, true);
        break;
      }
      case 'sort-standard-up': {
        const arrString =
          document.getElementById('sort-standard-up-field').value;
        result = arraySorter.standard(arrString);
        break;
      }
      case 'sort-standard-down': {
        const arrString =
          document.getElementById('sort-standard-down-field').value;
        result = arraySorter.standard(arrString, true);
        break;
      }
      case 'convertNum': {
        const arrString = document.getElementById('convertNum-number').value;
        const input = document.getElementById('convertNum-input').value;
        const output = document.getElementById('convertNum-output').value;
        result = numConverter.convert(arrString, input, output);
        break;
      }
      case 'caching-calc': {
        const varA = document.getElementById('caching-calc-a').value;
        const varB = document.getElementById('caching-calc-b').value;
        const oper = document.getElementById('caching-calc-operation').value;
        result = cachingCalc.calculate(varA, varB, oper);
        break;
      }
    }
    console.log(result);
  });
});
