document.getElementById("app").innerHTML = `
<h1>css animation & and some  console.</h1>
`;
const myArray = [
  { name: "bill" },
  { age: 36 },
  { age: 17 },
  { year: "2018" },
  { year: "2017 " },
  { name: "mike" },
  { name: "suzy" },
  { age: 48 }
];

for (const params of myArray) {
  params.hasOwnProperty("name") ? console.log(params.name) : null;
}

const res = myArray.reduce((acc, val) => {
  const _newKey = v => {
    const newKey = Object.keys(v).toString();
    return newKey;
  };

  if (Object.keys(val) in acc) {
    const res = Object.values(val);
    acc[_newKey(val)].push(res[0]);
    return acc;
  } else {
    acc[_newKey(val)] = Object.values(val);
    return acc;
  }
}, {});
console.log(res);

let data = Object.values(res);
console.log(data);

document.getElementById("app").innerHTML = data.map(x => {
  return x.map(x => `<li>${x}</li>`);
});
