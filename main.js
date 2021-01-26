//more->drop

$(document).ready(() => {

  const item = $('.questions__item');

  $(item).on('click', e => {
    let drop = $(e.currentTarget).next('.drop');
    drop.slideToggle();

    if (item.hasClass('active')) {
      $(e.currentTarget).find('.more').css({
        'transform': 'rotate(0deg)'
      });
      $(e.currentTarget).removeClass('active');
    } else {
      $(e.currentTarget).find('.more').css({
        'transform': 'rotate(180deg)'
      });
      $(e.currentTarget).addClass('active');
    }
  });
});

