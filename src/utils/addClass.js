import $ from 'jquery'

export const addClass = (selector, classNamesAsString) => {
    $(selector).addClass(classNamesAsString);
}