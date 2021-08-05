<template>
  <div style="min-width: 100%;">
    <table style="position: relative;">
      <thead 
            style="
            max-height: 40px;
            position: sticky;
            top: 0px;
            background-color: #ffffff;
          ">
          <th></th>
          <th
          v-for="th in ths" 
          :key="th.name"
          :class="{'text-align-left': th.textLeft , 'text-align-center': th.center, 'text-align-right': th.textRight}" 
          >
          {{th.name}}
          </th>
      </thead>
      <tbody class="tbody-table">
        <tr
          style="height: 40px"
          v-for="element in list"
          :key="element[idOfRow.name]"
          @dblclick="updateById($event)"
          :id="element[idOfRow.name]"
        >
          <td>
            <input
              type="checkbox"
              v-model="checkedId"
              :value="element[idOfRow.name]"   
            />
          </td>
            <td 
            v-for="th in ths" :key="th.name"
            :class="{'text-align-left': th.textLeft , 'text-align-center': th.center, 'text-align-right': th.textRight}"
            >
              <slot>{{element[th.id]}}</slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {

    props: {
        ths: {
            type: Array,
            require: true,
        },

        list: {
            type: Array,
            require: true,
        },
        idOfRow: {
            type: Object,
            require: true,
        }
    },

    methods:{
        clearTable(){
            var table = document.getElementsByClassName('table');
            for(let i = table.rows.length -1; i > 0; i--){
                table.deleteRow(i);
            }
        },

        updateById(e){
            this.$emit('sendIdNeedToUpdateToParent', e.currentTarget.id);
        }
    },
    watch: {
        checkedId: function(){
          this.$emit('sendDeleteList', this.checkedId);
        },
    },
    data(){
        return{
            checkedId: [],
        }
    }
}
</script>