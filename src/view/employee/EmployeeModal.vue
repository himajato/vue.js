<template>
    <div>
        <div id="modal-info" class="modal" v-bind:class="{show: isShow}">
        <div class="modal-content">
            <button id="btn-close-modal" class="btn-close" @click="closeModal">
                <i class="fas fa-times"></i>
            </button>
            <div class="main-content">
                <div class="form-title">
                    <div class="title-info">Thông tin nhân viên</div>   
                </div>
                <div class="avatar-and-form">
                    <div class="form-avatar">
                        <div class="avatar-img"></div>
                        <div class="description">(Vui lòng chọn ảnh có định dạng .jpg,.jpeg, .png, .gif)</div>
                    </div>
                    <div id="form-info-modal" class="form-info">
                        <div class="infor-employee">
                            <p style="margin-top: 0px;">A. Thông tin chung</p>
                            <div style="background-color: green; width: 65px; height: 5px;"></div>
                            <div class="info-input" style="display: block;">
                                    <div style="display: flex;">
                                        <div class="input-left" >
                                            <span>Mã nhân viên <span style="color: red;">(*)</span></span>
                                            <div class="">
                                                <input 
                                                required id="code-input" 
                                                class="text-box-default required" 
                                                style="margin-top: 4px; width: 100%;"
                                                v-model="employee.EmployeeCode" 
                                                />
                                            </div>
                                        </div>
                                        <div class="input-right" >
                                            <span>Họ và tên <span style="color: red;">(*)</span></span>
                                            <div class="">
                                                <input 
                                                required id="name-input" 
                                                class="text-box-default" 
                                                style="margin-top: 4px; width: 100%;"
                                                v-model="employee.FullName"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="display: flex;">
                                        <div class="input-left">
                                            <div style="margin-top: 16px">Ngày sinh</div>
                                            <input 
                                            id="dob-input" 
                                            type="date" 
                                            class="text-box-default" 
                                            style="margin-top: 4px; width: 100%;"
                                            v-model="employee.DateOfBirth"/>
                                        </div>
                                       <div class="input-right">
                                        <div style="margin-top: 16px">Giới tính</div>
                                        <div id="cbb-gender" class="combobox" style="margin-top: 4px; width: 100%;">
                                            <input 
                                            id="gender-input" 
                                            style="width: 100%;" 
                                            type="text" value="Nam" 
                                            readonly>
                                            <button id="btn-combobox-gender" class="btn-dropdown">
                                                <i id="icon-dropdown-gender" class="fas fa-chevron-down"></i>
                                            </button>
                                            <div id="combobox-gender" gender-id="" class="combobox-data">
                                                <div id="gender-male" class="combobox-items" >Nam</div>
                                                <div id="gender-female" class="combobox-items">Nữ</div>
                                                <div id="gender-undefine" class="combobox-items">Không xác định</div>
                                            </div>
                                        </div>  
                                       </div>
                                    </div>    
                                    <div style="display: flex;">
                                        <div class="input-left">
                                            <div style="margin-top: 16px">Số CMTND/ Căn cước <span style="color: red;">(*)</span></div>
                                            <div class="">
                                                <input 
                                                required 
                                                id="identity-input" 
                                                class="text-box-default" 
                                                style="margin-top: 4px; width: 100%;"
                                                v-model="employee.IdentityNumber"/>
                                            </div>
                                        </div>
                                        <div class="input-right">
                                            <div style="margin-top: 16px">Ngày cấp</div>
                                            <input id="identity-date-input" type="date" class="text-box-default" style="margin-top: 4px; width: 100%;"/>
                                        </div>
                                    </div>
                                    <div style="display: flex;">
                                        <div class="input-left">
                                            <div style="margin-top: 16px">Nơi cấp</div>
                                            <input 
                                            id="identity-place-input" 
                                            class="text-box-default" 
                                            style="margin-top: 4px; width: 100%;"
                                            v-model="employee.IdentityPlace"/>
                                        </div>
                                        <div class="input-right">
                                        </div>
                                    </div>
                                    <div style="display: flex;">
                                        <div class="input-left">
                                            <div style="margin-top: 16px"><span>Email <span style="color: red;">(*)</span></span></div>
                                            <div class="">
                                                <input 
                                                id="email-input" 
                                                required class="text-box-default" 
                                                style="margin-top: 4px; width: 100%;"
                                                v-model="employee.Email"/>
                                            </div>
                                        </div>
                                        <div class="input-right">
                                            <div style="margin-top: 16px"><span>Số điện thoại <span style="color: red;">(*)</span></span></div>
                                            <div class="">
                                                <input 
                                                required id="phone-input" 
                                                class="text-box-default" 
                                                style="margin-top: 4px; width: 100%;"
                                                v-model="employee.PhoneNumber"/>
                                            </div>
                                        </div>
                                    </div>                                     
                            </div>
                        </div>
                        <div class="info-work" style="margin-top: 24px;">
                            <p style="margin-top: 0px;">B. Thông tin công việc</p>
                            <div style="background-color: green; width: 65px; height: 5px;"></div>
                            <div class="work-input" style="display: block; margin-top: 16px;">
                                <div style="display: flex;">
                                    <div class="input-left">
                                        <div>Vị trí</div>
                                        <div id="cbb-position" class="combobox" style="margin-top: 4px; width: 100%;">
                                            <input readonly id="modal-position-input" type="text" style="width: 100%;" position-id="">
                                            <button id="btn-combobox-position" class="btn-dropdown">
                                                <i id="icon-position" class="fas fa-chevron-down"></i>
                                            </button>
                                            <div id="combobox-position" class="combobox-data">
                                            </div>
                                        </div>
                                    </div>  
                                    <div class="input-right">
                                        <div>Phòng ban</div>
                                        <div id="cbb-room" class="combobox" style="margin-top: 4px; width: 100%;">
                                            <input readonly id="department-input-modal" data-id="" type="text" style="width: 100%;" value="Phòng nhân sự">
                                            <button id="btn-combobox-room" class="btn-dropdown">
                                                <i id="icon-department" class="fas fa-chevron-down"></i>
                                            </button>
                                            <div id="combobox-room-data" class="combobox-data">                                               
                                            </div>                             
                                        </div>
                                    </div>    
                                </div>
                                <div style="display: flex">
                                    <div class="input-left">
                                        <div style="margin-top: 16px">Mã số thuế cá nhân</div>
                                        <input id="taxcode-input" class="text-box-default" style="margin-top: 4px; width: 100%;"/>
                                    </div>
                                    <div class="input-right">
                                        <div style="margin-top: 16px">Mức lương cơ bản</div>
                                        <div class="salary-input" style="display: flex; position: relative;">
                                            <input id="salary-input" class="text-box-default" style="margin-top: 4px; width: 100%; text-align: right; display: flex; padding-right: 55px;"/>
                                            <div style="font-family: GoogleSans-italic; position: absolute; right: 10px; top: 14.5px;">(VNĐ)</div>
                                        </div>
                                    </div>
                                </div>
                                <div style="display: flex;">
                                    <div class="input-left">
                                        <div style="margin-top: 16px">Ngày gia nhập công ty</div>
                                        <input id="joindate" type="date" class="text-box-default" style="margin-top: 4px; width: 100%;"/>
                                    </div>
                                    <div class="input-right">
                                        <div style="margin-top: 16px">Tình trạng công việc</div>
                                        <input class="text-box-default" style="margin-top: 4px; width: 100%;"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn-save-cancel">
                <button id="btn-cancel" class="btn-cancel btn second-button" @click="closeModal">Hủy</button>
                <button id="btn-save" class="btn-save button-have-icon" @click="btnSaveOnClick">
                    <div class="save-icon">
                        <i class="far fa-save"></i>
                    </div>
                    <div>Lưu</div>
                </button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
