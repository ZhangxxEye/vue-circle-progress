export function css(element, property, value) {
  if ( value ) {
    //CSS中像background-color这样的属性，‘-’在JavaScript中不兼容，需要设置成驼峰格式
    var index = property.indexOf('-');
    if( index != -1 ) {
      var char = property.charAt(index+1).toUpperCase();
      property.replace(/(-*){1}/,char);
    }
    element.style[property] = value;
  }else{
    //getPropertyValue()方法参数类似background-color写法，所以不要转驼峰格式
    return window.getComputedStyle(element).getPropertyValue(property);
  }
}
export function css3(element, property, value) {
  if( value ){
    property = capitalize(property.toLowerCase());
    element.style['webkit'+property] = value;
    element.style['Moz'+property] = value;
    element.style['ms'+property] = value;
    element.style['O'+property] = value;
    element.style[property.toLowerCase()] = value;
  }else{
    return window.getComputedStyle(element).getPropertyValue(
      ('webkit'+property)||('Moz'+property)||('ms'+property)||('O'+property)||property);
    //老实说，我不知道为什么要把不带浏览器标记的放在最后，既然都这么用，我也这么做吧。不过这样对现代浏览器来说可能并不好，判断次数变多了
  }

  //首字母大写
  function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}