export const createProjectCard = (project) => {
    
    return `
        <div class="card">
            <h3>${project.title}</h3>
            <img src="${project.imageUrl}" alt="${project.altText}">
            <p>${project.description}</p>
            <span class="badge badge-active">${project.category}</span>
            <a href="${project.link}" class="btn">Saiba Mais</a>
        </div>
    `;
};