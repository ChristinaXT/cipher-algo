// Caesars Cipher
// One of the simplest and most widely know ciphers is a Caeser cipher, also known as a shift cipher.
// In a shift cipher the meanings of the letters are shifted by some set amount.
//
// A common modern use is the ROT13 cipher, where the values of the letters are
// shifted by 13 places Thus "A" <-> "N", "B" <-> "O" and so on.
//  Write  a function which takes a ROT13 encoded string as input and returns a decoded string
//  All letters will be upper case. do not transform non numerics, but let them pass on

function rot13 (str) {
  let solved = "";
  for (let i=0; i<str.length; i++) {
    let asciiNum = str[i].charCodeAt();
    if (asciiNum >= 65 && asciiNum <= 77) {
      solved += String.fromCharCode(asciiNum + 13);
    } else if (asciiNum >= 78 && asciiNum <= 90) {
      solved += String.fromCharCode(asciiNum - 13);
    } else {
      solved += str[i];
    }
  }
  return solved;
}


rot13("SERR PBQR PNZC")
console.log(rot13("SERR PBQR PNZC"));

// rot13("A")
