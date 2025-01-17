export default {
  data(){
    return{
      id:"q1" // ALTERE AQUI
    }
  },
  methods: {
    verificaQuestao(event, questao) {


      const gabaritoQuestoes = { q1: "a" };
      let selecionado = event.target.value;
      let correto = `
        <div class="question-result question-result__correto">
        <img src="src/img/gif-06.webp" alt="correto">
        <p class="body1 flex--align-center">
          <b>Acertou</b>
          <span class="material-symbols-rounded ml-16 mb-4">sentiment_very_satisfied</span>
        </p>
      </div>
      `;
      let incorreto = `
        <div class="question-result question-result__incorreto">
          <p class="body1 flex--align-center">
             <span class="material-symbols-rounded mx-16">sentiment_very_dissatisfied</span>
            <b>Ops! Tente novamente</b>
          </p>
        </div>
      `;

      if (selecionado === gabaritoQuestoes[questao]) {
        document
          .querySelector("#" + questao)
          .querySelector(".feedback").innerHTML = correto;
      } else {
        document
          .querySelector("#" + questao)
          .querySelector(".feedback").innerHTML = incorreto;
      }
    },
  },


  template:   //html
`
  <!-- Question 1 -->
  <div class="question question--radio question--dark" :id="[id]">
    <p class="body1 mt-2">
      <b>Lembre-se de selecionar a resposta que mais se alinha com suas atitudes e comportamentos reais.</b
      >​
    </p>
    <p>
      <label @change="verificaQuestao($event, 'q1')">
        <input name="q1" type="radio" value="a" />
        <span> Abriria espaço para que todos os membros do grupo compartilhassem suas ideias e votaríamos democraticamente na escolha do negócio.</span>
      </label>
    </p>
    <p>
      <label @change="verificaQuestao($event, 'q1')">
        <input name="q1" type="radio" value="b" />
        <span>Como tenho uma ideia clara do que seria um negócio de sucesso, eu lideraria o grupo apresentando minha ideia e convencendo os outros a seguirem meu plano.</span>
      </label>
    </p>
    <p>
      <label @change="verificaQuestao($event, 'q1')">
        <input name="q1" type="radio" value="c" />
        <span>Buscaria entender as diferentes ideias dos membros do grupo, identificaria pontos comuns e sugeriria uma abordagem que integrasse as diversas perspectivas.</span>
      </label>
    </p>
    <p>
      <label @change="verificaQuestao($event, 'q1')">
        <input name="q1" type="radio" value="d" />
        <span>Deixaria que os outros decidissem; não estou muito interessado em liderar ou influenciar as decisões do grupo.</span>
      </label>
    </p>
    <div class="feedback"></div>
  </div>

  `,
};
