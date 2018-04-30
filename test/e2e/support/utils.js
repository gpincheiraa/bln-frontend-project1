// from http://emailregex.com/
const emailTestRegex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
const authorNameRegex = /\w+\s*(\w+)+?/;

export const pageTitleRegex = new RegExp(`.+\\s+\\|\\s+${authorNameRegex.source}\\s*<${emailTestRegex.source}>`, 'i');