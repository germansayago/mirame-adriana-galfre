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
                          <h3 class="text-white">Conseguí tu ejemplar digital</h3>
                          <p class="lead text-white mt-3">Podes descargar el libro de manera <span class="font-weight-bold text-yellow">gratuita</span> en formato digital</p>
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
                        </div>
                    </div>
                </div>
            </card>
        </div>
    </section>
  </div>
</template>
