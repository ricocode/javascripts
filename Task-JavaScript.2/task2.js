$(document).ready(function(){

// points
  function score_indicate(){
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    return subject_points;
  }

// sum
  function sum_indicate(){
    //let sum = score_indicate().reduce(function (sum, num) {
    //return sum + num;
    //}, 0);
    let s_points = score_indicate();
    let sum = 0;
    for (let i=0;i<s_points.length;i++){
    sum += s_points[i];
    }
    $("#sum_indicate").text(sum);
    return sum;
  }
  

// average
  function average_indicate(){
    const sum = sum_indicate();
    const s_points = score_indicate();
    let average = sum / s_points.length;
    
    $("#average_indicate").text(average);
    return average;
  }    

// rank
  function get_achievement(){
    const average = average_indicate();
    if(average>=100*0.8){
          return'A';
      } else if 
          (average>=100*0.6){
          return'B';
      } else if 
          (average>=100*0.4){
          return'C';
      } else {
          return'D';
      }}

// judge
  function get_pass_or_failure(){
    let s_points = score_indicate(); 
    let judge = '合格';
    
    for(let i=0;i<s_points.length;i++){
      if(s_points[i]<60){
        judge = '不合格';
    break;
    }}
    return judge;
  }

// result
  function judgement(){
  //$('#btn-declaration').click(function() {
   $('#declaration').append(`<label id="declaration" class="btn btn-warning">あなたの成績は${get_achievement()}です。${get_pass_or_failure()}です</label>`);
  }
  //)}

  // スコア変更
  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
    sum_indicate();
    average_indicate();
  });


  //ランク判定表示　firstchild削除
  
  const btnRmEvalu = document.getElementById('btn-evaluation');
  btnRmEvalu.addEventListener('click', function(){
  const oldEvalu = document.getElementById('evaluation');
  while(oldEvalu.firstChild){
  oldEvalu.removeChild(oldEvalu.firstChild);
  }
  },false);
  
  $('#btn-evaluation').click(function() {
    $('#evaluation').append(`<label id="evaluation" class="btn btn-primary">${get_achievement()}</label>`);
   });
  


// Get the <ul> element with id="myList"
//let oldNode = document.getElementById("evaluation");

// If the <ul> element has any child nodes, remove its first child node
//if (list.hasChildNodes()) {
//  list.removeChild(list.childNodes[0]);
//}

 // 合否判定表示　firstchild削除
  const btnRmJdg = document.getElementById('btn-judge');
  btnRmJdg.addEventListener('click', function(){
  const oldJdg = document.getElementById('judge');
  while(oldJdg.firstChild){
  oldJdg.removeChild(oldJdg.firstChild);
  }
  },false);
 
  $('#btn-judge').click(function() {
    $('#judge').append(`<label id="judge" class="btn btn-success">${get_pass_or_failure()}</label>`);
  });

  
 //最終結果表示 firstchild削除
 
  const btnDcl = document.getElementById('btn-declaration');
  btnDcl.addEventListener('click', function(){
  const oldDcl = document.getElementById('declaration');
  while(oldDcl.firstChild){
  oldDcl.removeChild(oldDcl.firstChild);
  }
  },false);
 
  $('#btn-declaration').click(function() {
   judgement();
   //$('#declaration').append(`<label id="declaration" class="btn btn-warning">あなたの成績は${get_achievement()}です。${get_pass_or_failure()}です</label>`);
  });
});