function get_achievement(points){
let sum = 0;
for (let i=0;i<number;i++){
 sum += points[i]
}

if(sum>=number*100*0.8){
    return'あなたの成績はAです。';
} else if 
    (sum>=number*100*0.6){
    return'あなたの成績はBです。';
} else if 
    (sum>=number*100*0.4){
    return'あなたの成績はCです。';
} else {
    return'あなたの成績はDです。';
}}




function get_pass_or_failure(points){
let judge = '合格';
for(let i =0;i<number;i++){
  if(points[i]<60){
  judge = '不合格';
  break;
}}
return judge;
}


function judgement(points){
return `あなたの成績は${achievement} ${pass_or_failure}です。`;
}

let points= [60,60, 60, 60, 80];
let number = points.length;

console.log(judgement(points));