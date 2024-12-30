// // Array de frases dinâmicas
// const phrases = [
//     "produtos criativos.",
//     "soluções inteligentes.",
//     "experiências únicas.",
//     "inovações tecnológicas."
// ];

// // Referências aos elementos
// const highlightElement = document.querySelector(".highlight");

// // Variáveis para o letreiro
// let currentIndex = 0;

// // Função para atualizar o texto dinâmico com animação
// function updateText() {
//     // Aplica a classe "hidden" para iniciar a animação de saída
//     highlightElement.classList.add("hidden");

//     // Aguarda a transição de saída (600ms) antes de alterar o texto
//     setTimeout(() => {
//         // Atualiza o texto
//         highlightElement.textContent = phrases[currentIndex];

//         // Atualiza o índice para a próxima frase
//         currentIndex = (currentIndex + 1) % phrases.length;

//         // Remove a classe "hidden" para iniciar a animação de entrada
//         highlightElement.classList.remove("hidden");
//     }, 600); // Tempo deve coincidir com o tempo da transição no CSS
// }

// // Intervalo para trocar as frases
// setInterval(updateText, 7000); // Troca a frase a cada 3 segundos

// Frases em português
const phrasesPT = [
    "produtos criativos.",
    "soluções inovadoras",
    "experiências únicas.",
    "futuros sustentáveis.",
    "foco em resultados.",
    "tecnologia para a vida.",
    "com qualidade e excelência.",
    "idéias que transformam.",
    "sonhos em realidade.",
    "soluções inteligentes.",
    "experiências únicas.",
    "inovações tecnológicas."
];

// Frases em inglês
const phrasesEN = [
    "creative products.",
    "innovative solutions",
    "unique experiences.",
    "sustainable futures.",
    "focus on results.",
    "technology for life.",
    "with quality and excellence.",
    "ideas that transform.",
    "dreams come true.",
    "smart solutions.",
    "unique experiences.",
    "technological innovations."
];

// Referências aos elementos
const highlightElement = document.querySelector(".highlight");
const languageSelect = document.getElementById("lang");

// Variáveis de estado
let currentIndex = 0; // Índice da frase atual
let currentLanguage = languageSelect.value; // Idioma inicial baseado no select

// Função para obter o array correto de frases
function getPhrases() {
    return currentLanguage === "br" ? phrasesPT : phrasesEN;
}

// Função para alternar o idioma
function handleLanguageChange() {
    currentLanguage = languageSelect.value; // Atualiza o idioma atual
    currentIndex = 0; // Reinicia o índice ao trocar o idioma
    updateText(); // Atualiza imediatamente para refletir o idioma
}

// Função para atualizar o texto dinâmico com animação
function updateText() {
    // Aplica a classe "hidden" para iniciar a animação de saída
    highlightElement.classList.add("hidden");

    // Aguarda a transição de saída antes de alterar o texto
    setTimeout(() => {
        // Atualiza o texto
        const phrases = getPhrases();
        highlightElement.textContent = phrases[currentIndex];

        // Atualiza o índice para a próxima frase
        currentIndex = (currentIndex + 1) % phrases.length;

        // Remove a classe "hidden" para iniciar a animação de entrada
        highlightElement.classList.remove("hidden");
    }, 600);
}

// Evento para trocar o idioma ao selecionar no `<select>`
languageSelect.addEventListener("change", handleLanguageChange);

// Intervalo para trocar as frases
setInterval(updateText, 9000);