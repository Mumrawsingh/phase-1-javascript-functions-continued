function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`; 
}

// function saturdayFun(activity = "bathe my dog.") {
//     return `This Saturday, I want to ${activity}`
// }

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(character='*') {
    let phrase1 = "You are"
        return function(character) {
            let phrase2 = "special"
                return function(character) {
                    `${phrase1} ${phrase2}`
                }
        }
}