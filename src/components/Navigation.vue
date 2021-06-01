<template>
  <header class="flex">
    <div class="branding">
      <img src="@/assets/file-invoice-dollar-solid.png" alt="" />
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  z-index: 99;
  // align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #1e2139;
  @media (min-width: 900px) {
    min-height: 100%;
    flex-direction: column;
    min-width: 90px;
    border-radius: 0 20px 20px 0;
  }
}

.branding {
  border-radius: 0 20px 20px 0;
  padding: 24px;
  display: flex;
  justify-content: center;
  background-color: #7c5dfa;
  img {
    width: auto;
    height: 30px;
  }
  @media (min-width: 900px) {
    width: 100%;
  }
}
</style>
