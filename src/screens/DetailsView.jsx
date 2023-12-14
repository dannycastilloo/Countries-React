export const DetailsView = () => {
  return (
    <div className="main">
      <h1>DetailsView</h1>
      <div className="detalles">
        <ol>
          <li>Objetivo:
            Crear una interfaz de usuario agradable y fácil de usar, que permita a los usuarios explorar la
            información sobre los diferentes continentes y países de manera intuitiva. Además, la interfaz
            deberá ser adaptable para ofrecer una experiencia de usuario óptima tanto en dispositivos de
            escritorio como en dispositivos móviles. </li>
          <li>Descripción:
            El objetivo del reto es desarrollar una aplicación web que muestre países utilizando el API
            GraphQL proporcionado.
            La aplicación debe cumplir con los siguientes requisitos:
          </li>
        </ol>
        <ul>
              <li>Utilizar un framework de JavaScript moderno para el desarrollo (se prefiere Vue 2
                Options API, pero también son válidos Vue Composition API, Vue 3 u otros frameworks
                como React, Angular, etc).</li>
              <li>Utilizar Apollo Client (o una biblioteca similar) para realizar las solicitudes GraphQL al
                API de países.</li>
              <li>Crear una interfaz responsive basada en los diseños adjuntos.</li>
              <li>Implementar una barra de búsqueda que permita buscar países por su nombre.</li>
              <li>Al hacer clic en un país, debe mostrarse información adicional como la capital, idioma,
                moneda y estados (si están disponibles).</li>
              <li>Cada país debe tener su propia imagen, que se obtendrá a través de otra API que
                proporcione imágenes (como Pixabay o Unsplash)</li>
            </ul>
      </div>
    </div>
  )
}
