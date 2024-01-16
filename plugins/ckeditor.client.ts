import CKEditor from '@ckeditor/ckeditor5-vue';
import Editor from '~/lib/CustomEditor';


export default defineNuxtPlugin(() => {
  return {
      provide: {
          ckeditor: {
            classic: Editor,
            editor: CKEditor
          }
      }
  }
});