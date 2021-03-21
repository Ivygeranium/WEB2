var Dark = '#030305';
var Light = '#F2F4EF';
var Other = '#EFB730';

var NightMode = {

  setBackgroundColor:function(color, color2){
    document.querySelector('html').style.backgroundColor = color;
    // document.querySelector('.parallax').style.backgroundColor = color2;



  },

  setFontColor:function(color){
    document.querySelector('body').style.color = color;
    document.querySelector('.parallax').style.color = color;
    $('.MN').css('backgroundColor', color);
  }

};



function DarkMode(self) {
  if (self.value === 'NightMode'){
    NightMode.setBackgroundColor(Dark, Dark);
    NightMode.setFontColor(Light);
    document.querySelector('.parallax').style.backgroundImage = "url('birch3.jpg')";
    self.value = 'LightMode';
  }
  else {
    NightMode.setBackgroundColor(Light, Other);
    NightMode.setFontColor(Dark);
    document.querySelector('.parallax').style.backgroundImage = "url('birch1.jpg')";
    self.value = 'NightMode';
  }
  document.getElementById("NL").innerText = self.value;

};
