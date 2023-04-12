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

  this.cardFlip = ($target) => {
    const $cardItem = $target;
    const $cardFront = $target.querySelector(".div-front");

    $cardItem.classList.add("active");
    $cardFront.classList.remove("div-hidden");
  };

  this.initCard = ($target) => {
    const $cardItem = $target;
    const $cardFront = $target.querySelector(".div-front");

    $cardItem.classList.remove("active");
    $cardFront.classList.add("div-hidden");
  };

  this.getCardPosition = ($target) => {
    const $cardFront = $target.querySelector(".div-front");

    //Card background Position의 [x,y] 값 return
    return $cardFront.style.backgroundPosition.split(" ").map((item) => parseInt(item));
  };

  // 카드의 포지션으로 값 비교
  this.compareCard = (prevCardPosition, curCardPosition) => {
    return prevCardPosition.toString() === curCardPosition.toString();
  };

  this.replaceCard = ($prev, $current) => {
    setTimeout(() => {
      this.initCard($prev);
      this.initCard($current);
      this.enableCardEvent();
    }, 600);
  };

  this.disableCardEvent = () => {
    const $backDiv = document.querySelectorAll(".div-back");
    $backDiv.forEach((item) => {
      item.style.pointerEvents = "none";
    });
  };

  this.enableCardEvent = () => {
    const $backDiv = document.querySelectorAll(".div-back");
    $backDiv.forEach((item) => {
      item.style.pointerEvents = "auto";
    });
  };

  this.deleteCard = ($prevCard, $curCard) => {
    $prevCard.querySelector(".div-front").classList.add("div-hidden");
    $prevCard.classList.remove("active");
    $prevCard.classList.add("div-hidden");

    $curCard.querySelector(".div-front").classList.add("div-hidden");
    $curCard.classList.remove("active");
    $curCard.classList.add("div-hidden");
  };

  this.matchedCard = ($prevCard, $curCard) => {
    setTimeout(() => {
      this.deleteCard($prevCard, $curCard);
      this.enableCardEvent();
    }, 600);
  };
}
