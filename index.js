// code your solution here
function saturdayFun(something= 'roller-skate') {
    
    return `This Saturday, I want to ${something}!`
}

function mondayWork(something = `go to the office`) {
    return `This Monday, I will ${something}.`
}

wrapAdjective("||")("||a dedicated programmer||")

function wrapAdjective(high = "*") {
    return function (value = "special") {
        return `You are ${high}${value}${high}!`
    }
    
}