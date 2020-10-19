var URL2 = 'https://black1202.github.io/PostProgram/'
let st;

/* 必要なcsvファイルを探す関数 */
function search2_0(num2,post_program) {
    for(let i=1;i<100;i++){
        st = String(i);
        if(i<10) {
            st = '00'+st;
        }
        else {
            st = '0'+st;
        }
        /* 文字列の上3文字に合致する場合 */
        if(num2.slice(0,3) == st){
            let s = st;
            getCSV(URL2+'postdata/'+s+'.csv',post_program)
            break;
        }
    }
}

/* csvを読み込む */
function getCSV(url,post_program){
  let csv = new XMLHttpRequest();
  csv.open('get',url,true);
  csv.send(null);
  csv.onload = function(){
    CSVtoArray(csv.responseText,post_program);
  }
}
/* csvを配列に入れる */
function CSVtoArray(str,post_program){
  let tmpdata = str.split("\n");
  let data = [];
  for(let i=0;i<tmpdata.length;++i){
    data[i] = tmpdata[i].split(',');
  }
  search3(data,post_program)
}
/* 配列の1列目と合致するデータを探す */
function search3(d,post_program) {
  let htmldata = post_program[0].innerHTML;
  htmldata = htmldata.replace(" ","");
  let result1 = htmldata.includes('class="strt_add1"');
  let result2 = htmldata.includes('class="strt_add2"');
  let result3 = htmldata.includes('class="strt_add"');

  for(let a=0; a < d.length; ++a){
    if(postnum == d[a][0]){
      if(result1 == true && result2 == true) {
        post_program[0].getElementsByClassName("strt_add1")[0].value = d[a][1];
        post_program[0].getElementsByClassName("strt_add2")[0].value = d[a][2]+d[a][3]+d[a][4];
      }
      if(result3 == true) {
        post_program[0].getElementsByClassName("strt_add")[0].value = d[a][1]+d[a][2]+d[a][3]+d[a][4];
      }
      break;
    }
  }
}