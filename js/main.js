
// Функция, возвращающая случайное целое число
const getRandom = (min, max) => {
  if (min > max || min < 0 || max < 0) {
    return null;
  }

  const ceilMin = Math.ceil(min);
  const floorMax = Math.floor(max);
  return Math.floor(Math.random() * (floorMax - ceilMin + 1)) + ceilMin;
};

// Функция для проверки максимальной длины строки
const getMaxString = (str, maxLength) => str.length <= maxLength;

getMaxString('false', 20);

const NAMES = [
  'Peter',
  'Mary',
  'Garry',
  'Boris',
  'Mia',
  'Noah',
  'Jacob',
  'William',
  'Michael',
  'Alexander',
];

const MESSAGES = [
  'Всё отлично!',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'В целом всё неплохо. Но не всё.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const PICTURES_COUNT = 25;

const generateComments = (commentsCount) => new Array(commentsCount).fill(null).map(() => (
  {
    id: getRandom(10000, 20000),
    avatar: 'img/avatar-'.concat(getRandom(1, 6)).concat('.svg'),
    message: MESSAGES[getRandom(0, 1)],
    name: NAMES[getRandom(0, 9)],
  }
));

const generatePictures = (picturesCount) => new Array(picturesCount).fill(null).map((item, index) => (
  {
    id: index + 1,
    url: 'photos/'.concat(index + 1).concat('.jpg'),
    description: 'description - '.concat(index + 1),
    likes: getRandom(15, 200),
    comments: generateComments(getRandom(1, 10)),
  }
));

const pictures = generatePictures(PICTURES_COUNT);
