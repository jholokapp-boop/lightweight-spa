document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      button.style.opacity = '0.96';
    });

    button.addEventListener('mouseleave', () => {
      button.style.opacity = '1';
    });
  });
});
