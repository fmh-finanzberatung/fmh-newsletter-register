function getVert(yPos, third) {

  if (yPos < third ) return 'top';
  if (yPos < (2 * third))  return 'middle';
  return 'bottom';
}

function getHor(xPos, third, width) {

  if (width > ( 2 * third )) return 'full';
  if (xPos < third ) return 'left';
  if (xPos < (2 * third) ) return 'center';
  return 'right';
}

function getScreenPosition() {

  let el = document.getElementById("newsletter-register");
  let bounding = el.getBoundingClientRect();
  let cw = el.clientWidth; 
  let contentWidth = document.body.clientWidth; 
  let contentHeight = document.body.scrollHeight; 
  
  let horThird = contentWidth / 3;  
  let vertThird = contentHeight / 3;

  const horPos = getHor(bounding.x, horThird, cw);
  const vertPos = getVert(bounding.y, vertThird);

  return `${horPos} ${vertPos}`;

}

export default getScreenPosition; 
