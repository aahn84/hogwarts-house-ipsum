// $(document).ready(function(e) {
  // e.preventDefault();
  $('#copy-button').hide();

  var accioButton = $('#accio-button');
  var sortHouse = $('#sort-house');
  var selectLength = $('#choose-length');
  var houseName = $('.house-name');
  var houseCrest = $('.house-crest');
  var ipsumText = $('.ipsum-generated');
  var sortingText = $('.get-sorted');
  var sortingButton = $('#sorting-button');
  var copyButton = $('#copy-button');

  const storedHouse = JSON.parse(localStorage.getItem('hogwartsHouse'));
  console.log(storedHouse)
  // sortHouse.val(storedHouse) || "";
  // console.log(sortHouse.val())


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
    //set localStorage manual
    localStorage.setItem('hogwartsHouse', JSON.stringify(firstInput));
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
    // var ipsumText = $('.ipsum-generated');
    ipsumText.text(random_paragraph(wordArray, inputNum));
    // ipsumText.fadeIn(5000);
    copyButton.show(5000);
    copyButton.text("DOUBLING CHARM");
    sortingButton.text('SPIN TIME-TURNER');
  });

//append # of Sentences to paragraph
  sortingButton.click(function(e) {
    e.preventDefault();

    if (sortingButton.text() === "SPIN TIME-TURNER") {
      localStorage.clear();
      return location.reload();
    }

    if (sortingButton.text() === "GET SORTED") {
      sortingButton.text("SPIN TIME-TURNER");
      window.scrollTo(0,200);
      //cycle through house names and crests
      let count = 0;
      let intervalID = setInterval(function() {
          let randomIndex = Math.floor(Math.random() * 4);
          houseCrest.attr("src", crestImgs[randomIndex]);
          let house = houseNames[randomIndex];
          houseName.text(house);
          sortHouse.val(house.toLowerCase());
          count++;

          //set localStorage sorting hat
          localStorage.setItem('hogwartsHouse', JSON.stringify(house));

          if (count >= 20) {
            clearInterval(intervalID);
          }
      }, 150);
    }
  });

//select random words to create sentences
  let random_word = function(wordArray) {
    return wordArray[Math.floor(Math.random() * wordArray.length)];
  }

//create random sentence using random_words
  let random_sentence = function(wordArray) {
    let buildSentence = [];
    let randomLength = Math.floor(Math.random() * (11 - 1) + 1);

    while (buildSentence.length <= randomLength) {
      buildSentence.push(random_word(wordArray));
    }
      let sentence = buildSentence.join(" ");
      return sentence[0].toUpperCase() + sentence.substring(1) + ".";
  }

//create random paragraph using random_sentences
  let random_paragraph = function(wordArray, inputNum) {
    let buildParagraph = [];

    for (var i = 1; i <= inputNum; i++) {
      buildParagraph.push(random_sentence(wordArray));
    }

    let paragraph = buildParagraph.join(" ");
    return paragraph;
  }

//click listener on copy button
  copyButton.click(function(event) {
    event.preventDefault();

    let copyText = ipsumText.text();
    copyText.select();
    document.execCommand("Copy");
  });

//End DOMContentLoaded
// });


//copy button not copy (.select)
//localStorage
//fadeIn
//README
//remote remote
