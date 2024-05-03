const cepInout = document.getElementById("cepInput");
    
cepInout.addEventListener("blur", async () => {
    const cep = cepInout.value;
        
    const url = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const endereco = await url.json();

    const logradouroInput = document.getElementById("logradouroInput");
    logradouroInput.value = endereco.logradouro;

    const bairroInput = document.getElementById("bairroInput");
    bairroInput.value = endereco.bairro;

    const cidadeInput = document.getElementById("cidadeInput");
    cidadeInput.value = endereco.localidade;

    const ufInput = document.getElementById("ufInput");
    ufInput.value = endereco.uf;
});
