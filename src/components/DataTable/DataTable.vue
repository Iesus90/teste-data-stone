<template>
  <div class="table-container">
    <table>
      <caption>{{ caption }}:</caption>
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id" @click="editItem(item)">
          <td v-for="(field, index) in fields" :key="index">
            <template v-if="field === 'active'">
              <v-icon v-if="item[field] === 'yes'" name="fa-check-square" scale="2" color="#2dd118bd" />
              <v-icon v-else name="fa-window-close" scale="2" color="#d11818bd" />
            </template>
            <template v-else>
              {{ item[field] }}
            </template>
          </td>
          <td v-if="actionButton">
            <button @click="actionButton(item)">{{ actionButtonLabel }}</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    headers: {
      type: Array,
      required: true
    },
    fields: {
      type: Array,
      required: true
    },
    caption: {
      type: String,
      default: "List"
    },
    actionButton: {
      type: Function
    },
    actionButtonLabel: {
      type: String,
      default: "Action"
    }
  },
  methods: {
    editItem(item) {
      this.$emit('edit', item);
    }
  }
};
</script>

<style scoped>
  @import './style.css';
</style>