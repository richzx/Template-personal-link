let toggle = document.getElementById('toggle');
let labelToggle = document.getElementById('label-toggle');
toggle.addEventListener('change', (event)=>{
  let checked = event.target.checked;
  document.body.classList.toggle('light');
  if(checked==true){
    labelToggle.innerHTML='<i class="fa-regular fa-moon"></i>';
    labelToggle.style.color="#ffc700";
  }else{
    labelToggle.innerHTML='<i class="fa-regular fa-sun"></i>';
    labelToggle.style.color="#ffe6db";
  }
})