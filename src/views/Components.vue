<template>
    <div>
        <hero></hero>
        <!-- <prologue></prologue> -->
        <!-- <cta></cta> -->
        <profile></profile>
    </div>
</template>
<script>
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Prologue from "./components/Prologue";
import Cta from "./components/Cta";

export default {
  name: "components",
  components: {
    Hero,
    Profile,
    Prologue,
    Cta
  }
};
</script>
