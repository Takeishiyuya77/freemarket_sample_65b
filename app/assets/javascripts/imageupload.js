$(document).on('turbolinks:load', ()=> {
  // プレビュー用のimgタグを生成する関数
  const buildImg = (index, url)=> {
    const html = `<div data-index="${index}", class="contents__main__image__box__upper__previews__preview">
                    <div class="contents__main__image__box__upper__previews__preview__image">
                      <img class= "image${index} input_images", data-index="${index}" src="${url}" width="120px" height="120px">
                      <div class="js-remove contents__main__image__box__upper__previews__preview__delete">
                        削除
                      </div>
                    </div>
                  </div>`;
    return html;
  }
  // 画像用のinputを生成する関数
  const buildFileField = (num)=> {
    const html = `<div data-index="${num}" class="js-file_group">
                    <input class="js-file" type="file"
                    name="item[images_attributes][${num}][image]"
                    id="item_images_attributes_${num}_image">
                  </div>`;
    return html;
  }
  // file_fieldのnameに動的なindexをつける為の配列
  let fileIndex = [1,2,3,4,5,6,7,8,9,10];
  // 既に使われているindexを除外
  lastIndex = $('.js-file_group:last').data('index');
  fileIndex.splice(0, lastIndex);

  $('.hidden-destroy').hide();
  
  $('.contents__main__image__box').on('change', '.js-file', function(e) {
    const targetIndex = $(this).parent().data('index');
    // ファイルのブラウザ上でのURLを取得する
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);

    // 該当indexを持つimgがあれば取得して変数imgに入れる(画像変更の処理)
    if (img = $(`img[data-index="${targetIndex}"]`)[0]) {
      img.setAttribute('src', blobUrl);
    } else {  // 新規画像追加の処理
      $('.contents__main__image__box__upper__previews').append(buildImg(targetIndex, blobUrl));
      // fileIndexの先頭の数字を使ってinputを作る
      $('.contents__main__image__box__upper__uploader').append(buildFileField(fileIndex[0]));
      fileIndex.shift();
      // 末尾の数に1足した数を追加する
      fileIndex.push(fileIndex[fileIndex.length - 1] + 1);
    }
  });

  $('.contents__main__image__box').on('click', '.js-remove', function() {
    const targetIndex = $(this).prev().data('index');
    // 該当indexを振られているチェックボックスを取得する
    const hiddenCheck = $(`input[data-index="${targetIndex}"].hidden-destroy`);
    // もしチェックボックスが存在すればチェックを入れる
    if (hiddenCheck) hiddenCheck.prop('checked', true);
    console.log(`div[data-index="${targetIndex}"]`)
    $(this).parent().remove();
    $(`img[data-index="${targetIndex}"]`).remove();
    $(`div[data-index="${targetIndex}"]`).remove();
    $(`div[data-index="${targetIndex}"]`).remove();
    // 画像入力欄が0個にならないようにしておく
    if ($('.js-file').length == 0) $('.contents__main__image__box').append(buildFileField(fileIndex[0]));
  });
  
  $(document).ready(function() {
    $('.contents__main__image__box__upper__previews').on('DOMSubtreeModified propertychange', function() {
      let len = $('.input_images').size();
      switch (len){
        case 0:
          $('.contents__main__image__box__upper__previews').css({
            'display':'none',
          });;
          $('.contents__main__image__box__upper__uploader').css({
            'width':'500%',
            'grid-column-start':'1',
            'grid-row-start':'1'
          });;
          break;
        case 1:
          $('.contents__main__image__box__upper__previews').css({
            'display':'grid',
            'grid-template-rows':'repeat(1, 165px)',
            'grid-template-columns':'repeat(1, 120px)',
            'width':'120px'
          });;
          $('.contents__main__image__box__upper__uploader').css({
            'width':'400%',
            'grid-column-start':'2',
            'grid-row-start':'1'
          });;
          break;
        case 2:
          $('.contents__main__image__box__upper__previews').css({
            'display':'grid',
            'grid-template-rows':'repeat(1, 165px)',
            'grid-template-columns':'repeat(2, 120px)',
          });;
          $('.contents__main__image__box__upper__uploader').css({
            'width':'300%',
            'grid-column-start':'3',
            'grid-row-start':'1'
          });;
          break;
        case 3:
          $('.contents__main__image__box__upper__previews').css({
            'display':'grid',
            'grid-template-rows':'repeat(1, 165px)',
            'grid-template-columns':'repeat(3, 120px)',
          });;
          $('.contents__main__image__box__upper__uploader').css({
            'width':'200%',
            'grid-column-start':'4',
            'grid-row-start':'1'
          });;
          break;
        case 4:
          $('.contents__main__image__box__upper__previews').css({
            'display':'grid',
            'grid-template-rows':'repeat(1, 165px)',
            'grid-template-columns':'repeat(4, 120px)',
          });;
          $('.contents__main__image__box__upper__uploader').css({
            'width':'120px',
            'grid-column-start':'5',
            'grid-row-start':'1'
          });;
          break;
        case 5:
          $('.contents__main__image__box__upper__previews').css({
            'display':'grid',
            'grid-template-rows':'repeat(1, 165px)',
            'grid-template-columns':'repeat(5, 120px)',
          });;
          $('.contents__main__image__box__upper__uploader').css({
            'grid-template-rows':'repeat(2, 169px)',
            'width':'500%',
            'grid-column-start':'1',
            'grid-row-start':'2'
          });;
          break;
        case 6:
          $('.contents__main__image__box__upper__previews').css({
            'display':'grid',
            'grid-template-rows':'repeat(2, 165px)',
            'grid-template-columns':'repeat(5, 120px)',
          });;
          $('.contents__main__image__box__upper__uploader').css({
            'grid-template-rows':'repeat(2, 169px)',
            'width':'400%',
            'grid-column-start':'2',
            'grid-row-start':'2'
          });;
          break;
        case 7:
          $('.contents__main__image__box__upper__previews').css({
            'display':'grid',
            'grid-template-rows':'repeat(2, 165px)',
            'grid-template-columns':'repeat(5, 120px)',
          });;
          $('.contents__main__image__box__upper__uploader').css({
            'grid-template-rows':'repeat(2, 169px)',
            'width':'300%',
            'grid-column-start':'3',
            'grid-row-start':'2'
          });;
          break;
        case 8:
          $('.contents__main__image__box__upper__previews').css({
            'display':'grid',
            'grid-template-rows':'repeat(2, 165px)',
            'grid-template-columns':'repeat(5, 120px)',
          });;
          $('.contents__main__image__box__upper__uploader').css({
            'grid-template-rows':'repeat(2, 169px)',
            'width':'200%',
            'grid-column-start':'4',
            'grid-row-start':'2'
          });;
          break;
        case 9:
          $('.contents__main__image__box__upper__previews').css({
            'display':'grid',
            'grid-template-rows':'repeat(2, 165px)',
            'grid-template-columns':'repeat(5, 120px)',
          });;
          $('.contents__main__image__box__upper__uploader').css({
            'grid-template-rows':'repeat(2, 169px)',
            'width':'100%',
            'grid-column-start':'5',
            'grid-row-start':'2'
          });;
          break;
        case 10:
          $('.contents__main__image__box__upper__previews').css({
            'display':'grid',
            'grid-template-rows':'repeat(2, 165px)',
            'grid-template-columns':'repeat(5, 120px)',
          });;
          $('.contents__main__image__box__upper__uploader').css({
            'width':'110px',
            'grid-column-start':'5',
            'grid-row-start':'2'
          });;
          break;
      }
    });
  });
});