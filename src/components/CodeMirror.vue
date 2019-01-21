<template>
  <div class="editor">
    <button @click="saveContent">Save Content</button>
    <button @click="addNode">Add Node</button>
    <codemirror ref="qcCm" v-model="content" :options="cmOptions"></codemirror>
    <div v-html="content"></div>
  </div>
</template>
<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

import 'codemirror/mode/htmlmixed/htmlmixed.js'
// import 'codemirror/theme/base16-dark.css'
// import 'codemirror/theme/ambiance.css'

export default {
  components: {codemirror},
  data() {
    return {
      content: '<h1>Hello, Mike</h1>',
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'text/html',
        // theme: 'ambiance',
        lineNumbers: true,
        line: true,
        // more codemirror options, 更多 codemirror 的高级配置...
      }
    }
  },
  computed: {
    editor () {
      return this.$refs.qcCm.codemirror
    }
  },
  mounted () {
    // eslint-disable-next-line 
    console.log("editor")
  },
  methods: {
    saveContent () {
      // eslint-disable-next-line 
      console.log(this.content)
    },
    addNode () {
      // create a node
      var htmlNode =document.createElement("h1");
      var text =  document.createTextNode("Text or whatever");
      htmlNode.appendChild(text)

      // call this after you initialized the editor.
      // the position must be like this {ch: YourCharecterNumber, line: YourLineNumber}
      this.editor.addWidget({ch:30 , line: 1},htmlNode, true)
    }
  }
}
</script>

<style>
.CodeMirror { text-align: left!important; }
</style>

