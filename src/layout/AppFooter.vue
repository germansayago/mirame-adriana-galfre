<template>
    <footer class="footer has-cards">        
        <div class="container">
            <div class="text-center">
                <a href="https://adrianagalfre.com.ar" class="text-muted">adrianagalfre.com.ar</a>            
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
