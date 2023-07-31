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
                            <a href="https://www.facebook.com/adriana.galfre" class="nav-link" target="_blank" rel="noopener">facebook</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://www.instagram.com/adriana.galfre/" class="nav-link" target="_blank" rel="noopener">instagram</a>
                        </li>
                        <li class="nav-item">
                            <a href="mailto:adrianagalfre@gmail.com" class="nav-link" target="_blank" rel="noopener">contacto</a>
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
