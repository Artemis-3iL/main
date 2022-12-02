function onKonamiCode(cb) {
    var input = '';
    var key = '8265847379';
    document.addEventListener('keydown', function (e) {
      input += ("" + e.keyCode);
      if (input === key) {
        return cb();
      }
      if (!key.indexOf(input)) return;
      input = ("" + e.keyCode);
    });
  }
  
  onKonamiCode(function () {
    width = 600;
    height = 400;
    if(window.innerWidth)
    {
        var top = (window.innerHeight-height)/2;
        var left = (window.innerWidth-width)/2;
    }
    else
    {
        var top = (document.body.clientHeight-height)/2;
        var left = (document.body.clientWidth-width)/2;
    }
    window.open("https://youtu.be/dQw4w9WgXcQ", scrollbars="no", top='+220+', left='+785+', width='+485+', height='+450+');
  })