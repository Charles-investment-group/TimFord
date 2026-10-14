<script>
  let { data, form } = $props();

  const aiOptions = [
    {        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
     Homepage Hero Section Prompt: Write a catchy headline, subheadline, and primary call-to-action for a specific niche.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''

"About Us" Story Prompt: Turn raw bullet points about a founder’s journey into an engaging, emotional brand story.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''

Product/Service Description Prompt: Convert technical features into benefit-driven bullet points that sell.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
FAQ Section Generator Prompt: Anticipate and answer top customer objections and questions for a specific product.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
PPC Landing Page Copy Prompt: Write high-converting, single-focus sales copy matched to a paid ad campaign.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Footer & Microcopy Prompt: Generate snappy microcopy for buttons, error messages, form labels, and navigation.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Meta Title & Description Prompt: Write CTR-optimized titles and descriptions targeting a specific primary keyword.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Blog Outline Generator Prompt: Create a comprehensive, SEO-friendly H2/H3 outline for an authoritative article.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Pillar Article Drafting Prompt: Turn an outline into a long-form, expert-level blog post or guide.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Image Alt Text Generator Prompt: Write concise, descriptive, and keyword-friendly alt text for web images.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Internal Linking Anchor Text Prompt: Analyze a topic and suggest natural anchor text phrases for cross-linking.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Local SEO Business Bio Prompt: Write a localized Google Business Profile description highlighting local service areas.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Value Proposition / Elevator Pitch Prompt: Boil a business model down into a 15-second hook.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Brand Voice Guidelines Prompt: Create a custom style guide (tone, vocabulary, rules) based on brand personality traits.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Tagline & Slogan Generator Prompt: Brainstorm catchy, memorable slogans based on core business benefits.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Target Audience Persona Prompt: Generate detailed demographic and psychodynamic profiles for an ideal customer.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Press Release Prompt: Format a company milestone or product launch into a standard media-ready press release.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Social Media Bio Prompt: Write punchy, character-limited bios optimized for Instagram, LinkedIn, X, or TikTok.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Pricing Page Tier Copy Prompt: Write psychological, feature-contrasting copy for tiers (e.g., Starter, Pro, Enterprise).
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Email Welcome Sequence Prompt: Write a multi-part automated onboarding email series for new subscribers.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Cold Outreach Email Prompt: Draft personalized, high-response B2B cold emails or LinkedIn DMs.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Case Study / Success Story Prompt: Turn raw client metrics and feedback into a Problem-Solution-Result narrative.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Testimonial Request Email Prompt: Write friendly templates asking happy customers for reviews and social proof.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Cart Abandonment Email Prompt: Craft persuasive, urgency-driven copy to win back customers who left items in their cart.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Business Plan Executive Summary Prompt: Summarize a business concept, market opportunity, and financial overview.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Business Model Canvas Prompt: Textually map out revenue streams, channels, key partners, and cost structures.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Competitor SWOT Analysis Prompt: Generate a structured strengths, weaknesses, opportunities, and threats breakdown.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Operations & Logistics SOP Prompt: Write a step-by-step Standard Operating Procedure for a routine task.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Financial Projections Narrative Prompt: Write the explanatory prose accompanying financial forecasts or cash flow models.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Risk Mitigation Strategy Prompt: Identify potential business risks and write strategic contingencies for them.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Terms of Service Draft Prompt: Generate a custom website ToS template based on specific business operations (e.g., e-commerce vs. SaaS).
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Privacy Policy Text Prompt: Outline data collection, cookie usage, and GDPR/CCPA compliance clauses.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Refund & Return Policy Prompt: Write clear, customer-friendly parameters for product returns and cancellations.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Service Level Agreement (SLA) Prompt: Define uptime commitments, support response windows, and performance metrics.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Disclaimer/Liability Notice Prompt: Draft legal disclaimers for financial, wellness, or professional advice websites.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Intellectual Property Notice Prompt: Write copyright, trademark, and fair-use attribution notices.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Employee Handbook Prompt: Draft foundational company policies, remote-work guidelines, and code of conduct rules.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Job Description (JD) Prompt: Write an inclusive, attractive job posting designed to pull top talent.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
New Hire Onboarding Guide Prompt: Create a step-by-step training manual and checklist for new employees.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Internal SOP Generator Prompt: Standardize team workflows into clear, repeatable text documents.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Performance Review Template Prompt: Create constructive evaluation rubrics and manager feedback scripts.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Internal Team Newsletter Prompt: Write a monthly or weekly update keeping team members aligned on company wins and goals.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Knowledge Base Article Prompt: Write a clear, step-by-step troubleshooting guide or tutorial for users.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Support Ticket Macro Prompts: Create empathetic, pre-written response templates for common customer complaints.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Product Tooltip / Microcopy Prompt: Write bite-sized in-app guidance messages to help users navigate software.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Customer Exit Survey Prompt: Draft thoughtful cancellation or churn survey questions to gather exit feedback.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Pitch Deck Script Prompt: Write persuasive speaker notes and slide copy for an investor pitch presentation.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Investor Update Report Prompt: Draft a periodic performance update detailing growth metrics and runway for stakeholders.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Partnership Proposal Prompt: Write a professional B2B outreach letter proposing a strategic alliance or joint venture.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Founders' Vision Statement Prompt: Articulate a long-term company manifesto and industry-changing mission.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Influencer Outreach Email Prompt: Write a personalized pitch letter to collaborate with social media influencers or creators.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Affiliate Program Guidelines Prompt: Draft the terms, commission structures, and rules for recruiting brand affiliates.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Webinar Script & Slide Copy Prompt: Write an engaging script and presentation text for an educational or sales webinar.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Podcast Interview Pitch Prompt: Draft a compelling pitch to get a founder booked as a guest on industry podcasts.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Podcast Show Notes & Summary Prompt: Turn an audio transcript into structured show notes, timestamps, and key takeaways.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Community Discord/Slack Channel Rules Prompt: Write welcoming guidelines and moderation rules for a customer community.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Virtual Event Landing Page Prompt: Write registration copy, speaker bios, and agendas for an online conference or workshop.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Live-Streaming / Q&A Script Prompt: Outline a script and discussion prompts for a live Q&A session with customers.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Giveaway / Contest Rules Prompt: Draft official terms, eligibility criteria, and promotional copy for a social media giveaway.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Crowdfunding Campaign Pitch Prompt: Write a compelling narrative, reward tier descriptions, and updates for Kickstarter or Indiegogo.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Beta Tester Invitation & Onboarding Prompt: Write exclusive invite copy and feedback instructions for early software testers.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Product Feature Request Response Prompt: Draft polite, professional replies acknowledging user feature suggestions and roadmap realities.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Release Notes / Changelog Prompt: Turn technical software updates into engaging, user-friendly feature highlights.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Customer Appreciation Thank-You Note Prompt: Write heartfelt, personalized messages or holiday cards for VIP clients.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
VIP Loyalty Program Rules Prompt: Draft copy explaining tier benefits, point collection, and rewards for a customer loyalty program.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Re-engagement / "We Miss You" Email Prompt: Craft a win-back campaign for dormant subscribers or inactive app users.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Upsell / Cross-sell Email Prompt: Write strategic post-purchase recommendations to encourage higher customer lifetime value (LTV).
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Subscription Renewal Reminder Prompt: Draft friendly, urgency-based copy reminding users their annual or monthly plan is renewing.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Payment Failure Notification Prompt: Write a tactful, secure email sequence alerting customers of a declined credit card.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Account Deletion Confirmation Prompt: Draft compassionate farewell copy and a quick exit feedback prompt when a user closes their account.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Company Milestone Celebration Post Prompt: Write an engaging internal or external announcement for hitting a major business revenue or user milestone.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Crisis Management Statement Prompt: Draft a professional, measured holding statement or public apology for PR emergencies.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Brand Partnership / Co-Marketing Pitch Prompt: Write a collaboration proposal for a non-competing brand targeting the same audience.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Guest Blogging Pitch Prompt: Draft an outreach email proposing high-value guest article topics to industry blogs.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Interactive Quiz / Diagnostic Tool Copy Prompt: Write questions, result logic, and lead-capture copy for a marketing quiz.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
SMS Marketing Text Broadcast Prompt: Write high-conversion, character-limited promotional texts for mobile marketing.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Push Notification Copy Prompt: Draft snappy, punchy app notification hooks to drive daily active engagement.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Direct Mail Marketing Letter Prompt: Write a traditional physical sales letter or direct mail postcard copy.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Sales Objection Handling Script Prompt: Create a reference sheet of word-for-word rebuttals for common sales call objections.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Sales Discovery Call Agenda & Questions Prompt: Draft a structured questionnaire for qualifying inbound sales leads.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
B2B Proposal / Statement of Work (SOW) Prompt: Write the project scope, deliverables, and timeline text for a client proposal.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Client Offboarding & Handover Document Prompt: Draft a final delivery checklist and project summary text for completed client work.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Contractor / Freelancer Agreement Prompt: Outline standard expectations, deliverables, and payment terms for external talent.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Non-Disclosure Agreement (NDA) Summary Prompt: Draft plain-English explanations or clauses for protecting sensitive business data.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Board of Directors Meeting Agenda Prompt: Organize topics, voting items, and discussion points for formal corporate meetings.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Board Meeting Minutes Template Prompt: Create structured text templates to record official corporate decisions and meeting resolutions.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Shareholder Annual Report Letter Prompt: Write the CEO’s opening address summarizing yearly performance for company stakeholders.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Grant Application Narrative Prompt: Draft persuasive impact statements and project proposals for government or foundation grants.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
CSR (Corporate Social Responsibility) Statement Prompt: Articulate a company’s environmental, social, and charitable giving commitments.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Diversity, Equity, and Inclusion (DEI) Policy Prompt: Draft clear organizational commitments and hiring frameworks for workplace inclusivity.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Cybersecurity & Data Safety Policy Prompt: Write internal rules regarding password management, phishing prevention, and data handling.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Remote Work Policy Document Prompt: Draft guidelines covering home office stipends, core working hours, and communication standards.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Employee Exit Interview Questionnaire Prompt: Write structured, constructive questions for departing team members.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Employee Recognition / Shout-Out Announcement Prompt: Draft peer-to-peer appreciation templates for company Slack channels or meetings.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Team Retrospective Meeting Prompt: Write reflection questions (What went well? What didn't?) for sprint or quarterly reviews.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Job Offer Letter Prompt: Draft an exciting, professional employment offer including salary, benefits, and start date terms.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Rejection Letter for Applicants Prompt: Write a kind, empathetic automated message for unsuccessful job candidates.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Internal IT Helpdesk Request Macro Prompt: Draft troubleshooting instructions for common internal hardware or software tickets.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Supplier / Vendor Evaluation Criteria Prompt: Write a scoring rubric and assessment text for vetting new supply chain partners.
        id:     '',
        name:   '',
        label:  '',
        slug:   '',
        prompt: ''
Company Wiki / Knowledge Base Home Prompt: Write welcoming orientation text and directory structures for internal company intranets.`
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
