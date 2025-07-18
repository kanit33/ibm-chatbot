# EcoBot – Responsible Consumption & Production Chatbot

## 🌱 Project Overview

**EcoBot** is an AI-powered chatbot designed to help users make sustainable purchasing decisions and promote responsible consumption and production (UN SDG 12). The chatbot provides information on eco-friendly products, offers tips for reducing waste, and guides users on recycling and repurposing items effectively. The project features a modern, responsive UI inspired by leading chat platforms.

---

## 🚀 Features

- **Conversational AI**: Ask questions about sustainability, recycling, eco-friendly products, and more.
- **Product Recommendations**: Get suggestions for sustainable alternatives.
- **Personalized Tips**: Receive actionable advice for reducing waste and making greener choices.
- **Modern UI/UX**: Clean, mobile-friendly chat interface with chat bubbles and quick suggestion buttons.
- **Secure API Integration**: API keys are securely managed using environment variables.

---

## 🛠️ Dependencies

- **Flask** – Web framework for Python backend
- **requests** – For making API calls to the Groq LLM service
- **python-dotenv** – Loads environment variables from a `.env` file
- **dotenv** – For managing sensitive configuration
- **HTML/CSS/JavaScript** – Frontend chat interface

---

## ⚙️ How It Works

1. **User Interaction**:  
   Users interact with EcoBot through a chat interface in their browser.

2. **Message Handling**:  
   User messages are sent to the Flask backend via a POST request.

3. **AI Response**:  
   The backend securely uses the Groq API key (stored in `.env`) to query the Groq LLM for a relevant, sustainability-focused response.

4. **Display**:  
   The AI's reply is sent back to the frontend and displayed as a chat bubble.

---

## 📦 Setup & Usage

1. **Clone the repository**  
   ```sh
   git clone <repo-url>
   cd ibm-chatbot
   ```

2. **Install dependencies**  
   ```sh
   pip install -r requirements.txt
   ```

3. **Create a `.env` file** in the project root:  
   ```
   GROQ_API_KEY=your_real_api_key_here
   ```

4. **Run the Flask app**  
   ```sh
   python app.py
   ```

5. **Open your browser** and go to `http://localhost:5000`

---

## 🔒 Security Note

- **API keys are never exposed to the frontend.**  
  All sensitive operations are handled server-side using environment variables.

---

## 📄 License

This project is for educational and demonstration purposes.

---

**EcoBot** – Helping you make greener choices, one chat at a
