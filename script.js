// $(document).ready(function() {
  var accioButton = $('#accio-button');
  var sortHouse = $('#sort-house');
  var selectLength = $('#choose-length');
  var houseName = $('.house-name');
  var houseCrest = $('.house-crest');
  var ipsumText = $('.ipsum-generated');
  var sortingText = $('.get-sorted');
  var sortingButton = $('#sorting-button');

  var reset = function() {
    houseName.text("");
    houseCrest.attr("src", 'images/hogwarts_house_crests.png');
    ipsumText.text("Welcome to Hogwarts School of Witchcraft and Wizardry. Use the dropdowns to summon a spell and pass your O.W.L.s");
    ipsumText.css({"font-family":"HARRP___", "Fallback":"sans-serif", "text-align":"center", "font-size":"1.5em",});
    sortingText.text("Don't know which house you belong in? Let the Sorting Hat decide.");
    sortingButton.text("GET SORTED");
  };

//apply both dropdown changes at once -or- get sorted by hat
//display selection when accio button clicked
  accioButton.click(function() {
    let firstInput = sortHouse.val();
    let secondInput = selectLength.val();

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
      houseName.text('Gryffindor');
      houseCrest.attr("src", 'images/0.31_Gryffindor_Crest_Transparent.png');
    }
    if (firstInput === 'hufflepuff') {
      houseName.text('Hufflepuff');
      houseCrest.attr("src", 'images/0.51_Hufflepuff_Crest_Transparent.png');
    }
    if (firstInput === 'ravenclaw') {
      houseName.text('Ravenclav');
      houseCrest.attr("src", 'images/0.41_Ravenclaw_Crest_Transparent.png');
    }
    if (firstInput === 'slytherin') {
      houseName.text('Slytherin');
      houseCrest.attr("src", 'images/0.61_Slytherin_Crest_Transparent.png');
    }

    if (secondInput === '1') {
      console.log(secondInput)
      ipsumText.css({"font-family":"LumosLatino", "Fallback":"sans-serif", "text-align":"center",});
      ipsumText.text("Sentence");
      // ipsumText.text(random_sentence);
      sortingButton.text('SPIN TIME-TURNER');
      // return random_sentence();
    }
    if (secondInput === '2') {
      ipsumText.css({"font-family":"LumosLatino", "Fallback":"sans-serif", "text-align":"center",});
      ipsumText.text("SentenceSentence");
      sortingButton.text('SPIN TIME-TURNER');
      // return random_sentence();
    }
    if (secondInput === '3') {
      ipsumText.css({"font-family":"LumosLatino", "Fallback":"sans-serif", "text-align":"center", "font-size":"1em",});
      ipsumText.text("SentenceSentenceSentence");
      sortingButton.text('SPIN TIME-TURNER');
      // return random_sentence();
    }
  });

  //if sorting button pressed, cycle display house name&crest
  //append # of Sentences to paragraph
    //append <br> + Paragraph
  //if Get Sorted clicked, toggle text to 'Spin Time-Turner' and reset elements


  sortingButton.click(function() {
    if (sortingButton.text() === "SPIN TIME-TURNER") {
      return location.reload();
    }

    // if (sortingButton.text() === "GET SORTED") {
    //   sortingButton.text("SPIN TIME-TURNER");
    //
    //   setTimeout(function() {
    //     //cycle through house names
    //     setTimeout(function() {
    //       //cycle through house crests
    //     })
    //   })
    //   //display randomized house name/crest
    // }
  });

  //RANDOMIZERS
  //randomize words to create sentence
  //randomize word count per sentence
  //capitalize first letter of each sentence

  //randomize words to create sentence
  let random_word = function() {
    let firstInput = $('#sort-house').val()
    let secondInput = $('#choose-length').val()

    if (firstInput === "gryffindor") {
      return gryffindor[Math.floor(Math.random() * gryffindor.length)];
    }
    if (firstInput.text === "hufflepuff") {
      return hufflepuff[Math.floor(Math.random() * hufflepuff.length)];
    }
    if (firstInput.text === "ravenclaw") {
      return ravenclaw[Math.floor(Math.random() * ravenclaw.length)];
    }
    if (firstInput.text === "slytherin") {
      return slytherin[Math.floor(Math.random() * slytherin.length)];
    }
    // return firstInput[Math.floor(Math.random() * firstInput.length)];
  }

  let random_sentence = function(random_word) {
    let buildSentence = [];
    let randomLength = Math.floor(Math.random() * (11 - 1) + 1);

    while (buildSentence.length <= randomLength) {
      buildSentence.push(random_word);
    }
    buildSentence.join(" ");
    // buildSentence[0].toUppercase();
    return buildSentence + ".";
  }

//End DOMContentLoaded
// });
