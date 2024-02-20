<template>
  <div>
    <h1 class="container mt-3 mb-3">Sample CKEditor with Nuxt.js</h1>
    <div class="container">
      <client-only placeholder="loading...">
        <rich-editor value="editorInput" @input="event => editorInput = event" />
      </client-only>
    </div>
    <div class="container mt-3">
      <div class="row">
        <h2 class="col-md-12">Output</h2>
        <div>{{ editorInput }}</div>
      </div>
    </div>
    <div class="container mt-3">
      <div class="row">
        <h2 class="col-md-12">Preview</h2>
        <div v-html="editorInput"></div>
      </div>
    </div>
  </div>
</template>
<style>
/* page-with-editor.css */
body .ck-content .table table, body .ck-content .table td {
  border: dotted 1px #ddd;
}

/* page-with-editor-content.css */
body .ck-content .table table, body .ck-content .table td {
  border: none;
}
</style>
<script>

import RichEditor from '../components/rich-editor.vue';


export default {
  components: {
    richEditor: RichEditor
  },
  data() {
    return {
      editorInput: ''
    }
  },
}
</script>
