// Alterar as variáveis de data() e o numero da questao no HTML de acordo com a questão
export default {
  data() {
    return {
      gabaritoQuestoes: { qck1: ["a", "c",] }, // ALTERE AQUI
      formData: {
        qck1: [], // ALTERE AQUI
      },
    };
  },

  methods: {
    verificaQuestao(questao) {
      let qtdGabarito = this.gabaritoQuestoes[questao].length;
      let qtdSelecionadas = this.formData[questao].length;

      // Verifica se as opções selecionadas são iguais do gabarito

      const acertou =
        qtdSelecionadas === qtdGabarito &&
        this.formData[questao].every((resposta) =>
          this.gabaritoQuestoes[questao].includes(resposta)
        );

      console.log("acertou", acertou);

      let correto = `
        <div class="mb-40 question-result question-result__correto">
        <p class="body1 flex--align-center">
          <b>Excelente! Essas são atitudes de um verdadeiro líder, democracia e colaboração estratégica. 
          </b>
          <span class="material-symbols-rounded ml-16 mb-4">sentiment_very_satisfied</span>
        </p>
      </div>
      `;
      let incorreto = `
        <div class="mb-40 question-result question-result__incorreto">
          <p class="body1 flex--align-center">
             
            <b>Essas ações (controle e/ou desinteresse) não contribuem para uma boa liderança estratégica.</b>
            <span class="material-symbols-rounded mx-16">sentiment_very_dissatisfied</span>
          </p>
        </div>
      `;
      if (acertou) {
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

  //html
  template: //html
  `
<!-- Question 1 -->
<div class="question question--checkbox question--dark" id="qck1">
<form action="get"  @submit.prevent="verificaQuestao('qck1')">
  <p class="body1 mt-2">
    <b>
    Pensando como um líder, escolha a opção que melhor reflete como você abordaria a formação do grupo e o desenvolvimento do negócio para a feira de empreendedorismo. ​

    Lembre-se de selecionar a resposta que mais se alinha com suas atitudes e comportamentos reais.    >​
  </p>
  <p>
    <label>
      <input name="qck1[]"  type="checkbox" value="a" v-model="formData.qck1"  />
      <span>
      Abriria espaço para que todos os membros do grupo compartilhassem suas ideias e votaríamos democraticamente na escolha do negócio.      </span>
    </label>
  </p>
  <p>
    <label>
      <input name="qck1[]"  type="checkbox" value="b" v-model="formData.qck1"  />
      <span>
      Como tenho uma ideia clara do que seria um negócio de sucesso, eu lideraria o grupo apresentando minha ideia e convencendo os outros a seguirem meu plano.      </span>
    </label>
  </p>
  <p>
    <label>
      <input name="qck1[]" type="checkbox" value="c" v-model="formData.qck1"  />
      <span>
      Buscaria entender as diferentes ideias dos membros do grupo, identificaria pontos comuns e sugeriria uma abordagem que integrasse as diversas perspectivas.      </span>
    </label>
  </p>
  <p>
    <label>
      <input name="qck1[]" type="checkbox" value="d" v-model="formData.qck1"  />
      <span>
      Deixaria que os outros decidissem; não estou muito interessado em liderar ou influenciar as decisões do grupo.      </span>
    </label>
  </p>

  
  <div class="feedback"></div>
  <input class="mt-24 purple-text btn-large filled waves-effect waves-light bubbly-button" type="submit" value="Responder 👀" />
</form>
</div>
`,
};
