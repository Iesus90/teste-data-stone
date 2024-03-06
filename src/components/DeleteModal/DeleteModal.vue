<template>
  <div class="modal-overlay" v-show="isOpen">
    <div class="modal">
      <div class="modal-content">
        <p>{{ message }}</p>
        <div class="button-container">
          <button @click="deleteAndClose" style="background-color: #d11818bd;">Delete</button>
          <button @click="closeModal" style="margin-left: 1rem;">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    registerId: Number,
    deleteFunction: Function
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
      this.$emit('close');
    },
    deleteAndClose() {
      this.deleteFunction(this.registerId);
      this.closeModal();
    }
  }
}
</script>

<style scoped>
  @import './style.css';
</style>