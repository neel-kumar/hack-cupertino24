<script lang="ts">
  export let questionNumber = 1;
  export let questionTitle = "";
  export let lessonTitle = "";
  export let correctAnswer = "";
  export let answers: string[] = [];

  let selectedAnswers = new Set<number>();

  function selectAnswer(index: number) {
    if (selectedAnswers.has(index)) {
      selectedAnswers.delete(index);
    } else {
      selectedAnswers.add(index);
    }

    selectedAnswers = new Set(selectedAnswers);
  }
</script>

<div class="m-12">
  <div class="flex justify-between text-gray-500 font-bold">
    <div class="text-lg">
      Question #{questionNumber}
    </div>
    <div class="">
      {lessonTitle}
    </div>
  </div>

  <div class="text-3xl font-bold mt-4 text-center">
    {questionTitle}
  </div>

  <div class="grid grid-cols-2 gap-8 mt-12">
    {#each answers as answer, i}
        <button
          class="border border-gray-300 rounded-lg p-4 text-gray-700"
          class:bg-blue-100={selectedAnswers.has(i)}
          on:click={() => selectAnswer(i)}
        >
          {answer}
        </button>
    {/each}
  </div>
</div>              