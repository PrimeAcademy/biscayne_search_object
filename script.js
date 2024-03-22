let dresser = [
  {
    type: 'socks',
    color: 'blue'
  },
  {
    type: 'hat',
    color: 'green'
  },
  {
    type: 'shirt',
    color: 'grey'
  },
  {
    type: 'socks',
    color: 'red'
  },
  {
    type: 'pants',
    color: 'blue',
  },
  {
    type: 'socks',
    color: 'blue'
  },
]



// INPUTS:
//   * dresserToSearch: an array of clothing objects, like:
//      [{type: 'socks', color: 'blue'}, {type: 'shirt', color: 'blue'}]
//   * searchCriteria: an object that looks like:
//      {type: 'socks', color: 'blue'} 👈 if we're searching for just blue socks
// OUTPUTS:
//  * a new array of objects found inside dresserToSearch that matched
//    the search criteria, like:
//      [{type: 'socks', color: 'blue'}, {type: 'socks', color: 'blue'}]
//    (This is what we'd return if we found two matching objects.)
// SIDE-EFFECTS:
//  * none!

// !searchCriteria
// "If searchCriteria is a falsy value" (Falsy values: '', 0, false, undefined, null, NaN)
function search(dresserToSearch, searchCriteria) {
  // Verify that searchCriteria was provided:
  if (!searchCriteria || !searchCriteria.type || !searchCriteria.color) {
    return dresserToSearch;
  }

  let matchingThings = [];

  // Loop through dresserToSearch
  for (let item of dresserToSearch) {
    // IF searchCriteria's type and color match the current
    // value's type and color:
    if (item.type === searchCriteria.type && item.color === searchCriteria.color) {
      // Push the matching object into matchingThings array.
      matchingThings.push(item)
    }
  }

  return matchingThings;
}

console.log('These four tests should all result in the function returning the entire `dresserToSearch` array:')
// If there is no search object:
console.log(search(dresser)) // ✅
// If there is an empty search object:
console.log(search(dresser, {}))
// If there is a missing type property:
console.log(search(dresser, {color: 'red'}))
// If there is a missing color property:
console.log(search(dresser, {type: 'shoes'}))


// The tests to verify our function works when used correctly:
let searchOne = {type: 'socks', color: 'blue'}
let resultOne = search(dresser, searchOne)
console.log('expect resultOne to be an array containing two "blue sock" objects:', resultOne)

let searchTwo = {type: 'hat', color: 'green'}
let resultTwo = search(dresser, searchTwo)
console.log('expect resultTwo to be an array containing one "green hat" object:', resultTwo)

let searchThree = {type: 'hat', color: 'aquamarine'}
let resultThree = search(dresser, searchThree)
console.log('expect resultThree to be an empty array:', resultThree)
