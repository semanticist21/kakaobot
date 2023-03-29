function response(
    room,
    msg,
    sender,
    isGroupChat,
    replier,
    imageDB,
    packageName
  ){
      if(msg.indexOf("/안녕") != -1){
          replier.reply("반갑다 멍!")
      }
      else if(msg.indexOf("음식" != -1)){
        replier.reply("난 개고기를 젤 좋아한다 멍!")
    }
    else if(msg.indexOf("못생겼어" != -1)){
        replier.reply("나쁜말은 쓰면 안된다 멍")
    }
    else if(msg.indexOf("예배" != -1)){
        replier.reply("오늘이 일요일이던가 멍?")
    }

    else if(msg.indexOf("집값" != -1)){
        replier.reply("배아파하지마라 멍!")
    }

    else if(msg.indexOf("날씨" != -1)){
        replier.reply("산책 나가도 되는 날씨인가몽?")
    }

    else if(msg.indexOf("고기 밥" != -1)){
        replier.reply("물고기 굶어죽는다 멍!")
    }

    else if(msg.indexOf("언제 와" != -1)){
        replier.reply("그걸 왜 나한테 물어보는거냐 몽몽?")
    }

    else if(msg.indexOf("배당금" != -1)){
        replier.reply("배당금 받고 금방 부자되겠멍~!")
    }

    }