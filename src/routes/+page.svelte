<script lang="ts">
    let sentence = '';
    let maxRepeatedWords: { word: string; count: number }[] = [];
    let showResult = false;
    let isAnalyzing = false;
    let progress = 0;
  
    type WordCount = Record<string, number>;
  
    function findMaxRepeatedWords(sentence: string): { word: string; count: number }[] {
      const words = sentence
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .split(' ');
  
      const wordCount: WordCount = {};
      words.forEach(word => {
        if (word) {
          wordCount[word] = (wordCount[word] || 0) + 1;
        }
      });
  
      let maxCount = 0;
      const result: { word: string; count: number }[] = [];
  
      for (const [word, count] of Object.entries(wordCount)) {
        if (count > maxCount) {
          maxCount = count;
          result.length = 0; // Clear the result array
          result.push({ word, count });
        } else if (count === maxCount) {
          result.push({ word, count });
        }
      }
  
      return result;
    }
  
    function startProgressBar() {
      // Clear previous results
      maxRepeatedWords = [];
      showResult = false;
  
      isAnalyzing = true;
      progress = 0;
  
      const duration = 1000; // 1 second
      const interval = 10; // Update every 10ms
      const increment = (interval / duration) * 100;
  
      const timer = setInterval(() => {
        progress += increment;
        if (progress >= 100) {
          clearInterval(timer);
          progress = 100;
          analyzeSentence();
          isAnalyzing = false;
        }
      }, interval);
    }
  
    function analyzeSentence() {
      maxRepeatedWords = findMaxRepeatedWords(sentence);
      showResult = true;
    }
  </script>
  
  <style>
    .progress-circle {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin: 1rem auto;
      background: #e5e7eb; /* Tailwind gray-200 */
    }
  
    .progress-circle .progress-bar {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transition: background 0.1s linear;
    }
  
    .progress-circle::after {
      content: '';
      width: 80px;
      height: 80px;
      background: #fff;
      border-radius: 50%;
      position: absolute;
    }
  
    .progress-text {
      position: absolute;
      font-size: 0.9rem;
      font-weight: bold;
      color: #3b82f6;
    }
  </style>
  
  <div class="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md text-center">
    <h1 class="text-2xl font-bold mb-4">📝 Word Repeat Analyzer</h1>
    <div class="mb-4">
      <textarea
        placeholder="Enter a sentence..."
        bind:value={sentence}
        rows="4"
        class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>
    
    <button 
      class="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50"
      on:click={startProgressBar}
      disabled={isAnalyzing}>
      {isAnalyzing ? 'Analyzing...' : 'Analyze Sentence'}
    </button>
    
    {#if isAnalyzing}
      <div class="progress-circle">
        <div class="progress-bar" style="background: conic-gradient(#3b82f6 {progress}% , #e5e7eb {progress}%);">
          <div class="progress-text">{Math.round(progress)}%</div>
        </div>
      </div>
    {/if}
    
    {#if showResult}
      <div class="mt-4 text-lg font-semibold text-green-600">
        {#if maxRepeatedWords.length > 0}
          <p><strong>Most Repeated Word(s):</strong></p>
          <ul>
            {#each maxRepeatedWords as { word, count }}
              <li>{word} - {count} times</li>
            {/each}
          </ul>
        {:else}
          <p>No words found!</p>
        {/if}
      </div>
    {/if}
  </div>
  