// Adding a prototype to string to replace all occurrences using regex
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

// This is to help fix the issue of URL's currently having spaces and having upper case characters
export function safeURLify(curString) {
  const lowered = curString.toLowerCase();
  const removedSpaces = lowered.replaceAll(' ', '-');
  return removedSpaces
}

// This is for the server so that it can take in the string and remove the dashes and replace the spaces so that it can search in the DB by title
export function unWrapURL(urlString) {
  let removedDashes = urlString.replaceAll('-', ' ');
  return removedDashes
}