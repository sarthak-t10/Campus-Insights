# 🤖 Campus Assistant Chatbot - Documentation

## Overview

The **Campus Assistant Chatbot** is an intelligent, interactive web-based chatbot embedded in the BMSCE website. It helps visitors find information about admissions, courses, placements, campus facilities, and more.

## Features

### ✨ Core Features
- **AI-Powered Responses**: Smart keyword matching and natural language understanding
- **24/7 Availability**: Always available to help visitors
- **Multi-Topic Support**: Covers admissions, courses, placements, campus life, contact info, and more
- **Quick Navigation**: Direct links to relevant pages
- **Typing Animation**: Professional typing indicator for bot responses
- **Chat History**: Maintains conversation history during session
- **Suggested Questions**: Quick shortcuts for common queries
- **Mobile Responsive**: Works perfectly on desktop, tablet, and mobile

### 🎨 UI/UX Features
- **Floating Widget**: Elegant bottom-right corner chat bubble
- **Smooth Animations**: Professional transitions and micro-interactions
- **Dark Theme Matched**: Seamlessly integrates with the website's premium dark aesthetic
- **Gold Accent Colors**: Uses the same gold color scheme (#c9a96e) as the main site
- **Responsive Design**: Adapts to all screen sizes
- **Accessibility**: Keyboard navigation and ARIA labels

## Architecture

### Files Structure

```
├── public/assets/
│   ├── css/
│   │   └── chatbot.css              # Chatbot styling
│   └── js/
│       ├── chatbot.js               # Main chatbot logic
│       └── chatbot-data.js           # Knowledge base & responses
└── [All HTML pages updated with chatbot links]
```

### Key Components

#### 1. **Chatbot CSS** (`chatbot.css`)
- **Widget Styling**: Floating button and window animations
- **Message Bubbles**: User and bot message styling
- **Input Area**: Text input with send button
- **Responsive Design**: Mobile-first approach
- **Animations**: Smooth transitions and typing indicators

#### 2. **Chatbot Logic** (`chatbot.js`)
- **UniversityChatbot Class**: Main chatbot controller
- **DOM Management**: Injects chatbot HTML dynamically
- **Event Handling**: Manages user interactions
- **Response Generation**: Intelligent query matching
- **Message History**: Tracks conversation

#### 3. **Knowledge Base** (`chatbot-data.js`)
Contains:
- **University Information**: Name, location, contact, etc.
- **Department Data**: All 8 engineering departments with details
- **Postgraduate Programs**: 8 M.Tech specializations
- **Admissions Information**: UG & PG eligibility and process
- **Placement Statistics**: Salary packages and recruiters
- **Campus Facilities**: Labs, sports, hostels, clubs
- **Campus Life**: Events, clubs, student activities
- **Research Information**: Research centers and areas
- **Response Templates**: Pre-written answers for common questions

## How It Works

### Conversation Flow

1. **User Opens Chat**: Clicks the floating chat icon in the bottom-right corner
2. **Welcome Message**: Bot greets the user with suggested questions
3. **User Sends Query**: User types a question and presses Enter or clicks Send
4. **Typing Indicator**: Bot shows "typing..." animation
5. **Response Generation**:
   - Bot analyzes keywords in the user's message
   - Matches against response templates
   - Generates contextual answer with links
6. **Display Response**: Message appears with animations
7. **Suggest Follow-ups**: User can ask more questions or click suggested topics

### Keyword Matching Algorithm

The chatbot uses **keyword-based matching** to understand queries:

```javascript
// Example: If user message contains "admissions"
// AND contains "ug" or "undergraduate"
// → Return UG admissions response
```

**Available Topics:**

| Keyword | Topic | Response Type |
|---------|-------|---------------|
| admissions, apply, ug | UG Admissions | Step-by-step guide |
| pg, mtech, postgraduate | PG Admissions | Eligibility & process |
| courses, programs, b.tech | UG Courses | List with links |
| m.tech, postgraduate | PG Courses | Program details |
| computer, mechanical, etc. | Specific Department | Department info |
| placements, salary, recruiters | Placements | Statistics & info |
| facilities, labs, hostels | Facilities | Campus infrastructure |
| campus life, events, clubs | Campus Life | Activities & events |
| research, innovation | Research | Research programs |
| contact, phone, email | Contact Info | Contact details |
| faq, help, questions | FAQ | Common questions |

## Chatbot Responses

### Response Types

1. **Text Only**: Simple text answers
2. **Formatted Text**: Uses HTML formatting for structure
3. **Lists**: Bulleted or numbered information
4. **Links**: Direct navigation links to relevant pages
5. **Suggested Buttons**: Quick shortcuts for common questions

### Example Responses

#### Query: "What are the admission requirements?"
```
Response:
📚 Undergraduate Admissions - B.Tech Programs

Eligibility: 12th pass (Science - PCM)
Entrance Exam: JEE Mains, Karnataka CET
...
[Link to /admissions]
```

#### Query: "Tell me about Computer Science"
```
Response:
📖 Computer Science & Engineering Department

B.Tech Program: B.Tech Computer Science & Engineering
M.Tech Program: M.Tech Computer Science (Software Engineering, Data Science)
...
[Link to Department Page]
```

## Integration

### How It's Injected Into Pages

1. **CSS Link**: Added to `<head>` of all HTML pages
   ```html
   <link rel="stylesheet" href="assets/css/chatbot.css" />
   ```

2. **JavaScript Files**: Added before closing `</body>` tag
   ```html
   <script src="assets/js/chatbot-data.js"></script>
   <script src="assets/js/chatbot.js"></script>
   ```

3. **Auto-Initialization**: Chatbot loads automatically on any page

### Pages with Chatbot

✅ index.html
✅ academics.html
✅ admissions.html
✅ about.html
✅ contact.html
✅ departments.html
✅ dept-civil.html, dept-mechanical.html, etc.
✅ placements.html
✅ facilities.html
✅ research.html
✅ campus-life.html
✅ alumni.html
✅ activities.html
✅ clubs.html
✅ innovation.html
✅ students.html

## Customization Guide

### Adding New Responses

Edit `chatbot-data.js`:

```javascript
const chatbotResponses = {
  // New response topic
  myTopic: {
    keywords: ["keyword1", "keyword2", "keyword3"],
    response: () => {
      return `✨ **My Topic**\nContent here...`;
    },
  },
};
```

Then add it to the `generateResponse()` method in `chatbot.js`:

```javascript
// Add this to generateResponse() method
if (this.matchKeywords(lowerMessage, chatbotResponses.myTopic.keywords)) {
  return chatbotResponses.myTopic.response();
}
```

### Changing Colors

Edit `chatbot.css`:

```css
.chatbot-toggle {
  background: linear-gradient(135deg, YOUR_COLOR 0%, LIGHTER_COLOR 100%);
}
```

### Modifying Suggested Questions

Edit the `suggestedQuestions` array in `chatbot.js`:

```javascript
this.suggestedQuestions = [
  "Your new question 1",
  "Your new question 2",
  "Your new question 3",
];
```

## API Integration (Ready for Future)

Currently, responses are **hardcoded**. To integrate with API:

1. Replace `generateResponse()` method to call API endpoint
2. Send user message to backend
3. Receive dynamic response
4. Display in chatbot

Example:
```javascript
async generateResponse(userMessage) {
  const response = await fetch('/api/chatbot', {
    method: 'POST',
    body: JSON.stringify({ message: userMessage })
  });
  const data = await response.json();
  return data.response;
}
```

## Performance

- **Zero Latency**: Instant responses from local data
- **Lightweight**: ~25KB CSS+JS combined
- **No External APIs**: Currently self-contained
- **Fast Load**: Minimal impact on page load time
- **Optimized**: Uses cached DOM elements

## Accessibility

- ✅ Keyboard navigation (Enter to send)
- ✅ ARIA labels on buttons
- ✅ High contrast text
- ✅ Readable font sizes
- ✅ Clear messaging

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers

## Future Enhancements

- [ ] Advanced NLP/AI integration
- [ ] Chat history database storage
- [ ] Admin dashboard for response management
- [ ] User feedback/ratings
- [ ] Multi-language support
- [ ] Sentiment analysis
- [ ] Department-specific bots
- [ ] Integration with CRM system

## Troubleshooting

### Chatbot not appearing?
- Check browser console for errors
- Verify chatbot.js and chatbot-data.js are loaded
- Clear browser cache and reload

### Responses not working?
- Check keyword matching in chatbot-data.js
- Verify response templates are properly formatted
- Test with exact keywords from the data

### Styling issues?
- Clear CSS cache
- Check if chatbot.css is linked properly
- Verify CSS variables match the theme

## Contact

For questions or support regarding the chatbot:
- 📧 **Email**: tech@bmsce.ac.in
- 📱 **Phone**: +91-080-4455-xxxx

---

**Version**: 1.0.0  
**Last Updated**: March 27, 2026  
**Status**: Production Ready
