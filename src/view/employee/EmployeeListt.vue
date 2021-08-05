<template>
  <div>
    <div class="table-list">
      <Table
        :ths="thsEmployee"
        :list="employees"
        :idOfRow="employeeId"
        @sendDeleteList="getDeleteList"
        @sendIdNeedToUpdateToParent="getIdUpdate"
        @check="checkedDelete"
      />
    </div>
  </div>
</template>

<script>
import EmployeeApi from "../../api/component/EmployeeApi.js";
import Table from "../../components/base/Table.vue";
import Format from "../../utils/common/Format.js";
export default {
  name: "EmployeeList",
  components: {
    Table,
  },

  created() {
    var self = this;
    EmployeeApi.getAll()
      .then((res) => {
        self.employees = res.data;
        self.employees.forEach((item) => {
          item.Salary = Format.salaryFormat(item.Salary);
          item.DateOfBirth = Format.dobFormat(item.DateOfBirth);
        });
      })
      .catch((res) => {
        console.log(res);
      });
  },

  methods: {
    getAllEmployee() {},

    getIdUpdate(id) {
      this.updateId = id;
    },
    /**
     *
     */
    updateEmployeeById(id) {
      this.$emit("updateEmployeeById", id);
    },
    checkedDelete() {
      console.log(this.ths);
    },
    getDeleteList(checklist) {
      this.checkedId = checklist;
    },
  },

  watch: {
    /**
     * Mỗi khi thay đổi danh sách các ID muốn xóa, tạo một custom event để truyền lên cha
     * created by: NHNGHIA (04/08/2021)
     */
    checkedId: function () {
      this.$emit("sendCheckedListToParent", this.checkedId);
    },

    /**
     * Gửi id nhân viên cần sửa lên component cha
     * created by: NHNGHIA (04/08/2021)
     */
    updateId: function () {
      this.$emit("sendIdUpdateToParent", this.updateId);
    },

    employees: function () {
      var self = this;
      EmployeeApi.getAll()
        .then((res) => {
          self.employees = res.data;
          self.employees.forEach((item) => {
            item.Salary = Format.salaryFormat(item.Salary);
            item.DateOfBirth = Format.dobFormat(item.DateOfBirth);
          });
        })
        .catch((res) => {
          console.log(res);
        });
    },
  },

  data() {
    return {
      employees: [],
      employee: {},
      checkedId: [],
      employeeId: {
        name: "EmployeeId",
      },
      thsEmployee: [
        {
          name: "Mã nhân viên",
          textLeft: true,
          id: "EmployeeCode",
        },
        {
          name: "Họ tên",
          textLeft: true,
          id: "FullName",
        },
        {
          name: "Giới tính",
          textLeft: true,
          id: "GenderName",
        },
        {
          name: "Ngày sinh",
          textCenter: true,
          id: "DateOfBirth",
        },
        {
          name: "Điện thoại",
          textCenter: true,
          id: "PhoneNumber",
        },
        {
          name: "Email",
          textLeft: true,
          id: "Email",
        },
        {
          name: "Chức vụ",
          textLeft: true,
          id: "PositionName",
        },
        {
          name: "Phòng ban",
          textLeft: true,
          id: "DepartmentName",
        },
        {
          name: "Mức lương cơ bản",
          textRight: true,
          id: "Salary",
        },
        {
          name: "Tình trạng công việc",
          textLeft: true,
          id: "WorkStatus",
        },
      ],
      updateId: "",
    };
  },
};
</script> 