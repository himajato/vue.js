<template>
    <div id="pop-up-delete" class="pop-up" :class="{'show': isShowPopup}">
        <div class="pop-up-content">
            <button id="close-popup-delete" class="popup-close-btn" @click="onCancelClick">
                <i class="fas fa-times"></i>
            </button>
            <div class="pop-up-info">
                <div class="pop-up-title">Xóa nhân viên</div>
                <div class="popup-icon-description">
                    <div class="pop-up-icon">
                        <i class="fas fa-exclamation-triangle"></i>
                    </div>
                    <div class="pop-up-description">
                        <div>Bạn có chắc muốn xóa (các) nhân viên này hay không ? Dữ liệu xóa không thể khôi phục lại.</div>
                    </div>
                </div>
            </div>
            <div class="pop-up-confirm">
                <div class="pop-up-btn">
                    <button id="confirm-popup-delete" class="button btn-confirm-popup" @click="onDeleteConfirm">Xóa</button>
                    <button id="cancel-popup-delete" class="second-button btn-cancel-popup" @click="onCancelClick">Hủy</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isShowPopup: {
            type: Boolean,
            required: true,
        }
    },

    methods: {
        /**
         * Xử lí sự kiện bấm hủy hoặc thoát popup
         * created by: NHNGHIA (2/8/2021)
         */
        onCancelClick(){
            this.$emit('onCancelClick');
        },

        /**
         * Xử lí sự kiện confirm xóa 
         * created by: NHNGHIA (2/8/2021)
         */
        onDeleteConfirm(){
            this.$emit('onDeleteConfirm');
        }
    },

    data() {
        return {
            
        }
    }
}
</script>

<style >
 @import url('../../css/base/Popup.css');
</style>