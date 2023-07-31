<template>
  <div>
    <section class="section section-lg pt-0">
        <div class="">
            <card gradient="primary"
                  no-body
                  shadow-size="lg"
                  class="border-0">
                  <div class="container">
                    <div class="p-5">
                        <div class="row align-items-center">
                            <div class="col-lg-3">
                              <img src="img/theme/book-1.png" alt="book mirame" class="img-fluid">
                            </div>
                            <div class="col-lg-5">
                              <h3 class="text-white">Conseguí tu ejemplar digital</h3>
                              <p class="lead text-white mt-3">Podes descargar el libro de manera <span class="font-weight-bold text-yellow">gratuita</span> en formato digital</p>
                            </div>
                            <div class="col-lg-3 ml-lg-auto text-center">
                              <router-link
                                to="/descarga"
                                class="btn btn-lg btn-warning mb-3 mb-sm-0"
                                icon="fa fa-download"
                                >
                                Descarga el libro gratis
                              </router-link>
                            </div>
                        </div>
                    </div>

                  </div>
            </card>
        </div>
    </section>
  </div>
</template>
