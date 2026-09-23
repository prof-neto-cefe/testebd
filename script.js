const URL = "https://uqqbqsrldydbuiimzyfk.supabase.co";

const KEY = "sb_publishable_k7qTjmFn6lgEWpxUXgLL3A_M2T8ZlJX";


async function salvar() {

    const nome = document.getElementById("nome").value;

    const resposta = await fetch(
        URL + "/rest/v1/produtos",
        {
            method: "POST",

            headers: {
                "apikey": KEY,
                "Authorization": "Bearer " + KEY,
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                nome: nome
            })
        }
    );

    if (resposta.ok) {
        document.getElementById("mensagem").innerText =
            "Produto salvo!";

        document.getElementById("nome").value = "";
    }
    else {
        document.getElementById("mensagem").innerText =
            "Erro ao salvar.";
    }
}
