<template>
  <div>
    <section class="section section-lg pt-0">
        <div class="container">
            <card gradient="primary"
                  no-body
                  shadow-size="lg"
                  class="border-0">
                <div class="p-5">
                    <div class="row align-items-center">
                        <div class="col-lg-3">
                          <img src="img/theme/book-1.png" alt="book mirame" class="img-fluid">
                        </div>
                        <div class="col-lg-5">
                          <h3 class="text-white">Conseguí tu ejemplar</h3>
                          <p class="lead text-white mt-3">Podes descargar un fragmento del libro de manera <span class="font-weight-bold text-yellow">gratuita</span> o adquirí tu ejemplar por un valor de <span class="font-weight-bold text-yellow">$400</span>. Enviamos a todo país.</p>
                        </div>
                        <div class="col-lg-3 ml-lg-auto text-center">                            
                          <base-button
                            tag="a"
                            href="https://drive.google.com/open?id=1LJiIolIsN-2EquxxwiaxGQTdFySTj0g0"
                            type="white"
                            class="btn-outline-white mb-3"
                            icon="fa fa-download"
                            block size="lg"
                            target="_blank"
                            rel="noopener">
                              Descargar
                          </base-button>
                          <base-button 
                            tag="a"
                            href="https://www.mercadopago.com/mla/checkout/pay?pref_id=452178703-7942a0d2-9686-4ee5-9e7a-3e3ea2d838a7"
                            class="mb-3 mb-sm-0 btn-lg"
                            type="warning"
                            icon="fa fa-shopping-cart"
                            block size="lg"
                            target="_blank"
                            rel="noopener">
                              Comprar
                          </base-button>                          
                        </div>
                    </div>
                </div>
            </card>
        </div>
    </section>
  </div>
</template>
