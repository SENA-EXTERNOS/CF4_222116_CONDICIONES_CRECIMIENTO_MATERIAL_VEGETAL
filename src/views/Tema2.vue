<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipo de infraestructura requerida para la propagación
    .row.justify-content-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .cajon.color-primario.p-4.mb-4
          p.mb-0 En el primer tema se aprendió sobre la interpretación ambiental; ahora, vamos a incursionar en el tipo de estructura requerida para la propagación del material vegetal.
        <hr style="border-color: #169788;">
        AcordionA(tipo="b" clase-tarjeta="BGR03")
          div(titulo="Laboratorio y entornos")
            p.mb-0 Las fases deben estar articuladas al ejercicio del laboratorio y al entorno natural o campo, además, las disposiciones deben tener sus propios controles al involucrar el inicio con la reproducción asexual del tejido celular seleccionado, la germinación, la separación de explantes y la siembra de vitroplantas.
          div(titulo="Condiciones de laboratorio")
            p.mb-0 Las fases dependen de condiciones de laboratorio como asepsia, manipulación especializada y espacios e instrumentación definida para tales cuidados. Otras fases, en las cuales se alternan las condiciones de las vitroplantas a la aclimatación, se encuentran en un espacio determinado, por ejemplo, invernaderos especiales para alcanzar un objetivo.
          div(titulo="Adaptación")
            p.mb-0 En el avance de las fases, el material vegetal alterna sus condiciones fisiológicas hasta lograr su adaptación al ambiente natural, expresando la genética que fue administrada desde su reproducción asexual para una producción de alta calidad.
          div(titulo="Agricultura bajo cubierta")
            p.mb-0 Al tener en cuenta la infraestructura requerida cuando se tecnifica un cultivo, es común realizar la agricultura bajo cubierta porque, de esta manera, se pueden aplicar diferentes técnicas para mejorar la productividad, para optimizar los recursos y para controlar las variables en beneficio de un mejor resultado.

          div(titulo="Tipos de cubiertas")
            p.mb-0 Según el tipo de cultivo y sus características, es común utilizar diferentes tipos de cubiertas que pueden determinar el control de las variables, las cuales se controlan completamente si son cerradas, o parcialmente cerradas, si son semicerradas o con flujos de aire, o admitiendo otro tipo de dinámicas.

      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img01.png")

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 Casa malla: concepto, tipos y características

    p En este tema sobre las estructuras, vamos a profundizar en una de ellas: la casa malla.

    .BGR04.p-5.mb-4(data-aos="zoom-in")
      SlyderB(:datos="datosSlyder")

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 Invernadero: concepto, tipos y características

    p Ya conocimos sobre la casa malla, ahora vamos a comprender y describir el invernadero.

    .BGIMG04.px-md-5.px-4.mb-4
      .row.justify-content-around.align-items-center.mb-5
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          LineaTiempoD.color-secundario
            p.text-small(numero="1" titulo="Tipo de estructuras") Los invernaderos son espacios muy utilizados en la agricultura; hacen referencia a una estructura de gran tamaño, la cual puede ser completamente cerrada o semicerrada y, por lo general, están hechas de plástico o cristal, evitando el paso directo de la radiación solar. De esta forma, los invernaderos pueden controlar algunas o todas las variables que afectan el cultivo, lo que depende de si la estructura es completa, o parcialmente cerrada.
            p.text-small(numero="2" titulo="Variación") Las formas de los invernaderos varían dependiendo del tipo de cultivo. Sin embargo, una de sus desventajas, es el aumento de las temperaturas en su interior, dado que dentro de ellos se produce un microclima que requiere ser controlado para evitar un impacto negativo en el cultivo.
            p.text-small(numero="3" titulo="Funcionalidad") El invernadero es una parte primordial del ejercicio de propagación de material vegetal, fundamental en las fases importantes del crecimiento de las especies micropropagadas, debido a que permite el control parcial o total, de las variables agroclimáticas. Esta estructura cuenta con posibilidades que determinan la fase en la cual se encuentra la plántula, y puede ser interpretada como un espacio de cuidados que requiere todo un protocolo de manejo, el cual evite la contaminación del material, además del aporte de suministro adecuado, en cuanto a su estadío de desarrollo.

            p.text-small(numero="4" titulo="Ventajas") Cuando se proyectan el crecimiento y el desarrollo de material propagado asexualmente, los invernaderos pueden ofrecer ventajas en el aumento del rendimiento de la especie, y disminución en los riesgos que pueden afectar la producción. Son más prácticos en el uso eficiente de los recursos como agua o algunos otros insumos.

        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img.w-75(src="@/assets/curso/tema2/img04.png")

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 Vivero: concepto, tipos y características

    p Habiendo aprendido sobre la casa malla y el invernadero, ahora vamos a conocer y describir el vivero.

    .BGIMG03.p-4.mb-4(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 Los viveros son espacios construidos con una serie de características especiales, que aportan a las plántulas el cuidado necesario en sus primeras etapas de crecimiento y desarrollo. Pueden estar conformados por varias secciones independientes que contemplan cada estadío de desarrollo de las plántulas. Por lo general, son construidos tipo invernadero en donde, dependiendo de las necesidades, serán cerrados con plásticos o tendrán polisombras como cubiertas.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img05.png")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 El vivero puede ser permanente, lo que implica una estructura resistente con espacios definidos para las actividades que se desempeñan en esta zona. Los viveros pueden tener un objetivo definido como un vivero forestal, ornamental, frutal o, si son de tipo comercial, propósitos diferentes.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img06.png")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 Los viveros deben contar con espacios independientes para la preparación del sustrato, para la siembra en almácigos y para la plantación, además de áreas definidas para máquinas y herramientas, oficinas y almacén. También se debe contar con experiencia en el manejo y aplicación de sustratos, riego, control de enfermedades, seguimiento y atención al cliente; por estas razones, se requiere tener el conocimiento de todas las especies que se encuentren en exhibición.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img07.png")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 Estas infraestructuras están diseñadas para el mantenimiento del material vegetal, donde se expone el material sembrado en condiciones que se muestran heterotróficas, las cuales requieren, todavía, el suministro controlado de insumos y de agua, y que se han adaptado al medio natural que permite el desarrollo y metabolismo propio de cada una de estas especies.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img08.png")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 En estos espacios, se podrán observar las etapas fenológicas de las plantas que fueron producto de técnicas de micropropagación, de las cuales, muchas de ellas, hacen parte de bancos de plantas madre, gracias a sus excelentes características, y a que pueden iniciar la aplicación de técnicas biotecnológicas.
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
          'Esta estructura, como su nombre lo indica, hace referencia a una estructura muy amplia y cubierta. La diferencia que la caracteriza es una cubierta provista de una malla, que puede ser de plástico o de alambre, cuyo calibre varía dependiendo de la necesidad del cultivo; algunas mallas, evitan el paso de moscas, de insectos o, incluso, de granizo, actuando como protectoras y, al mismo tiempo, las mallas dejan pasar totalmente la luz solar y otras variables de tipo climáticas, que no se pueden controlar.',
        imagen: require('@/assets/curso/tema2/img02.jpg'),
      },
      {
        texto:
          'El uso y la definición de estas casas malla, responde a una estrategia de variables agroambientales que se deben tener en cuenta para el desarrollo del cultivo. En el ambiente natural, las especies se ven expuestas a diferentes factores que pueden interrumpir su crecimiento, desarrollo y, que incluso, les afecta de tal forma, que se pone en riesgo su producción. Las alteraciones relacionadas con las variables agroclimáticas pueden cambiar las condiciones que requiere la especie y, con el uso de esta infraestructura, se puede disminuir el riesgo, en cuanto al impacto que puedan ocasionar el clima, otros seres vivos o algunas otras variables.',
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
