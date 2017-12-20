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

    $('.your-spell').text('Your Spell: ')
    $('.your-spell').attr("font-size", "1.5em",)
    var ipsumText = $('.ipsum-generated');
    // ipsumText.css({"font-family":"MyLumos", "Fallback":"sans-serif", "font-size":"1em",});
    ipsumText.text(random_paragraph(wordArray, inputNum));
    sortingButton.text('SPIN TIME-TURNER');
  });

//append # of Sentences to paragraph
  sortingButton.click(function(e) {
    e.preventDefault();

    if (sortingButton.text() === "SPIN TIME-TURNER") {
      return location.reload();
    }

    if (sortingButton.text() === "GET SORTED") {
      sortingButton.text("SPIN TIME-TURNER");
      window.scrollTo(0,200);
      //cycle through house names
      let count = 0;
      let intervalID = setInterval(function() {
          let randomIndex = Math.floor(Math.random() * 4);
          houseCrest.attr("src", crestImgs[randomIndex]);
          let house = houseNames[randomIndex];
          houseName.text(house);
          sortHouse.val(house.toLowerCase());
          count++;

          if (count >= 20) {
            clearInterval(intervalID);
          }
      }, 150);
    }
  });

//randomize words to create sentence
  let random_word = function(wordArray) {
    // console.log('random word', wordArray);
    return wordArray[Math.floor(Math.random() * wordArray.length)];
  }

//create random sentence using random words
  let random_sentence = function(wordArray) {
    let buildSentence = [];
    let randomLength = Math.floor(Math.random() * (11 - 1) + 1);

    while (buildSentence.length <= randomLength) {
      buildSentence.push(random_word(wordArray));
    }
      str = buildSentence.join(" ");
      return str[0].toUpperCase() + str.substring(1) + ".";
  }

//create random paragraph using random_sentence
  let random_paragraph = function(wordArray, inputNum) {
    let paragraph = [];

    for (var i = 1; i <= inputNum; i++) {
      console.log(i)
      paragraph.push(random_sentence(wordArray));
      console.log(paragraph)
    }
    para = paragraph.join(" ");
    console.log(para)
    return para;
  }





//End DOMContentLoaded
// });
