<script lang="ts">
  // Make a call to the chatbot in here
  import axios from "axios";

  async function getChatbotResponse(query) {
    try {
      const response = await axios.post("api/chatbot", { query: query });
      const data = response.data;
      // Handle the response data
      console.log(data);
      return data;
    } catch (error) {
      // Handle any errors
      console.error("Error:", error);
      throw error;
    }
  }
</script>

Chatbot below

{#await getChatbotResponse("Hello") then response}
  Response: {response}
{:catch error}
  <p style="color: red;">{error.message}</p>
{/await}
