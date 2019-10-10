function getWeathetInfo(pos) {
    try{
        var data = Utils.getWebText("https://m.search.naver.com/search.naver?query=" + pos + "날씨");  //검색 결과 파싱
        data = data.replace(/<[^>]+>/g,"");  //태그 삭제
        data = data.split("월간")[1];  //날씨 정보 시작 부분의 윗부분 삭제
        data = data.split("시간별 예보")[0];  //날씨 정보 끝 부분의 아래쪽 부분 삭제
        data = data.trim();  //위아래에 붙은 불필요한 공백 삭제
        data = data.split("\n");  //엔터 단위로 자름
        var results = [];
        results[0] = data[0];  //날씨 상태(?)
        results[1] = data[3].replace("온도", "온도 : ").trim() + "℃";  //현재 온도
        results[2] = data[4].replace("온도", "온도 : ").trim() + "℃";  //체감 온도
        results[3] = data[9].replace("먼지", "먼지 : ").trim();  //미세먼지
        results[4] = data[13].replace("습도", "습도 :").trim() + "%";  //습도
        var result = "[" + pos + " 날씨 정보]\n\n상태 : " + results.join("\n");
        return result;  //결과 반환
    } catch(e) {
        return null;
    }


}
function response(room, msg, sender, isGroupChat, replier, lv) {
    msg = msg.trim();
    var lv = [0,1,2,3,4,5,6,7,8,9,10]
    lv_min = 15;
    lv_max = 30;

    if(lv_min < lv && lv_max < lv)
    var cmd = msg.split(" ")[0];
    var data = msg.replace(cmd + " ", "");
    if(cmd == "/날씨") {
        var result = getWeathetInfo(data);
        if(result == null) {
            replier.reply(data + "의 날씨 정보를 가져올 수 없습니다.");
        } else {
            replier.reply(result);
        }
    }
    if(msg == "시그너스님 안녕하세요" || msg == "시그너스님 하이" || msg == "시그너스님 헬로" || msg == "커맨드?" || msg == "명령어?" ){
      replier.reply("메이플 용사님, 안녕하세요:)\n사용 가능한 명령어는 아래와 같습니다.\n\n1) /무자본 사냥터 XXX레벨\n"+
    "2) /유자본 사냥터 XXX레벨\n3) /메소 시세\n4) /필수 링크 캐릭");
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
            replier.reply("[120~125Lv 추천 사냥터]\n루디브리엄 시계탑 최하층<꼬여버린시간>\n엘나스 폐광 늑대의 영역\n뒤틀린 화랑\n잊혀진 화랑");
          }else if(lvnum > 125 && lvnum <= 130) {
            replier.reply("[125~130Lv 추천 사냥터]\n아랫마을 현상금 퀘스트");
          }else if(lvnum > 130 && lvnum <= 140) {
            replier.reply("[130~140Lv 추천 사냥터]\n폐광 시련의 동굴1");
          }else if(lvnum > 140 && lvnum <= 160) {
            replier.reply("[140~160Lv 추천 사냥터]\n커닝타워 2층\n커닝타워 5층");
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
        }else if(lvnum > 20 && lvnum <= 30 ){
          replier.reply("[20~30Lv 추천 사냥터]\n엘로딘 깊어지는 숲 1");
        }else if(lvnum > 30 && lvnum <= 46) {
          replier.reply("[30~46Lv 추천 사냥터]\n골드비치 퀘스트");
        }else if(lvnum > 46 && lvnum <= 56) {
          replier.reply("[46~56Lv 추천 사냥터]\n제 1 군영");
        }else if(lvnum > 56 && lvnum <= 60) {
          replier.reply("[56~60Lv 추천 사냥터]\n조용한 습지");
        }else if(lvnum > 60 && lvnum <= 64) {
          replier.reply("[60~64Lv 추천 사냥터]\n얼음 골짜기 2");
        }else if(lvnum > 64 && lvnum <= 70) {
          replier.reply("[64~70Lv 추천 사냥터]\n레벤 광산 갱도 4");
        }else if(lvnum > 70 && lvnum <= 80) {
          replier.reply("[70~80Lv 추천 사냥터]\n사헬지대2\n잠자는 사막");
        }else if(lvnum > 80 && lvnum <= 93) {
          replier.reply("[80~93Lv 추천 사냥터]\n관계자 외 출입급지 C-1");
        }else if(lvnum > 93 && lvnum <= 100) {
          replier.reply("[93~100Lv 추천 사냥터]\n하늘 테라스 5");
        }else if(lvnum > 100 && lvnum <= 110) {
          replier.reply("[100~110Lv 추천 사냥터]\n산양의 골짜기2");
        }else if(lvnum > 110 && lvnum <= 130) {
          replier.reply("[110~130Lv 추천 사냥터]\n삐뚤어진 시간\n뒤틀린 회랑\n잊혀진 회랑");
        }else if(lvnum > 130 && lvnum <= 140) {
          replier.reply("[130~140Lv 추천 사냥터]\n시련의 동굴 1");
        }else if(lvnum > 140 && lvnum <= 160) {
          replier.reply("[140~160Lv 추천 사냥터]\n커닝타워 2층\n커닝타워 5층");
        }else if(lvnum > 160 && lvnum <= 186) {
          replier.reply("[160~186Lv 추천 사냥터]\n크리티아스");
        }else if(lvnum > 186 && lvnum <= 200) {
          replier.reply("[186~200Lv 추천 사냥터]\n버려진 발굴 지역 2, 4");
        }else if(lvnum > 200 && lvnum <= 210) {
          replier.reply("[200~210Lv 추천 사냥터]\n풍화된 분노와 슬픔의땅\n동굴의 동쪽길2\n동굴 아래쪽\n동굴의 깊숙한 곳");
        }else if(lvnum > 210 && lvnum <= 220) {
          replier.reply("[210~220Lv 추천 사냥터]\n몽땅동글숲1\n츄깊\n격류지대3");
        }
     }
  }
}