// =================================================================
// IMPORTS - Importa todas as funcionalidades dos outros módulos
// =================================================================
import { setupSPALinks } from './spa.js';
import { createProjectCard } from './templates.js';
import { setupFormValidation } from './validation.js'; // NOVO: Importa a validação

// -----------------------------------------------------------------
// Lógica de Renderização de Conteúdo (Templates)
// -----------------------------------------------------------------

// Dados de exemplo (você pode transferir isso para outro arquivo de "data" no futuro)
const projectsData = [
    {
        title: "Distribuição de Cestas",
        description: "Campanha mensal de entrega de alimentos a famílias carentes.",
        imageUrl: "img/entrega-cesta-basica.jpg",
        altText: "Voluntários entregando cestas",
        category: "Emergencial",
        link: "#projeto-1"
    },
    // Adicione mais dados aqui, se necessário...
];

const renderProjects = () => {
    // Busca o container onde os cards de projeto serão injetados (ID necessário no HTML)
    const container = document.getElementById('projects-container'); 
    
    if (container) {
        // Mapeia os dados, cria o HTML de cada card e injeta no container
        const cardsHTML = projectsData.map(project => createProjectCard(project)).join('');
        container.innerHTML = cardsHTML;
    }
};


// =================================================================
// INICIALIZAÇÃO DA APLICAÇÃO (O Ponto de Partida)
// =================================================================

constinit = () => {
    console.log("Aplicação Front-End SPA e Modular Iniciada!");
    
    // 1. ATIVA o comportamento de Single Page Application
    setupSPALinks();

    // 2. Renderiza o conteúdo (usando os templates)
    renderProjects();

    // 3. Configura a validação de formulário (NOVO REQUISITO)
    setupFormValidation(); 
};

// Garante que o JS só rode depois que todo o HTML for carregado
document.addEventListener('DOMContentLoaded', init);

// EM js/main.js
// ... outros imports ...
import { setupFormValidation } from './validation.js'; 
import { setupDarkModeToggle } from './theme.js'; // << ESTA LINHA DEVE SER IDÊNTICA AO NOME DA FUNÇÃO!

// ...

const init = () => {
    // ... outras chamadas ...
    setupDarkModeToggle(); // << E ESTA LINHA DEVE SER CHAMADA DENTRO DE init()
};