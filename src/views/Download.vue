<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container shape-container ">
            <div class="row justify-content-center text-center">
                <div class="col-lg-7">
                    <div class="mb-5 text-center">
                        <img src="img/brand/white.png" style="width: 200px;" class="img-fluid">
                    </div>
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class=" mb-3">
                                Ingresá tu email para obtener una copia de mi libro
                            </div>
                            <form role="form">
                                <input
                                    v-model='name'
                                    type="text"
                                    class="form-control mb-3"
                                    aria-describedby="addon-right addon-left"
                                    placeholder="Ingresa tu nombre"
                                    required
                                >
                                <input
                                    v-model='email'
                                    type="email"
                                    class="form-control mb-3"
                                    aria-describedby="addon-right addon-left"
                                    placeholder="Ingresa tu email"
                                    required
                                >
                                <div v-if="errors.length">
                                    <small><div class="text-danger mt-1" v-for="error in errors" :key='error.id'>{{ error }}</div></small>
                                </div>

                                <div class="">
                                    <base-button
                                        v-if="!sending"
                                        type="primary"
                                        v-on:click="sendEmail"
                                        class="mt-4"
                                        icon="fa fa-paper-plane"
                                    >
                                        Enviar ahora
                                    </base-button>
                                    <base-button
                                        v-else
                                        type="secondary disabled"
                                        v-on:click="sendEmail"
                                        class="mt-4"
                                        icon="fa fa-hourglass-half"
                                    >
                                        Enviando...
                                    </base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            name: '',
            email: '',
            errors: [],
            sending: false,
            send: false
        }
    },

    methods: {

        sendEmail() {
            //let vue = this
            this.errors= []
            this.send = true;
            
            if (!this.name) {
                this.errors.push('El nombre es obligatorio');
                this.send = false;
            } else if (!this.email) {
                this.errors.push('El correo electrónico es obligatorio');
                this.send = false;
            } else if (!this.validEmail(this.email)) {
                this.errors.push('El correo electrónico debe ser válido');
                this.send = false;
            }

            if(this.send) {
                this.sending = true;

                let data = {
                    name: this.name,
                    email: this.email
                }

                console.log(data);

                axios
                    .post("https://hook.integromat.com/vwh4y7ta61l29bkpng4gol48ghn3s40o", data)
                    .then((response) => {
                        //console.log(response.status);
                        const status = response.status
                        if(status === 200) {
                            //console.log('enviado');
                            this.name= '';
                            this.email= '';
                            this.$router.push('/gracias');
                        } else {
                            //console.log('error');
                        }
                    });
                
            }

        },

        validEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
        }
    },
};
</script>
