const scriptName="kakaobott.js";

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){

      //웹 크롤링 이후 환율 정보 추출 [Seungjae]
      var exChangeInfo = Utils.getWebText("https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=중국+환율");
      exChangeInfo = exChangeInfo.split('</h3></div><div class="cont_grp _graph"');
      exChangeInfo = exChangeInfo[0];
      exChangeInfo = exChangeInfo.split('<div class="rate_tlt">');
      exChangeInfo = exChangeInfo[1];
      exChangeInfo = exChangeInfo.split('기간별 정보');
      exChangeInfo = exChangeInfo[0];
      exChangeInfo = exChangeInfo.replace(/(<([^>]+)>)/g, "");
      exChangeInfo = exChangeInfo.trim();
      exChangeInfo = exChangeInfo.replace(/^ +/gm,"");
      exChangeInfo = exChangeInfo.replace(/\n\n/g, "");

      if(msg == "/중국 환율"){
        replier.reply("["+today+" 기준 중국 환율]\n\n"+exChangeInfo);
      }

      //현재 시간을 담기 위한 객체 및 변수 생성 [Seungjae]
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;
      var yyyy = today.getFullYear();
      var hh = today.getHours();

      
      if(dd<10){
        dd='0'+dd;
      }
      if(mm<10){
        mm='0'+mm;
      }

      today = yyyy+"년"+mm+"월"+dd+"일 "+hh+"시";

      //타이머 설정


      // var timer = new java.util.Timer();
      // var task = new java.util.TimerTask();
      // var fn = replier.reply("Seungjae Yoon","["+today+" 이벤트]\n\n"+exChangeInfo);
      //
      // function clearInterval(ms){
      //   timer.purge();
      //   delete ms;
      // }
      // function setInterval (ms,delay1,delay2){
      //     timer.schedule(task,delay1,delay2);
      //     return ms;
      // }

      //유니온 캐릭터 ------------------------------



      msg = msg.trim();


      var lvnum = msg.replace(/[^0-9]/g,'');//숫자추출
      var lvstr = msg.replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/gi,"");//한글추출
      var lvFirst = msg.charAt(0);//슬러시 문자열 추출(맨앞자리첫글자)


function onStartCompile(){
    /*컴파일 또는 Api.reload호출시, 컴파일 되기 이전에 호출되는 함수입니다.
     *제안하는 용도: 리로드시 자동 백업*/

}

//아래 4개의 메소드는 액티비티 화면을 수정할때 사용됩니다.
function onCreate(savedInstanceState,activity) {
    var layout=new android.widget.LinearLayout(activity);
    layout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
    var txt=new android.widget.TextView(activity);
    txt.setText("액티비티 사용 예시입니다.");
    layout.addView(txt);
    activity.setContentView(layout);
}
function onResume(activity) {}
function onPause(activity) {}
function onStop(activity) {}
