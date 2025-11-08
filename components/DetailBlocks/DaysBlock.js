export const DaysBlock = (courseDays = []) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayLetters = ["S", "M", "T", "W", "T", "F", "S"];

  const container = document.createElement("div");
  container.style.display = "flex";

  container.innerHTML = dayLetters
    .map((letter, index) => {
      const isActive = courseDays.includes(days[index]);
      return `
        <div style="
          border: 1px solid #d9d9d9;
          width: 18px;
          height: 18px;
          font-size: 10px;
          padding: 1px;
          display: flex;
          align-items: center;
          justify-content: center;
          ${isActive ? "background-color: #333333; color: white;" : ""}
        ">${letter}</div>
      `;
    })
    .join("");

  return container;
};
