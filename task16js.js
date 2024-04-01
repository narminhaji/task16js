
// 1. Obyekt yaradin.
let st = {
  name: "Narmin",
  surname: "Haciyeva",
  age: 21,
}

console.log(st);

// 2. Array icinde coxlu obyektler yaradin
let name1 = [];
let age = [];
let color = [];
let obj = [
  {
    name1: "Sevinc",
    age: 24,
    color: "blue",
  },
  {
    name1: "Puste",
    age: 23,
    color: "green",

  }
]
console.log(obj);

Object.keys(obj).map((a) => {
  name1.push((`${obj[a].name1}`));
  console.log(name1.join(" ve "));
  age.push((`${obj[a].age}`));
  console.log(age.join(" ve "));
  color.push((`${obj[a].color}`));
  console.log(color.join(" ve "));

}

)

// 3. Telebeler obyektinde bir nece telebe elave edin.Hobbileri, xususiyettleri kimi icerisindede deyerleri qeyd edin.
let students = [
  {
    id: 1,
    name: "NARMIN",
    suname: "H",
    hobbies: ['danismaq', 'gezmek'],
    age: 21,
    bal: 99,

  },
  {
    id: 2,
    name: "SEVINC",
    surname: "E",
    hobbies: ['oynamaq', 'eylenmek'],
    age: 23,
    bal: 85,
  },
  {
    id: 3,
    name: "LALE",
    surname: "F",
    hobbies: ['OXUMAQ', 'gezmek'],
    age: 22,
    bal: 54,
  },
  {
    id: 4,
    name: "nazrin",
    surname: "d",
    hobbies: ['OXUMAQ', 'gezmek'],
    age: 25,
    bal: 30,
  },
]

console.log(Object.keys(students))
console.log(Object.values(students))

// 4. Students arrayinin qiymet ortalamasini cixardin. (Butun telebelerin qiymetlerini alib sayini bolun.)

let bal = []

Object.keys(students).map(e => {
  bal.push(students[e].bal)
})
console.log(bal);

const sum = bal.reduce((a, b) => a + b, 0);
const avg = (sum / bal.length);

console.log(`netice >> ${sum}. ortalama >> ${avg}`);


// 5. Qiymeti 90-dan az olan telebeleri Ad ve Soyadi ile birlikde ekrana cixardib onlara xeberdarliq edin.


let losers = [];
const check = students.map((e) => {
  if (e.bal < 90) {
    losers.push(e.name, e.surname, ",")
  }

}
)

console.log(losers.join("  "));
alert(`salam, ${losers.join(" ")}  neticeni yukseldin `)