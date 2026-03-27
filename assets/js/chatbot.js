/* ============================================
   CHATBOT MAIN LOGIC & INITIALIZATION
   ============================================ */

class UniversityChatbot {
  constructor() {
    this.isOpen = false;
    this.messageHistory = [];
    this.suggestedQuestions = [
      "What are the admission requirements?",
      "Tell me about postgraduate programs",
      "What are the placements statistics?",
      "Where can I find campus facilities?",
    ];
    this.init();
  }

  init() {
    // Inject chatbot HTML
    this.injectChatbot();

    // Cache DOM elements
    this.cachedDOM();

    // Bind events
    this.bindEvents();

    // Show welcome message
    this.showWelcomeMessage();
  }

  injectChatbot() {
    const chatbotHTML = `
      <button class="chatbot-toggle" id="chatbot-toggle" title="Open Chat Assistant">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>

      <div class="chatbot-window" id="chatbot-window">
        <div class="chatbot-header">
          <div class="chatbot-header-content">
            <h3>Campus Assistant</h3>
            <button class="chatbot-header-close" id="chatbot-close" title="Close Chat">×</button>
          </div>
        </div>

        <div class="chatbot-messages" id="chatbot-messages"></div>

        <div class="chatbot-input-area">
          <textarea 
            class="chatbot-input" 
            id="chatbot-input" 
            placeholder="Ask me anything..." 
            rows="1"
          ></textarea>
          <button class="chatbot-send-btn" id="chatbot-send" title="Send Message">➤</button>
        </div>
      </div>
    `;

    // Create container
    const container = document.createElement("div");
    container.className = "chatbot-widget";
    container.innerHTML = chatbotHTML;
    document.body.appendChild(container);
  }

  cachedDOM() {
    this.toggle = document.getElementById("chatbot-toggle");
    this.window = document.getElementById("chatbot-window");
    this.closeBtn = document.getElementById("chatbot-close");
    this.messagesContainer = document.getElementById("chatbot-messages");
    this.input = document.getElementById("chatbot-input");
    this.sendBtn = document.getElementById("chatbot-send");
  }

