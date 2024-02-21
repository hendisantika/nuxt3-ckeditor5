<template>
  <div>
    <h1 class="container mt-3 mb-3">Sample CKEditor with Nuxt.js</h1>
    <div class="container">
      <rich-editor :value="editorInput" @input="event => editorInput = event" />
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

export default {
  data() {
    return {
      editorInput: ''
    }
  },
}
</script>
