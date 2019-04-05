$(() => {
  $('div.poem-stanza').addClass('highlight');
  console.log('hello');
  console.log(52);
  console.log($('div.poem-stanza'));
  $('#selected-plays > li').addClass('horizontal');

});
/*
window.onload = fiunbction() {
  const divs = document.getElementByTagName('div');
  const hasClass = (elms, cls) =>
    new RegExp(` ${cls} `).test(` ${elem.className} `);

    for (let div of divs) {
      if(hasClass(div, 'poem-stanza')) && !hasClass(div, 'highlight')) {
        div.className +
      }
    }

} */
