import $ from "jquery";
const ScrollToTop = (position, speed) => {
    $("html, body").animate({
        scrollTop: position
    }, speed)
}
export default ScrollToTop;

// how many obj has same id;
const array = [
    {
        id: 1,
        name: "Minh"
    },
    {
        id: 2,
        name: "Thanh Ha"
    },
    {
        id: 3,
        name: "Minh"
    },
    {
        id: 2,
        name: "Thanh Ha"
    },
    {
        id: 3,
        name: "Minh"
    },
]
// 1, create id array 
var IdList = [];
// 2, loop all item of array -> add each Id to id array
array.forEach((obj) => {
    IdList.push(obj.id)
})
// loop each id in id list
let currentIdList = [...IdList];
let stats = {};
currentIdList.forEach((id) => {
    // init cound = 1;
    let count = 1;
    // 1. create new array without this id
    let splicedIdArr = [
        ...currentIdList
    ];
    splicedIdArr.splice(splicedIdArr.indexOf(id), 1);
    splicedIdArr.forEach((splicedId) => {
        // 2. compare this id with all id of the new arry, if equal => count + 1;
        if (splicedId === id) {
            count += 1;
        }
    })
    stats[id] = count;
});

// how many obj has id = ?;
const array2 = [
    {
        id: 1,
        name: "Minh"
    },
    {
        id: 2,
        name: "Thanh Ha"
    },
    {
        id: 3,
        name: "Minh"
    },
    {
        id: 2,
        name: "Thanh Ha"
    },
    {
        id: 3,
        name: "Minh"
    },
]

function findObj(id){
    let count = 0;
    array2.forEach((obj) => {
        if (obj.id === id) {
            count += 1;
        }
    })
    return count;
}
findObj(3)