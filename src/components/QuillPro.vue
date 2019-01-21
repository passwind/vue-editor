<template>
  <div class="editor">
    <button @click="saveContent">Save Content</button>
    <vue-editor 
      :customModules="customModulesForEditor"
      :editorOptions="editorSettings"
      v-model="content">
    </vue-editor>
    <div v-html="content"></div>
  </div>
</template>
<script>
import { VueEditor } from 'vue2-editor'
import { ImageDrop } from 'quill-image-drop-module'
// import { ImageResize } from 'quill-image-resize-module'

export default {
  components: {VueEditor},
  data() {
    return {
      content: '<h1>Hello, Mike</h1>',
      customModulesForEditor: [
        { alias: 'imageDrop', module: ImageDrop }
        // { alias: 'imageResize', module: ImageResize }
      ],
      editorSettings: {
        modules: {
          imageDrop: true
          // imageResize: {}
        }
      }
    }
  },
  methods: {
    saveContent () {
      // eslint-disable-next-line 
      console.log(this.content)
    }
  }
}
</script>
