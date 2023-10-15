// Hello jQuery!! と表示------------------------------
// $(document).ready(function (){
//   $('body').html('<h1>Hello jQuery!!<h1>');
// });

// CSSのスタイルをjQueryで変更------------------------------
// $(function () {
//   $('.box1').css({
//     'background-color': '#0000ff',
//     'height': '200px'
//   });
// });

// 上から下へスライドするアニメーション------------------------------
// $(function(){
//   $('.box1').slideDown('2000');
// });

// $(function(){
//   $('.box1').slideUp('slow');
// });

// 表示、非表示------------------------------
// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });

// $(function(){
//   $('.box1').hide();
// });

// 要素を上から下へスライドさせた後、赤色の正方形を青色の長方形（幅200px、高さ100px）に変更してください。
// その後、下から上へスライドされるようにしてください。
// $(function (){
//   $('.box1').slideDown(2000,function (){
//     $('.box1').css({
//       'background-color': '#0000FF',
//       'width': '200px',
//       'height': '100px'
//     }).slideUp(3000);
//   });
// });

// マウスオーバー、マウスアウトイベント------------------------------
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000FF'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#FF0000'});
//   });
// });

// class属性を定義し、簡潔に------------------------------
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');    // .box1-extと書くと、(.)が.addClassと重複して【..box1-ext】という意味になるため注意
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// マウスクリックイベント------------------------------
$(function(){
  $('.box1').on('click', function(){
    $('.box1').addClass('box1-ext');
  })
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});

