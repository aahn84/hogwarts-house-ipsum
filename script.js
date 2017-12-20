$(document).ready(function() {
  $('#copy-button').hide();
  $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });


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

  //set default length
  var setDefault = function() {
    if (selectLength.val() === '') {
      selectLength.val('1');
      return;
    }
  }

  if (sortHouse.val() !== '') {
    setDefault();
  }


//display house name and crest on change
  sortHouse.change(function() {
  let firstInput = sortHouse.val();
  let secondInput = selectLength.val();

    if (firstInput === '') {
      selectLength.val('');
      houseName.text('');
      houseCrest.attr({"src":'images/hogwarts_house_crests.png', "alt":"Hogwarts Houses Crest", "class":"house-crest"});
    }
    if (firstInput === 'gryffindor') {
      houseName.text('Gryffindor');
      houseCrest.attr("src", 'images/0.31_Gryffindor_Crest_Transparent.png');
      setDefault();
    }
    if (firstInput === 'hufflepuff') {
      houseName.text('Hufflepuff');
      houseCrest.attr("src", 'images/0.51_Hufflepuff_Crest_Transparent.png');
      setDefault();
    }
    if (firstInput === 'ravenclaw') {
      houseName.text('Ravenclaw');
      houseCrest.attr("src", 'images/0.41_Ravenclaw_Crest_Transparent.png');
      setDefault();
    }
    if (firstInput === 'slytherin') {
      houseName.text('Slytherin');
      houseCrest.attr("src", 'images/0.61_Slytherin_Crest_Transparent.png');
      setDefault();
    }

    //set localStorage manual
    localStorage.setItem('hogwartsHouse', JSON.stringify(firstInput));
  });
  sortHouse.val(storedHouse);

  if (sortHouse.val() !== '' && selectLength.val() === '') {
    selectLength.val('1');
  }

  sortHouse.trigger('change');

//display selections from the two dropdowns
  accioButton.click(function() {
    window.scrollTo(0,600);
    let firstInput = sortHouse.val();
    let secondInput = selectLength.val();
    let inputNum = parseInt(secondInput);
    let wordArray;

    if (firstInput === '' && secondInput === '') {
      alert('Conjure a spell using the dropdown menus.');
      return;
    }
    if (firstInput === '' && secondInput !=='') {
      alert('Sort into a Hogwarts House to summon your spell.');
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
    copyButton.show();
    copyButton.text("DOUBLING CHARM");
    sortingButton.text('SPIN TIME-TURNER');
    // sortingButton.attr('title', 'Reset All')
    //       .tooltip('fixTitle')
    //       .tooltip('show');
  });


// change tool tip on sorting button hover
  sortingButton.hover(function() {
    if (sortingButton.text() === "GET SORTED") {
      $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });

      $(sortingButton).tooltip('hide')
          .attr('data-original-title', 'Get sorted into a Hogwarts House')
          .tooltip('show');
    }
    $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });
    return;
  });

//get sorted into a house
  sortingButton.click(function() {
    // e.preventDefault();

    if (sortingButton.text() === "SPIN TIME-TURNER") {
      localStorage.clear();
      location.reload();
      window.scrollTo(0,0);
      return;
    }

    if (sortingButton.text() === "GET SORTED") {
      sortingButton.text("SPIN TIME-TURNER");
      $(sortingButton).tooltip('hide')
          .attr('data-original-title', 'Reset all')
          .tooltip('show');
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
          localStorage.setItem('hogwartsHouse', JSON.stringify(house.toLowerCase()));

          if (count >= 20) {
            clearInterval(intervalID);
          }
      }, 150);

      if (selectLength.val() === '') {
        selectLength.val('1');
      }

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
  copyButton.click(function(element) {
    let copyText = ipsumText.html();

    let tempInput = document.createElement('input');

    tempInput.setAttribute('value', copyText);
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("Copy");
    document.body.removeChild(tempInput);
  });


//End DOMContentLoaded
});
