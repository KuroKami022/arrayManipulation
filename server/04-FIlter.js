const words = ["spray", "elites", "limit", "apple", "exuberant"]
const newWords = []

for(let i=0; i< words.length; i++){
    const word = words[i]
    if (word.length >= 6){
        newWords.push(word)
    }
}

console.log('new', newWords) // [ 'elites', 'exuberant' ]
console.log('original', words) // [ 'elites', 'exuberant' ]
//WITHOUT FILTER

//WITH FILTER

const rta = words.filter(item => item.length >= 6 )
console.log('rta', rta) // [ 'elites', 'exuberant' ]
console.log('original', words) // [ 'elites', 'exuberant' ]

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 45646,
        delivered: false,
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
const rta3 = orders.filter(item => item.delivered && item.total >= 100)
console.log('rta3',rta3);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
}
console.log(search('Nico'));