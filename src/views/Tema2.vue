<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipo de infraestructura requerida para la propagación

    p En el primer apartado se presentó un contexto de la interpretación ambiental, en este, se reconocerá el tipo de estructura requerida para la propagación del material vegetal.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Diferentes infraestructuras son requeridas para el desarrollo de la propagación del material vegetal y, a lo largo de este proceso, el material vegetal pasa por diferentes espacios y fases, los cuales están determinados por cuidados especiales que se relacionan con el crecimiento y desarrollo del material.
        <hr style="border-color: #169788;">
        AcordionA(tipo="b" clase-tarjeta="BGR03")
          div(titulo="Laboratorio y entornos")
            p.mb-0 Las fases deben estar articuladas al ejercicio del laboratorio y al entorno natural o campo, además, las disposiciones deben tener sus propios controles al involucrar el inicio con la reproducción asexual del tejido celular seleccionado, la germinación, la separación de explantes y la siembra de vitroplantas. 
          div(titulo="Condiciones de laboratorio")
            p.mb-0 Las fases dependen de condiciones de laboratorio como asepsia, manipulación especializada y espacios e instrumentación definida para tales cuidados. Otras fases, en las cuales se alternan las condiciones de las vitroplantas a la aclimatación, se encuentran en un espacio determinado, por ejemplo, invernaderos especiales para alcanzar un objetivo.
          div(titulo="Adaptación")
            p.mb-0 En el avance de las fases, el material vegetal alterna sus condiciones fisiológicas hasta lograr su adaptación al ambiente natural, expresando la genética que fue administrada desde su reproducción asexual para una producción de alta calidad.
          div(titulo="Agricultura bajo cubierta")
            p.mb-0 Teniendo en cuenta la infraestructura requerida cuando se tecnifica un cultivo, es común realizar la agricultura bajo cubierta, ya que, de esta manera, se pueden aplicar diferentes técnicas para mejorar la productividad, para optimizar recursos y para controlar variables en beneficio de un mejor resultado.
          div(titulo="Tipos de cubiertas")
            p.mb-0 Dependiendo del tipo de cultivo y sus características, es usual el uso de diferentes tipos de cubiertas que pueden determinar el control de las variables. Estas se controlan completamente si son cerradas, o, parcialmente, si son semi cerradas o con flujos de aire, acogiéndose a otras dinámicas.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img01.png")
    
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Casa malla: concepto, tipos y características
    
    p Para el reconocimiento de estructuras se presenta, a continuación, la casa malla.

    .BGR04.p-5.mb-4(data-aos="zoom-in")
      SlyderB(:datos="datosSlyder")

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Invernadero: concepto, tipos y características
    
    p Una vez presentada la casa malla, ahora se presenta y se describe el invernadero.
    p #[em Tipos de estructuras y formas utilizadas como invernaderos]

    .BGIMG04.px-md-5.px-4.mb-4
      .row.justify-content-around.align-items-center.mb-5
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          LineaTiempoD.color-secundario
            p.text-small(numero="1" titulo="Tipo de estructuras") Los invernaderos son espacios muy utilizados en agricultura, hacen referencia a una estructura de gran tamaño, la cual puede ser cerrada completamente o semicerrada y, por lo general, están hechos de plástico o cristal, evitando el paso directo de la radiación solar. Así, los invernaderos pueden controlar algunas o todas las variables que requiere el cultivo, dependiendo si está completa o parcialmente cerrado.
            p.text-small(numero="2" titulo="Variación") Las formas de los invernaderos varían dependiendo del tipo de cultivo. Sin embargo, una de sus desventajas, es el aumento de las temperaturas en su interior, dado que dentro de ellos se produce un microclima que requiere ser controlado para evitar un impacto negativo en el cultivo.
            p.text-small(numero="3" titulo="Funcionalidad") Los invernaderos son parte primordial del ejercicio de propagación de material vegetal, fundamentales en fases importantes del crecimiento de las especies micropropagadas, ya que permiten el control parcial o total de las variables agroclimáticas. Esta adecuación cuenta con posibilidades que determinan la fase en la cual se encuentra la plantulación, donde, a simple vista, puede ser interpretado como un espacio de cuidados y requiere, así mismo, todo un protocolo de manejo que evite la contaminación del material, además del suministro adecuado en cuanto a su estadio de desarrollo.
            p.text-small(numero="4" titulo="Ventajas") Cuando se proyecta el crecimiento y desarrollo de material propagado asexualmente, los invernaderos pueden ofrecer ventajas en el aumento del rendimiento de la especie y disminución en los riesgos que pueden afectar la producción. Así mismo, es más práctico en el uso eficiente de los recursos como agua u otros insumos.
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img.w-75(src="@/assets/curso/tema2/img04.png")

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Vivero: concepto, tipos y características

    p Ya se describieron la casa malla y el invernadero, ahora, conozcamos el vivero.

    .BGIMG03.p-4.mb-4(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 Los viveros son espacios construidos con una serie de características especiales, para darle a las plántulas el cuidado necesario en sus primeras etapas de crecimiento y desarrollo. Pueden estar conformados por varias secciones independientes que contemplan cada estadio de desarrollo de las plántulas. Por lo general, son tipo invernadero en donde, dependiendo de las necesidades, serán cerrados con plásticos o usarán polisombras como cubiertas. 
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img05.png")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 Este lugar puede ser permanente, lo cual implica una estructura resistente con espacios definidos para las actividades que se desempeñan allí. Los viveros pueden tener una razón definida como vivero forestal, ornamental, frutal, entre otros, si son de tipo comercial. 
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img06.png")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 Los viveros deben contar con espacios independientes para la preparación de sustrato, para la siembra en almácigos y para la plantación, además de áreas definidas para máquinas y herramientas, oficinas y almacén. De esta manera, es necesario la aplicación de prácticas con experticia en sustratos, riego, control de enfermedades, seguimiento y atención al cliente, el cual requiere del conocimiento apropiado de todas las especies que se encuentren en muestra o vitrina. 
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img07.png")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 Estas infraestructuras están diseñadas para el mantenimiento del material vegetal, son una vitrina del material propagado en condiciones que se muestran heterotróficas, las cuales requieren, todavía, el suministro controlado de insumos y de agua, pero adaptado al medio natural que permita el desarrollo y metabolismo propio de cada especie. 
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img08.png")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 En estos espacios se podrá observar, incluso, las etapas fenológicas de las plantas que fueron producto de técnicas de micropropagación, de las cuales, muchas de ellas, hacen parte de bancos de plantas madre gracias a sus excelentes características y a que pueden iniciar, a partir de ellas, la aplicación de técnicas biotecnológicas. 
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img09.png")



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        texto:
          'Estas estructuras, como su nombre lo indica, hacen referencia a una estructura de gran amplitud. La característica diferencial que la clasifica es la cubierta provista de una malla, que puede ser de plástico o de alambre, cuyo calibre varía dependiendo de la necesidad del cultivo, algunas, por ejemplo, evitarán el paso de moscas, de insectos o, incluso, de granizo. Todo esto, en aras de la protección, aunque, a su vez, las mallas dejan pasar totalmente la luz solar y otras variables, de tipo climáticas, que no se pueden controlar.',
        imagen: require('@/assets/curso/tema2/img02.jpg'),
      },
      {
        texto:
          'El uso y la definición de estas casas, responde a una estrategia de variables agroambientales que se debe tener en cuenta en el desarrollo de dicho ejercicio. En el ambiente natural, las especies se ven expuestas a diferentes factores que pueden interrumpir su crecimiento y desarrollo e, incluso, que le afecta de tal forma que se pone en riesgo su producción. Las alteraciones relacionadas con las variables agroclimáticas pueden cambiar las condiciones que requiere la especie y, a través de esta infraestructura, se puede disminuir el riesgo, en cuanto al impacto, que pueda ocasionar el clima, otros seres vivos u otras variables.',
        imagen: require('@/assets/curso/tema2/img03.jpg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
