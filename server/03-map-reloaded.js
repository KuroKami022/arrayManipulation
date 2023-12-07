const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]
console.log('original', orders);
const rta = orders.map(item => item.total)
console.log('rta', rta);  //MANIPULACION INDIVIDUAL DE VALORES

const rta2 = orders.map(item => {
  item.tax = .19;
  return item;
})
console.log('rta2', rta2); //MUTA POR QUE NO ES UN OBJETO , AFECTA ESPACIO EN MEMORIA DIRECTAMENTE

const rta3 = orders.map(item => {
  return {
    ...item,
    tax: .19
  };
});
console.log('rta3', rta3); //NO MUTA POR QUE ES UN OBJETO , CREA NUEVO ESPACIO EN MEMORIA DIRECTAMENTE
console.log('original', orders);

const array = [
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  }
]

function addNewAttr(array) {
  return array.map(item => ({
    ...item,
    taxes: Math.trunc(item.price * .19)
  }))
}

const result = console.log(addNewAttr(array))