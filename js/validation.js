// Função auxiliar para mostrar a mensagem de erro
const displayError = (inputElement, message) => {
    // Adiciona classe de erro ao campo para estilização visual (ex: borda vermelha)
    inputElement.classList.add('input-error');
    
    // Cria um elemento para a mensagem e injeta após o campo
    let errorElement = inputElement.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains('error-message')) {
        errorElement = document.createElement('p');
        errorElement.classList.add('error-message');
        inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
    }
    errorElement.textContent = message;
};

// Função auxiliar para remover a mensagem de erro
const clearError = (inputElement) => {
    inputElement.classList.remove('input-error');
    const errorElement = inputElement.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.remove();
    }
};

// Função de Validação do E-mail (Verifica o formato básico)
const validateEmail = (email) => {
    // Regex simples para verificar a estrutura básica (texto@texto.dominio)
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

// Função de Validação do CPF (Verifica se tem 11 dígitos e um formato razoável)
const validateCPF = (cpf) => {
    // Remove caracteres não numéricos
    const cleanCpf = cpf.replace(/\D/g, '');
    // Verifica se tem exatamente 11 dígitos
    return cleanCpf.length === 11;
};


// Função principal de validação no momento do envio
const validateForm = (event) => {
    // CRÍTICO: Impede que o formulário seja enviado (recarregue a página)
    event.preventDefault(); 
    
    let formIsValid = true;
    const form = event.target;
    
    // CAMPOS PRINCIPAIS
    const emailInput = form.querySelector('#email');
    const cpfInput = form.querySelector('#cpf');
    const telefoneInput = form.querySelector('#telefone');
    
    // --- 1. Validação de E-mail ---
    clearError(emailInput);
    if (!validateEmail(emailInput.value)) {
        displayError(emailInput, 'Por favor, insira um e-mail válido.');
        formIsValid = false;
    }
    
    // --- 2. Validação de CPF ---
    clearError(cpfInput);
    if (!validateCPF(cpfInput.value)) {
        displayError(cpfInput, 'O CPF deve conter exatamente 11 dígitos numéricos.');
        formIsValid = false;
    }

    // --- 3. Validação de Telefone (Exemplo Simples) ---
    clearError(telefoneInput);
    if (telefoneInput.value.replace(/\D/g, '').length < 8) {
        displayError(telefoneInput, 'O telefone parece incompleto.');
        formIsValid = false;
    }

    // Se o formulário for válido, simula o envio ou exibe sucesso
    if (formIsValid) {
        alert('Formulário enviado com sucesso! (Simulação)');
        form.reset();
    }
};

/**
 * Ponto de entrada para configurar a validação.
 */
export const setupFormValidation = () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', validateForm);
    }
};