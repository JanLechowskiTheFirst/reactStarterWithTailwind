import $ from 'jquery'

export const toogleClass = (selector, classNamesAsString) => {
    $(selector).toggleClass(classNamesAsString);
}

export const toogleClassOnCondition = (selector, classNamesAsString, condition) => {
    $(selector).toggleClass(classNamesAsString, condition);
}