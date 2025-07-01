const btnLocation = document.getElementById('btn-location');
const btnInfo = document.getElementById('btn-info');
const contentLocation = document.getElementById('content-location');
const contentInfo = document.getElementById('content-info');

btnLocation.addEventListener('click', () => {
  btnLocation.classList.add('active');
  btnInfo.classList.remove('active');
  contentLocation.classList.add('active');
  contentInfo.classList.remove('active');
});

btnInfo.addEventListener('click', () => {
  btnInfo.classList.add('active');
  btnLocation.classList.remove('active');
  contentInfo.classList.add('active');
  contentLocation.classList.remove('active');
}); 