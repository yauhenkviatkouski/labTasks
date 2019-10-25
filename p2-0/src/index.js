import './styles.css';
import arrayProcessig from './arrayProcessig';

document.getElementById('subSumN2').addEventListener('submit', (e) => {
  e.preventDefault();
  const value = document.getElementById('subSumN2-field').value;
  alert(arrayProcessig.subSumN2(value));
})
