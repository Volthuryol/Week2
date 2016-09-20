var meCaden = {
  firstName: "Caden",
  lastName: "Cheek",
  age: "19",
  slack: "caden.cheek"
}
console.log(meCaden);
//inheritence is a blank template that you can call on multiple times such as animal and filling the object with specific animals such as bear or chicken.
var animal = {
  type: "",
  habitat: "",
  weight: 0,
  commonInIndiana: false,
}
var bear = Object.create(animal);
bear.type = "bear";
bear.habitat = "forrest";
bear.weight = 300;
bear.commonInIndiana = true;

console.log(bear);
//Nesting is putting a object in 
var netflix = {
  id: 1,
  name: " ",
  seasonInfo: {
    episodeInfo: [
      {episode: 1, episodeName: "Hey Paul"},
      {episode: 2, episodeName: "Yes Paul"}
    ]
  }
};

var state = {
  name: "Kentucky",
  countries: [
    {name: ""},
    {name: "", cities}
  ]
};