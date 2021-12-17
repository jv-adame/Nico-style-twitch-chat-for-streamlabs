// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
	// obj will be empty for chat widget
	// this will fire only once when the widget loads
});

document.addEventListener('onEventReceived', function(obj) {
  let replace = getRandomPercent();
  let message = document.getElementById(obj['detail']['messageId']);
	message.style.top = replace;
  
});

function getRandomPercent(){
  //min and max need to be integers between 0 and 100
  
  let min = 0;
  let max = 80;
  
  
  let placement = Math.floor(Math.random() * (max - min + 1) + min);
  let percent = placement + "%";

  return percent
};