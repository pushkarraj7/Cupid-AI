import { Configuration, OpenAIApi } from "openai";
import { Request, Response } from 'express';


const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req: Request, res: Response) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const word = req.body.word || '';
  if (word.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid word",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(word),
      temperature: 0.6,
      max_tokens: 1690,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    
  }
}

function generatePrompt(word: string) {
  const capitalizedWord =
    word[0].toUpperCase() + word.slice(1).toLowerCase();
  return `generate a pick up line related to ${word}

word: Heart
Names: Are you a cardiologist? Because you just stole my heart with your smile.

word: Face
Names: Excuse me, do you have a map? I keep getting lost in your eyes.

word: Book
Names: Do you know what my favorite book is? It's the one with your phone number in it.

word: Coffee
Names: Excuse me, do you have a spare spoon? I need to stir my feelings for you into my coffee.

word: Stars
Names: Do you believe in fate? Because I think we were destined to fall in love under the stars.

word: Pizza
Names: Are you a pizza? Because you have all the toppings I've been searching for.

word: Music
Names: You must be a musician, because you've struck a chord in my heart.

word: Lips
Names: Excuse me, but I think you dropped something - my jaw. It's been on the floor ever since I saw your lips.

word: Flowers
Names: If love is a garden, you must be the most beautiful flower in it.

word: Ocean
Names: Do you know what the ocean and I have in common? We both feel a strong pull towards you.

word: Sun
Names: Are you the sun? Because you light up my world.

word: Coffee
Names: Are you a cup of coffee? Because I can't start my day without you.

word: Book
Names: Do you believe in love at first sight, or should I walk by again with another book?

word: Music
Names: Do you play the guitar? Because you're playing the strings of my heart with your beauty.

word: Beach
Names: Are you a mermaid? Because I'm drowning in your beauty and I can't get you out of my mind.

word: Pizza
Names: Do you have any Italian in you? No? Want some? How about we share a pizza and see where the night takes us?

word: Adventure
Names: Are you up for an adventure? Because I'd love to explore the world with you by my side.

word: Fitness
Names: You must be a gym membership because you've got my heart working overtime.

word: Art
Names: If beauty was a canvas, you'd be a masterpiece.

word: Wine
Names: If you were a bottle of wine, you'd be aged to perfection and worth every penny.

Word: ${capitalizedWord}
Names:`;
}
