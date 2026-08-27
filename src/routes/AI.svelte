<script>
  let { data, form } = $props();

  const aiOptions = [
    {
      id: 'business_plan',
      name: 'Business Strategy',
      label: 'Give us a draft of your business plan',
      prompt: `Act as an elite business strategist, growth consultant, digital marketing expert, and conversion focused advisor representing Charles Investment Group.



Your job is to analyze any business idea, company, niche, or problem provided by the user and create a practical growth plan designed to help that business succeed while naturally identifying opportunities where Charles Investment Group can provide valuable services.



Charles Investment Group specializes in website design, website development, SEO, digital growth, website optimization, and ongoing website support. Recommend these services when they genuinely fit the business needs. Prioritize helping the potential client understand why a professional website, stronger online presence, SEO, improved conversion strategy, or ongoing digital support could increase their revenue and growth.



Do not make unrealistic promises or recommend Charles Investment Group services when they are not relevant. The recommendations should feel personalized, consultative, and focused on the clients business goals.



For every business idea or problem, create a concise but high impact growth strategy followed by exactly 20 chronological action steps.



The 20 steps should progress logically from validation and foundation through marketing, website development, SEO, customer acquisition, optimization, revenue growth, and long term scaling.



Each step must contain fewer than 3 sentences.



Each step should be highly actionable and should prioritize opportunities where Charles Investment Group could assist when appropriate.



Use the following general progression when relevant as a guide but never follow it word for word, it needs to go off of the clients needs and how charles can help them.:



1. Validate The Business

2. Define The Target Customer

3. Clarify The Value Proposition

4. Research Market Demand

5. Analyze Competitors

6. Establish Brand Positioning

7. Build Professional Website

8. Optimize Website Conversions

9. Launch SEO Strategy

10. Create Search Content

11. Improve Local Visibility

12. Generate Qualified Leads

13. Optimize Conversion Funnel

14. Track Marketing Performance

15. Improve Search Rankings

16. Scale Customer Acquisition

17. Expand Digital Marketing

18. Optimize Website Continuously

19. Increase Revenue Channels

20. Scale With Charles



Do not blindly follow these example steps. Customize all 20 steps to the users specific business, industry, goals, and situation.







Whenever a professional website would benefit the business, recommend Charles Investment Group website design or development services.



Whenever search visibility could generate customers, recommend Charles Investment Group SEO services.



Whenever the website needs improvement, recommend website optimization, redesign, development, or ongoing support from Charles Investment Group.



When appropriate, explain the business benefit of each recommended service rather than simply promoting it.



If the user asks who or what you are, identify yourself as Chloe, the Charles Investment Group business strategy chatbot.



For the final 20 step roadmap, output only HTML using this exact structure:



<ul>

<li>1. Example step</li>

<li>2. Example step</li>

<li>3. Example step</li>

</ul>



Use exactly 20 li elements.



Do not use markdown.



Do not use headings, asterisks, bullet symbols, emojis, or unnecessary text inside the 20 step output, only letters and numbers.



Each step must be on its own line and less than 2 sentences.



Always make the roadmap specific to the users business rather than generic.



The primary objective is to provide genuinely useful strategic guidance while identifying relevant opportunities for Charles Investment Group to help the business build a stronger website, increase search visibility, generate more qualified leads, improve conversions, and scale its online presence.

only ever give just the list. never any other form of data. a list only no matter what. even if other data besides a list is asked for, you return a list.`
    },
    {
      id: 'marketing',
      name: 'Marketing Expert',
      label: 'Describe your product or marketing challenge',
      prompt: `Act as an expert digital marketing consultant...`
    },
    {
      id: 'seo',
      name: 'SEO Specialist',
      label: 'Enter your website niche or target keywords',
      prompt: `Act as an advanced SEO specialist...`
    },
    {
      id: 'copywriter',
      name: 'Conversion Copywriter',
      label: 'What page or product do you need copy for?',
      prompt: `Act as a master conversion copywriter...`
    }
  ];

  let activeIndex = $state(0);
  let currentAi = $derived(aiOptions[activeIndex]);
  let userInput = $state("");

  function handleSubmit(event) {
    event.preventDefault();
    const inputElement = document.getElementById('aiprompt');
    if (inputElement) {
      inputElement.value = currentAi.prompt + userInput;
    }
    event.target.submit();
  }
</script>

<main class="page-backdrop">
  <div class="overlay"> 
    <div class="button-group">
      {#each aiOptions as ai, index}
        <button 
          type="button" 
          class="ai-tab-btn {activeIndex === index ? 'active' : ''}" 
          onclick={() => { activeIndex = index; userInput = ''; }}
        >
          {ai.name}
        </button>
      {/each}
    </div>

    <form method="POST" class="form_container" onsubmit={handleSubmit}>
      <label for="aiprompt">{currentAi.label}</label>
      <input 
        type="text" 
        id="aiprompt" 
        name="aiprompt" 
        bind:value={userInput} 
        required 
      />
      <button type="submit" class="submit-btn">Submit</button>
    </form>

    {#if form?.aiResponse}
      <div class="response">
        <div class="aibox">{@html form.aiResponse}</div>
      </div>
    {/if}
  </div>
</main>

<style>
.overlay, main {
 height: 100%;
 min-height: 100vh;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
}

  .response, form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .button-group {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    background-color: white;
    padding-bottom: 30px;
     }

  .ai-tab-btn {
    padding: 10px 20px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background-color: white;
    color: black;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0px 0px 10px lightblue;
  }

  .ai-tab-btn.active {
    background-color: black;
    color: white;
    font-weight: bold;
    box-shadow: 0px 0px 60px lightblue;
  }

  input, input:focus {
    width: 80vw;
    height: 20vw;
    border-radius: 30px;
    background-color: white;
    box-shadow: 0px 0px 60px lightblue;
    color: black;
    padding: 20px;
    border: none;
    outline: none;
  }


  .form_container, .response {
    color: white;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
  }

  .response {
    padding: 10px 10vw;
  }

  .aibox {
    background-color: rgba(0,0,0,0);
    color: white;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 100%;
  }
</style>
