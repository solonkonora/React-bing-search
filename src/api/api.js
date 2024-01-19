// Function to perform a Bing search
const CHAT_URL = "https://yu1nbe3e3k.execute-api.us-east-1.amazonaws.com/prod/message"
const api = {
    async sendMessage(message) {
        const params = `?message=${message}`;
        const response = await fetch(`${CHAT_URL}${params}`);
        const jsonResponse = await response.json();
        return jsonResponse.data.response.message;
    },
};

export default api;
