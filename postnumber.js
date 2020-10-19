let postnum;
var URL1 = 'https://black1202.github.io/PostProgram/program/'

/* ウィンドウが読み込まれたら実行する */
window.addEventListener('load',function(){

    /* class="post_program"内のデータを配列post_programに入れる */
    /* また、class="post_num"内のデータを配列postnum_classに入れる */
    /* ※ここの段階ではまだHTML内の情報を取得してだけでフォームに書かれた情報は読み取っていない */
    let post_program = document.getElementsByClassName("post_program"); 
    let postnum_class = post_program[0].getElementsByClassName("post_num");
    /* 郵便番号を入力するフォームが1つの場合の処理 */
    if(postnum_class.length == 1){
        /* keyupで発火 */
        postnum_class[0].addEventListener("keyup" , function(){
            /* フォームに入力された情報を取得 */
            postnum = postnum_class[0].value;
            /* 文字が6文字以下の場合住所欄を空白にする */
            if(postnum.length < 7){
                /* <form>もしくは<div>内のHTMLコードを文字列として受け取る */
                let htmldata = post_program[0].innerHTML;
                /* 半角スペースを消す */
                htmldata = htmldata.replace(" ","");
                /* 文字列内に指定された出力先classが存在するか調べる */
                /* 存在すればtrue、存在しないならfalseを返す */ 
                let result1 = htmldata.includes('class="strt_add1"');
                let result2 = htmldata.includes('class="strt_add2"');
                let result3 = htmldata.includes('class="strt_add"');
                if(result1 == true && result2 == true) {
                    post_program[0].getElementsByClassName("strt_add1")[0].value = "";
                    post_program[0].getElementsByClassName("strt_add2")[0].value = "";
                }
                if(result3 == true) {
                    post_program[0].getElementsByClassName("strt_add")[0].value = "";
                }
            }
            /* 文字列が３文字の時キャッシュを残すために一度検索を実行 */
            if(postnum.length == 3) {
                search1(postnum,post_program)
            }
            /* 文字列が7文字の時再度検索を実行 */
            if(postnum.length == 7) {
                search1(postnum,post_program)
            }
            /* ハイフンへの対応 */
            if(postnum.length == 8) {
                postnum.replace("-","");
                search1(postnum,post_program)
            }
        });
    }

    /* 郵便番号を入力するフォームが2つの場合の処理 */
    if(postnum_class.length == 2){
        /* 1つ目のフォームにおけるkeyupで発火 */
        postnum_class[0].addEventListener("keyup" , function(){
            /* ２つの入力フォームの入力内容をそれぞれ受け取る */
            let postnum1 = postnum_class[0].value;
            let postnum2 = postnum_class[1].value;
            /* ２つ目の入力フォームの文字列が3文字以下なら入力フォームを空欄にする */
            if(postnum2.length < 4){
                let htmldata = post_program[0].innerHTML;
                htmldata = htmldata.replace(" ","");
                let result1 = htmldata.includes('class="strt_add1"');
                let result2 = htmldata.includes('class="strt_add2"');
                let result3 = htmldata.includes('class="strt_add"');

                if(result1 == true && result2 == true) {
                    post_program[0].getElementsByClassName("strt_add1")[0].value = "";
                    post_program[0].getElementsByClassName("strt_add2")[0].value = "";
                }

                if(result3 == true) {
                    post_program[0].getElementsByClassName("strt_add")[0].value = "";
                }
            }
            /* ２つの入力内容を合わせて一つの文字列にする。 */
            postnum = postnum1 + postnum2
            if(postnum.length == 3) {
                search1(postnum,post_program)
            }
            if(postnum.length == 7) {
                search1(postnum,post_program)
            }
            if(postnum.length == 8) {
                postnum.replace("-","");
                search1(postnum,post_program)
            }
        });

        /* 2つ目のフォームにおけるkeyupで発火 */
        postnum_class[1].addEventListener("keyup" , function(){
            let postnum1 = postnum_class[0].value;
            let postnum2 = postnum_class[1].value;

            if(postnum2.length < 4){
                let htmldata = post_program[0].innerHTML;
                htmldata = htmldata.replace(" ","");
                let result1 = htmldata.includes('class="strt_add1"');
                let result2 = htmldata.includes('class="strt_add2"');
                let result3 = htmldata.includes('class="strt_add"');

                if(result1 == true && result2 == true) {
                    post_program[0].getElementsByClassName("strt_add1")[0].value = "";
                    post_program[0].getElementsByClassName("strt_add2")[0].value = "";
                }

                if(result3 == true) {
                    post_program[0].getElementsByClassName("strt_add")[0].value = "";
                }
            }

            postnum = postnum1 + postnum2
            if(postnum.length == 3) {
                search1(postnum,post_program)
            }
            if(postnum.length == 7) {
                search1(postnum,post_program)
            }
            if(postnum.length == 8) {
                postnum = postnum.replace("-","");
                search1(postnum,post_program)
            }
        });
    }
});

