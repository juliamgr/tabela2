  function calcularCarga() {
      const n = parseFloat(document.getElementById('n').value);
      const e = 1.6e-19;
      if (!isNaN(n)) {
        const Q = n * e;
        document.getElementById('resultadoCarga').textContent = `Carga elétrica: ${Q} C`;
      } else {
        document.getElementById('resultadoCarga').textContent = "Por favor, insira um número válido.";
      }
    }

    function calcularForca() {
      const q1 = parseFloat(document.getElementById('q1').value);
      const q2 = parseFloat(document.getElementById('q2').value);
      const d = parseFloat(document.getElementById('distancia').value);
      const K = 9e9;
      if (!isNaN(q1) && !isNaN(q2) && !isNaN(d) && d !== 0) {
        const F = (K * q1 * q2) / (d * d);
        document.getElementById('resultadoForca').textContent = `Força elétrica: ${F} N`;
      } else {
        document.getElementById('resultadoForca').textContent = "Por favor, preencha todos os campos com valores válidos.";
      }
    }