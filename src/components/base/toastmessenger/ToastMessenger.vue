<template>
    <div>
        <div class="toast-messenger" v-if="isShowToast">
        <div class="toast-icon toast-success">
            <i class="fas fa-check-circle"></i>
        </div>    
        <div class="toast-title">
            Thêm mới nhân viên thành công
        </div>
        <div class="toast-close toast-success">
            <i class="fas fa-times"></i>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        isShowToast: {
            type: Boolean,
            required: true,
        }
    }
}
</script>

<style >
    @import url('../../../assets/css/component/ToastMessenger.css');
</style>