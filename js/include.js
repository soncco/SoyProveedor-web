document.addEventListener("DOMContentLoaded", function () {
  var includes = document.querySelectorAll("[data-include]");
  includes.forEach(function (el) {
    var url = el.getAttribute("data-include");
    if (!url) return;
    fetch(url)
      .then(function (resp) {
        if (!resp.ok) throw new Error("No se pudo cargar: " + url);
        return resp.text();
      })
      .then(function (html) {
        el.innerHTML = html;
      })
      .catch(function (err) {
        console.warn(err);
      });
  });
});
