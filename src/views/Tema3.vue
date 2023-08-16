<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Condiciones para la propagación vegetal

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        .cajon.color-acento-botones.p-4
          p.mb-0 Luego de conocer los elementos destacados de la interpretación ambiental y el tipo de estructuras requeridas para la propagación del material, es necesario tener claridad en que, para el desarrollo  #[em in vitro], se debe articular la compilación del ambiente físico, el ambiente químico y el material biológico que será micropropagado.

      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img01.png")

    .BGIMG04.p-md-.px-4(data-aos="zoom-in")
      p.mb-5 En cada una de las fases que acompañan el desarrollo de la micropropagación a través de las técnicas #[em in vitro], es necesario la interpretación de los siguientes aspectos.
      SlyderF.mb-5(columnas="col-xl-4 col-md-6")
        .BGIMG05.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema3/img02.png' alt='AvatarTop')
          p.text-center.text-white Ambiente natural con respecto a las variables agroclimáticas.
        .BGIMG05.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema3/img03.png' alt='AvatarTop')
          p.text-center.text-white Lectura de componentes químicos, por ejemplo, la composición del medio de cultivo.
        .BGIMG05.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema3/img04.png' alt='AvatarTop')
          p.text-center.text-white Ambiente físico altamente manipulado que, en las condiciones iniciales, puede variar desde un recipiente de vidrio hasta una cámara de humedad.
        .BGIMG05.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema3/img05.png' alt='AvatarTop')
          p.text-center.text-white Las características genéticas de la especie que se utiliza.


    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 Preparación y desinfección de sustrato

    p Para iniciar este tema, se describen algunos elementos necesarios para la preparación y desinfección del sustrato.

    .row.justify-content-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema3/img06.png")
      .col-lg-7(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="BGR05")
          div(titulo="Importancia de la preparación y desinfección de sustrato")
            p.mb-0 La realización de este proceso es de gran importancia, porque el sustrato es la estructura a través de la cual se transmiten a las plantas, los nutrientes y el agua. Un sustrato limpio estará desprovisto de hongos, bacterias, nematodos, inclusive contaminantes residuales de otros procesos; un sustrato inerte de todas las impurezas mencionadas, podrá retener, dadas sus características, una mayor cantidad de agua y una mejor administración de los nutrientes.
          div(titulo="Condiciones iniciales para la preparación del sustrato ")
            p.mb-0 La preparación del sustrato requiere un lugar especial tanto para la germinación como para el trasplante. Los diferentes tipos de sustratos utilizados deben estar bajo inspección de técnicas apropiadas en su desinfección, ya sea de tipo físico o químico, y en la proporción adecuada de sus cantidades y mezclas. El sustrato no solo brinda soporte al material vegetal, también es conductor de nutrientes a través de las raíces, haciéndolo parte fundamental en la nutrición vegetal.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 Tipo de siembra agrupada en bandejas

    .bloque-texto-g.color-primario.p-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img07.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La bandeja de germinación es una condición para la correcta propagación vegetal. Es vital reconocer que los especímenes, en buen desarrollo, se dispondrán para el enraizamiento y podrán ubicarse de manera agrupada, con una cantidad elevada de individuos vegetales, o también, ser sembrados en bandejas individuales, donde cada individuo se localiza de una forma particular. Las bandejas son de gran utilidad en el manejo y seguimiento del crecimiento de las plántulas y permiten valorar todo tipo de características, antes de una fase más avanzada.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 Agroquímicos y uso apropiado

    p Una condición importante para la propagación vegetal, se refiere a los agroquímicos y su uso aprobado, como se describe a continuación.

    .BG04.p-5.mb-4(data-aos="zoom-in")
      SlyderB(:datos="datosSlyder")

    p Según su especialidad, los agroquímicos pueden clasificarse como:

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema3/img11.svg')
      .BGR06.p-3(x="12%" y="12%" numero="1")
        .h4.my-4 Cuando actúa sobre ácaros.
      .BGR06.p-3(x="45%" y="12%" numero="2")
        .h4.my-4 Cuando actúa sobre algas.
      .BGR06.p-3(x="75%" y="12%" numero="3")
        .h4.my-4 Cuando elimina todo tipo de organismo vivo.
      .BGR06.p-3(x="75%" y="38%" numero="4")
        .h4.my-4 Cuando actúa sobre hongos.
      .BGR06.p-3(x="45%" y="38%" numero="5")
        .h4.my-4 Cuando actúa sobre plantas.
      .BGR06.p-3(x="12%" y="38%" numero="6")
        .h4.my-4 Cuando actúa sobre insectos adultos o en estadios inmaduros.
      .BGR06.p-3(x="12%" y="63%" numero="7")
        .h4.my-4 Cuando actúa sobre moluscos (caracoles, babosas).
      .BGR06.p-3(x="45%" y="63%" numero="8")
        .h4.my-4 Cuando actúa sobre nematodos.
      .BGR06.p-3(x="75%" y="63%" numero="9")
        .h4.my-4 Cuando evita la llegada de una plaga a un determinado sitio.
      .BGR06.p-3(x="75%" y="88%" numero="10")
        .h4.my-4 Cuando actúa sobre roedores (ratas, ratones, taltuzas).
      .BGR06.p-3(x="25%" y="88%" numero="11")
        .h4.my-4 Regulador de crecimiento, activador de plantas, antídoto de herbicida (acciones no biocidas).

    .bloque-texto-g.color-primario.p-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img12.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 En cuanto al crecimiento y desarrollo de las plantas, y según el agente patológico que se desee combatir, se debe tener claro cuál es el manejo adecuado para cada sustancia; por consiguiente, dada las características de cada agroquímico, se deben tener precauciones y cuidados al aplicarlo. Estas disposiciones van desde usar vestimenta apropiada, caretas, gafas, entre otros, hasta el lavado minucioso, después de haber aplicado el producto, incluyendo, también, un control en el tiempo de la aplicación.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        texto:
          'En el campo, es de gran importancia hacer uso responsable de los productos denominados como agroquímicos, es decir, plaguicidas o fertilizantes. Los plaguicidas están clasificados según el microorganismo al que van a combatir como: hongos, bacterias, virus o, incluso, insectos; los fertilizantes, por otro lado, presentan una función diferente y ayudan a incorporar al suelo, determinados nutrientes.',
        imagen: require('@/assets/curso/tema3/img08.jpg'),
      },
      {
        texto:
          'Los agroquímicos, como su nombre lo indica, son productos de síntesis química; por esta razón, siempre se deben aplicar responsablemente; debido a su composición química, puedan alterar condiciones y características en el agua, en el suelo y hasta en el mismo órgano vegetal. No obstante, estos productos, también pueden causar daño al medio ambiente y su toxicidad está relacionada con la capacidad de producir alteraciones en la salud, según lo indican Pacheco y Barbona. (2017, p. 9)',
        imagen: require('@/assets/curso/tema3/img09.jpg'),
      },
      {
        texto:
          'El uso de estos productos es exacto y solo deben utilizarse para lo estrictamente requerido. La Universidad Nacional de Costa Rica, en su ‘Manual de plaguicidas de Centro América’ (2014), se refiere a la acción biocida y a la especificidad de los plaguicidas hacia tipos de organismos blancos, plagas, u otros problemas sobre los cuales tienen efecto.',
        imagen: require('@/assets/curso/tema3/img10.jpg'),
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
