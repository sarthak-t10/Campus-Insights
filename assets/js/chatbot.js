/* ============================================
   CHATBOT MAIN LOGIC & INITIALIZATION
   ============================================ */

class UniversityChatbot {
  constructor() {
    this.apiEndpoint = "/api/chatbot";
    this.isOpen = false;
    this.greetingShown = false;
    this.hasUserSentMessage = false;
    this.typingIndicatorId = "chatTypingIndicator";
    this.greetingMessage =
      "Hello! 👋 Welcome to the Campus Insights Assistant.\nI can help you with admissions, courses, placements, facilities, and campus information.\nWhat would you like to know?";
    this.predefinedResponses = [
      {
        keywords: ["how do i apply", "how to apply", "apply now", "application process", "admission process"],
        reply:
          "You can apply through the Admissions section of the portal. Navigate to Admissions -> Apply Now and fill the online form.",
      },
      {
        keywords: ["placement statistics", "placement stat", "placements", "recruiter", "recruiters"],
        reply: "Our placement statistics and recruiter list are available in the Placements section.",
      },
      {
        keywords: ["academic calendar", "calendar", "semester dates", "exam schedule"],
        reply: "You can find the academic calendar under the Academics section of the portal.",
      },
      {
        keywords: ["campus facilities", "facilities", "labs", "library", "hostel", "sports complex"],
        reply:
          "Our campus offers modern labs, libraries, hostels, sports complexes, and innovation centers.",
      },
      {
        keywords: ["student clubs", "clubs", "extracurricular", "activities"],
        reply: "Student clubs and extracurricular activities are listed in the Clubs section of the website.",
      },
    ];
    this.init();
  }

  init() {
    this.ensureMarkup();
    this.cacheDOM();

    if (!this.widget || !this.container || !this.messages || !this.input || !this.sendButton) {
      return;
    }

    this.bindEvents();
  }

  ensureMarkup() {
    if (document.getElementById("chatbotWidget")) {
      return;
    }

    const container = document.createElement("div");
    container.className = "chatbot-widget";
    container.id = "chatbotWidget";
    container.innerHTML = `
      <button class="chatbot-toggle" id="chatbotToggle" title="Open Virtual Assistant" aria-label="Open Virtual Assistant" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>

      <div id="chatbotContainer" class="chatbot-container chatbot-hidden" aria-hidden="true">
        <div class="chatbot-header">
          <div class="chatbot-header-text">
            <h3>Campus Insights Assistant</h3>
            <p>Ask anything about admissions, academics, facilities, or campus life.</p>
          </div>
          <button class="chatbot-header-close" id="chatbotClose" title="Minimize Assistant" aria-label="Close Assistant" type="button">x</button>
        </div>

        <div id="chatMessages" class="chatbot-messages" aria-live="polite"></div>

        <div class="chatbot-suggestions" id="chatbotSuggestions" aria-label="Quick suggestions">
          <button class="chatbot-suggestion-btn" type="button" data-query="How do I apply?">Admissions</button>
          <button class="chatbot-suggestion-btn" type="button" data-query="Placement statistics">Placements</button>
          <button class="chatbot-suggestion-btn" type="button" data-query="Academic calendar">Academics</button>
          <button class="chatbot-suggestion-btn" type="button" data-query="Campus facilities">Facilities</button>
        </div>

        <div class="chatInputArea">
          <input type="text" id="chatInput" placeholder="Ask something..." aria-label="Type your question" />
          <button id="sendMessage" type="button">Send</button>
        </div>
      </div>
    `;

    document.body.appendChild(container);
  }

  cacheDOM() {
    this.widget = document.getElementById("chatbotWidget");
    this.toggleButton = document.getElementById("chatbotToggle");
    this.container = document.getElementById("chatbotContainer");
    this.messages = document.getElementById("chatMessages");
    this.input = document.getElementById("chatInput");
    this.sendButton = document.getElementById("sendMessage");
    this.closeButton = document.getElementById("chatbotClose");
    this.openAssistantButton = document.getElementById("openAssistantBtn");
    this.statusText = document.getElementById("chatbotStatus");
    this.suggestionsPanel = document.getElementById("chatbotSuggestions");
    this.suggestionButtons = Array.from(document.querySelectorAll(".chatbot-suggestion-btn"));
  }

