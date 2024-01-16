$(document).ready(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();

    const novaTarefa = $('form input').val();
    const novoItem = $('<li></li>').text(novaTarefa);

    $('ul').append(novoItem);

    $('form input').val('');
  });

  $('ul').on('click', 'li', function() {
    $(this).toggleClass('done');
  });
});
