<template>
  <div>
    <div id="cbb-gender" class="combobox" style="margin-top: 4px; width: 100%" @click="cbbDataOnClick">
      <input
        id="gender-input"
        style="width: 100%"
        type="text"
        value="Nam"
        readonly
      />
      <button id="btn-combobox-gender" class="btn-dropdown">
        <i id="icon-dropdown-gender" class="fas fa-chevron-down"></i>
      </button>
      <div id="combobox-gender" gender-id="" class="combobox-data" v-bind:class="{show: isShow}">
        <div id="gender-male" class="combobox-items">Nam</div>
        <div id="gender-female" class="combobox-items">Nữ</div>
        <div id="gender-undefine" class="combobox-items">Không xác định</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        isShow:{
            type: Boolean,
        }
    },
    /**
     * Click vào combobox gender thì hiện ra data hoặc ẩn đi data
     */
    methods: {
        cbbDataOnClick(){
            this.$emit('cbbDataOnClick');
        },
    },


}
</script>