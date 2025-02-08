document.getElementById('domiciliario').addEventListener('change', function () {
  const selected = this.value;
  const reportContainer = document.getElementById('report-container');
  reportContainer.innerHTML = `<p>Filtrando resultados para: ${selected}</p>`;
});
