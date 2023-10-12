<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Salud y seguridad ocupacional

    p En el aprendizaje de las condiciones para el crecimiento vegetal, también es necesario describir aspectos relacionados con la salud y la seguridad social de los trabajadores.

    .row.justify-content-center.mb-5
      .col-lg-6.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema6/img01.png')})`}")
            .tarjeta-flip__contenido.p-4.p-lg-5
              p.mb-0 En todas las actividades que se realicen laboralmente pueden existir riesgos que condicionen el bienestar del empleado y, dependiendo de las características de las actividades desarrolladas, los riesgos pueden ser diferentes. No obstante, todo riesgo debe ser tenido en cuenta para sensibilizar sobre su peligro, para mejorar las condiciones laborales y para aumentar el rendimiento en la actividad productiva.
      .col-lg-6.col-8(data-aos="fade-left")
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema6/img02.png')})`}")
            .tarjeta-flip__contenido.p-4.p-lg-5
              p.mb-0 Una de las mejores formas de evitar un accidente laboral, es la de estar informado, porque esa es la forma en que se pueden tomar medidas preventivas. En los ejercicios de campo y laboratorio, existen riesgos diferentes y, para cada uno de ellos, se requiere disponer de las respectivas guías técnicas para proteger el ejercicio laboral.

    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 Concepto de salud y seguridad ocupacional

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .cajon.color-acento-botones.p-4
          p Para comprender el alcance de este tema, se define seguridad ocupacional como el conjunto de actividades dirigidas hacia el mejoramiento de la calidad de vida de los trabajadores. Se tienen, además, dentro de este grupo de actividades, acciones como: diagnóstico precoz y tratamiento oportuno de enfermedades ocupacionales, readaptación laboral y la atención de las contingencias derivadas de los accidentes de trabajo y de las enfermedades ocupacionales, a través del mantenimiento y mejoramiento de sus condiciones de vida. Los riesgos podrán establecerse con respecto a condiciones como: el lugar de trabajo, el transporte y las maquinarias que involucran el desempeño; también existe un riesgo por contaminantes ambientales, como los agroquímicos; la prevención en el manejo de los riesgos laborales será oportuna en la medida en que se conserve la salud en los trabajadores. (Carrera, #[em et al.], 2019).
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema6/img03.svg")

    .row.justify-content-center.mb-5
      .col-lg-4.order-lg-1.order-2(data-aos="fade-right")
        .cajon-b.color-secundario.p-3
          p.mb-0 Los procesos que derivan de la implementación de salud y seguridad en el trabajo, se pueden ver definidos en la siguiente interpretación de la gestión de la seguridad y salud laboral.
      .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema6/img04.png")

    SlyderF.mb-5(columnas="col-lg-3 col-md-6")
      .BGIMG07.p-md-4.p-3
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema6/img05.svg' alt='AvatarTop')
        h4.text-center.text-white Evaluación de riesgos.
      .BGIMG07.p-md-4.p-3
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema6/img06.svg' alt='AvatarTop')
        h4.text-center.text-white Prevención de lesiones.
      .BGIMG07.p-md-4.p-3
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema6/img07.svg' alt='AvatarTop')
        h4.text-center.text-white Equilibrio trabajo-vida.
      .BGIMG07.p-md-4.p-3
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema6/img08.svg' alt='AvatarTop')
        h4.text-center.text-white Protocolos de seguridad.
      .BGIMG07.p-md-4.p-3
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema6/img09.svg' alt='AvatarTop')
        h4.text-center.text-white Peligros en el lugar de trabajo.
      .BGIMG07.p-md-4.p-3
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema6/img10.svg' alt='AvatarTop')
        h4.text-center.text-white Compensación y beneficios.
      .BGIMG07.p-md-4.p-3
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema6/img11.svg' alt='AvatarTop')
        h4.text-center.text-white Manejo de empleados.

    p Para integrar a fondo los conceptos sobre seguridad laboral, es importante determinar y reconocer aquellos clasificados como los más comunes dentro de múltiples tipos de actividades laborales; estos conceptos se encuentran socializados en el documento ‘Guía de buenas prácticas de PRL en el sector cementero español’ (Oficemen, 2017), y serán descritos a continuación:

    ImagenInfografica.color-acento-contenido.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema6/img12.svg')
      .BGR06.p-3(x="10%" y="46%" numero="1")
        .h4.my-4 Generados por los elementos del entorno como la humedad, el frío o el calor.
      .BGR06.p-3(x="26.8%" y="46%" numero="2")
        .h4.my-4 Provocados por la presencia y manipulación de agentes químicos (alergias, asfixias, etc.).
      .BGR06.p-3(x="44%" y="46%" numero="3")
        .h4.my-4 Producidos por utilizar máquinas, útiles o herramientas (cortes, quemaduras o golpes).
      .BGR06.p-3(x="60.7%" y="46%" numero="4")
        .h4.my-4 Originados por trabajar en zonas altas, galerías o pozos profundos.
      .BGR06.p-3(x="76.8%" y="46%" numero="5")
        .h4.my-4 Derivados de trabajar con máquinas o aparatos eléctricos.
      .BGR06.p-3(x="10%" y="90.3%" numero="6")
        .h4.my-4 Ocasionados por manipular gases o por trabajar cerca de una fuente de gas.
      .BGR06.p-3(x="26.8%" y="90.3%" numero="7")
        .h4.my-4 Causados por operar con materiales y elementos inflamables.
      .BGR06.p-3(x="44%" y="90.3%" numero="8")
        .h4.my-4 Provocados por trabajar con equipos de elevación, transporte, etc.
      .BGR06.p-3(x="59.7%" y="90.3%" numero="9")
        .h4.my-4 Creados por exceso de trabajo, clima social desfavorable, etc. (pueden producir depresión o fatiga laboral, entre otros).
      .BGR06.p-3(x="77.5%" y="90.3%" numero="10")
        .h4.my-4 Resultados de trabajar con agentes infecciosos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema6/img13.png")
      .col-lg-5(data-aos="fade-left")
        p.mb-0 Si contextualizamos los riesgos mencionados con aquellos que tienen relación al ejercicio de crecimiento vegetal, veremos que, casi en su mayoría, se podrían presentar en actividades de laboratorio y campo, por lo que deben estar predeterminados, con antelación, en los esquemas de seguridad antes del desarrollo de cualquier actividad.

    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 Normatividad vigente en salud y seguridad ocupacional

    p A continuación, profundizaremos sobre algunas ideas relacionadas con la normatividad vigente en salud y seguridad ocupacional.

    .BGIMG02.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 El bienestar institucional se encuentra relacionado directamente con el rendimiento de sus trabajadores; la calidad es, con certeza, un objetivo que se consigue promoviendo estrategias y pautas para que todas las partes reciban y den lo mejor de sí. La seguridad es vital en todas las empresas, la protección de la salud física, como también la de salud mental, son resultados de un buen clima laboral; por eso, en la evolución de las empresas, se han establecido normas y requerimientos que, tanto el empleado como el empleador, deben conocer. De esta manera, se pueden reducir riesgos, al promover las normas organizacionales e incentivar al personal para que prospere.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema6/img14.svg")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 Las normatividades en el tema de salud y seguridad ocupacional van desde leyes, resoluciones y decretos, todas con un objetivo en común, resaltar la importancia en la generación de empleos y promover la protección social. De esta forma, las organizaciones y empresas, eliminarán de su entorno laboral, todos los riesgos que afecten la seguridad y promoverán un ambiente sano y seguro.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema6/img15.svg")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 Para mayor información sobre salud y seguridad ocupacional, puede consultar los siguientes lineamientos:
            ul.lista-ul--color.ms-4.mt-3
              li
                <i class="fas fa-atom" style="color:#3BC192"></i>
                | La política del Sistema de Gestión de la Seguridad y Salud en el Trabajo, del Decreto 1443 de 2014.
              li
                <i class="fas fa-atom" style="color:#3BC192"></i>
                | Los Objetivos de Seguridad y Salud en el Trabajo, de la Resolución 0312 del 13 de febrero de 2019.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema6/img16.svg")


    .row.justify-content-center.align-items-center.my-4
      .col-lg-8.col-md-10.col-12(data-aos="fade-right")
        .cajon.color-acento-botones.p-4
          p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal donde encontrará la síntesis, material complementario, entre otros. Adicional, lo invitamos a resolver la actividad didáctica para reforzar los conceptos estudiados en el componente formativo.


</template>

<script>
export default {
  name: 'Tema6',
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
