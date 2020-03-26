
        var nome = "";
        var data = "";
        var email = "";
        var telefone = "";
        var login = "";
        var senha = "";
        var id = -1;
        var user = [];
        var c = 0;
        var c1 = 1;

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
            id = Math.floor(Math.random() * 10000000) //pegando um numero aleatório entre 0 e 10000000 *não recomendado mas por enquanto vai assim msm*
            nome = document.getElementById("nome").value;
            data = document.getElementById("data").value;
            email = document.getElementById("email").value;
            telefone = document.getElementById("tel").value;
            login = document.getElementById("usuario").value;
            senha = document.getElementById("senha").value;

            //if para controlar a quantidade de contas criadas
            if(c1 == c+1){
                user[c] = new usuario(id, nome, data, email, telefone, login, senha); //armazendo os dados no vetor
                console.log(user[c]); //console.log para mostrar que está funcionando
                c = c+1;
                c1 = c1+1;
            }
        }
        