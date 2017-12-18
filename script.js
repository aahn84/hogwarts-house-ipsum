$(document).ready(function() {
  console.log("READY!")
  var accioButton = $('#accio-button');
  var sortHouse = $('#sort-house');
  var selectLength = $('#select-length');
  var firstInput = sortHouse.val;
  var secondInput = selectLength.val;
  var houseName = $('.house-name');
  var houseCrest = $('.house-crest');
  var ipsumText = $('.ipsum-generated');
  var sortingText = $('.get-sorted');
  var sortingButton = $('.sorting-button');

  var reset = function() {
    sortingButton.text("GET SORTED");
    houseName.text("The Great Houses");
    houseCrest.attr("src", 'images/hogwarts_house_crests.png');
    ipsumText.text("Welcome to Hogwarts School of Witchcraft and Wizardry. Use the dropdowns to summon a spell and pass your O.W.L.s");
    sortingText.text("Don't know which house you belong to? Let the Sorting Hat decide.");
  };

//apply both dropdown changes at once -or- get sorted by hat
//display selection when accio button clicked

  accioButton.click(function() {
    firstInput = $('#sort-house').val()
console.log('hi')
console.log('first input', firstInput)
      if (firstInput === '--') {
        console.log('nothing here')
        houseCrest.attr("src", 'images/hogwarts_house_crests.png');
        ipsumText.text = "Welcome to Hogwarts School of Witchcraft and Wizardry. Use the dropdowns to summon a spell and pass your O.W.L.s";
        sortingText.text = "Don't know which house you belong to? Let the Sorting Hat decide.";
      }
      if (firstInput === 'Gryffindor') {
        console.log('Gryffindor');
        $('.house-name').text('HIYEE');
        // houseName.text('Gryffindor');
        houseCrest.attr("src", 'images/0.31_Gryffindor_Crest_Transparent.png');
        sortingButton.text("SPIN TIME-TURNER");
      }
      if (firstInput === 'Hufflepuff') {
        houseName.text('Hufflepuff');
        houseCrest.attr("src", 'images/0.51_Hufflepuff_Crest_Transparent.png');
        sortingButton.text("SPIN TIME-TURNER");
      }
      if (firstInput === 'Ravenclaw') {
        houseName.text('Ravenclaw');
        houseCrest.attr("src", 'images/0.41_Ravenclaw_Crest_Transparent.png');
        sortingButton.text("SPIN TIME-TURNER");
      }
      if (firstInput === 'Slytherin') {
        houseName.text('Slytherin');
        houseCrest.attr("src", 'images/0.61_Slytherin_Crest_Transparent.png');
        sortingButton.text("SPIN TIME-TURNER");
      }

        if (secondInput === '--') {
          houseCrest.attr("src", 'images/hogwarts_house_crests.png');
          ipsumText.text("Welcome to Hogwarts School of Witchcraft and Wizardry, located in Hogwarts Castle between Black Lake and the Forbidden Forest. Summon your spell to pass your O.W.L.s");
          sortingText.text("Welcome to Hogwarts School of Witchcraft and Wizardry, located in Hogwarts Castle between Black Lake and the Forbidden Forest. Summon your spell to pass your O.W.L.s");
        }
        if (secondInput === '1 Sentence') {
          // ipsumText.scss({"font-family":"LumosLatino", "Fallback":"sans-serif",});
          ipsumText.text("Sentence");
        }
        if (secondInput === '2 Sentences') {
          ipsumText.css({"font-family":"LumosLatino", "Fallback":"sans-serif",});
          ipsumText.text("SentenceSentence");
        }
        if (secondInput === '3 Sentences') {
          ipsumText.css({"font-family":"LumosLatino", "Fallback":"sans-serif", "font-size":"1.5em",});
          ipsumText.text("SentenceSentenceSentence");
        }
        //if 'Get Sorted' is clicked, toggle text to 'Spin Time-Turner' and reset elements
        // setTimeout function(reset, cb) {
        //   cb(reset);
        // };
  });


  //if sorting button pressed, cycle display house name&crest
  //append # of Sentences to paragraph
    //append <br> + Paragraph
  //if Get Sorted clicked, toggle text to 'Spin Time-Turner' and reset elements

    //
    // sortingButton.click(function() {
    //   if (sortingButton.text === "GET SORTED") {
    //     sortingButton.text("SPIN TIME-TURNER");
    //
    //     setTimeout(function() {
    //       //cycle through house names
    //       setTimeout(function() {
    //         //cycle through house crests
    //       })
    //     })
    //     //display randomized house name/crest
    //   }
    //
    //   if (sortingButton.text === "SPIN TIME-TURNER") {
    //     sortingButton.text("GET SORTED");
    //
    //     setTimeout(function() {
    //       //cycle through house names
    //       setTimeout(function() {
    //         //cycle through house crests
    //       })
    //     })
    //     //display randomized house name/crest
    //   }
    // });


//RANDOMIZERS
//randomize words to create sentence
//randomize word count per sentence
//capitalize first letter of each sentence

//randomize words to create sentence
  // const random_word = function() {
  //   var buildSentence = [];
  //
  //   if (firstInput.text === "Gryffindor") {
  //     gryffindor[Math.floor(Math.random() * gryffindor.length)];
  //   }
  //   if (firstInput.text === "Hufflepuff") {
  //     hufflepuff[Math.floor(Math.random() * hufflepuff.length)];
  //   }
  //   if (firstInput.text === "Ravenclaw") {
  //     ravenclaw[Math.floor(Math.random() * ravenclaw.length)];
  //   }
  //   if (firstInput.text === "Slytherin") {
  //     slytherin[Math.floor(Math.random() * slytherin.length)];
  //   }
  //   return random_word;
  // }
  //
  // function buildSentence(random_word) {
  //     let buildSentence = [];
  //     let randomLength = Math.floor(Math.random() * (11 - 1) + 1);
  //     // var firstInput = sortHouse.value;
  //     // var secondInput = selectLength.value;
  //
  //     while (buildSentence.length <= randomLength) {
  //       buildSentence.push(random_word);
  //       buildSentence.join(" ");
  //       buildSentence[0].toUppercase;
  //     }
  //     return buildSentence + ".";
  // }

  const gryffindor = [
    'Godric Gryffindor',
    'bravery',
    'daring',
    'nerve',
    'chivalry',
    'determination',
    'lion',
    'scarlet and gold',
    'Minerva McGonagall',
    'The Fat Lady',
    'Nearly Headless Nick',
    'fire',
    'Albus Dumbledore',
    'Sirius Black',
    'Harry Potter',
    'Hermione Granger',
    'Sword of Gryffindor',
  ];

  const hufflepuff = [
    'Helga Hufflepuff',
    'hard-working',
    'dedication',
    'patience',
    'loyalty',
    'fair play',
    'friendly',
    'honest',
    'impartial',
    'badger',
    'yellow and black',
    'Pomona Sprout',
    'The Fat Friar',
    'earth',
    'Newt Scamander',
    'Cedric Diggory',
  ];

  const ravenclaw = [
    'Rowena Ravenclaw',
    'intelligence',
    'knowledge',
    'wit',
    'learning',
    'wisdom',
    'intellect',
    'eagle',
    'blue and bronze',
    'Filius Flitwick',
    'The Grey Lady',
    'air',
    'Gilderoy Lockhart',
    'Luna Lovegood',
    'Cho Chang',
    'pure-blood',
  ];

  const slytherin = [
    'Salazar Slytherin',
    'ambition',
    'cunning',
    'resourcefulness',
    'shrewd',
    'clever',
    'serpent',
    'snake',
    'green and silver',
    'Horace Slughorn',
    'Severus Snape',
    'The Bloody Baron',
    'water',
    'Draco Malfoy',
    'Crabbe',
    'Goyle',
    'Tom Riddle',
    'Voldemort',
    'He Who Must Not Be Named',
  ];
//End DOMContentLoaded
});
