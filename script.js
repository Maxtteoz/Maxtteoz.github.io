const navigation = document.querySelector('.navigation');
const highlight = document.querySelector('.highlight');
const items = document.querySelector('.navigation li');

highlight.computedStyleMap.width = items[0].offsetWidth + 'px';
highlight.computedStyleMap.left = items[0]