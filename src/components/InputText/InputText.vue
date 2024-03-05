<template>
  <div class="form-group">
    <label :for="id">
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :required="isRequired"
      @input="updateInput"
      :aria-required="isRequired ? 'true' : 'false'"
      aria-invalid="false"
    />
  </div>
</template>

<script>
function isValidInputType(value) {
  const validTypes = ["text", "password", "email", "number"];
  return validTypes.includes(value);
}

export default {
  name: "InputText",
  props: {
    id: { type: String, required: true },
    label: { type: String, required: true },
    modelValue: { type: [String, Number], default: "" },
    type: { type: String, default: "text", validator: isValidInputType },
    isRequired: { type: Boolean, default: false }
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  }
};
</script>

<style>
  @import './style.css';
</style>