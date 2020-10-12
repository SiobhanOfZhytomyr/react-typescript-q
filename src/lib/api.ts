import axios from "axios";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type Questions = Question[];
export const getQuizData = async (
  amount: number,
  difficulty: string
): Promise<Questions> => {
  const res = await axios.get(
    `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
  );
  return res.data.results;
};
