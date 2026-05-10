const body = document.querySelector('body');

body.addEventListener('click',(e)=>{
  console.log(e.clientX , e.clientY);
  
  const circleElement = document.createElement('div');
  circleElement.classList.add('circle');
  circleElement.textContent = "Hi";

  const color = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white', 'gray', 'cyan', 'magenta', 'lime', 'maroon', 'navy', 'olive', 'teal', 'coral', 'turquoise'
];
  circleElement.style.backgroundColor = color[Math.floor(Math.random()*20)];

  circleElement.style.top = `${e.clientY-25}px`;
  circleElement.style.left = `${e.clientX-25}px`;


  body.append(circleElement);
//   console.log(body);

  setTimeout(()=>{
    circleElement.remove();
  },5000);

})