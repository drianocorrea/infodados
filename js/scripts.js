
        var nome = "";
        var data = "";
        var email = "";
        var telefone = "";
        var login = "";
        var senha = "";
        var id = -1;
        var user = [];
        var c = 0;
        var estado = false;

        //função para armazenar os valores do usuario
        //é chamada sempre que a funcão cadUser é chamada
        function usuario(id_, nome_, data_, email_, telefone_, login_, senha_){
            this.id_ = id_;
            this.nome_ = nome_;
            this.data_ = data_;
            this.email_ = email_;
            this.telefone_ = telefone_;
            this.login_ = login_;
            this.senha_ = senha_;
        }

        //função chamada quando o usario clica no botão
        function cadUser(){
            id = id+1;
            nome = document.getElementById("nome").value;
            data = document.getElementById("data").value;
            email = document.getElementById("email").value;
            telefone = document.getElementById("tel").value;
            login = document.getElementById("usuario").value;
            senha = document.getElementById("senha").value;

            //if para controlar a quantidade de contas criadas
            if(nome=="" || data=="" || email=="" || telefone=="" ||login=="" || senha=="" ){
                alert("Erro ao cadastrar. Verifique se os campos foram preenchidos corretamente.")
            }
            else {
                user[c] = new usuario(id, nome, data, email, telefone, login, senha); //armazendo os dados no vetor
                console.log(user[c]); //console.log para mostrar que está funcionando
                c = c+1;

                alert("Cadastro realizado com sucesso!!!");
                window.location.href = "index.html";
            }
        }
        