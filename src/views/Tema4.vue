<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Sistema de riego

    p Para dar continuidad al tema de las condiciones para el crecimiento del material vegetal, en esta temática vamos a conocer sobre el sistema de riego.

    .BGIMG03.p-4.mb-4(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 El agua es un factor primordial para el desarrollo de los seres vivos y las plantas, y también resulta ser vital. El agua, junto a los nutrientes, permite el crecimiento de las partes subterráneas y aéreas de las plantas; esta es absorbida por las raíces y transportada a través de un tejido exclusivo para esta función: el xilema. Igualmente, la disponibilidad del agua en el suelo, permite la disolución de algunos minerales necesarios y su posterior absorción por las plantas.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img01.png")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 En condiciones naturales, el recurso hídrico puede estar en mayor proporción, dependiendo de la época del año, la ubicación geográfica u otros aspectos. Pero cuando los cultivos se tienen bajo cubierta, es necesario proporcionar agua y distribuirla de manera correcta y eficiente.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img02.png")


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.order-lg-1.order-2(data-aos="fade-right")
        .cajon-b.color-secundario.p-3
          p.mb-0 El concepto de sistema de riego hace referencia al suministro de agua en cantidades controladas, aunque depende de las necesidades de cada especie, el tipo de suelo y otros factores del clima. El cómo aportar agua mediante riego estará determinado tanto por la distribución del cultivo, como por la técnica de propagación.
      .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema4/img03.png")

    separador
    .BGIMG06.p-md-5.p-4

      p Los sistemas de riego permiten optimizar el recurso hídrico y ser preciso con el suministro. Dentro de los tipos de riego más conocidos se encuentran el de aspersión y el de goteo, y se seleccionan teniendo en cuenta las características del sustrato o del suelo, pues las densidades y la composición de estos indicará la duración y la frecuencia en su implementación.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6.mb-lg-0.mb-4(data-aos="fade-right")
          p.text-center Sistema de riego por aspersión
          figure
            img(src="@/assets/curso/tema4/img04.png")
        .col-lg-6.col-10(data-aos="fade-left")
          p.text-center Sistema de riego por goteo
          figure
            img(src="@/assets/curso/tema4/img05.png")

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
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
