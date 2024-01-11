<template>
  <ckeditor
      :config="config"
      :editor="editor"
      :value="value"
      @input="event => $emit('input', event)"
  />
</template>
<script>
let FullFreeBuildEditor;
let CKEditor;
if (process.client) {
  FullFreeBuildEditor = require('@blowstack/ckeditor5-full-free-build');
  CKEditor = require('@ckeditor/ckeditor5-vue')
} else {
  CKEditor = {component: {template: '<div></div>'}}
}

export default {
  name: 'ck-editor',
  components: {
    ckeditor: CKEditor.component
  },
  props: {
    value: {
      type: String,
      required: false
    },
    config: {
      type: Object,
      required: false,
      default: function () {
      }
    }
  },
  data() {
    return {
      editor: FullFreeBuildEditor,
    }
  },
};
</script>