//import EmployeeList from './EmployeeList.vue'

export default {
    
    props: {
        isShow:{
            type: Boolean,
            default: false,
            required: true,
        },
        employeeId: {
            type: String,
        },
        formMode: {
            type: Number,
        },
    },

    created() {
        var self = this;
        axios.get("http://cukcuk.manhnv.net/v1/Employees/NewEmployeeCode")
         .then(res => {
             self.code = res.data;  
         }).catch(res => {
             console.log(res)
         })
    },

    watch: {
        employeeId: function(value){
            var self = this;
            axios.get(`http://cukcuk.manhnv.net/v1/Employees/${value}`)
                    .then(res => {
                        self.employee = res.data;
                    }).catch(res => {
                        console.log(res);
                    })                
        },
        formMode: function(){
            if(this.formMode == 0){
                this.employee = {};
            }
        },
    },

    methods: {
        closeModal() {
            this.$emit('closeModal', false)
            console.log()
            console.log(this.formMode)
        },
        btnSaveOnClick() {
            var self = this;
            if(self.formMode == 0){
                axios.post(`http://cukcuk.manhnv.net/v1/Employees`, self.employee)
                    .then(function() {
                        alert('Thêm nhân viên thành công')
                    }).catch(res => {
                        console.log(res.code)
                    })  
            } else {
                axios.put(`http://cukcuk.manhnv.net/v1/Employees/${self.employeeId}`, self.employee)
                    .then(function() {
                        alert('Sửa nhân viên thành công')
                    }).catch(res => {
                        console.log(res);
                    })  
            }
        },
    },

    data() {
        return {
            code: [],
            employee: {},
            employeeEmpty: {},
        }
    },
}
</script>