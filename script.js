// RENDERRITZAR EL MAPA SVG AMB MAPA2.PNG DE FONS
function renderMap() {
  const svg = document.getElementById('catalonia-svg');
  svg.innerHTML = ''; // netejar

  // 1. Carregar la imatge mapa2.png com a fons dins del propi SVG
  const imgBackground = document.createElementNS("http://www.w3.org/2000/svg", "image");
  imgBackground.setAttribute("href", "mapa2.png");
  imgBackground.setAttribute("x", "0");
  imgBackground.setAttribute("y", "0");
  imgBackground.setAttribute("width", "1000");
  imgBackground.setAttribute("height", "850");
  imgBackground.setAttribute("preserveAspectRatio", "xMidYMid meet");
  svg.appendChild(imgBackground);

  // 2. Dibuixar les zones d'interacció sobre la imatge mapa2.png
  comarquesData.forEach(c => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", c.d);
    path.setAttribute("id", `map-path-${c.id}`);
    path.setAttribute("class", "comarca-path");
    path.setAttribute("data-id", c.id);
    path.setAttribute("data-name", c.name);

    path.addEventListener('click', () => onComarcaClick(c));

    path.addEventListener('mousemove', (e) => {
      const tooltip = document.getElementById('tooltip');
      tooltip.style.display = 'block';
      tooltip.innerText = c.name;
      const rect = document.getElementById('map-container').getBoundingClientRect();
      tooltip.style.left = (e.clientX - rect.left + 10) + 'px';
      tooltip.style.top = (e.clientY - rect.top - 25) + 'px';
    });

    path.addEventListener('mouseleave', () => {
      document.getElementById('tooltip').style.display = 'none';
    });

    svg.appendChild(path);
  });
}
