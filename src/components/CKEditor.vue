<template>
  <div>
    <ckeditor :editor="editor" v-model="content"></ckeditor>
  </div>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  components: {
    ckeditor: CKEditor.component
  },
  data: function () {
    return {
      'content': '<h1>Hello, Mike</h1>',
      editor: ClassicEditor
    }
  }
}
</script>