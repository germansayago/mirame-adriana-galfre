<template>
    <div>
        <hero></hero>
        <Multimedia></Multimedia>
        <profile></profile>
        <cta></cta>
    </div>
</template>
<script>
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Cta from "./components/Cta";
import Multimedia from "./components/Multimedia.vue";

export default {
  name: "components",
  components: {
    Hero,
    Profile,
    Cta,
    Multimedia
}
};
</script>
