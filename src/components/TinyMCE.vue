<template>
  <div>
    <editor v-model="content"></editor>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
  components: {
    'editor': Editor
  },
  data: function () {
    return {
      'content': '<h1>Hello, Mike</h1>'
    }
  }
}
</script>

