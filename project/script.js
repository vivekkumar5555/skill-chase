const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
    item.addEventListener('click', () => {
       
        accordionItems.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.classList.remove('is-active');
            }
        });

        
        item.classList.toggle('is-active');
    });
});


accordionItems.forEach((item) => {
  const accordionContent = item.querySelector('.accordion-content');
  const paragraph = accordionContent.querySelector('p');

  const text = paragraph.textContent;
  const points = text.split('.').filter(Boolean);

  paragraph.innerHTML = '';

  points.forEach((point) => {
    const pointElement = document.createElement('p');
    pointElement.textContent = `●  ${point.trim()}`; 
    accordionContent.appendChild(pointElement);
  });
});
