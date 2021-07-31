<template>
  <div>
    <div class="content">
      <div class="title-and-button">
        <div class="title">Danh sách nhân viên</div>
        <div class="add-and-delete" style="display: flex; margin-left: auto">
          <div id="btn-add-employee" class="button-have-icon" @click="addEmployee">
            <div class="add-icon button-icon" ></div>
            <div class="button-title">Thêm nhân viên</div>
          </div>
          <div id="btn-delete-employee" class="button-have-icon" @click="deleteEmployee">
            <div class="delete-icon">
              <i class="fas fa-trash-alt"></i>
            </div>
            <div class="button-title">Xóa nhân viên</div>
          </div>
        </div>
      </div>
      <div class="second-line">
        <input
          placeholder="Tìm theo mã, Tên hoặc Số điện thoại"
          class="search-box"
        />
        <div id="combobox-1" class="combobox">
          <input
            readonly
            id="department-input-1"
            type="text"
            value="Tất cả phòng ban"
          />
          <button id="btn-cbb-1" class="btn-dropdown">
            <i id="icon-dropdown-department" class="fas fa-chevron-down"></i>
          </button>
          <div id="combobox-data-1" class="combobox-data">
            <div
              id="PB99"
              data-id="142cb08f-7c31-21fa-8e90-67245e8b283e"
              class="combobox-items"
            >
              <i
                class="fas fa-check"
                style="visibility: hidden; size: 16px"
              ></i>
              <div style="margin-left: 10px">Phòng Marketting</div>
            </div>

            <div
              id="PB89"
              data-id="17120d02-6ab5-3e43-18cb-66948daf6128"
              class="combobox-items"
            >
              <i
                class="fas fa-check"
                style="visibility: hidden; size: 16px"
              ></i>
              <div style="margin-left: 10px">Phòng đào tạo</div>
            </div>

            <div
              id="PB86"
              data-id="469b3ece-744a-45d5-957d-e8c757976496"
              class="combobox-items"
            >
              <i
                class="fas fa-check"
                style="visibility: hidden; size: 16px"
              ></i>
              <div style="margin-left: 10px">Phòng Nhân sự</div>
            </div>

            <div
              id="PB92"
              data-id="4e272fc4-7875-78d6-7d32-6a1673ffca7c"
              class="combobox-items"
            >
              <i
                class="fas fa-check"
                style="visibility: hidden; size: 16px"
              ></i>
              <div style="margin-left: 10px">Phòng Công nghệ</div>
            </div>
          </div>
        </div>
        <div id="combobox-2" class="combobox">
          <input
            readonly=""
            id="position-input"
            type="text"
            value="Tất cả vị trí"
          />
          <button id="btn-cbb-2" class="btn-dropdown">
            <i id="icon-dropdown-position" class="fas fa-chevron-down"></i>
          </button>
          <div id="combobox-data-2" class="combobox-data">
            <div
              id="P08"
              data-id="30d41e52-5e66-72bc-6c1c-b47866e0b131"
              class="combobox-items"
            >
              <i
                class="fas fa-check"
                style="visibility: hidden; size: 16px"
              ></i>
              <div style="margin-left: 10px">Giám đốc</div>
            </div>

            <div
              id="P94"
              data-id="548dce5f-5f29-4617-725d-e2ec561b0f41"
              class="combobox-items"
            >
              <i
                class="fas fa-check"
                style="visibility: hidden; size: 16px"
              ></i>
              <div style="margin-left: 10px">Nhân viên</div>
            </div>

            <div
              id="P07"
              data-id="589edf01-198a-4ff5-958e-fb52fd75a1d4"
              class="combobox-items"
            >
              <i
                class="fas fa-check"
                style="visibility: hidden; size: 16px"
              ></i>
              <div style="margin-left: 10px">Phó phòng</div>
            </div>

            <div
              id="P92"
              data-id="5bd71cda-209f-2ade-54d1-35c781481818"
              class="combobox-items"
            >
              <i
                class="fas fa-check"
                style="visibility: hidden; size: 16px"
              ></i>
              <div style="margin-left: 10px">Trưởng phòng</div>
            </div>
          </div>
        </div>
        <div id="btn-refresh" class="button-refresh" @click="refresh"></div>
      </div>
      <EmployeeList @updateEmployeeById="updateEmployeeById"/>
      <div class="paging-bar">
        <div class="number-show">Hiện thị 1-10/1000 nhân viên</div>
        <div class="pagingbar-tool">
          <div class="to-top"><i class="fas fa-angle-double-left"></i></div>
          <div class="next-to-front" style="margin-right: 10px">
            <i class="fas fa-chevron-left"></i>
          </div>
          <div class="page-number-list" style="margin-right: 10px">
            <button class="page-number page-number-select second-button-number">
              1
            </button>
            <button
              class="page-number second-button-number"
              style="margin-right: 8px; margin-left: 8px"
            >
              2
            </button>
            <button
              class="page-number second-button-number"
              style="margin-right: 8px"
            >
              3
            </button>
            <button class="page-number second-button-number">4</button>
          </div>
          <div class="next-to-previous" style="margin-right: 10px">
            <i class="fas fa-chevron-right"></i>
          </div>
          <div class="to-bottom" style="margin-right: 10px">
            <i class="fas fa-angle-double-right"></i>
          </div>
        </div>
        <div class="employ-per-page">10 nhân viên/trang</div>
      </div>
    </div>
    <EmployeeModal :isShow='employeeModalShow' @closeModal="closeModal" :employeeId="employeeId" :formMode="formMode"/>
  </div>
</template>

<script>
import EmployeeList from '../../view/employee/EmployeeList.vue'
import EmployeeModal from '../../view/employee/EmployeeModal.vue'
export default {
  name: 'Content',

  props: {
    
  },

  mounted() {

  },

  components: {
    EmployeeList,
    EmployeeModal,
  },
  
  methods: {
    addEmployee() {
      this.formMode = 0;
      this.employeeModalShow = true;
    },

    closeModal(employeeModalShow){
      this.employeeModalShow = employeeModalShow;
    },

    deleteEmployee(){
      alert('delete');
    },

     updateEmployeeById(id){
       this.formMode = 1;
       this.employeeId = id;
       this.employeeModalShow = true;
     },

    refresh(){
      alert('refresh');
    }
  },
  data() {
    return {
      employeeModalShow: false,
      employeeId: '',
      formMode: 0,
    }
  },
}
</script>

<style scoped>
  @import url("../../css/layout/Content.css");
</style>
