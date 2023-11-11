$(function () {
  // 文字色変化
  $('#change-color').on('click', function() {
    $('#target').css('color','red');
  });
  // 文字内容変化
  $('#change-text').on('click', function() {
    $('#target').text('文字内容を更新しました');
  });
  // フェードアウト
  $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  });
  // フェードイン
  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });
});