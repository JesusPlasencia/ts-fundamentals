import lodash from "lodash";

const data = [
  {
    username: "Ramiro",
    rol: "admin"
  },
  {
    username: "Andrea",
    rol: "seller"
  },
  {
    username: "Santiago",
    rol: "customer"
  }
];

const rta = lodash.groupBy(data, (item) => item.rol);
console.log(rta);

let myName: (string | null) = null;
myName = "Hi";

const ame = 1 + '1';
