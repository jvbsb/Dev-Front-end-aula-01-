/**
 * Alterna entre o modo claro e modo escuro acessível.
 */
export const setupDarkModeToggle = () => {
    // 1. Cria o botão de toggle dinamicamente
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Modo Escuro';
    toggleButton.classList.add('btn', 'theme-toggle'); 
    toggleButton.setAttribute('aria-label', 'Alternar tema de alto contraste');

    // 2. Injeta o botão no header para fácil acesso
    const header = document.querySelector('header');
    if (header) {
        // Injeta antes do menu, se houver
        header.insertBefore(toggleButton, header.querySelector('#main-nav') || null);
    }
    
    // 3. Adiciona o evento de clique
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Salva a preferência do usuário (opcional, mas profissional)
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        toggleButton.textContent = isDarkMode ? 'Modo Claro' : 'Modo Escuro';
    });
    
    // 4. Carrega a preferência salva ao iniciar
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = 'Modo Claro';
    }
};