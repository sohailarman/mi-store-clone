function lightOrDark(color) {

  // Variables for red, green, blue values
  var r, g, b, hsp;
  
  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {

      // If RGB --> store the red, green, blue values in separate variables
      color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
      
      r = color[1];
      g = color[2];
      b = color[3];
  } 
  else {
      
      // If hex --> Convert it to RGB: http://gist.github.com/983661
      color = +("0x" + color.slice(1).replace( 
      color.length < 5 && /./g, '$&$&'));

      r = color >> 16;
      g = color >> 8 & 255;
      b = color & 255;
  }
  
  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(
  0.299 * (r * r) +
  0.587 * (g * g) +
  0.114 * (b * b)
  );

  // Using the HSP value, determine whether the color is light or dark
  if (hsp>127.5) {

      console.log('light');
  } 
  else {

    console.log('dark');
  }
}





























var element, bgColor, brightness, r, g, b, hsp;

function adjustTextColor() {
  
  element = document.getElementById('profile-bio');
  
  // Get the element's background color
  bgColor = window.getComputedStyle(element, null).getPropertyValue('background-color');

  // Call lightOrDark function to get the brightness (light or dark)
  brightness = lightOrDark(bgColor);
  
  // If the background color is dark, add the light-text class to it
  if(brightness == 'dark') {
    element.classList.add('light-text');
  }
  else {
    element.classList.add('dark-text');
  }
}

function lightOrDark(color) {

  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {

    // If HEX --> store the red, green, blue values in separate variables
    color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

    r = color[1];
    g = color[2];
    b = color[3];
  } 
  else {

    // If RGB --> Convert it to HEX: http://gist.github.com/983661
    color = +("0x" + color.slice(1).replace( 
      color.length < 5 && /./g, '$&$&'
    )
             );

    r = color >> 16;
    g = color >> 8 & 255;
    b = color & 255;
  }

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(
    0.299 * (r * r) +
    0.587 * (g * g) +
    0.114 * (b * b)
  );

  // Using the HSP value, determine whether the color is light or dark
  if (hsp>127.5) {

    return 'light';
  } 
  else {

    return 'dark';
  }
}



  

  function getImageBrightness(image) {

    var img = document.createElement("img");
    img.src = image;
    img.crossOrigin = 'anonymous';
    img.style.display = "none";
    document.body.appendChild(img);
  
    var colorSum = 0;
  
    img.onload = function() {
        var canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;
  
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this,0,0);
  
        var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
        var data = imageData.data;
        var r,g,b,avg;
  
          for(var x = 0, len = data.length; x < len; x+=4) {
            r = data[x];
            g = data[x+1];
            b = data[x+2];
  
            avg = Math.floor((r+g+b)/3);
            colorSum += avg;
        }
  
        var brightness = Math.floor(colorSum / (this.width*this.height));
        console.log(brightness);
        console.log(image);
  
        if (brightness > 90) {
          setToggleClass(true);

        }
        else {
          setToggleClass(false);
          

        }
  
    }
  }

