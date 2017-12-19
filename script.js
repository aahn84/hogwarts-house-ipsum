// $(document).ready(function() {
  var accioButton = $('#accio-button');
  var sortHouse = $('#sort-house');
  var selectLength = $('#choose-length');
  var houseName = $('.house-name');
  var houseCrest = $('.house-crest');
  var ipsumText = $('.ipsum-generated');
  var sortingText = $('.get-sorted');
  var sortingButton = $('#sorting-button');


//display house name and crest on change
  sortHouse.change(function() {
  let firstInput = sortHouse.val();

    if (firstInput === '') {
      houseName.text('');
      houseCrest.attr({"src":'images/hogwarts_house_crests.png', "alt":"Hogwarts Houses Crest", "class":"house-crest"});
    }
    if (firstInput === 'gryffindor') {
      houseName.text('Gryffindor');
      houseCrest.attr("src", 'images/0.31_Gryffindor_Crest_Transparent.png');
    }
    if (firstInput === 'hufflepuff') {
      houseName.text('Hufflepuff');
      houseCrest.attr("src", 'images/0.51_Hufflepuff_Crest_Transparent.png');
    }
    if (firstInput === 'ravenclaw') {
      houseName.text('Ravenclaw');
      houseCrest.attr("src", 'images/0.41_Ravenclaw_Crest_Transparent.png');
    }
    if (firstInput === 'slytherin') {
      houseName.text('Slytherin');
      houseCrest.attr("src", 'images/0.61_Slytherin_Crest_Transparent.png');
    }
  });

//display selections from the two dropdowns
  accioButton.click(function() {
    let firstInput = sortHouse.val();
    let secondInput = selectLength.val();
    let inputNum = parseInt(secondInput);
    let wordArray;


    if (firstInput === '' && secondInput === '') {
      alert('Conjure a spell using the dropdown menus.');
      return;
    }
    if (firstInput === '' && secondInput !=='') {
      alert('Sort into a Hogwarts House to summon your spell.')
      return;
    }
    if (firstInput !== '' && secondInput === '') {
      alert('Conjure a length to summon your spell.')
      return;
    }

    if (firstInput === 'gryffindor') {
      wordArray = gryffindor;
    }
    if (firstInput === 'hufflepuff') {
      wordArray = hufflepuff;
    }
    if (firstInput === 'ravenclaw') {
      wordArray = ravenclaw;
    }
    if (firstInput === 'slytherin') {
      wordArray = slytherin;
    }

    $('.your-spell').text("Your Spell:")
    ipsumText.css({"font-family":"MyLumos", "Fallback":"sans-serif", "font-size":"1em",});
    ipsumText.text(random_sentence(inputNum, wordArray));
    sortingButton.text('SPIN TIME-TURNER');
  });

//append # of Sentences to paragraph
  sortingButton.click(function() {
    if (sortingButton.text() === "SPIN TIME-TURNER") {
      return location.reload();
    }

    if (sortingButton.text() === "GET SORTED") {
      sortingButton.text("SPIN TIME-TURNER");
      //cycle through house names
      let count = 0;
      let intervalId = setInterval(function() {
          let randomIndex = Math.floor(Math.random() * 4);
          houseCrest.attr("src", crestImgs[randomIndex]);
          let house = houseNames[randomIndex];
          houseName.text(house);
          sortHouse.val(house.toLowerCase());
          count++;
          console.log(count, house)

          if (count >= 20) {
            clearInterval(intervalId);
          }
      }, 150);
    }

    // setTimeout(function() {
    //   console.log('hi')
    //   let count1 = 0;
    //   let count2 = 0;
    //   let houses = houseNames;
    //   let imgs = crestImgs;
    //   // console.log(houses)
    //   // console.log(imgs)
    //
    //   houseCrest.attr("src", imgs[j]);
    //   house = houses[i];
    //   houseName.text(house);
    //   sortHouse.val(house)

      // for (var i = 0; i < houses.length; i++) {
      //   while (count1 <= 3) {
      //     house = houses[i];
      //     console.log(house)
      //     houseName.text(house);
      //     count1++;
      //   }
      // }
      // //cycle through house crests
      // setTimeout(function() {
      //   for (var j = 0; j < imgs.length; j++) {
      //     while (count2 <= 3) {
      //       img = imgs[j];
      //       console.log(img)
      //       houseCrest.attr("src", img);
      //       count2++;
      //       }
      //     }
      //   });
      // });

    // randomIndex = Math.floor(Math.random() * (4 - 1));
    // houseName.text(houses[randomIndex]);
    // houseCrest.attr("src", imgs[randomIndex]);
    // return;
  });

//randomize words to create sentence
  let random_word = function(wordArray) {
    // console.log('random word', wordArray);
    return wordArray[Math.floor(Math.random() * wordArray.length)];
  }

//create random sentence using random words
  let random_sentence = function(inputNum, wordArray) {
    let buildSentence = [];
    let randomLength = Math.floor(Math.random() * (11 - 1) + 1);

    while (buildSentence.length <= randomLength) {
      buildSentence.push(random_word(wordArray));
    }
    firstLetter = buildSentence[0][0];
    str = buildSentence.join(" ");
    return (str[0].toUpperCase() + str.substring(1) + ".");
  }

//End DOMContentLoaded
// });
