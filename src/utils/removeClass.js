import $ from 'jquery'

export const removeClass = (selector, classNamesAsString) => {
    $(selector).removeClass(classNamesAsString);
}