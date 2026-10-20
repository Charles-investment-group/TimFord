import { GoogleGenAI } from "@google/genai";
import { env } from "$env/dynamic/private";
import { supabase } from "#lib/supabaseClient.js";


export const prerender = false; 

export async function load() {
  const { data } = await supabase.from("countries").select();
  
  return { aiResponse: null,
           countries: data ?? [],
 };
}


export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const userPrompt = data.get("aiprompt");

    if (!userPrompt) {
      return { aiResponse: "Please enter a prompt." };
    }

    if (!env.GEMINI_API_KEY) {
      return { aiResponse: "The AI workshop is not configured yet." };
    }

    try {
      const ai = new GoogleGenAI({ apiKey: env.GEMINI_API_KEY });
      const response = await ai.interactions.create({
        model: "gemini-2.5-flash",
        input: userPrompt,
      });

      return {
        aiResponse: response.output_text
      };
    } catch (error) {
      console.error("Gemini SDK Execution Failure:", error);
      
      return {
        aiResponse: `Failed to generate AI response. ${error.message || ""}`
      };
    } 
  }
 };
