//読み込みテスト    $('.en-copy').css('color','red');

//スティッキーヘッダー
$(function(){

    var $win = $(window),                //ページ全体が読み込まれてから実行する
        $fv = $('.fv')
        $header = $('.header'),
        fvHeight = $fv.outerHeight(),    //fvの要素の高さを取得
        fixedClass = 'fixed';

      $win.on('load scroll',function(){    //ウィンドウが読み込まれた後、スクロールイベントが発生した時に実行する(onを使ってloadとscrollをまとめる)
          var value = $(this).scrollTop();     //ウィンドウがどれだけ縦方向にスクロールされたか調べvalueに代入
          if($win.width() > 768){          //もしウィンドウが768px以上だったら
              if(value > fvHeight){        //もしスクロールされた高さが画像の高さ以上だったら
              $header.addClass(fixedClass);      //ヘッダーにfixedClassクラスを付与する
          }else{
              $header.removeClass(fixedClass);   //ヘッダーからfixedClassを削除する
            }
          }
        });


    //ハンバーガーメニュー                     //スライダーの下に書くとスライダーのプラグインを読み込まないと動かなくなる
    $('.burger-btn').on('click',function(){
        $('.header-nav').fadeToggle(300);
        $(this).toggleClass('cross');
        $('body').toggleClass('noscroll');   //スクロールの固定
    });

    //スライダー
    $('.slider').slick({     //slickプラグインの設定
        autoplay: true,
        autoplayspeed: 2000,
        fade: true,
        speed: 1000,
        cssEase: 'linear'     //切り替わりを滑らかにする
    });


});
