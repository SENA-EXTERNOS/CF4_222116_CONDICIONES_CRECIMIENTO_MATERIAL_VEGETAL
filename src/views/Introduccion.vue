<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        .cajon-b.color-secundario.p-3
          p.mb-0 Bienvenido a este componente formativo donde podrá actualizar sus conocimientos sobre la propagación de material vegetal a partir del reconocimiento de factores ambientales en el sector agrícola, la interpretación ambiental, los tipos de infraestructura y las condiciones requeridas para esta propagación. También se abordará el sistema de riego, el crecimiento vegetal, la salud y la seguridad ocupacional. En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/intro/img01.png")

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/qNVvkhm2How" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
