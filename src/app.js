/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector("#click").addEventListener("click", () => {
    document.querySelector("#domainNam").innerHTML = domainNameGenerator();
  });

  //My code begins right here!
  const domainNameGenerator = () => {
    let pronoun = ["the", "our"];
    let adjective = ["great", "awesome", "crazy", "colorful", "brilliant"];
    let subject = ["tiger", "apple", "pancake", "tortilla", "narwhal"];
    let extension = [".com", ".es", ".en", ".org", ".net"];
    let result = [];

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adjective.length; j++) {
        for (let k = 0; k < subject.length; k++) {
          for (let l = 0; l < extension.length; l++) {
            let domainName =
              pronoun[i] + adjective[j] + subject[k] + extension[l];

            result.push(domainName);
          }
        }
      }
    }
    let resultIndex = Math.floor(Math.random() * result.length);
    return result[resultIndex];
  };

  console.log(domainNameGenerator());
};
