$(document).ready(function() {
  var msg = $('#msg');
  var msgContainer = $('#msg-container');
  var btn = $('#btn');
  var counter = $('#counter');
  var limit = 140;
  var txt = '';

  $('#btn').click(function(){
    if (msg.val() !== ''){
     var  message = $('<p>');
      message.addClass('paragraph');
      message.html() = msg.val() + '<i> Posted ' + moment().format('hh:mm') + '</i>';
      msgContainer.appendTo(message);
      msg.val() = '';
    }
  });
// añadiendo otro evento
msg.keydown(function(){
  var letters = msg.val().length;
  if(letters <= 0 || letters > limit){
    btn.disabled = true;
    btn.$('.class').remove('btn-active');
    btn.$('.class').addClass('btn-inactive');
  }else if(letters < limit || letters > 0) {
    btn.disabled = false;
    btn.$('.class').prop('btn-active');
    btn.$('.class').prop('btn-inactive');
    txt = msg.val();
});
  // msg.addEven.$('.class').Listener('keydown',validateLength);
  // msg.addEven.$('.class').Listener('keyup', validateLength);
  //
  // function validateLength(){
  //   var letters = msg.value.length;
  //   if(letters <= 0 || letters > limit){
  //     btn.disabled = true;
  //     btn.classList.remove('btn-active');
  //     btn.classList.add('btn-inactive');
  //   }else if(letters < limit || letters > 0) {
  //     btn.disabled = false;
  //     btn.classList.add('btn-active');
  //     btn.classList.remove('btn-inactive');
  //     txt = msg.value;
  //   }

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
});






window.onload =addEventListener('load', function(event){
  var msg = document.getElementById('msg');
  var btn = document.getElementById('btn');
  var msgContainer = document.getElementById('msg-container');
  var counter = document.getElementById('counter');
  var limit = 140;
  var txt = '';

  btn.addEventListener('click', function(){
    if(msg.value !== ''){
      var message = document.createElement('p');
      message.className = 'paragraph';
      message.innerHTML = msg.value + '<i> Posted ' + moment().format('hh:mm') + '</i>';
      msgContainer.appendChild(message);
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
