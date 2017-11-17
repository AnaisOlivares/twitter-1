window.onload =addEventListener('load', function(event){
  var msg = document.getElementById('msg');
  var btn = document.getElementById('btn');
  var containerMsg = document.getElementById('container-msg');
  var counter = document.getElementById('counter');
  var limit = 140;
  var txt = '';
  
  btn.addEventListener('click', function(){
    if(msg.value !== ''){
      var message = document.createElement('p');
      message.className = 'paragraph';
      message.textContent = msg.value;
      containerMsg.appendChild(message);
      msg.value = '';
    }
  });

  msg.addEventListener('keydown',validateLength);
  msg.addEventListener('keyup', validateLength);

  function validateLength(){
    var letters = msg.value.length;
    if(letters <= 0 || letters > limit){
      btn.disabled = true;
      btn.classList.remove('btn-active');
      btn.classList.add('btn-inactive');
    }else if(letters < limit || letters > 0) {
      btn.disabled = false;
      btn.classList.add('btn-active');
      btn.classList.remove('btn-inactive');
      txt = msg.value;
    }

    if(letters > 120 && letters < 130){
      counter.setAttribute('style', 'color: purple');
    } else if(letters > 130 && letters <= 140){
      counter.setAttribute('style', 'color: #117864');
    }else if(letters <= 120){
      counter.setAttribute('style', 'color: black');
    }
    
    counter.value = limit - letters;

    msg.addEventListener('keydown', autosize);
    function autosize(){
    var resize = this;
    setTimeout(function(){
    resize.style.cssText = 'height:auto; padding:0';
    resize.style.cssText = 'height:' + resize.scrollHeight + 'px';
    },0);
    }
  };

})