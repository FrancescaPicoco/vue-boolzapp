const { createApp } = Vue
const usersWhats = {
    data: function(){       
        return{
            inputValue : [],
            newMex : "",
            current : 0,
            users : [               
                {   
                    nome: "Michele",
                    avatar: "img/avatar_1.jpg",
                    visible: true,
                    messages: [                     
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Hai portato a spasso il cane?",
                            status: "sent"
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Ricordati di stendere i panni",
                            status: "sent"
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            message: "Tutto fatto!",
                            status: "received"
                        },
                        
                    ],
                },
                {
                    nome: "Fabio",
                    avatar: "./img/avatar_2.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "20/03/2020 16:30:00",
                            message: "Ciao come stai?",
                            status: "sent"
                        },
                        {
                            date: "20/03/2020 16:30:55",
                            message: "Bene grazie! Stasera ci vediamo?",
                            status: "received"
                        },
                        {
                            date: "20/03/2020 16:35:00",
                            message: "Mi piacerebbe ma devo andare a fare la spesa.",
                            status: "sent"
                        }
                    ],
                },
                {
                    nome: "Samuele",
                    avatar: "./img/avatar_3.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "28/03/2020 10:10:40",
                            message: "La Marianna va in campagna",
                            status: "received"
                        },
                        {
                            date: "28/03/2020 10:20:10",
                            message: "Sicuro di non aver sbagliato chat?",
                            status: "sent"
                        },
                        {
                            date: "28/03/2020 16:15:22",
                            message: "Ah scusa!",
                            status: "received"
                        }
                    ],
                },
                {
                    nome: "Alessandro B.",
                    avatar: "./img/avatar_4.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent"
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Si, ma preferirei andare al cinema",
                            status: "received"
                        }
                    ],
                },
                {
                    nome: "Alessandro L.",
                    avatar: "./img/avatar_5.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Ricordati di chiamare la nonna",
                            status: "sent"
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Va bene, stasera la sento",
                            status: "received"
                        }
                    ],
                },
                {
                    nome: "Claudia",
                    avatar: "./img/avatar_6.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Ciao Claudia, hai novità?",
                            status: "sent"
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Non ancora",
                            status: "received"
                        },
                        {
                            date: "10/01/2020 15:51:00",
                            message: "Nessuna nuova, buona nuova",
                            status: "sent"
                        }
                    ],
                },
                {
                    nome: "Federico",
                    avatar: "./img/avatar_7.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Fai gli auguri a Martina che è il suo compleanno!",
                            status: "sent"
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Grazie per avermelo ricordato, le scrivo subito!",
                            status: "received"
                        }
                    ],
                },
                {
                    nome: "Davide",
                    avatar: "./img/avatar_8.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Ciao, andiamo a mangiare la pizza stasera?",
                            status: "received"
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
                            status: "sent"
                        },
                        {
                            date: "10/01/2020 15:51:00",
                            message: "OK!!",
                            status: "received"
                        }
                    ],
                },
            ],
            // names : [
            //     {
            //         noMe:"Michele"
            //     },
            //     {
            //         noMe:"Fabio"
            //     },
            //     {
            //         noMe:"Samuele"
            //     },
            //     {
            //         noMe:"Alessandro.B"
            //     },
            //     {
            //         noMe:"Alessandro.L"
            //     },
            //     {
            //         noMe:"Claudia"
            //     },
            //     {
            //         noMe:"Federico"
            //     },
            //     {
            //         noMe:"Davide"
            //     }
            // ],
            // names : ["marco" , "fabio" , "samuele" , "alessandro" , "alessandro" , "claudia" , "federico"]        
        }
    },
    methods: {
        selectedChat(i){
          console.log(i)
          this.current=i
        },
        share(){
            let newmessagge = {
                 message: this.newMex,
                 status: "sent"
            };              
            this.users[this.current].messages.push(newmessagge); 
            this.newMex ="",
            //newmessagge.status ="recieved"
            this.timeFunc()
        },
        cpushare(){
            let newmessaggecpu = {
                message: "ok",
                status: "received"
            };              
           this.users[this.current].messages.push(newmessaggecpu)       
       },
       timeFunc() {
       setTimeout(this.cpushare , 1000);
       },
       lettere(){
        for (let i = 0; i < this.users.length; i++) {
            this.users[i].visible = true
            if (!this.users[i].nome.includes(this.inputValue)){
                this.users[i].visible = false

            }
            console.log(this.users[i].visible)
        }        
       },
       mexDelete(current){
            this.users.messages.message[current].splice(current,1)
       },
       
     mounted() {
         this.users[this.current].messages.forEach(mex => {
             console.log(mex.message);
         })
     } 
    }    
}
createApp(usersWhats).mount("#app")