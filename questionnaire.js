(function() {
  var allQuestions = [
    {
      question: "To begin, tell us why you're  looking for help today?",
      options: ["I'm feeling anxious", "I've been trouble sleeping.", "I'dealing with stress at work or school.", "Something else"],
      answer: 0,
    },
    {
      question: "How would you rate your sleeping habits?",
      options: ["Excellent", "Good", "Fair", "Poor"],
      answer: 3
    },

    {
      question: "How would you rate your current physical health?",
      options: ["Excellent", "Good", "Fair", "Poor"],
      answer: 3
    },

    {
      question: "Have you been experiencing intrusive thoughts, flashbacks, or nightmares related to a specific event or experience?",
      options: ["Yes", "No"],
      answer: 0

    },
    {
      question: "Have you been avoiding certain places, activities, or situations that remind you of a past event?",
      options: ["Yes", "No"],
      answer: 0
    },
    {
      question: "Do you find yourself feeling emotionally numb or detached from others since the event occurred?",
      options: ["Yes", "No"],
      answer: 0
    },
    {
      question: "Do you find it challenging to concentrate or have you experienced a decline in your overall cognitive functioning since the event??",
      options: ["Yes", "No"],
      answer: 0
    },
    {
      question: "Have you been experiencing changes in appetite, weight loss or gain, or digestive issues since the event?",
      options: ["Yes", "No"],
      answer: 0
    },
    {
      question: "Have you noticed changes in your mood, such as persistent sadness, anger, or irritability?",
      options: ["Yes", "No"],
      answer: 0
    },
    {
      question: "Are you experiencing heightened anxiety, irritability, or hypervigilance?",
      options: ["Yes", "No"],
      answer: 0
    },





    // Add more questions and choices here
  ];

  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');

  nextQuestion();

  $('#next').click(function() {
    chooseOption();
    if (isNaN(selectOptions[quesCounter])) {
      alert('Please select an option !');
    }
    else {
      quesCounter++;
      nextQuestion();
    }
  });

  $('#prev').click(function() {
    chooseOption();
    quesCounter--;
    nextQuestion();
  });

  function createElement(index) {
    var element = $('<div>', { id: 'question' });
    var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
    element.append(header);

    var question = $('<p>').append(allQuestions[index].question);
    element.append(question);

    var radio = radioButtons(index);
    element.append(radio);

    return element;
  }

  function radioButtons(index) {
    var radioItems = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < allQuestions[index].options.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += allQuestions[index].options[i];
      item.append(input);
      radioItems.append(item);
    }
    return radioItems;
  }

  function chooseOption() {
    selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
  }

  function nextQuestion() {
    quizSpace.fadeOut(function() {
      $('#question').remove();
      if (quesCounter < allQuestions.length) {
        var nextQuestion = createElement(quesCounter);
        quizSpace.append(nextQuestion).fadeIn();
        if (!(isNaN(selectOptions[quesCounter]))) {
          $('input[value=' + selectOptions[quesCounter] + ']').prop('checked', true);
        }
        if (quesCounter === 1) {
          $('#prev').show();
        }
        else if (quesCounter === 0) {
          $('#prev').hide();
          $('#next').show();
        }
      }
      else {
        var scoreRslt = displayResult();
        quizSpace.append(scoreRslt).fadeIn();
        $('#next').hide();
        $('#prev').hide();
      }
    });
  }

  function displayResult() {
    var correct = 0;
    for (var i = 0; i < selectOptions.length; i++) {
      if (selectOptions[i] === allQuestions[i].answer) {
        correct++;
      }
    }
    var prob = correct / 10
    if (prob >= 0.5) {
      location.replace("havetrauma.html");
    }
    else {
      location.replace("nottrauma.html");
    }
  }
})();