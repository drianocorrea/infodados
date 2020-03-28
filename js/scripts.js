
        var nome = "";
        var data = "";
        var email = "";
        var telefone = "";
        var loginnew = "";
        var loginuser = "";
        var pass="";
        var senha = "";
        var id = -1;
        var user = [];
        var c = 0;
        var c1;
        var cont = 0;
        var estado = false;

        //função para armazenar os valores do usuario
        //é chamada sempre que a funcão cadUser é chamada
        function usuario(id_, nome_, data_, email_, telefone_, loginnew_, senha_){
            this.id_ = id_;
            this.nome_ = nome_;
            this.data_ = data_;
            this.email_ = email_;
            this.telefone_ = telefone_;
            this.loginnew_ = loginnew_;
            this.senha_ = senha_;
        }

        //função chamada quando o usario clica no botão
        function cadUser(){
            id = id+1;
            nome = document.getElementById("nome").value;
            data = document.getElementById("data").value;
            email = document.getElementById("email").value;
            telefone = document.getElementById("tel").value;
            loginnew = document.getElementById("loginnew").value;
            senha = document.getElementById("senha").value;

            //if para controlar a quantidade de contas criadas
            if(nome=="" || data=="" || email=="" || telefone=="" ||login=="" || senha=="" ){
                alert("Erro ao cadastrar. Verifique se os campos foram preenchidos corretamente.")
            }
            else {
                user[c] = new usuario(id, nome, data, email, telefone, loginnew, senha); //armazendo os dados no vetor
                console.log(user[c]); //console.log para mostrar que está funcionando
                c = c+1;

                alert("Cadastro realizado com sucesso!!!");
                //window.location.href = "index.html";
            }
        }
        function login(){
            c1 = 0;
            cont = 0;
            loginuser = document.getElementById("loginuser").value;
            pass = document.getElementById("pass").value;
            while(cont == 0){
                if(loginuser == user[c1].email_){
                    
                    if(pass == user[c1].senha_){
                        alert("Entrou!")
                        console.log(user[c1].nome_);
                        console.log(user[c1].data_);
                        console.log(user[c1].email_);
                        console.log(user[c1].telefone_);
                        console.log(user[c1].loginnew_);
                        console.log(user[c1].senha_);
                        cont = 1;
                    }else if(pass != user[c1].senha_){
                        alert("Senha errada!")
                        cont = 1;
                    }
                }else{
                    c1++;
                }
            }
        }
        
        