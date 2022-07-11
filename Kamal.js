
const dogs = [3, 5, 2, 12, 1]


const adultDogs = []
const puppyDogs = []

function checkDogs(age) {
    if (age >= 3) {
          adultDogs.push(age)
    }else{
        puppyDogs.push(age)
    }

}
checkDogs(dogs[0])
checkDogs(dogs[1])
checkDogs(dogs[2])
checkDogs(dogs[3])
checkDogs(dogs[4])
console.log(puppyDogs)
console.log(adultDogs)



