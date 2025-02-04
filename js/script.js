document.addEventListener('DOMContentLoaded', function () {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');

    /* chatbotToggle.addEventListener('click', function () {
        chatbotWindow.classList.toggle('hidden');
        chatbotInput.focus();
    }); */

    /* chatbotClose.addEventListener('click', function () {
        chatbotWindow.classList.add('hidden');
    }); */

    /* chatbotInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && chatbotInput.value.trim() !== '') {
            const userMessage = chatbotInput.value.trim();
            addMessage(userMessage, 'user');
            chatbotInput.value = '';
            // Aquí puedes agregar la lógica para procesar la respuesta del chatbot
            setTimeout(() => {
                const botResponse = getBotResponse(userMessage);
                addMessage(botResponse, 'bot');
            }, 1000);
        }
    }); */

    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('p-2', 'rounded', 'mb-2', 'text-sm', 'max-w-xs');
        if (sender === 'user') {
            messageElement.classList.add('bg-[#c2d500]', 'text-[#060606]', 'self-end');
        } else {
            messageElement.classList.add('bg-gray-200', 'text-[#060606]', 'self-start');
        }
        messageElement.textContent = message;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function getBotResponse(userMessage) {
        // Lógica simple para respuestas del chatbot
        const responses = {
            'hola': '¡Hola! ¿Cómo puedo ayudarte con la inscripción?',
            'inscripción': 'Para inscribirte, por favor proporciona tu nombre completo y número de identificación.',
            'gracias': '¡De nada! Si tienes más preguntas, no dudes en preguntar.'
        };
        const lowerCaseMessage = userMessage.toLowerCase();
        return responses[lowerCaseMessage] || 'Lo siento, no entiendo tu pregunta. Por favor, intenta de nuevo.';
    }
});
