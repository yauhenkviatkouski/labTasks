import './styles.css';
import ArrayProcessig from './arrayProcessig';

document.getElementById('subSumN2').addEventListener('submit', (e) => {
  e.preventDefault();
  const value = document.getElementById('subSumN2-field').value;
  const arrayHandler = new ArrayProcessig;
  console.log(arrayHandler.subSumN2(value));
});
