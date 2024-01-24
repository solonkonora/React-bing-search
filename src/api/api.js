const CHAT_URL = "https://yu1nbe3e3k.execute-api.us-east-1.amazonaws.com/prod/message"
  // "https://bingchat-chatgpt-4-api.p.rapidapi.com/bingchat" use this endpoint of you want to simulate error response;

const api = {
  async sendMessage(message) {
    const params = `?message=${message}`;
    const response = await fetch(`${CHAT_URL}${params}`);
    const jsonResponse = await response.json();

    if(response.status == '401'){
      throw new Error("Error while calling the api")
    }
    return jsonResponse.message;
  },
};

export default api;
