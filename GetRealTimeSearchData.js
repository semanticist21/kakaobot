function response(
    room,
    msg,
    sender,
    isGroupChat,
    replier,
    imageDB,
    packageName
  ){
    if (msg.indexOf("/실시간") != -1) {
        var url = "https://www.naver.com/srchrank?frm=main&ag=all&gr=1&ma=-2&si=0&en=0&sp=0";
        var json = Utils.getWebText(url);
        json = json.replace(/(<([^>]+)>)/ig, "");

        var keywords = [];
        dataAll = JSON.parse(json);

        for (var i in dataAll["data"]){
            var keyword = dataAll["data"][i];
            var str = keyword["rank"] + "위: " + keyword["keyword"]
            if(keyword["rank"] * 1 < 11){ 
            keywords.push(str);
            }
        }
        replier.reply("실시간 검색 순위는 \n" + keywords.join("\n") + "\n 이다 멍!")
    }
  }