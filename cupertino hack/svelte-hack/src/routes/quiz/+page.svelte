<script>
  import Question from "../../components/Question.svelte";

  const questionData = {
    questionNumber: 1,
    questionTitle: "Why should you use a Credit Card?",
    lessonTitle: "Credit vs Debit Cards",
    correctAnswer: "To build credit",
    answers: [
      "To build credit",
      "To earn rewards",
      "To buy expensive stuff",
      "It sounds cooler",
    ],
  };
</script>

<Question
  questionNumber={questionData.questionNumber}
  questionTitle={questionData.questionTitle}
  lessonTitle={questionData.lessonTitle}
  correctAnswer={questionData.correctAnswer}
  answers={questionData.answers}
/>
