// Alterar as variáveis de data() e o numero da questao no HTML de acordo com a questão
export default {
  data() {
    return {
      gabaritoQuestoes: { qck1: ["b", "e",] }, // ALTERE AQUI
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
          <b>Parabéns! Pensamentos como este te ajudarão a superar o medo de pedir ajuda e adotar estratégias de estudo colaborativo, você perceberá um aumento na compreensão do conteúdo.
          </b>
          <span class="material-symbols-rounded ml-16 mb-4">sentiment_very_satisfied</span>
        </p>
      </div>
      `;
      let incorreto = `
        <div class="mb-40 question-result question-result__incorreto">
          <p class="body1 flex--align-center">
             
            <b>Existem pensamentos mais construtivos que te levarão superar o medo para que você consiga alcançar seus objetivos.</b>
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
<div class="question question--checkbox" id="qck1">
<form action="get"  @submit.prevent="verificaQuestao('qck1')">
  <p class="body1 mt-2">
    <b>
    Escolha as opções que melhor representam seus pensamentos perante situações parecidas com a situação apresentada. </b
    >​
  </p>
  <p>
    <label>
      <input name="qck1[]"  type="checkbox" value="a" v-model="formData.qck1"  />
      <span>
      "Será que tem algo errado comigo? Todo mundo parece entender, menos eu.“
      </span>
    </label>
  </p>
  <p>
    <label>
      <input name="qck1[]"  type="checkbox" value="b" v-model="formData.qck1"  />
      <span>
      "Pedir ajuda é uma atitude inteligente, todos têm dificuldades em alguma coisa."
      </span>
    </label>
  </p>
  <p>
    <label>
      <input name="qck1[]" type="checkbox" value="c" v-model="formData.qck1"  />
      <span>
      "Se eu pedir ajuda, vão pensar que sou burro. Melhor tentar estudar sozinho."
      </span>
    </label>
  </p>
  <p>
    <label>
      <input name="qck1[]" type="checkbox" value="d" v-model="formData.qck1"  />
      <span>
      "Não adianta, eu sou péssimo nisso. Vou acabar tirando uma nota baixa.“
      </span>
    </label>
  </p>
  <p>
    <label>
      <input name="qck1[]" type="checkbox" value="e" v-model="formData.qck1"  />
      <span>
      "Vou procurar vídeos e materiais visuais que expliquem geometria de uma forma mais fácil de entender."
      </span>
    </label>
  </p>
  
  <div class="feedback"></div>
  <input class="mt-24 purple-text btn-large filled waves-effect waves-light bubbly-button" type="submit" value="Responder 👀" />
</form>
</div>
`,
};
