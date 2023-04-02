fetch("./data.json")
  .then((result) => result.json())
  .then((data) => {
    data.forEach((a) => {
      let category = a["category"];
      let score = a["score"];
      let icon = a["icon"];

      let temp_html = (
        <div class="${category}">
          <div class="subject">${category}</div>
          <div class="score">${score}</div>
        </div>
      );

      document.querySelector(".summary_board").append(temp_html);
    });
  });
