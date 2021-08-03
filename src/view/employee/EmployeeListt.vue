<template>
  <div>
    <div class="table-list">
      <table style="position: relative">
        <thead
        @click="checkedDelete">
          <tr
            style="
              height: 40px;
              position: sticky;
              top: 0px;
              background-color: #ffffff;
            "
            
          >
            <th></th>
            <th class="text-align-left">Mã nhân viên</th>
            <th class="text-align-left">Họ và tên</th>
            <th class="text-align-left">Giới tính</th>
            <th class="text-align-center">Ngày sinh</th>
            <th class="text-align-center">Điện thoại</th>
            <th class="text-align-left">Email</th>
            <th class="text-align-left">Chức vụ</th>
            <th class="text-align-left">Phòng ban</th>
            <th class="text-align-right salary">Mức lương cơ bản</th>
            <th class="text-align-left">Tình trạng công việc</th>
          </tr>
        </thead>
        <tbody class="tbody-table">
          <tr
            style="height: 40px"
            v-for="employee in employees"
            :key="employee.EmployeeId"
            @dblclick="updateEmployeeById(employee.EmployeeId)"
          >
            <td><input type="checkbox" v-model="checkedId" :value="employee.EmployeeId"/></td>
            <td>{{ employee.EmployeeCode }}</td>
            <td>{{ employee.FullName }}</td>
            <td>{{ employee.GenderName }}</td>
            <td class="text-align-center">{{ employee.DateOfBirth }}</td>
            <td class="text-align-center">{{ employee.PhoneNumber }}</td>
            <td>{{ employee.Email }}</td>
            <td>{{ employee.PositionName }}</td>
            <td>{{ employee.DepartmentName }}</td>
            <td class="text-align-right salary">{{ employee.Salary }}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import EmployeeApi from "../../api/component/EmployeeApi.js"
export default {
  name: "EmployeeList",
  components: {},

  props:{

  }, 
   
  mounted() {
    var self = this;
    axios
      EmployeeApi.getAll()
      .then((res) => {
        self.employees = res.data;
      })
      .catch((res) => {
        console.log(res);
      });
  },

  methods: {
    
    /**
    * sửa nhân viên theo id
    */
    updateEmployeeById(id){
          this.$emit('updateEmployeeById', id);
    },
    checkedDelete(){
        console.log(this.checkedId);
    },
  },

  watch: {
      checkedId: function(){
          this.$emit('getDeleteList', this.checkedId);
      }
  },
  data() {
    return {
      employees: [],
      employee: {},
      checkedId: []
    };
  },
};
</script> 