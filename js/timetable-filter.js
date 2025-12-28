  function filterCourses() {
    const input = document.getElementById("courseSearch");
    const filter = input.value.toUpperCase();
    const table = document.querySelector(".timetable");
    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
      const cols = rows[i].getElementsByTagName("td");

      // Skip day header rows
      if (rows[i].classList.contains("day-row")) {
        rows[i].style.display = "";
        continue;
      }

      if (cols.length > 0) {
        const courseCode = cols[2].textContent || cols[2].innerText;

        if (courseCode.toUpperCase().indexOf(filter) > -1) {
          rows[i].style.display = "";
        } else {
          rows[i].style.display = "none";
        }
      }
    }
  }
