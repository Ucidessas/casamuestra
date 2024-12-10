// script.js

// Ejemplo de propiedades (estas pueden ser obtenidas de un backend o base de datos)
const properties = [
  {
      id: 1,
      image: 'https://via.placeholder.com/300',
      title: 'Casa en la Zona Norte',
      description: 'Hermosa casa con 3 habitaciones y 2 baños.',
      price: '$120,000',
      location: 'Zona Norte',
  },
  {
      id: 2,
      image: 'https://via.placeholder.com/300',
      title: 'Apartamento en el Centro',
      description: 'Apartamento céntrico con acceso a todos los servicios.',
      price: '$85,000',
      location: 'Centro',
  },
];

// Función para mostrar las propiedades
function displayProperties(propertiesToShow) {
  const propertyList = document.getElementById('property-list');
  propertyList.innerHTML = ''; // Limpiar lista existente

  propertiesToShow.forEach(property => {
      const propertyCard = document.createElement('div');
      propertyCard.classList.add('property-card');

      propertyCard.innerHTML = `
          <img src="${property.image}" alt="${property.title}">
          <h3>${property.title}</h3>
          <p>${property.description}</p>
          <p><strong>Precio:</strong> ${property.price}</p>
          <button onclick="contactProperty(${property.id})">Contactar</button>
      `;

      propertyList.appendChild(propertyCard);
  });
}

// Función para filtrar propiedades por ubicación
function filterProperties() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const filtered = properties.filter(property =>
      property.location.toLowerCase().includes(searchInput)
  );
  displayProperties(filtered);
}

// Función para contactar una propiedad
function contactProperty(id) {
  const property = properties.find(p => p.id === id);
  alert(`Contactando al vendedor de: ${property.title}`);
}

// Evento de búsqueda
document.getElementById('searchButton').addEventListener('click', filterProperties);

// Mostrar todas las propiedades al cargar la página
displayProperties(properties);
