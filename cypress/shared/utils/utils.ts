export class RandomField {
  getRandomString() {
    return 'defaultString' + Math.random() * 1000;
  }

  getRandomNum() {
    return '' + Math.round(Math.random() * 10);
  }

  getRandomID(idArr: string[]) {
    return idArr[Math.round(Math.random() * (idArr.length - 1))];
  }

  getRandomDate() {
    return new Date(Math.round(Math.random() * 10000000000000)).toString();
  }
}
