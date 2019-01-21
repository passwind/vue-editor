import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import CodeMirror from './components/CodeMirror'
import Quill from './components/Quill'
import QuillPro from './components/QuillPro'
import TinyMCE from './components/TinyMCE'
import CKEditor from './components/CKEditor'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/ckeditor',
      name: 'ckeditor',
      component: CKEditor,
    },
    {
      path: '/tm',
      name: 'tinymce',
      component: TinyMCE,
    },
    {
      path: '/quill',
      name: 'quill',
      component: Quill,
    },
    {
      path: '/quillpro',
      name: 'quillpro',
      component: QuillPro,
    },
    {
      path: '/cm',
      name: 'codemirror',
      component: CodeMirror,
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    }
  ],
  linkActiveClass: 'active',
  mode: 'history' // do not use /#/.
})

export default router
