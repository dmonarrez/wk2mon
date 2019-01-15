$(document).ready(function() {
  var sentence = prompt("Enter a sentence you wish to cipher");
  var letters = reverse(capitalize(sentence));

  function capitalize(sentence) {
    let first = sentence.charAt(0).toUpperCase();
    let last = sentence.charAt(sentence.length - 1).toUpperCase();
    let letters = first + last;
    return letters
  }

  alert(capitalize(sentence));

  function reverse(letters) {
    let first = letters[0];
    let last = letters[1];
    let flip = last + first;
    return flip
  }

  alert(reverse(capitalize(sentence)));

  function revAdd(sentence, reverse)  {
    let revSentence = sentence + reverse;
    return revSentence
  }

  alert(revAdd(sentence, letters))

  function middle(sentence) {
    let midIndex = Math.floor(sentence.length/2);
    let mid = sentence[midIndex];
    return mid + sentence + letters
  }
  alert(middle(sentence));

  var middle = middle(sentence);

  function backwards(words) {
    let splitSent = words.split('');
    let reverse = splitSent.reverse();
    let final = reverse.join('');
    return final
  }

  var encoded = backwards(middle);

  alert(backwards(middle));

  $("#sentence").click(function() {
    alert(sentence);
  });

  $("#encoded").click(function() {
    alert(encoded);
  });
});
