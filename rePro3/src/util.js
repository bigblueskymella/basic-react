import emotion01 from './img/emotion01.png'
import emotion02 from './img/emotion02.png'
import emotion03 from './img/emotion03.png'
import emotion04 from './img/emotion04.png'
import emotion05 from './img/emotion05.png'


export const getEmotionImgById = (emotionId)=>{
  const targetEmotionId=String(emotionId);
  switch(targetEmotionId){
    case "1":
      return emotion01;
      case "2":
      return emotion02;
      case "3":
      return emotion03;
      case "4":
      return emotion04;
      case "5":
      return emotion05;
      default:
        return null;
  }
}

export const emotionList = [
  {
    id:1,
    name:"완전 좋음",
    img:getEmotionImgById(1),
  },
  {
    id:2,
    name:"좋음",
    img:getEmotionImgById(2),
  },
  {
    id:3,
    name:"그럭저럭",
    img:getEmotionImgById(3),
  },
  {
    id:4,
    name:"나쁨",
    img:getEmotionImgById(4),
  },
  {
    id:5,
    name:"끔찍함",
    img:getEmotionImgById(5),
  },
]

export const getFormattedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();
  if (month < 10) {
    // 0을 붙여 2자리수로 만듬
    month = `0${month}`; 
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};

export const getMonthRangeByDate = (date) => {
  const beginTimeStamp = new Date(date.getFullYear(), date.getMonth(), 1).getTime();
  const endTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth()+1,
    0,
    23,
    59,
    59
  ).getTime();
  return {beginTimeStamp, endTimeStamp}
}