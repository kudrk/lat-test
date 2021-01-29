//more->drop

$(document).ready(() => {

  $('.questions__item').on('click', e => {

    $(e.currentTarget).toggleClass('questions__item_active');

    const activeQa = $('.questions__item_active');
    if (activeQa.length > 0) {
      activeQa.siblings('.questions__item').removeClass('questions__item_active');
      $(e.currentTarget).addClass('questions__item_active');
    }
  });
});
