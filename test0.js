$(document).ready(function(){

// func処理

  function score_indicate(){
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
    let sum = 0;
    for (let i=0;i<subject_points.length;i++){
    sum += subject_points[i];
    }
    $("#sum_indicate").text(sum);

    let average = sum / subject_points.length;
    $("#average_indicate").text(average);
    
    // ここに、上記を参考にして平均点を出力する処理を書き込む
  }

  function get_achievement(){
    // ここに、ランクの値の文字列（平均点が80点以上なら"A"、60点以上なら"B"、40点以上なら"C"、それ以下なら"D"）を出力する処理を書き込む
  const average = $('score_indicate').text();
   if(average*100*0.8){
        return'A';
    } else if 
        (average*100*0.6){
        return'B';
    } else if 
        (average*100*0.4){
        return'C';
    } else {
        return'D';
    }};


});
 
// 省略
    average=Number(average);

    console.log(average);
// 省略