  bindEvents() {
    if (this.toggleButton) {
      this.toggleButton.addEventListener("click", () => this.toggleChat());
    }

    if (this.openAssistantButton) {
      this.openAssistantButton.addEventListener("click", () => this.openChat());
    }

    if (this.closeButton) {
      this.closeButton.addEventListener("click", () => this.closeChat());
    }

    this.sendButton.addEventListener("click", () => this.handleSend());
    this.input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        this.handleSend();
      }
    });

    this.suggestionButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const query = button.getAttribute("data-query");
        if (!query) return;
        this.input.value = query;
        this.handleSend();
      });
    });
  }

  toggleChat() {
    if (this.isOpen) {
      this.closeChat();
      return;
    }
    this.openChat();
  }

  openChat() {
    this.isOpen = true;
    this.container.style.display = "flex";
    this.container.classList.remove("chatbot-hidden");
    this.container.classList.add("chatbot-visible");
    this.container.setAttribute("aria-hidden", "false");

    if (this.toggleButton) {
      this.toggleButton.classList.add("active");
    }

    this.syncStatus("Assistant status: online");

    if (!this.greetingShown) {
      this.addBotMessage(this.greetingMessage);
      this.greetingShown = true;
    }

    this.input.focus();
  }

  closeChat() {
    this.isOpen = false;
    this.container.style.display = "none";
    this.container.classList.remove("chatbot-visible");
    this.container.classList.add("chatbot-hidden");
    this.container.setAttribute("aria-hidden", "true");

    if (this.toggleButton) {
      this.toggleButton.classList.remove("active");
    }

    this.syncStatus("Assistant status: ready");
  }

  addUserMessage(text) {
    this.addMessageBubble(text, "user");
  }

  addBotMessage(text) {
    this.addMessageBubble(text, "bot");
  }

  addMessageBubble(text, sender) {
    const row = document.createElement("div");
    row.className = `chatbot-message ${sender}`;

    const bubble = document.createElement("div");
    bubble.className = "chatbot-bubble";
    bubble.textContent = text;

    row.appendChild(bubble);
    this.messages.appendChild(row);
    this.scrollToBottom();
  }

  showTypingIndicator() {
    this.removeTypingIndicator();
    const row = document.createElement("div");
    row.className = "chatbot-message bot";
    row.id = this.typingIndicatorId;

    const bubble = document.createElement("div");
    bubble.className = "chatbot-bubble chatbot-typing";
    bubble.textContent = "Assistant is typing...";

    row.appendChild(bubble);
    this.messages.appendChild(row);
    this.scrollToBottom();
  }

  removeTypingIndicator() {
    const indicator = document.getElementById(this.typingIndicatorId);
    if (indicator) {
      indicator.remove();
    }
  }

  handleSend() {
    const userMessage = this.input.value.trim();
    if (!userMessage) {
      return;
    }

    if (!this.hasUserSentMessage) {
      this.hasUserSentMessage = true;
      this.hideSuggestions();
    }

    this.addUserMessage(userMessage);
    this.input.value = "";
    this.respondToMessage(userMessage);
  }

  hideSuggestions() {
    if (this.suggestionsPanel) {
      this.suggestionsPanel.classList.add("is-hidden");
    }
  }

  async respondToMessage(userMessage) {
    this.showTypingIndicator();

    try {
      const reply = await this.fetchApiReply(userMessage);
      this.removeTypingIndicator();
      this.addBotMessage(reply);
    } catch (error) {
      this.removeTypingIndicator();
      const predefinedReply = this.getPredefinedResponse(userMessage);
      if (predefinedReply) {
        this.addBotMessage(predefinedReply);
        return;
      }

      this.addBotMessage("I could not reach the assistant service right now. Please try again in a moment.");
    }
  }

  getPredefinedResponse(message) {
    const normalized = message.toLowerCase();
    const match = this.predefinedResponses.find((item) =>
      item.keywords.some((keyword) => normalized.includes(keyword))
    );
    return match ? match.reply : "";
  }

  async fetchApiReply(userMessage) {
    const response = await fetch(this.apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: userMessage,
      }),
    });

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();
    if (!data || typeof data.reply !== "string" || !data.reply.trim()) {
      throw new Error("Invalid API response");
    }

    return data.reply.trim();
  }

  syncStatus(statusMessage) {
    if (this.statusText) {
      this.statusText.textContent = statusMessage;
    }
  }

  scrollToBottom() {
    this.messages.scrollTop = this.messages.scrollHeight;
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    new UniversityChatbot();
  });
} else {
  new UniversityChatbot();
}
