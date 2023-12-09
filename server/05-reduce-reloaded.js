const items = [1, 3, 2, 3];

const rta = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
}, {});
console.log(rta);

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta1 = data
  .map((item) => item.level)
  .reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] = obj[item] + 1;
    }
    return obj;
  }, {});

console.log(rta1);


const list = [];

for (let i = 0; i < 30; i++) {
  list.push(Math.round(Math.random() * 30));
}
console.log(list);

const rta2 = list.reduce((obj, value) => {
  if (value < 5) obj["1-4"] += 1;
  else if (value < 9) obj["5-8"] += 1;
  else obj["9-10"] += 1;

  return obj
}, {
  "1-4": 0,
  "5-8": 0,
  "9-10": 0,
});
console.log(rta2);
