function response(
    room,
    msg,
    sender,
    isGroupChat,
    replier,
    imageDB,
    packageName
  ){
    if (msg.indexOf("/코인") != -1) {
      // 코인 가격들 불러오기(원화)
      var url = "https://api.upbit.com/v1/ticker?markets=KRW-BTC"; //비트코인
      var json = Utils.getWebText(url);
      var jsonReplaced = json.replace(/(<([^>]+)>)/ig, "");
      var upbitBTC = JSON.parse(jsonReplaced)[0]["trade_price"];
      BTC = commify(upbitBTC);

      var url = "https://api.upbit.com/v1/ticker?markets=KRW-ETH"; //이더리움
      var json = Utils.getWebText(url);
      var jsonReplaced = json.replace(/(<([^>]+)>)/ig, "");
      var upbitETH = JSON.parse(jsonReplaced)[0]["trade_price"];
      ETH = commify(upbitETH);

      var url = "https://api.upbit.com/v1/ticker?markets=KRW-BCH"; //비트코인캐시
      var json = Utils.getWebText(url);
      var jsonReplaced = json.replace(/(<([^>]+)>)/ig, "");
      var upbitBCH = JSON.parse(jsonReplaced)[0]["trade_price"];
      BCH = commify(upbitBCH);

      var url = "https://api.upbit.com/v1/ticker?markets=KRW-XRP"; //리플
      var json = Utils.getWebText(url);
      var jsonReplaced = json.replace(/(<([^>]+)>)/ig, "");
      var upbitXRP = JSON.parse(jsonReplaced)[0]["trade_price"];
      XRP = commify(upbitXRP);

      var url = "https://api.upbit.com/v1/ticker?markets=KRW-DOT"; //폴카닷
      var json = Utils.getWebText(url);
      var jsonReplaced = json.replace(/(<([^>]+)>)/ig, "");
      var upbitDOT = JSON.parse(jsonReplaced)[0]["trade_price"];
      DOT = commify(upbitDOT);




      //외국가격 얻어오기
        var url = "https://api.binance.com/api/v1/ticker/allPrices";  //비트코인
        var json = Utils.getWebText(url);
        var jsonReplaced = json.replace(/(<([^>]+)>)/ig, "");
        var dataAll = JSON.parse(jsonReplaced);
        var BTCUSDT;
        for(var i in dataAll){
            var data = dataAll[i];
            if(data["symbol"] == "BTCUSDT"){
                BTCUSDT = data["price"];
            }
        }
        BTCUSDT = BTCUSDT * 1;
        BTCUSDT = BTCUSDT.toFixed(2);

        var json = Utils.getWebText(url); // 비트코인캐시
        var jsonReplaced = json.replace(/(<([^>]+)>)/ig, "");
        var dataAll = JSON.parse(jsonReplaced);
        var BCHUSDT;
        for(var i in dataAll){
            var data = dataAll[i];
            if(data["symbol"] == "BCHUSDT"){
                BCHUSDT = data["price"];
            }
        }
        BCHUSDT = BCHUSDT * 1;
        BCHUSDT = BCHUSDT.toFixed(2);

        var json = Utils.getWebText(url); // 이더리움
        var jsonReplaced = json.replace(/(<([^>]+)>)/ig, "");
        var dataAll = JSON.parse(jsonReplaced);
        var ETHUSDT;
        for(var i in dataAll){
            var data = dataAll[i];
            if(data["symbol"] == "ETHUSDT"){
                ETHUSDT = data["price"];
            }
        }
        ETHUSDT = ETHUSDT * 1;
        ETHUSDT = ETHUSDT.toFixed(2);

        var json = Utils.getWebText(url); // XRP 리플
        var jsonReplaced = json.replace(/(<([^>]+)>)/ig, "");
        var dataAll = JSON.parse(jsonReplaced);
        var XRPUSDT;
        for(var i in dataAll){
            var data = dataAll[i];
            if(data["symbol"] == "XRPUSDT"){
                XRPUSDT = data["price"];
            }
        }
        XRPUSDT = XRPUSDT * 1;
        XRPUSDT = XRPUSDT.toFixed(2);

        var json = Utils.getWebText(url); // 폴카닷
        var jsonReplaced = json.replace(/(<([^>]+)>)/ig, "");
        var dataAll = JSON.parse(jsonReplaced);
        var DOTUSDT;
        for(var i in dataAll){
            var data = dataAll[i];
            if(data["symbol"] == "DOTUSDT"){
                DOTUSDT = data["price"];
            }
        }
        DOTUSDT = DOTUSDT * 1;
        DOTUSDT = DOTUSDT.toFixed(2);
      // 프린트
      replier.reply("지금 코인가격은 KRW(USD)\n" 
      + "비트 : " + BTC + "원" + "(" + BTCUSDT + "$)\n"
      + "이더리움 : " + ETH + "원" + "(" + ETHUSDT + "$)\n"
      + "비트캐쉬 : " + BCH + "원" + "(" + BCHUSDT + "$)\n"
      + "리플 : " + XRP + "원" + "(" + XRPUSDT + "$)\n"
      + "폴카닷 : " + DOT + "원" + "(" + DOTUSDT + "$)\n"
      + "이다 멍~!");
      } // if절 종료구간
  }

  function commify(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}