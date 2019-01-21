<template>
  <div class="editor">
    <button @click="saveContent">Save Content</button>
    <vue-editor v-model="content"></vue-editor>
    <div v-html="content"></div>
  </div>
</template>
<script>
import { VueEditor } from 'vue2-editor'

export default {
  components: {VueEditor},
  data() {
    return {
      content: '<h1>Hello, Mike</h1>'
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
    }
  }
}
</script>
