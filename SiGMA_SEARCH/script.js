document.getElementById("search-form").addEventListener("submit", function(event) {
    var engine = document.getElementById("search-engine").value;
    var query = document.getElementsByName("q")[0].value;
    if (!query) {
      event.preventDefault();
      alert("Please enter a search query.");
    } else {
      this.action = engine + "?q=" + encodeURIComponent(query);
    }
  });
  