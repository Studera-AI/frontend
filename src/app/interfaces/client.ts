export interface Client {}

export interface PromptRequest {
  title: string;
  timeframe: string;
  type: string;
}

export interface PromptData extends PromptRequest {
  data: string;
}

export interface Test {
  question: string;
  options: string[];
  answer: string;
}

export interface FeedbackData {
  email: string;
  feedback: string;
}
