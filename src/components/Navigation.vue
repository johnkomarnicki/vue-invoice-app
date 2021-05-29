<template>
  <header>
    <div class="branding">
      <img src="@/assets/Logo.png" alt="" />
    </div>
    <hr />
    <img class="profile" src="@/assets/profile.jpeg" alt="" />
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  border-radius: 0 20px 20px 0;
  min-width: 90px;
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  color: #fff;
  background-color: #1e2139;
}

.branding {
  border-radius: 0 20px 20px 0;
  padding: 24px;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #7c5dfa;
  img {
    width: 30px;
    height: 30px;
  }
}

hr {
  margin-top: auto;
  width: 100%;
  height: 1px;
  border-color: #979797;
}

.profile {
  margin: 20px 0;

  object-fit: cover;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
