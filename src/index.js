function generateComponent() {
  const element__ = document.createElement('DIV');
  element__.className = 'container';

  const paragraph = document.createElement('P');
  const txt = document.createTextNode('Boo! ƪ(ړײ)ƪ');

  paragraph.appendChild(txt);
  element__.appendChild(paragraph);

  console.log('My JavaScript log.');

  return element__;
}
document.body.appendChild(generateComponent());
