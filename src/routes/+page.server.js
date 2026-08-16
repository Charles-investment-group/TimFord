import { GoogleGenAI } from "@google/genai";
import { GEMINI_API_KEY } from "$env/static/private";

export const prerender = false; 

// Initialize the vanilla SDK client
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function load() {
  return { aiResponse: null };
}

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const userPrompt = data.get("aiprompt");

    if (!userPrompt) {
      return { aiResponse: "Please enter a prompt." };
    }

    try {
      // ✅ Corrected method: Use ai.interactions.create
      const response = await ai.interactions.create({
        model: "gemini-3.6-flash",
        input: userPrompt,
      });

      return {
        // ✅ Corrected property: Extract text using .output_text
        aiResponse: response.output_text
      };
    } catch (error) {
      // Always leave this log visible in your terminal to catch exact API exceptions
      console.error("Gemini SDK Execution Failure:", error);
      
      return {
        aiResponse: `Failed to generate AI response. ${error.message || ""}`
      };
    }
  }
};

