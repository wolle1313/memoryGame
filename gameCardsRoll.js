const allPictures = [
  "pics/argentina.png",
  "pics/australia.png",
  "pics/belgium.png",
  "pics/brazil.png",
  "pics/canada.png",
  "pics/chile.png",
  "pics/china.png",
  "pics/colombia.png",
  "pics/denmark.png",
  "pics/finland.png",
  "pics/france.png",
  "pics/germany.png",
  "pics/hong-kong.png",
  "pics/india.png",
  "pics/indonesia.png",
  "pics/israel.png",
  "pics/italy.png",
  "pics/japan.png",
  "pics/malaysia.png",
  "pics/mexico.png",
  "pics/netherlands.png",
  "pics/philippines.png",
  "pics/poland.png",
  "pics/portugal.png",
  "pics/romania.png",
  "pics/russia.png",
  "pics/singapore.png",
  "pics/south-korea.png",
  "pics/spain.png",
  "pics/sweden.png",
  "pics/switzerland.png",
  "pics/taiwan.png",
  "pics/thailand.png",
  "pics/turkey.png",
  "pics/united-kingdom.png",
  "pics/united-states.png",
  "pics/vietnam.png",
];
class cardsRoll {
  constructor() {
    let _pictures = [];
    this.rollPictures = (noPictures) => {
      let numbers = [];
      do {
        const rolledNumber = Math.floor(
          Math.random() * (allPictures.length - 1)
        );
        if (numbers.findIndex((el) => el === rolledNumber) === -1) {
          numbers.push(rolledNumber);
        }
      } while (numbers.length != noPictures);
      for (const number of numbers) {
        _pictures.push(allPictures[number]);
        _pictures.push(allPictures[number]);
      }
      return _pictures;
    };
  }
}
