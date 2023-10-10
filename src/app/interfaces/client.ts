export interface Client {
}

export interface PromptRequest {
  title: string
  timeframe: string
  type: string
}

export interface PromptData extends PromptRequest{
  data: string
}
