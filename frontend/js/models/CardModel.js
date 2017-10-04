export default class CardModel {

  constructor(cardData) {
    this.email = cardData.login.email;
    this.token = cardData.jwtAccessToken;
    this.description = cardData.description;
    this.cardDesign = cardData.cardDesign;
  }

}
