// =================================================================
// IMPORTS - Importa todas as funcionalidades dos outros módulos
// =================================================================
import { setupSPALinks } from './spa.js';
import { createProjectCard } from './templates.js';
import { setupFormValidation } from './validation.js';
import { setupDarkModeToggle } from './theme.js'; // Versão final com Dark Mode

// -----------------------------------------------------------------
// Lógica de Renderização de Conteúdo (Templates)
// -----------------------------------------------------------------

// Dados de exemplo para renderizar os projetos
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

// A função init DEVE ser única e chamar todas as funcionalidades
const init = () => {
    console.log("Aplicação Front-End SPA e Modular Iniciada!");
    
    setupSPALinks();
    renderProjects();
    setupFormValidation(); 
    setupDarkModeToggle(); 
};

// O Listener também deve ser único
document.addEventListener('DOMContentLoaded', init);