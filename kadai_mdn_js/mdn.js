'use strict';

const now = () =>{
  const today = new Date();
  const nowYear = today.getFullYear();
  const nowMonth = today.getMonth() + 1;
  const nowDate = today.getDate();
  // 曜日を日本語に変換
  let nowDay = today.getDay();
  let nowdayJp;
    switch(nowDay){
      case 0:
        nowdayJp = '日曜日';
        break;
      case 1:
        nowdayJp = '月曜日';
        break;
      case 2:
        nowdayJp = '火曜日';
        break;
      case 3:
        nowdayJp = '水曜日';
        break;
      case 4:
        nowdayJp = '木曜日';
        break;
      case 5:
        nowdayJp = '金曜日';
        break;
      case 6:
        nowdayJp = '土曜日';
        break;
    }
  const nowHour = today.getHours();
  const nowMinutes = today.getMinutes();
  const nowSeconds = today.getSeconds();
  let nowTime = document.getElementById('clock');
  nowTime.textContent = `${nowYear}年 ${nowMonth}月 ${nowDate}日 ${nowdayJp} ${nowHour}時 ${nowMinutes}分 ${nowSeconds}秒`;
  const timeConsole = `${nowYear}年 ${nowMonth}月 ${nowDate}日 ${nowdayJp} ${nowHour}時 ${nowMinutes}分`;
  console.log(timeConsole);
}

setInterval(now,1000);