/* 検索用関数を定義する */
/* 文字列の1文字目が0～9でそれぞれのjsファイルを読み込む */
function search1(num1,post_program) {
  if(num1.slice(0,1) == '0'){
      let script = document.createElement("script");
      script.src = URL1+'001-099.js';
      let head = document.getElementsByTagName("head");
      head[0].appendChild(script);
      /* jsファイルを読み込んだら行う処理 */
      script.onload = function(){
          search2_0(num1,post_program)
    }
  }

  if(num1.slice(0,1) == '1'){
      let script = document.createElement("script");
      script.src = URL1+'100-199.js';
      let head = document.getElementsByTagName("head");
      head[0].appendChild(script);
      script.onload = function(){
          search2_1(num1,post_program)
      }
  }

  if(num1.slice(0,1) == '2'){
      let script = document.createElement("script");
      script.src = URL1+'200-299.js';
      let head = document.getElementsByTagName("head");
      head[0].appendChild(script);
      script.onload = function(){
          search2_2(num1,post_program)
      }
  }

  if(num1.slice(0,1) == '3'){
      let script = document.createElement("script");
      script.src = URL1+'300-399.js';
      let head = document.getElementsByTagName("head");
      head[0].appendChild(script);
      script.onload = function(){
          search2_3(num1,post_program)
      }
  }

  if(num1.slice(0,1) == '4'){
      let script = document.createElement("script");
      script.src = URL1+'400-499.js';
      let head = document.getElementsByTagName("head");
      head[0].appendChild(script);
      script.onload = function(){
          search2_4(num1,post_program)
      }
  }

  if(num1.slice(0,1) == '5'){
      let script = document.createElement("script");
      script.src = URL1+'500-599.js';
      let head = document.getElementsByTagName("head");
      head[0].appendChild(script);
      script.onload = function(){
          search2_5(num1,post_program)
      }
  }

  if(num1.slice(0,1) == '6'){
      let script = document.createElement("script");
      script.src = URL1+'600-699.js';
      let head = document.getElementsByTagName("head");
      head[0].appendChild(script);
      script.onload = function(){
          search2_6(num1,post_program)
      }
  }

  if(num1.slice(0,1) == '7'){
      let script = document.createElement("script");
      script.src = URL1+'700-799.js';
      let head = document.getElementsByTagName("head");
      head[0].appendChild(script);
      script.onload = function(){
          search2_7(num1,post_program)
      }
  }

  if(num1.slice(0,1) == '8'){
      let script = document.createElement("script");
      script.src = URL1+'800-899.js';
      let head = document.getElementsByTagName("head");
      head[0].appendChild(script);
      script.onload = function(){
          search2_8(num1,post_program)
      }
  }

  if(num1.slice(0,1) == '9'){
      let script = document.createElement("script");
      script.src = URL1+'900-999.js';
      let head = document.getElementsByTagName("head");
      head[0].appendChild(script);
      script.onload = function(){
          search2_9(num1,post_program)
    }
  }

}
