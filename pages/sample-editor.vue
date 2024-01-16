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