<template lang="html">
    <div>
        <h1 class="test">{{ title }}</h1>
        <p class="icon_health"></p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "abcd",
        }
    },
}
</script>

<style lang="scss" scoped>
  .icon_health{
    font-size: 50px;
  }
</style>
<style lang="scss">
@import "../css/style.scss";
  .test{
    color: red;
    h1{
      font-size:40px;
    }
    p{
      font-size: 20px;
    }
  }
</style>
