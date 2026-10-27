<script>
  let { data, form } = $props();

  const aiOptions = [
      {
         id:     'Homepage Hero Section',
        name:   'Homepage Hero Developer',
        label:  'Describe your desired homepage hero in details',
        slug:   'homepage-hero-developer',
        prompt: ' Write a catchy headline, subheadline, and primary call-to-action for a specific niche.'
},

       {
         id:     '"About Us" Story',
        name:   'About us Creator',
        label:  'Give a short information about your company or organisation',
        slug:   'about-us-creator',
        prompt: 'Turn raw bullet points about a founders journey into an engaging, emotional brand story.'
},

        {
         id:     'Product/Service Description',
        name:   'Product or Service descriptor',
        label:  'Tell us about your product or specific service',
        slug:   'product-or-service-descriptor',
        prompt: ' Convert technical features into benefit-driven bullet points that sell.'
},

       {
         id:     'FAQ Section Generator',
        name:   'FAQ page developer',
        label:  'Give us your product details',
        slug:   'faq-page-developer',
        prompt: ' Anticipate and answer top customer objections and questions for a specific product.'
},

     {
         id:     'PPC Landing Page Copy',
        name:   'PPC landing page designer',
        label:  'What kind of ads do you want on this page',
        slug:   'ppc-landing-page-designer',
        prompt: 'Write high-converting, single-focus sales copy matched to a paid ad campaign.'
},
 
       {
         id:     'Footer & Microcopy',
        name:   'Footer & Microcopy creator',
        label:  'Give description of how you want the footer and microcopies',
        slug:   'footer-&-microcopy-creator',
        prompt: 'Generate snappy microcopy for buttons, error messages, form labels, and navigation.'
},

       {
         id:     'Meta Title & Description',
        name:   'Meta Title & Description Developer',
        label:  'Input your keyword and brand identity',
        slug:   'meta-title-&-description-developer',
        prompt: 'Write CTR-optimized titles and descriptions targeting a specific primary keyword.'
},
 
       {
         id:     'Blog Outline Generator',
        name:   'Blog Outline Writer',
        label:  'Input your topic,title or target',
        slug:   'blog-outline-writer',
        prompt: 'Create a comprehensive, SEO-friendly H2/H3 outline for an authoritative article.'
},
 
       {
         id:     'Pillar Article Drafting',
        name:   'Pillar Article Drafter',
        label:  'Give us the specific topic you want to draft on',
        slug:   'pillar-article-drafter',
        prompt: 'Turn an outline into a long-form, expert-level blog post or guide.'
},
 
      {
         id:     'Image Alt Text Generator',
        name:   'Image Alt Text Converter',
        label:  'Input the your image ',
        slug:   'image-alt-text-converter',
        prompt: ' Write concise, descriptive, and keyword-friendly alt text for web images.'
},

      {
         id:     'Internal Linking Anchor Text',
        name:   'Internal Linking Anchor Text writer',
        label:  'Input topic or article',
        slug:   'internal-linking-anchor-text-writer',
        prompt: 'Analyze a topic and suggest natural anchor text phrases for cross-linking.'
},
 
      {
         id:     'Local SEO Business Bio',
        name:   'Local SEO Business Bio Writer',
        label:  'Give us details about your product and your established locations',
        slug:   'local-seo-business-bio-writer',
        prompt: ' Write a localized Google Business Profile description highlighting local service areas.'
},

       {
         id:     'Value Proposition / Elevator Pitch',
        name:   'Value Proposition Writer',
        label:  'Input the benefits and its advantage over alternatives',
        slug:   'value-proposition-writer',
        prompt: 'Boil a business model down into a 15-second hook.'
},

        {
         id:     'Brand Voice Guidelines',
        name:   'Brand Voice Generator',
        label:  'Tell us about your brand personality',
        slug:   'brand-voice-generator',
        prompt: 'Create a custom style guide (tone, vocabulary, rules) based on brand personality traits.'
},
 
       {
         id:     'Tagline & Slogan Generator',
        name:   'Slogan Maker',
        label:  'Input your brand or business benefits or product',
        slug:   'slogan-maker',
        prompt: 'Brainstorm catchy, memorable slogans based on core business benefits.'
},

       {
         id:     'Target Audience Persona',
        name:   'Target Consumer Detailer',
        label:  'Give us information of your business or product',
        slug:   'target-consumer-detailer',
        prompt: 'Generate detailed demographic and psychodynamic profiles for an ideal customer.'
},
 
      {
         id:     'Press Release',
        name:   'Press Release Writer',
        label:  'Input your company or brand products details,achievements,partnerships or upcoming events ',
        slug:   'press-release-writer',
        prompt: ' Format a company milestone or product launch into a standard media-ready press release.'
},

      {
         id:     'Social Media Bio',
        name:   'Social Media Biographer',
        label:  'Tell us who you are,what you do,call-for-action,contact',
        slug:   'social-media-biographer',
        prompt: ' Write punchy, character-limited bios optimized for Instagram, LinkedIn, X, or TikTok.'
},

      {
         id:     'Pricing Page Tier Copy',
        name:   'Pricing Page Developer',
        label:  'Input your tier options',
        slug:   'pricing-page-developer',
        prompt: 'Write psychological, feature-contrasting copy for tiers (e.g., Starter, Pro, Enterprise).'
},
 
       {
         id:     'Email Welcome Sequence',
        name:   'Email Welcome Sequence drafter',
        label:  'Give us your brand story or missions',
        slug:   'email-welcome-sequence-drafter',
        prompt: ' Write a multi-part automated onboarding email series for new subscribers.'
},

      {
         id:     'Cold Outreach Email',
        name:   'Cold Email Outreach Writer',
        label:  'Give us the topic,name,company achievements',
        slug:   'cold-email-outreach-writer',
        prompt: ' Draft personalized, high-response B2B cold emails or LinkedIn DMs.'
},

        {
         id:     'Case Study / Success Story',
        name:   'Case Study Constructor',
        label:  'Give us the problem you want to be in the study',
        slug:   'case-study-constructor',
        prompt: 'Turn raw client metrics and feedback into a Problem-Solution-Result narrative.'
},
 
       {
         id:     'Testimonial Request Email',
        name:   'Testimonial Request Drafter',
        label:  'Give us the name of your project or service',
        slug:   'testimonial-request-drafter',
        prompt: 'Write friendly templates asking happy customers for reviews and social proof.'
},
 
       {
         id:     'Cart Abandonment Email',
        name:   'Cart Abandonment Email Writer',
        label:  'Tell us about the carted goods',
        slug:   'cart-abandonment-email-writer',
        prompt: 'Craft persuasive, urgency-driven copy to win back customers who left items in their cart.'
},
 
       {
         id:     'Business Plan Executive Summary',
        name:   'Business Plan Executive Summarizer',
        label:  'Input your business idea,concept,opportunities or financial overview',
        slug:   'business-plan-executive-summarizer',
        prompt: ' Summarize a business concept, market opportunity, and financial overview.'
},

       {
         id:     'Business Model Canvas',
        name:   'Business Model Designer',
        label:  'Give me details about your business values',
        slug:   'business-model-designer',
        prompt: ' Textually map out revenue streams, channels, key partners, and cost structures.'
},

       {
         id:     'Competitor SWOT Analysis',
        name:   'Business Competitor Analyst',
        label:  'Give us information about your competitor strengths,weaknesses and opportunities',
        slug:   'business-competitor-analyst',
        prompt: 'Generate a structured strengths, weaknesses, opportunities, and threats breakdown.'
},
 
      {
         id:     'Operations & Logistics',
        name:   'Operation planner',
        label:  'What are your production activities?',
        slug:   'operation-planner',
        prompt: ' Write a step-by-step Standard Operating Procedure for a routine task.'
},

       {
         id:     'Financial Projections Narrative',
        name:   'Narrative Writer',
        label:  'Input for your Business strategy and financial report',
        slug:   'narrative-writer',
        prompt: ' Write the explanatory prose accompanying financial forecasts or cash flow models.'
},

        {
         id:     'Risk Mitigation Strategy',
        name:   'Risk Strategizer',
        label:  'Input your business sectoer and plan',
        slug:   'risk-strategizer',
        prompt: ' Identify potential business risks and write strategic contingencies for them.'
},

       {
         id:     'Terms of Service Draft',
        name:   'ToS drafter',
        label:  'Give me details on your business operations',
        slug:   'tos-drafter',
        prompt: ' Generate a custom website ToS template based on specific business operations (e.g., e-commerce vs. SaaS).'
},

        {
         id:     'Privacy Policy Text',
        name:   'Privacy Policy Generator',
        label:  'Give us the kind of information you collect from users',
        slug:   'privacy-policy-generator',
        prompt: 'Outline data collection, cookie usage, and GDPR/CCPA compliance clauses.'
},
 
        {
         id:     'Refund & Return Policy',
        name:   'Refund policy generatoor',
        label:  'Give us your products details',
        slug:   'refund-policy-generator',
        prompt: ' Write clear, customer-friendly parameters for product returns and cancellations.'
},

        {
         id:     'Service Level Agreement (SLA)',
        name:   'Service Level Generator',
        label:  'What are your scope os service,reponsibilties and penalties?',
        slug:   'service-level-generator',
        prompt: 'Define uptime commitments, support response windows, and performance metrics.'
},
 
        {
         id:     'Disclaimer/Liability Notice',
        name:   'Liability Disclaimer Designer',
        label:  'What are your business and business reponsibilities?',
        slug:   'liability-disclaimer-designer',
        prompt: ' Draft legal disclaimers for financial, wellness, or professional advice websites.'
},

       {
         id:     'Intellectual Property Notice',
        name:   'IP Notice Noter',
        label:  'What is your copyright,trademark or restrictions',
        slug:   'ip-notice-noter',
        prompt: ' Write copyright, trademark, and fair-use attribution notices.'
},

       {
         id:     'Employee Handbook',
        name:   'Employee Handbook Drafter',
        label:  'What are the values you would like your employees to keep to?',
        slug:   'employee-handbook-drafter',
        prompt: ' Draft foundational company policies, remote-work guidelines, and code of conduct rules.'
},

       {
         id:     'Job Description (JD)',
        name:   'Job Descriptor',
        label:  'What are the skills and qualification you need and working conditions?',
        slug:   'job-descriptor',
        prompt: ' Write an inclusive, attractive job posting designed to pull top talent.'
},

        {
         id:     'New Hire Onboarding Guide',
        name:   'Onboard Guide Creator',
        label:  'Input Company Cultures and the department or role for the new hire...',
        slug:   'onboard-guide-creator',
        prompt: ' Create a step-by-step training manual and checklist for new employees.'
},

        {
         id:     'Internal SOP Generator',
        name:   'SOP Drafter',
        label:  'Input the tasks and routine',
        slug:   'sop-drafter',
        prompt: 'Standardize team workflows into clear, repeatable text documents.'
},

       {
         id:     'Performance Review Template',
        name:   'Performance Review Designer',
        label:  'What are the role,department and review period?',
        slug:   'performance-review-designer',
        prompt: ' Create constructive evaluation rubrics and manager feedback scripts.'
},

       {
         id:     'Internal Team Newsletter',
        name:   'Team Newsletter Writer',
        label:  'Input your business goals you want highlighted and additional things like birthdays or work anniversary?',
        slug:   'team-newsletter-writer',
        prompt: ' Write a monthly or weekly update keeping team members aligned on company wins and goals.'
},

       {
         id:     'Knowledge Base Article',
        name:   'Base Article Generator',
        label:  'What topic do you want to be answered?',
        slug:   'base-article-generator',
        prompt: ' Write a clear, step-by-step troubleshooting guide or tutorial for users.'
},

       {
         id:     'Support Ticket Macro',
        name:   'Macro Creator',
        label:  'Input Questions commonly asked?',
        slug:   'macro-creator',
        prompt: ' Create empathetic, pre-written response templates for common customer complaints.'
},

       {
         id:     'Product Tooltip / Microcopy',
        name:   'Tooltip Designer',
        label:  'Input descrption to the control or guidance ',
        slug:   'tooltip-designer',
        prompt: ' Write bite-sized in-app guidance messages to help users navigate software.'
},

        {
         id:     'Customer Exit Survey',
        name:   'Customer Survey Drafter',
        label:  'What tone do you want the survey to sound to the customer?',
        slug:   'customer-survey-drafter',
        prompt: 'Draft thoughtful cancellation or churn survey questions to gather exit feedback.'
},
 
        {
         id:     'Pitch Deck Script',
        name:   'Pitch Desk Scripter',
        label:  'What are the information you want to relate with partners or investors',
        slug:   'pitch-desk-scripter',
        prompt: ' Write persuasive speaker notes and slide copy for an investor pitch presentation.'
},

       {
         id:     'Investor Update Report',
        name:   'Update Report Drafter',
        label:  'What are the updates you want to informn your partners or investors',
        slug:   'update-report-drafter',
        prompt: ' Draft a periodic performance update detailing growth metrics and runway for stakeholders.'
},

       {
         id:     'Partnership Proposal',
        name:   'Proposal Composer',
        label:  'What is the name of the company you want partnership with and which product...',
        slug:   'proposal-composer',
        prompt: ' Write a professional B2B outreach letter proposing a strategic alliance or joint venture.'
},

       {
         id:     'Founders Vision Statement',
        name:   'Founders Vision Writer',
        label:  'What are you future expectation for your business...',
        slug:   'founders-vision-writer',
        prompt: 'Articulate a long-term company manifesto and industry-changing mission.'
},
 
        {
         id:     'Influencer Outreach Email',
        name:   'Outreach Email Generator',
        label:  'Input the name of the creator and topic of the recent or desired topic...',
        slug:   'outreach-email-generator',
        prompt: ' Write a personalized pitch letter to collaborate with social media influencers or creators.'
},

       {
         id:     'Affiliate Program Guidelines',
        name:   'Guidelines Articulator',
        label:  'Input the name of the partner and what product are you promoting...',
        slug:   'guidelines-articulator',
        prompt: ' Draft the terms, commission structures, and rules for recruiting brand affiliates.'
},

       {
         id:     'Webinar Script & Slide Copy',
        name:   'Script & Slide copier',
        label:  'Who are your Audience involved...',
        slug:   'script-&-slide-copier',
        prompt: ' Write an engaging script and presentation text for an educational or sales webinar.'
},

       {
         id:     'Podcast Interview Pitch',
        name:   'Podcast Interview Composer',
        label:  'What are the values you are planning to pass to the host audience...',
        slug:   'podcast-interview-composer',
        prompt: ' Draft a compelling pitch to get a founder booked as a guest on industry podcasts.'
},

       {
         id:     'Podcast Show Notes & Summary',
        name:   'Podcasts Noter',
        label:  'What is the topic you are talking on and guests onboard...',
        slug:   'podcast-noter',
        prompt: 'Turn an audio transcript into structured show notes, timestamps, and key takeaways.'
},
 
       {
         id:     'Community Discord/Slack Channel Rules',
        name:   'Rules Drafter',
        label:  'What kind of community are you organizing',
        slug:   'rules-drafter',
        prompt: ' Write welcoming guidelines and moderation rules for a customer community.'
},

       {
         id:     'Virtual Event Landing Page',
        name:   'Event Communicator',
        label:  'Input for speakers,agendas and topic for the event...',
        slug:   'event-communicator',
        prompt: 'Write registration copy, speaker bios, and agendas for an online conference or workshop.'
},
 
       {
         id:     'Live-Streaming / Q&A Script',
        name:   'Q&A Scripter',
        label:  'Input the topic to be discussed about...',
        slug:   'q&a-scripter',
        prompt: ' Outline a script and discussion prompts for a live Q&A session with customers.'
},

        {
         id:     'Giveaway / Contest Rules',
        name:   'Contest Rule Constructor',
        label:  'Input the eligibility/requirements,prize details,time and acitivites details',
        slug:   'contest-rule-constructor',
        prompt: 'Draft official terms, eligibility criteria, and promotional copy for a social media giveaway.'
},

       {
         id:     'Crowdfunding Campaign Pitch',
        name:   'Crowdfunder Campaign Designer',
        label:  'What is your project or product,the amount of fund you need and why you think it will work...',
        slug:   'crowdfunder-campaign-designer',
        prompt: ' Write a compelling narrative, reward tier descriptions, and updates for Kickstarter or Indiegogo.'
},

       {
         id:     'Beta Tester Invitation & Onboarding',
        name:   'Tester Invitation Writer',
        label:  'What product are you testing?',
        slug:   'tester-invitation-writer',
        prompt: ' Write exclusive invite copy and feedback instructions for early software testers.'
},

        {
         id:     'Product Feature Request Response',
        name:   'Feature Request Reponse Drafter',
        label:  'What is the name of the product,the underlying problem and preferred solution?',
        slug:   'feature-request-reponse-drafter',
        prompt: ' Draft polite, professional replies acknowledging user feature suggestions and roadmap realities.'
},

       {
         id:     'Release Notes / Changelog',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Turn technical software updates into engaging, user-friendly feature highlights.'
},

        {
         id:     'Customer Appreciation Thank-You Note',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Write heartfelt, personalized messages or holiday cards for VIP clients.'
},

        {
         id:     'VIP Loyalty Program Rules',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Draft copy explaining tier benefits, point collection, and rewards for a customer loyalty program.'
},

       {
         id:     'Re-engagement / "We Miss You" Email',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Craft a win-back campaign for dormant subscribers or inactive app users.'
},

       {
         id:     'Upsell / Cross-sell Email',
        name:   '',
        label:  '',
        slug:   '',
        prompt: 'Write strategic post-purchase recommendations to encourage higher customer lifetime value (LTV).'
},
 
       {
         id:     'Subscription Renewal Reminder',
        name:   '',
        label:  '',
        slug:   '',
        prompt: 'Draft friendly, urgency-based copy reminding users their annual or monthly plan is renewing.'
},

        {
         id:     'Payment Failure Notification',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Write a tactful, secure email sequence alerting customers of a declined credit card.'
},

        {
         id:     'Account Deletion Confirmation',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Draft compassionate farewell copy and a quick exit feedback prompt when a user closes their account.'
},

        {
         id:     'Company Milestone Celebration Post Prompt:',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Write an engaging internal or external announcement for hitting a major business revenue or user milestone.'
},

        {
         id:     'Crisis Management Statement',
        name:   '',
        label:  '',
        slug:   '',
        prompt: 'Draft a professional, measured holding statement or public apology for PR emergencies.'
},
 
        {
         id:     'Brand Partnership / Co-Marketing Pitch',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Write a collaboration proposal for a non-competing brand targeting the same audience.'
},

       {
         id:     'Guest Blogging Pitch',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Draft an outreach email proposing high-value guest article topics to industry blogs.'
},

        {
         id:     'Interactive Quiz / Diagnostic Tool Copy',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Write questions, result logic, and lead-capture copy for a marketing quiz.'
},

        {
         id:     'SMS Marketing Text Broadcast',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Write high-conversion, character-limited promotional texts for mobile marketing.'
},

        {
         id:     'Push Notification Copy',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Draft snappy, punchy app notification hooks to drive daily active engagement.'
},

       {
         id:     'Direct Mail Marketing Letter',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Write a traditional physical sales letter or direct mail postcard copy.'
},

       {
         id:     'Sales Objection Handling Script',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Create a reference sheet of word-for-word rebuttals for common sales call objections.'
},

        {
         id:     'Sales Discovery Call Agenda & Questions',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Draft a structured questionnaire for qualifying inbound sales leads.'
},

       {
         id:     'B2B Proposal / Statement of Work (SOW)',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Write the project scope, deliverables, and timeline text for a client proposal.'
},

        {
         id:     'Client Offboarding & Handover Document',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Draft a final delivery checklist and project summary text for completed client work.'
},

       {
         id:     'Contractor / Freelancer Agreement',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Outline standard expectations, deliverables, and payment terms for external talent.'
},

       {
         id:     'Non-Disclosure Agreement (NDA) Summary',
        name:   '',
        label:  '',
        slug:   '',
        prompt: 'Draft plain-English explanations or clauses for protecting sensitive business data.'
},

        {
         id:     'Board of Directors Meeting Agenda',
        name:   '',
        label:  '',
        slug:   '',
        prompt: 'Organize topics, voting items, and discussion points for formal corporate meetings.'
},
 
        {
         id:     'Board Meeting Minutes Template',
        name:   '',
        label:  '',
        slug:   '',
        prompt: 'Create structured text templates to record official corporate decisions and meeting resolutions.'
},

        {
         id:     'Shareholder Annual Report Letter',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Write the CEO’s opening address summarizing yearly performance for company stakeholders.'
},

       {
         id:     'Grant Application Narrative',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Draft persuasive impact statements and project proposals for government or foundation grants.'
},

        {
         id:     'CSR (Corporate Social Responsibility) Statement',
        name:   '',
        label:  '',
        slug:   '',
        prompt: 'Articulate a company’s environmental, social, and charitable giving commitments.'
},
 
       {
         id:     'Diversity, Equity, and Inclusion (DEI) Policy',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Draft clear organizational commitments and hiring frameworks for workplace inclusivity.'
},

       {
         id:     'Cybersecurity & Data Safety Policy',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Write internal rules regarding password management, phishing prevention, and data handling.'
},

       {
         id:     'Remote Work Policy Document',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Draft guidelines covering home office stipends, core working hours, and communication standards.'
},

        {
         id:     'Employee Exit Interview Questionnaire',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Write structured, constructive questions for departing team members.'
},

        {
         id:     'Employee Recognition / Shout-Out Announcement',
        name:   '',
        label:  '',
        slug:   '',
        prompt: 'Draft peer-to-peer appreciation templates for company Slack channels or meetings.'
},

       {
         id:     'Team Retrospective Meeting',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Write reflection questions (What went well? What didnt?) for sprint or quarterly reviews.'
},

        {
         id:     'Job Offer Letter',
        name:   '',
        label:  '',
        slug:   '',
        prompt: 'Draft an exciting, professional employment offer including salary, benefits, and start date terms.'
},

        {
         id:     'Rejection Letter for Applicants',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Write a kind, empathetic automated message for unsuccessful job candidates.'
},

       {
         id:     'Internal IT Helpdesk Request Macro',
        name:   '',
        label:  '',
        slug:   '',
        prompt: 'Draft troubleshooting instructions for common internal hardware or software tickets.'
},
 
       {
         id:     'Supplier / Vendor Evaluation Criteria',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Write a scoring rubric and assessment text for vetting new supply chain partners.'
},

       {
         id:     'Company Wiki / Knowledge Base Home',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ' Write welcoming orientation text and directory structures for internal company intranets.'
},

    
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
  .overlay,
  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .overlay {
    width: 100%;
    padding: 6rem clamp(1rem, 5vw, 4rem) 4rem;
    box-sizing: border-box;
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
    justify-content: center;
    width: min(100%, 72rem);
    background-color: white;
    padding: 0 0 30px;
     }

  .ai-tab-btn {
    flex: 1 1 10rem;
    min-height: 44px;
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
    box-sizing: border-box;
    width: 100%;
    height: clamp(9rem, 20vw, 18rem);
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
    width: min(100%, 72rem);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
  }

  .response {
    width: min(100%, 72rem);
    box-sizing: border-box;
    padding: 1.25rem clamp(0rem, 4vw, 4rem);
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

  .submit-btn {
    min-height: 44px;
    padding: 0.65rem 1.2rem;
  }

  @media (max-width: 700px) {
    .overlay {
      justify-content: flex-start;
      padding: 5rem 1rem 3rem;
    }

    .button-group {
      gap: 8px;
      padding-bottom: 1.25rem;
    }

    .ai-tab-btn {
      flex-basis: calc(50% - 4px);
      padding-inline: 0.75rem;
      font-size: 0.9rem;
    }

    input,
    input:focus {
      height: clamp(9rem, 42vw, 13rem);
      border-radius: 20px;
    }

    .response {
      padding-inline: 0;
    }
  }

  @media (max-width: 480px) {
    .overlay {
      padding-top: 4.5rem;
    }

    .ai-tab-btn {
      flex-basis: 100%;
    }

    form {
      gap: 0.75rem;
    }
  }
</style>
