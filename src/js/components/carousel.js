export default {
  data() {
    return {
      items: [
        {
          id: 1,
          img: "src/img/slide1.webp",
          alt: "Choices",

          //html
          html: `
            
            <p class="body1 purple-text mb-16">
<b>Causas antrópicas</b>
            </p>
           
            <p>
            <b>Industrialização</b>
            </p>
            <br>
            <p>
Durante o processo de produção, as indústrias liberam na atmosfera partículas tóxicas e gases como o CO<sub>2</sub>, o dióxido de enxofre (SO<sub>2</sub>), o monóxido de carbono (CO), entre outros.            
</p>
            
            `,
        },
        {
          id: 2,
          img: "src/img/slide2.jpg",
          alt: "Choices",

          //html
          html: `

            <p>
            <b>Mineração</b>
            </p>
            <br>
            <p>
Durante a quebra das rochas, há a liberação de minúsculos pedaços das rochas na atmosfera.           
</p>
            `,
        },
        {
          id: 3,
          img: "src/img/slide3.jpg",
          alt: "Choices",

          //html
          html: `
              <p>
            <b>Queima de combustíveis fósseis</b>
            </p>
            <br>
            <p>
Os combustíveis fósseis são utilizados nas indústrias e nos veículos para gerar energia. A sua queima produz gases que poluem e modificam a atmosfera.          
</p>
            `,
        },
        {
          id: 4,
          img: "src/img/slide4.jpg",
          alt: "Choices",

          //html
          html: `
           <p class="body1">
<b>Queimadas</b>
            </p>
            <br>
            <p>
            As queimadas liberam gases poluentes e partículas provenientes do próprio material que está sendo queimado.
            </p>
            `,
        },
      
      ],
      carousel: {
        class: "carousel-01",
        key: 0,
        elemento: null,
        qtdSlides: 0,
        ordem: 1,
        ordemAnterior: 99,
      },

      instances: null, // Declare instances as a reactive variable
    };
  },
  methods: {
    /**
     * Advances the carousel to the next slide.
     * Displays the "previous" button to allow navigation back to the previous slide.
     */

    next() {
      this.carousel.elemento.querySelector(".previous").style.display = "flex";
      this.instances[this.carousel.key].next(); // Access the first carousel instance
    },
    /**
     * Goes back to the previous slide.
     * Hides the "previous" button if on the first slide.
     */
    previous() {
      this.instances[this.carousel.key].prev();
    },
  },
  /**
   * When the component is mounted, it initializes the carousel, gets the first slide,
   * and sets the display of the "previous" button to none.
   * The onCycleTo callback is set to update the current slide and the previous slide index.
   * If the current slide is the first one, the "previous" button is hidden.
   * @return {void} This function does not return a value.
   */
  mounted() {
    this.carousel.elemento = document.querySelector("." + this.carousel.class);

    let elems = document.querySelectorAll(".carousel." + this.carousel.class);
    this.instances = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
      shift: 20,
      numVisible: 1,
      /**
       * Callback function triggered when the carousel cycles to a new slide.
       * Determines the current and previous slide indices and updates the display of the "previous" button.
       * If the current slide is the first one, the "previous" button is hidden.
       * @param {HTMLElement} slide - The current slide element.
       */

      onCycleTo: (slide) => {
        // this.qtdSlides = slide.parentNode.querySelectorAll(".carousel-item").length;

        // Lógica para saber o slide atual
        let search = slide.parentNode;
        let slideIndex = [...search.children].indexOf(slide);
        this.carousel.ordem = slideIndex;
        this.carousel.ordemAnterior = this.ordem - 1;

        // Se for o primeiro slide, não mostrar o botão anterior
        if (this.carousel.ordem == 1) {
          this.carousel.elemento.querySelector(".previous").style.display =
            "none";
        } else {
          this.carousel.elemento.querySelector(".previous").style.display =
            "flex";
        }
      },
    });
    this.carousel.elemento.querySelector(".previous").style.display = "none";
  },

  template: //html
  `
    <!-- Carousel -->
    <div class="carousel carousel-slider center" :class="[carousel.class]">
    <!-- Arrows -->
      <div class="carousel-fixed-item center">
        <a @click="previous" class="previous flex--align-center card card--purple-shadow">
          <span class="material-symbols-rounded">
            chevron_left
          </span>
        </a>
        <a @click="next" class="next flex--align-center card ml-4 card--purple-shadow">
          <span class="material-symbols-rounded">
            chevron_right
          </span>
        </a>
      </div>

      <!-- slides -->
      <!-- item -->
      <div v-for="item in items" :key="item.id" class="carousel-item card">
        <div class="row card-content">
        <div class="col s12 m6">
          <img :src="item.img" :alt="item.alt" class="img-rounded carousel-img">
          </div>
          <div class="col s12 m6 left-align" v-html="item.html"></div>
        </div>
      </div>
      <!-- item -->
      
    </div>
    <!-- Fim Carousel -->
  `,
};
