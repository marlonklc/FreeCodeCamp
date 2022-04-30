/*
# Inventory Update
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
*/
function updateInventory(arr1, arr2) {
    const newArray = !!arr1.length ? arr1 : arr2;
    const result = [];

    if (!arr1.length) arr2 = arr1;

    const nonNull = item => !!item;

    newArray.forEach(i1 => {
        const foundItem = arr2.filter(nonNull).find(i2 => i2[1] === i1[1]);
        if (!!foundItem) {
            const newitem = [i1[0] + foundItem[0], i1[1]];
            result.push(newitem);
            const index = arr2.indexOf(foundItem);
            delete arr2[index];
            return;
        }
        result.push(i1);
    });
   
    result.push(...arr2.filter(nonNull))
    result.sort((i1, i2) => i1[1].localeCompare(i2[1]))
    return result;
}
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];
var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);