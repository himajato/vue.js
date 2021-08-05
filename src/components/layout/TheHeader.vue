<template>
  <div>
    <div class="header">
      <div class="header-left">
        <div class="toggle"></div>
        <div class="logo"></div>
      </div>

      <div class="header-right">
        <div class="name">Nhà hàng biển đông</div>
        <div class="dropdown">
          <i class="fas fa-chevron-down"></i>
        </div>
        <div class="account">
          <div class="notification">
            <i class="far fa-bell"></i>
          </div>
          <div class="account-avatar"></div>
          <div class="account-name">Nguyễn Văn Mạnh</div>
          <div class="account-icon"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import url('../../assets/css/layout/Header.css');
</style>

<script>
export default {
    name: 'TheHeader'
}
</script>