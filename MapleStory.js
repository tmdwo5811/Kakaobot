const scriptName="kakaobott.js";

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){

      //웹 크롤링 이후 필요한 정보만 추출 [Seungjae]
      var mapleEvent = Utils.getWebText("https://maplestory.nexon.com/News/Event");
      mapleEvent = mapleEvent.split('<a class="active">1</a>');
      mapleEvent = mapleEvent[0];
      mapleEvent = mapleEvent.split('<div class="event_board">');
      mapleEvent = mapleEvent[1];
      mapleEvent = mapleEvent.replace(/(<([^>]+)>)/g, "");
      mapleEvent = mapleEvent.trim();
      mapleEvent = mapleEvent.replace(/^ +/gm,"");
      mapleEvent = mapleEvent.replace(/\n\n/g, "");

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
      // var fn = replier.reply("Seungjae Yoon","["+today+" 이벤트]\n\n"+mapleEvent);
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
      if(msg == "/유니온 힘 증가"){
        replier.reply("- 유니온 STR증가 캐릭터 -\n[히어로]\n[팔라딘]\n[캐논슈터]\n[스트라이커]\n[카이저]\n[아크]\n[바이퍼]")
      }
      if(msg == "/유니온 덱스 증가"){
        replier.reply("- 유니온 DEX증가 캐릭터 -\n[패스파인더]\n[보우마스터]\n[윈드브레이커]\n[엔젤릭버스터]")
      }
      if(msg == "/유니온 인트 증가"){
        replier.reply("- 유니온 INT증가 캐릭터 -\n[썬콜]\n[비숍]\n[배틀메이지]\n[루미너스]\n[키네시스]\n[일리움]\n[플레임위자드]")
      }
      if(msg == "/유니온 럭 증가"){
        replier.reply("- 유니온 LUK증가 캐릭터 -\n[카데나]\n[나이트워커]\n[섀도어]\n[듀얼블레이드]")
      }
      //유니온 캐릭터 끝 ---------------------------
      //이벤트 명령어 실행 구문
      if(msg == "*이벤트시작*"){
        setInterval(fn,3000,5000);
      }
      if(msg == "*이벤트종료*"){
        clearInterval(fn);
      }

      if(msg == "/이벤트"){
        replier.reply("["+today+" 이벤트]\n\n"+mapleEvent);
      }

      msg = msg.trim();

      if(msg == "시그너스님 안녕하세요" || msg == "시그너스님 하이" || msg == "시그너스님 헬로" || msg == "커맨드?" || msg == "명령어?" ){
        replier.reply("메이플 용사님, 안녕하세요:)\n사용 가능한 명령어는 아래와 같습니다.\n\n1) /무자본 사냥터 XXX레벨\n"+
      "2) /유자본 사냥터 XXX레벨\n3) /메소 시세\n4) /필수 링크 캐릭\n5) /이벤트");
      }
      if(msg == "/"){
        replier.reply("올바른 명령어를 입력해주세요.");
      }
      var mapleMoney = Utils.getWebText("http://trade.itemmania.com/game_info/money/index.html?win=pop&gamecode=138&servercode=9942").replace(/<[^>]+>/g,"").split("var money_avg")[1].split("var money_standard")[0].replace(/[^0-9]/g,'').substring(0,3);
      if(msg == "/메소 시세"){
        replier.reply("[아이템 매니아 기준]\n1억 메소당 약 "+mapleMoney+"0원 입니다.");
      }
      if(msg == "/필수 링크 캐릭"){
        replier.reply("- 필수 링크 12 캐릭터 -\n1.[메르세데스]\n2.[아란]\n3.[에반]\n4.[팬텀]\n5.[데몬어밴져]\n6.[아크]\n7.[호영]\n8.[일리움]\n9.[보마,신궁,패파 택1]\n10.[키네시스]\n11.[제논]\n12.[캡틴,캐논슈터,바이퍼 택1]")
      }
      var lvnum = msg.replace(/[^0-9]/g,'');//숫자추출
      var lvstr = msg.replace(/[^\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/gi,"");//한글추출
      var lvFirst = msg.charAt(0);//슬러시 문자열 추출(맨앞자리첫글자)

        if (lvFirst == "/") {
          if (lvstr == "유자본사냥터레벨") {
            if (lvnum >= 1 && lvnum <= 30) {
              replier.reply("[0~30Lv 추천 사냥터]\n스토리 퀘스트\n골렘의사냥터\n엘리니아 북쪽숲\n엘로딘 깊어지는 숲 1");
            }else if(lvnum > 30 && lvnum <= 45 ){
              replier.reply("[30~45Lv 추천 사냥터]\n골드 비치 퀘스트\n와일드보어의 땅");
            }else if(lvnum > 45 && lvnum <= 60 ){
              replier.reply("[45~60Lv 추천 사냥터]\n제 1 군영\n조용한습지 (58Lv때 이지자쿰)\n축축한 습지");
            }else if(lvnum > 60 && lvnum <= 71) {
              replier.reply("[60~71Lv 추천 사냥터]\n엘나스 산맥 얼음 골짜기2");
            }else if(lvnum > 71 && lvnum <= 85) {
              replier.reply("[71~85Lv 추천 사냥터]\n마가티아 연구소 C-2\n사헬지대2\n잠자는 사막");
            }else if(lvnum > 85 && lvnum <= 95) {
              replier.reply("[85~95Lv 추천 사냥터]\n관계자외 출입금지");
            }else if(lvnum > 95 && lvnum <= 110) {
              replier.reply("[95~110Lv 추천 사냥터]\n루디브리엄성 장난감 공장<1공정>구역");
            }else if(lvnum > 110 && lvnum <= 120) {
              replier.reply("[110~120Lv 추천 사냥터]\n루디브리엄성 장난감공장<1공정>6구역,기계실");
            }else if(lvnum > 120 && lvnum <= 125) {
              replier.reply("[120~125Lv 추천 사냥터]\n루디브리엄 시계탑 최하층<꼬여버린시간>\n엘나스 폐광 늑대의 영역\n뒤틀린 회랑\n잊혀진 회랑");
            }else if(lvnum > 125 && lvnum <= 130) {
              replier.reply("[125~130Lv 추천 사냥터]\n아랫마을 현상금 퀘스트");
            }else if(lvnum > 130 && lvnum <= 140) {
              replier.reply("[130~140Lv 추천 사냥터]\n폐광 시련의 동굴1");
            }else if(lvnum > 140 && lvnum <= 160) {
              replier.reply("[140~160Lv 추천 사냥터]\n커닝타워 2층 *80\n커닝타워 5층 *80");
            }else if(lvnum > 160 && lvnum <= 180) {
              replier.reply("[160~180Lv 추천 사냥터]\n지구방위본부 H01-H03");
            }else if(lvnum > 180 && lvnum <= 190) {
              replier.reply("[180~190Lv 추천 사냥터]\n버려진 발굴지역 2, 4");
            }else if(lvnum > 190 && lvnum <= 200) {
              replier.reply("[190~200Lv 추천 사냥터]\n헤이븐 기계무덤 언덕4\n스카이라인 올라가는길");
            }else if(lvnum > 200 && lvnum <= 210) {
              replier.reply("[200~210Lv 추천 사냥터]\n풍화된 분노와 슬픔의땅\n동굴의 동쪽길2\n동굴아래쪽\n동굴의 깊숙한곳");
            }else if(lvnum > 210 && lvnum <= 220) {
              replier.reply("[210~220Lv 추천 사냥터]\n몽땅동글숲1\n츄깊\n격류지대3");
            }
        }else if(lvstr == "무자본사냥터레벨"){
          if (lvnum >= 1 && lvnum <= 10) {
            replier.reply("[0~10Lv 추천 사냥터]\n스토리 퀘스트");
          }else if(lvnum > 10 && lvnum <= 20 ){
            replier.reply("[10~20Lv 추천 사냥터]\n골렘의 사냥터");
          }else if(lvnum > 20 && lvnum <= 35 ){
            replier.reply("[20~35Lv 추천 사냥터]\n엘로딘 깊어지는 숲 1");
          }else if(lvnum > 35 && lvnum <= 45) {
            replier.reply("[36~45Lv 추천 사냥터]\n골드비치 퀘스트");
          }else if(lvnum > 45 && lvnum <= 50) {
            replier.reply("[46~50Lv 추천 사냥터]\n와일드 보어의 땅");
          }else if(lvnum > 50 && lvnum <= 60) {
            replier.reply("[51~60Lv 추천 사냥터]\n제 1군영");
          }else if (lvnum == 61) {
            replier.reply("[61Lv 추천 사냥터]\n이지 자쿰");
          }else if(lvnum > 61 && lvnum <= 70) {
            replier.reply("[62~70Lv 추천 사냥터]\n조용한습지\n모래성 놀이터");
          }else if(lvnum > 70 && lvnum <= 80) {
            replier.reply("[71~80Lv 추천 사냥터]\n사헬지대2\n잠자는 사막");
          }else if(lvnum > 80 && lvnum <= 93) {
            replier.reply("[81~93Lv 추천 사냥터]\n관계자 외 출입금지 C-1");
          }else if(lvnum > 93 && lvnum <= 100) {
            replier.reply("[94~100Lv 추천 사냥터]\n푸른 켄타우로스의 영역(썬콜상성금지)\n가파른 언덕");
          }else if(lvnum > 100 && lvnum <= 110) {
            replier.reply("[101~110Lv 추천 사냥터]\n날카로운 절벽3\n날카로운 절벽4");
          }else if(lvnum > 110 && lvnum <= 120) {
            replier.reply("[111~120Lv 추천 사냥터]\n시계탑 최하층 : 잊혀진 시간의 길 2");
          }else if(lvnum > 120 && lvnum <= 130) {
            replier.reply("[121~130Lv 추천 사냥터]\n무릉 상급 수련장\n폐광 1~4");
          }else if(lvnum > 130 && lvnum <= 135) {
            replier.reply("[131~135Lv 추천 사냥터]\n아랫마을 퀘스트\n시련의 동굴 1~2");
          }else if(lvnum > 135 && lvnum <= 145) {
            replier.reply("[136~145Lv 추천 사냥터]\n검은 와이번의 둥지\n시간의 신전 퀘스트");
          }else if(lvnum > 145 && lvnum <= 160) {
            replier.reply("[146~160Lv 추천 사냥터]\n커닝타워 2층 카페 *80");
          }else if(lvnum > 160 && lvnum <= 170) {
            replier.reply("[161~170Lv 추천 사냥터]\n크리티아스 타락한 마력의숲 2");
          }else if(lvnum > 170 && lvnum <= 180) {
            replier.reply("[171~180Lv 추천 사냥터]\n크리티아스 스토리 퀘스트\n크리티아스 암흑의 숲 1/2");
          }else if(lvnum > 180 && lvnum <= 190) {
            replier.reply("[181~190Lv 추천 사냥터]\n황혼의 페리온 적막한 바위길");
          }else if(lvnum > 190 && lvnum <= 200) {
            replier.reply("[191~200Lv 추천 사냥터]\n헤이븐 구해줘서 고마워 퀘스트\n황혼의 페리온\n기계무덤 3");
          }else if(lvnum > 200 && lvnum <= 210) {
            replier.reply("[201~210Lv 추천 사냥터]\n풍화된 분노와 슬픔의땅\n동굴의 동쪽길2\n동굴 아래쪽\n동굴의 깊숙한 곳");
          }else if(lvnum > 210 && lvnum <= 220) {
            replier.reply("[211~220Lv 추천 사냥터]\n몽땅 동글숲1\n츄깊\n격류지대3");
          }
       }
    }


}

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
