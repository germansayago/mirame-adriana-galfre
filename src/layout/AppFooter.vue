<template>
    <footer class="footer has-cards">        
        <div class="container">
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                        <a href="https://adrianagalfre.com.ar" rel="noopener">Adriana Miriam Galfré</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <a href="https://www.mercadopago.com.ar/checkout/v1/redirect?preference-id=452178703-7942a0d2-9686-4ee5-9e7a-3e3ea2d838a7" rel="noopener" class="nav-link" target="_blank">comprar</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://www.facebook.com/adriana.galfre" class="nav-link" target="_blank" rel="noopener">facebook</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://www.instagram.com/adriana.galfre/" class="nav-link" target="_blank" rel="noopener">instagram</a>
                        </li>
                        <li class="nav-item">
                            <a href="mailto:adrigalfre@hotmail.com" class="nav-link" target="_blank" rel="noopener">contacto</a>
                        </li>
                    </ul>
                </div>
              </div>
                
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
