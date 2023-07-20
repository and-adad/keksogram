'use strict';

var TOTAL_ADS = 25;
var UserActions = {
  COMMENTS: [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
    ],
  DESCRIPTION: [
    'Тестим новую камеру!',
    'Затусили с друзьями на море',
    'Как же круто тут кормят',
    'Отдыхаем...',
    'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
    'Вот это тачка!'
    ],
  LIKES: {
    MIN: 15,
    MAX: 200
  }
};

var adsArr = [];

var getRandomFromInterval = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var randomShuffleArr = function (arr) {
  var copyArr = arr.slice(0);
  for (var i = copyArr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = copyArr[i];
    copyArr[i] = copyArr[j];
    copyArr[j] = temp;
  }
  return copyArr;
};

var randomCutArr = function (arr) {
  var length = getRandomFromInterval(2, 3);
  var copyArr = arr.slice(1, length);
  return copyArr;
};

var randomDescription = function (arr) {
  var length = getRandomFromInterval(0, arr.length-1);
  var copyArr = arr[length];
  return copyArr;
};

var createAdObj = function (i) {
  var adObj = {
    picture: 'photos/' + (i + 1) + '.jpg',
    likes: getRandomFromInterval(UserActions.LIKES.MIN, UserActions.LIKES.MAX),
    comments: randomCutArr(randomShuffleArr(UserActions.COMMENTS)),
    description: randomDescription(UserActions.DESCRIPTION)
  };

  return adObj;

};

for (var k = 0; k < TOTAL_ADS; k++) {
  adsArr[k] = createAdObj(k);
};


console.log(Array.isArray(adsArr));
console.log(typeof adsArr === "object");
console.log(typeof adsArr);
console.log(adsArr);