  bindEvents() {
    this.toggle.addEventListener("click", () => this.toggleChat());
    this.closeBtn.addEventListener("click", () => this.closeChat());
    this.sendBtn.addEventListener("click", () => this.sendMessage());
    this.input.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
    });

    // Auto-resize textarea
    this.input.addEventListener("input", () => this.resizeTextarea());
  }

  toggleChat() {
    this.isOpen ? this.closeChat() : this.openChat();
  }

  openChat() {
    this.isOpen = true;
    this.window.classList.add("active");
    this.toggle.classList.add("active");
    this.input.focus();
  }

  closeChat() {
    this.isOpen = false;
    this.window.classList.remove("active");
    this.toggle.classList.remove("active");
  }

  showWelcomeMessage() {
    setTimeout(() => {
      this.addMessage(
        "Hello! 👋 I'm the Campus Assistant. How can I help you explore our university today?",
        "bot"
      );

      // Show suggested questions
      setTimeout(() => this.showSuggestedQuestions(), 800);
    }, 500);
  }

  showSuggestedQuestions() {
    const container = document.createElement("div");
    container.className = "chatbot-message bot";
    container.innerHTML = `
      <div class="message-content">
        <p class="suggested-label">Suggested Questions:</p>
        <div class="suggested-questions">
          ${this.suggestedQuestions
            .map(
              (q) =>
                `<button class="suggested-btn" data-question="${q}">${q}</button>`
            )
            .join("")}
        </div>
      </div>
    `;

    this.messagesContainer.appendChild(container);

    // Bind suggested question buttons
    container.querySelectorAll(".suggested-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.autoSendQuestion(btn.getAttribute("data-question"));
      });
    });

    this.scrollToBottom();
  }

  autoSendQuestion(question) {
    // Clear suggested questions
    const suggestedSection = this.messagesContainer.querySelector(".suggested-questions")
      ?.parentElement?.parentElement;
    if (suggestedSection) suggestedSection.remove();

    this.input.value = question;
    this.sendMessage();
  }

  addMessage(text, sender = "bot", isHTML = false) {
    const messageEl = document.createElement("div");
    messageEl.className = `chatbot-message ${sender}`;

    const content = document.createElement("div");
    content.className = "message-content";

    if (isHTML) {
      content.innerHTML = text;
    } else {
      content.textContent = text;
    }

    messageEl.appendChild(content);
    this.messagesContainer.appendChild(messageEl);

    this.messageHistory.push({ text, sender, timestamp: new Date() });
    this.scrollToBottom();
  }

  showTypingIndicator() {
    const typingEl = document.createElement("div");
    typingEl.className = "chatbot-message bot";
    typingEl.id = "typing-indicator";
    typingEl.innerHTML = `
      <div class="typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    `;
    this.messagesContainer.appendChild(typingEl);
    this.scrollToBottom();
  }

  removeTypingIndicator() {
    const typing = document.getElementById("typing-indicator");
    if (typing) typing.remove();
  }

  sendMessage() {
    const message = this.input.value.trim();

    if (!message) return;

    // Add user message
    this.addMessage(message, "user");
    this.input.value = "";
    this.input.style.height = "auto";

    // Show typing indicator
    this.showTypingIndicator();

    // Generate bot response
    setTimeout(() => {
      this.removeTypingIndicator();
      const response = this.generateResponse(message);
      this.addMessage(response, "bot", true);
    }, 800);
  }

  generateResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    // Check for greeting
    if (this.matchKeywords(lowerMessage, chatbotResponses.greeting.keywords)) {
      return chatbotResponses.greeting.response;
    }

    // Check for farewell
    if (this.matchKeywords(lowerMessage, chatbotResponses.farewell.keywords)) {
      return chatbotResponses.farewell.response;
    }

    // Check for UG admissions
    if (this.matchKeywords(lowerMessage, chatbotResponses.admissionsUG.keywords)) {
      return chatbotResponses.admissionsUG.response();
    }

    // Check for PG admissions
    if (this.matchKeywords(lowerMessage, chatbotResponses.admissionsPG.keywords)) {
      return chatbotResponses.admissionsPG.response();
    }

    // Check for UG courses
    if (this.matchKeywords(lowerMessage, chatbotResponses.ugCourses.keywords)) {
      return chatbotResponses.ugCourses.response();
    }

    // Check for PG courses
    if (this.matchKeywords(lowerMessage, chatbotResponses.pgCourses.keywords)) {
      return chatbotResponses.pgCourses.response();
    }

    // Check for specific department
    for (const keyword of [
      "computer",
      "mechanical",
      "electrical",
      "electronics",
      "civil",
      "chemical",
      "aerospace",
      "ai",
      "ml",
    ]) {
      if (lowerMessage.includes(keyword)) {
        const response = chatbotResponses.specificDepartment.response(keyword);
        if (response) return response;
      }
    }

    // Check for placements
    if (this.matchKeywords(lowerMessage, chatbotResponses.placements.keywords)) {
      return chatbotResponses.placements.response();
    }

    // Check for facilities
    if (this.matchKeywords(lowerMessage, chatbotResponses.facilities.keywords)) {
      return chatbotResponses.facilities.response();
    }

    // Check for campus life
    if (this.matchKeywords(lowerMessage, chatbotResponses.campusLife.keywords)) {
      return chatbotResponses.campusLife.response();
    }

    // Check for departments
    if (this.matchKeywords(lowerMessage, chatbotResponses.departments.keywords)) {
      return chatbotResponses.departments.response();
    }

    // Check for research
    if (this.matchKeywords(lowerMessage, chatbotResponses.research.keywords)) {
      return chatbotResponses.research.response();
    }

    // Check for contact
    if (this.matchKeywords(lowerMessage, chatbotResponses.contact.keywords)) {
      return chatbotResponses.contact.response();
    }

    // Check for FAQ
    if (this.matchKeywords(lowerMessage, chatbotResponses.faq.keywords)) {
      return chatbotResponses.faq.response();
    }

    // Default response
    return chatbotResponses.default.response;
  }

  matchKeywords(message, keywords) {
    return keywords.some((keyword) => message.includes(keyword.toLowerCase()));
  }

  scrollToBottom() {
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  resizeTextarea() {
    this.input.style.height = "auto";
    this.input.style.height = Math.min(this.input.scrollHeight, 100) + "px";
  }
}

// Initialize chatbot when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    new UniversityChatbot();
  });
} else {
  new UniversityChatbot();
}
