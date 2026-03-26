document.getElementById("btnCriar").addEventListener("click",function(){
    const titulo = document.getElementById("titulo").value;
    const conteudo = document.getElementById("conteudo").value;

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                title:titulo,
                body:conteudo,
                userId:1 
            })
        })
            .then(res => res.json ())
            .then(novoPost => {

                //convertendo para padrão JSON:API
                const jsonApiFormat = {
                    data: {
                        type: "POSTS",
                        id: novoPost.id,
                        attributs:{
                            title: novoPost.title,
                            body: novoPost.boddy
                        }
                    }
                };
                document.getElementById("saida").textContent =
                JSON.stringify(jsonApiFormat, null,4)
        });
});