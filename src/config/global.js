export default {
  global: {
    componenteFormativo: 'Condiciones para el crecimiento del material vegetal',
    descripcionCurso:
      'Este componente formativo brinda una serie de herramientas e insumos prácticos para la propagación del material vegetal, ayudando a reconocer la importancia de las características del ambiente para su desarrollo, así como la normatividad que conlleva a procesos que involucran la seguridad desde el ejercicio laboral al que corresponde este programa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Interpretación ambiental',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipo de infraestructura requerida para la propagación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Condiciones para la propagación vegetal ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Sistema de riego',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Crecimiento vegetal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Salud y seguridad ocupacional',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Interpretación ambiental',
      referencia:
        'Decreto 1843 de 1991. [Ministerio de Salud]. Por el cual se reglamentan parcialmente los títulos iii, v,vi, vii y xi de la ley 09 de 1979, sobre uso y manejo de plaguicidas. Agosto 26 de 1991.',
      tipo: 'Decreto.',
      link:
        'https://www.dssa.gov.co/index.php/descargas/1011-decreto-1843-1991/file#:~:text=Art%C3%ADculo%201o.,o%20causen%20deterioro%20del%20ambiente',
    },
    {
      tema: 'Salud y seguridad ocupacional',
      referencia:
        'Decreto 1443 de 2014. [Ministerio del Trabajo]. Por el cual se dictan disposiciones para la implementación del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST). Julio 31 de 2014.',
      tipo: 'Decreto.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/36482/decreto_1443_sgsss.pdf/ac41ab70-e369-9990-c6f4-1774e8d9a5fa',
    },
    {
      tema: 'Salud y seguridad ocupacional',
      referencia:
        'Resolución 0312 de 2019. [Ministerio del Trabajo]. Por la cual se definen los estándares mínimos del sistema de gestión de la seguridad y salud en el trabajo SG-SST. Febrero 13 del 2019.',
      tipo: 'Resolución.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/59995826/Resolucion+0312-2019-+Estandares+minimos+del+Sistema+de+la+Seguridad+y+Salud.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Morfología vegetal',
      significado:
        'hace referencia a la descripción de la forma física de las partes que conforman la planta, también incluye la descripción de niveles menores a los órganos vegetales como tejidos.',
    },
    {
      termino: 'Tejido vegetal',
      significado:
        'conjunto de células vegetales que tienen igual morfología y cumplen la misma función.',
    },
    {
      termino: 'Totipotencia',
      significado:
        'la habilidad de una célula, en un organismo multicelular para desarrollarse, independientemente, en un nuevo individuo completo.',
    },
    {
      termino: 'Espécimen',
      significado:
        'hace referencia a un individuo que representa una especie en particular.',
    },
    {
      termino: 'Plántula',
      significado:
        'espécimen vegetal que se encuentra en estadíos de desarrollo temprano.',
    },
    {
      termino: 'Clima',
      significado:
        'es el conjunto de variables atmosféricas en zonas geográficas determinadas.',
    },
    {
      termino: 'Trasplante',
      significado:
        'mover una plántula al campo o a contenedores de mayor tamaño.',
    },
    {
      termino: 'Sustrato',
      significado:
        'composición mineral u orgánica que brinda sostenimiento y nutrición a las plantas.',
    },
    {
      termino: 'Heterotróficas',
      significado:
        'acciones propias por desarrollar, en el estadío de desarrollo de la planta.',
    },
    {
      termino: 'Biofertilizantes',
      significado:
        'fertilizantes de composición biológica utilizados para nutrir las plantas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alcántara, C., Castilla, P. & Sánchez, M. (2017). Importancia de los cultivos vegetales <em>In vitro</em> para establecer bancos de germoplasma y su uso en investigaciones. <em>Biociencias</em>, 1, p.1-13.',
    },
    {
      referencia:
        'Courtis. A. (2014). <em>Guía de estudio "Crecimiento y desarrollo"</em>. Universidad Nacional del Nordeste.',
      link:
        'https://exa.unne.edu.ar/biologia/fisiologia.vegetal/Gu%C3%ADa%20de%20Estudio-Crecimientoydesarrollo.pdf',
    },
    {
      referencia:
        'Decreto 1843 de 1991. [Ministerio de Salud]. Por el cual se reglamentan parcialmente los títulos iii, v,vi, vii y xi de la ley 09 de 1979, sobre uso y manejo de plaguicidas. Agosto 26 de 1991.',
    },
    {
      referencia:
        'Fertilab. (2015). <em>Importancia del sistema radical de las plantas</em>. Fertilab.',
      link:
        'https://www.fertilab.com.mx/blog/40-importancia-del-sistema-radical-de-las-plantas/#notas',
    },
    {
      referencia:
        'Oficemen. (2017). <em>Guía de Buenas Prácticas de PRL en el Sector Cementero Español</em>. Oficemen.',
      link:
        'https://www.ficem.org/CIC-descargas/espania/Guia-completa-de-buenas-practicas-para-la-prevencion-de-riesgos-laborales-en-el-sector-cementero-espanol.pdf',
    },
    {
      referencia:
        'Pacheco R. & Barbona, E. (2017). <em>Manual de uso seguro y responsable de agroquímicos en cultivos frutihortícolas</em>. Instituto Nacional de Tecnología Agropecuaria.',
      link:
        'https://inta.gob.ar/sites/default/files/inta-manual-uso-agroquimicos-frutihorticola.pdf',
    },
    {
      referencia:
        'Rueda, C. N. (2019). <em>Actualización de los conceptos asociados con la regeneración celular en plantas</em> [Tesis de pregrado, Universidad de Santander]. Repositorio Institucional Universidad de Santander.',
      link: 'http://repositorio.udes.edu.co/handle/001/1063',
    },
    {
      referencia:
        'Universidad Nacional de Costa Rica. (2014).<em>Manual de plaguicidas de Centro América</em>. UNCR.',
      link:
        'http://www.plaguicidasdecentroamerica.una.ac.cr/index.php/caracteristicas-generales-y-agronomicas',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
