import { request } from "../../api/client.js";
import { showTime } from "../../constant/cardGameConfig.js";

export default function CardManager() {
  this.setCardList = async (initCount) => {
    const cardList = await request("/json/card.json");

    // 총 개수의 반만 가져오기
    const halfCardList = cardList.slice(0, initCount / 2);

    // 카드 합치기
    const totalCardList = halfCardList.concat(halfCardList);

    // 카드 섞기
    totalCardList.sort(() => Math.random() - 0.5);

    return totalCardList;
  };

  this.showCardBeforeStart = (level) => {
    const time =
      level === "easy" ? showTime.easy : level === "normal" ? showTime.normal : showTime.hard;
    const getItemCard = document.querySelectorAll(".item-card");

    setTimeout(() => {
      getItemCard.forEach((item) => {
        item.classList.remove("active");
      });
    }, time);
  };
}
