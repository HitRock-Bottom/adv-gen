
const note = document.getElementsByClassName("note");
const ad_no = document.getElementById("advice_no");
const Url = 'https://api.adviceslip.com/advice';

function getAdvice(){
  $.ajax({
    url: Url,
    type: "GET",
    success : function(result){
      let advice = JSON.parse(result);
      note[0].innerText = advice.slip.advice;
      ad_no.innerText = advice.slip.id;
    },
    error : function(error)
    {
      console.log(`Error ${error}`);
    }
  })
}

$(document).ready(function(){
  //const Url = 'https://api.adviceslip.com/advice';
  $('.btn').click(function(){
    $.ajax({
      url: Url,
      type: "GET",
      success : function(result){
        let advice = JSON.parse(result);
        //console.log(result);
        //console.log(advice.slip.advice);
        note[0].innerText = advice.slip.advice;
        ad_no.innerText = advice.slip.id;
      },
      error : function(error)
      {
        console.log(`Error ${error}`);
      }
    })
  })
})
