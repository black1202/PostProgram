var URL2 = 'https://black1202.github.io/PostProgram/'
let st;

function search2_2(num2,post_program) {
    for(let i=200;i<300;i++){
        st = String(i);
        if(num2.slice(0,3) == st){
            let s = st;
            getCSV(URL2+'postdata/'+s+'.csv',post_program)
            break;
        }
    }
}

function getCSV(url,post_program){
  let csv = new XMLHttpRequest();
  csv.open('get',url,true);
  csv.send(null);
  csv.onload = function(){
    CSVtoArray(csv.responseText,post_program);
  }
}

function CSVtoArray(str,post_program){
  let tmpdata = str.split("\n");
  let data = [];
  for(let i=0;i<tmpdata.length;++i){
    data[i] = tmpdata[i].split(',');
  }
  search3(data,post_program)
}
    
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