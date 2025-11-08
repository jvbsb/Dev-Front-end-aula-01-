// Variável global de escopo do módulo para o container principal.
// Inicializamos como null e buscamos APENAS quando for realmente necessário.
let appContainer = null; 

/**
 * Carrega o conteúdo de uma página e injeta no container principal.
 * @param {string} url O caminho do arquivo HTML (ex: 'projeto.html')
 */
export const loadPage = async (url) => {
    // Busca o container DENTRO da função se ele ainda não foi encontrado
    // Garantimos que a busca só ocorre após o DOM estar pronto.
    if (!appContainer) {
        appContainer = document.getElementById('app-container');
    }

    if (!appContainer) {
        console.error("ERRO CRÍTICO SPA: Elemento #app-container não encontrado no DOM.");
        return; // Sai da função se não houver container
    }
    
    try {
        // 1. Faz uma requisição assíncrona para buscar o conteúdo do HTML
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Erro ao carregar a página: ${response.status}`);
        }
        
        // 2. Transforma a resposta em texto (o HTML da página)
        const html = await response.text();
        
        // 3. Cria um elemento temporário para extrair apenas o conteúdo da tag <main>
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        
        // 4. Encontra o conteúdo dentro da tag <main id="app-container"> da página carregada
        //    Usamos o seletor mais genérico para evitar problemas de aninhamento.
        const newContent = tempDiv.querySelector('#app-container').innerHTML;

        // 5. INJETA: Substitui o conteúdo atual da <main> pelo novo conteúdo
        appContainer.innerHTML = newContent;

        // Opcional: Atualiza a URL no navegador sem recarregar
        history.pushState(null, '', url); 
        
    } catch (error) {
        console.error("Falha ao carregar o conteúdo SPA:", error);
        appContainer.innerHTML = `<div class="alert alert-danger">Não foi possível carregar o conteúdo.</div>`;
    }
};

/**
 * Configura os listeners de clique nos links de navegação.
 */
export const setupSPALinks = () => {
    // 1. Seleciona todos os links da navegação principal
    const navLinks = document.querySelectorAll('#main-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // CRÍTICO: Impede que o navegador faça o comportamento padrão (recarregar a página)
            event.preventDefault(); 
            
            const targetUrl = link.getAttribute('href');

            // 2. Usa a função loadPage para carregar o novo conteúdo
            loadPage(targetUrl);
        });
    });
};