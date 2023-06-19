import { Configuration, OpenAIApi } from "openai";

export async function OpenIa() {
  const configuration = new Configuration({
    apiKey: "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",
  });

  const openia = new OpenAIApi(configuration);

  return openia;
}
