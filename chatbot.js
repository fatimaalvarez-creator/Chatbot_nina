// chatbot.js
// Chatbot Nina con respuestas mejoradas para orientación sobre violencia de género

document.addEventListener("DOMContentLoaded", () => {
    const sendButton = document.getElementById("send-button");
    const chatInput = document.getElementById("chat-input");
    const chatMessages = document.getElementById("chat-messages");

    const disableUI = () => {
        chatInput.disabled = true;
        sendButton.disabled = true;
        sendButton.textContent = "Enviando...";
    };

    const enableUI = () => {
        chatInput.disabled = false;
        chatInput.focus();
        sendButton.disabled = chatInput.value.trim() === "";
        sendButton.textContent = "Enviar";
    };

    const addMessage = (message, role) => {
        const msg = document.createElement("div");
        msg.classList.add("chat-message", role);
        msg.innerHTML = message;
        chatMessages.appendChild(msg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    const getBotResponse = (message) => {
        const msg = message.toLowerCase();

        if (/hola|buenas|hi|hello/.test(msg)) {
            return "Hola 💜 ¿En qué puedo ayudarte hoy?";
        }

        if (/ayuda|help/.test(msg)) {
            return "Estoy aquí para ayudarte con información o recursos sobre violencia de género.";
        }

        if (/violencia|acoso|abuso/.test(msg)) {
            return "Lamento que estés pasando por eso. Podemos hablarlo o te puedo compartir un recurso profesional. ¿Te gustaría información legal, psicológica o números de emergencia?";
        }

        if (/recurso|dato|contacto/.test(msg)) {
            return `¿Qué tipo de recurso necesitas? Puedes escribir:
    - Legales
    - Psicológicos
    - Emergencia
    - Detectar violencia`;
        }

        if (/legal|ley|fiscalía|fiscalia/.test(msg)) {
            return `🧑‍⚖️ Recursos legales en Jalisco:
    - Ley General de Acceso de las Mujeres a una Vida Libre de Violencia: establece mecanismos para prevenir, sancionar y erradicar la violencia contra las mujeres.
    - Fiscalía Especializada: La Fiscalía del Estado de Jalisco cuenta con áreas específicas para atender delitos relacionados con la violencia de género.`;
        }

        if (/psicológico|emocional|terapia|apoyo|psicologico/.test(msg)) {
            return `🧠 Recursos psicológicos:
    - Jalisco: Instituto Jalisciense de las Mujeres (IJM) ofrece atención psicológica gratuita.
    - CDMX: La Línea Mujeres ofrece orientación psicológica las 24 horas.
    - Chihuahua: El Instituto Municipal de las Mujeres brinda apoyo al (614) 410 23 05.`;
        }

        if (/emergencia|urgente|número|llamar|numero/.test(msg)) {
            return `☎️ Números de emergencia:
    - Nacional:
      - 911: Atención inmediata en casos de emergencia.
      - 089: Denuncia anónima.
    - Jalisco: 333 658 3170 y 333 345 6166.
    - CDMX: 55 5658 1111.`;
        }

        if (/detecta|violentómetro|signos|señales|alerta/.test(msg)) {
            return `🚨 Cómo detectar la violencia de género:
        Algunas señales de alerta:
        - Control excesivo: revisa tus pertenencias, decide por ti.
        - Aislamiento: te aleja de tus seres queridos.
        - Desvalorización: insultos, humillaciones o minimizarte.
        - Amenazas: verbales o físicas.
      
        Te puede ayudar consultar el <strong>Violentómetro</strong>, que clasifica los niveles de violencia.
        <br>
        <img src="imagenes/violentometro.png" alt="Violentómetro" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 8px;" />`;
        }

        if (/gracias|thank you/.test(msg)) {
            return "De nada 💜 Estoy aquí para escucharte.";
        }

        return "Gracias por tu mensaje. Estoy aquí para apoyarte 💜 ¿Hay algo más en lo que pueda ayudarte?";
    };

    const sendMessage = () => {
        const msg = chatInput.value.trim();
        if (!msg) return;
        disableUI();
        addMessage(msg, "user");
        chatInput.value = "";

        setTimeout(() => {
            const reply = getBotResponse(msg);
            addMessage(reply, "assistant");
            enableUI();
        }, 800);
    };

    chatInput.addEventListener("input", () => {
        sendButton.disabled = chatInput.value.trim() === "";
    });

    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendMessage();
    });

    sendButton.addEventListener("click", sendMessage);

    setTimeout(() => {
        addMessage("¡Hola! Soy Nina. Estoy aquí para escucharte y ayudarte 💜", "assistant");
    }, 1000);
});
