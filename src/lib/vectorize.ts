import { openai } from "./openai";
import { genAI } from "./gemini";

export const vectorize = async (input: string): Promise<number[]> => {
  const model = genAI.getGenerativeModel({
    model: "embedding-001",
  });

  const embeddingResponse = await model.embedContent(input);

  // const embeddingResponse = await openai.embeddings.create({
  //   input,
  //   model: "text-embedding-ada-002",
  // });

  const vector = embeddingResponse.embedding.values;

  return vector;
};
