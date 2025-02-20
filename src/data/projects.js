export const projects = [
  {
    id: "cutepixo",
    title: "Cutepixo",
    description: "A fun pixel art project with JavaScript.",
    details: `
        Cutepixo is a pixel art generator built with JavaScript.
        It allows users to create, save, and share pixel artworks.
        This project taught me state management and canvas rendering.
      `,
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://zihwoi.github.io/cutepixo/",
    ascii: `
        ⠀⠀⠀⣀⡀⠀
        ⠀⡔⠁⡸⠉⡢⠤⣀⡀⠀
        ⢠⡇⠀⠃⠠⠊⡀⠈⠙⠆⠀
        ⠸⡀⠀⢆⢀⠌⠠⠀⠁⡄⠀
        ⠀⠣⡀⠈⠊⠤⠔⠊⠁⠀
      `,
    category: "web",
    date: "2024-02"
  },
  {
    id: "fyuto-store",
    title: "Fyuto Store",
    description: "A grocery store catalog to handle orders with an admin backend.",
    details: `
        Making an e-commerce store with Django database management and Bootstrap UI.
        I learned how to integrate Stripe API and create smooth frontend interactions.
      `,
    technologies: ["Django", "Stripe", "Python"],
    link: "https://github.com/zihwoi/fyuto",
    ascii: `
      ┌──────────────────┐
      │  Project 2       │
      │  Fyuto Store     │
      └──────────────────┘
      `,
    category: "backend",
    date: "2024-01"
  },
  {
    id: "sanzen",
    title: "Sanzen",
    description: "A personal finance app with visualizations",
    details: `
           Sanzen lets users check their personal finance progress and calculate budgets and savings.
           This project uses Python libraries for its visuals.
        `,
    technologies: ["JavaScript", "React", "Python"],
    link: "https://zihwoi.github.io/sanzen/",
    ascii: `
          ⠀⠀⠀⣀⡀⠀
          ⠀⡔⠁⡸⠉⡢⠤⣀⡀⠀
          ⢠⡇⠀⠃⠠⠊⡀⠈⠙⠆⠀
          ⠸⡀⠀⢆⢀⠌⠠⠀⠁⡄⠀
          ⠀⠣⡀⠈⠊⠤⠔⠊⠁⠀
        `,
    category: "web",
    date: "2024-02"
  },
];

export const getProjectById = (id) => {
  return projects.find(project => project.id === id);
};
