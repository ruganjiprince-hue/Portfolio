const projects = {
  "loan-ai": {
    title: "Fair & Explainable AI for Loan Approval",
    content: `
      <p>
        This project focuses on building a <strong>transparent, fair, and trustworthy
        machine learning system</strong> for loan approval decisions using real-world
        financial datasets.
      </p>

      <h4>Key Contributions</h4>
      <ul>
        <li>Designed a complete ML pipeline from raw data preprocessing to model evaluation</li>
        <li>Applied feature engineering and handled class imbalance using SMOTE</li>
        <li>Benchmarked multiple models to balance accuracy and fairness</li>
        <li>Integrated SHAP to explain individual predictions and global feature importance</li>
      </ul>

      <h4>Impact</h4>
      <p>
        This work demonstrates how AI systems can support financial institutions
        while minimizing bias and improving transparency, aligning with ethical AI
        and responsible decision-making principles.
      </p>
    `
  },

  "energy": {
    title: "Renewable Energy Grid Demand Analytics",
    content: `
      <p>
        This project analyzes electricity demand and renewable energy generation
        to understand <strong>grid behavior under increasing renewable penetration</strong>.
      </p>

      <h4>Key Contributions</h4>
      <ul>
        <li>Performed time-series analysis on real electricity demand datasets</li>
        <li>Identified seasonal and daily consumption patterns</li>
        <li>Evaluated grid stability under varying renewable energy contributions</li>
        <li>Applied forecasting techniques for short-term demand prediction</li>
      </ul>

      <h4>Impact</h4>
      <p>
        The results provide insights into energy planning, grid resilience,
        and decision-making for sustainable power systems.
      </p>
    `
  },

  "health": {
    title: "Global Health & Life Expectancy Prediction",
    content: `
      <p>
        This project applies machine learning to predict life expectancy
        using <strong>demographic, economic, and health indicators</strong>.
      </p>

      <h4>Key Contributions</h4>
      <ul>
        <li>Built predictive models using global health datasets</li>
        <li>Applied ensemble techniques to improve robustness</li>
        <li>Conducted interpretable feature importance analysis</li>
        <li>Evaluated model performance across regions</li>
      </ul>

      <h4>Impact</h4>
      <p>
        The project highlights how data-driven models can support
        public health planning and policy analysis.
      </p>
    `
  },

  "embedded": {
    title: "Embedded & Assistive Systems Projects",
    content: `
      <p>
        A collection of hands-on engineering projects integrating
        <strong>embedded systems, IoT, and mechanical design</strong>
        to solve real-world problems.
      </p>

      <h4>Key Contributions</h4>
      <ul>
        <li>Designed and tested upper and lower limb prosthetics</li>
        <li>Developed a smart irrigation system using sensors and microcontrollers</li>
        <li>Built an IoT-based exhaust gas detection system</li>
        <li>Implemented robotic arm control using embedded platforms</li>
      </ul>

      <h4>Impact</h4>
      <p>
        These projects demonstrate strong system-level thinking,
        hardware–software integration, and human-centered design.
      </p>
    `
  }
};

// Modal logic
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const project = projects[card.dataset.project];
    modalContent.innerHTML = `<h3>${project.title}</h3>${project.content}`;
    modal.classList.add("active");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("active");
});
