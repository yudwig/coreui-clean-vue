<template>
  <CCard class="item-form shadow-sm">
    <CCardHeader>
<!--      <strong>New Item</strong>-->
      <strong>{{formTitle}}</strong>
    </CCardHeader>
    <CCardBody>
      <CForm>
        <CRow>
          <CCol>
            <CInput v-model="form.title" label="Title" placeholder="Enter title of item"></CInput>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <ItemCommentFormAtom v-model="form.comment"></ItemCommentFormAtom>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <label>Image</label>
            <div
              class="image"
              :style="{'background-image': 'url(' + form.imageUrl + ')'}">
              <CJumbotron
                class="image-upload-form d-flex align-items-center justify-content-center"
                :class="{'image-uploaded': form.imageUrl, 'dragging': isDragging }"
                @click="handleFileSelect"
                @dragover="handleDragOver"
                @drop="handleFileDrop"
                @dragleave="handleDragLeave">
                <div
                  class="image-upload-description d-flex flex-column align-items-center"
                  v-if="!isDragging">
                  <CRow class="mb-1">
                    <CIcon class="upload-icon" name="cil-cloud-upload" size="custom"></CIcon>
                  </CRow>
                  <CRow class="mt-1">
                    <p class="lead">Drag and drop files here.</p>
                  </CRow>
                  <CRow class="mt-1">
                    <p>or</p>
                  </CRow>
                  <CRow class="mt-1">
                    <CInputFile id="image-file-input" custom @change="(file) => onUploadImage(file)"></CInputFile>
                  </CRow>
                </div>
                <div class="image-dragging-mask d-flex flex-column align-items-center justify-content-center"
                     v-if="isDragging">
                  <CRow class="mb-1">
                    <font-awesome-icon class="drag-over-icon" :icon="['far', 'hand-point-down']"/>
                  </CRow>
                  <CRow class="mt-1">
                    <p class="lead">Drop to upload.</p>
                  </CRow>
                </div>
              </CJumbotron>
            </div>
            <!--          <img :src="url" @load="revokeUrl(this)">-->
          </CCol>
        </CRow>
      </CForm>
    </CCardBody>
    <CCardFooter>
      <RegisterButtonAtom class="mr-3" @registerButtonClicked="register"></RegisterButtonAtom>
      <CancelButtonAtom v-if="cancelButton" @cancelButtonClicked="cancel"></CancelButtonAtom>
    </CCardFooter>
  </CCard>
</template>

<script>
  import ItemTitleFormAtom from "../atoms/ItemTitleFormAtom";
  import ItemCommentFormAtom from "../atoms/ItemCommentFormAtom";
  import RegisterButtonAtom from "../atoms/RegisterButtonAtom";
  import CancelButtonAtom from "../atoms/CancelButtonAtom";

  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
  import {fas} from '@fortawesome/free-solid-svg-icons';
  import {far} from '@fortawesome/free-regular-svg-icons'
  import {library} from "@fortawesome/fontawesome-svg-core";
  library.add(fas, far);

  export default {
    name: 'ItemFormOrganism',
    props: {
      item: {
        type: Object,
        default: () => ({
          title: '',
          comment: '',
          imageUrl: ''
        })
      },
      cancelButton: {
        type: Boolean,
        default: false
      },
      formTitle: {
        type: String,
        default: 'New Item'
      }
    },
    data() {
      return {
        isDragging: false,
        form: this.item
      }
    },
    components: {
      FontAwesomeIcon,
      ItemCommentFormAtom,
      ItemTitleFormAtom,
      RegisterButtonAtom,
      CancelButtonAtom
    },
    watch: {
      item: {
        async handler(newItem, oldItem) {
          console.log('watch handler is called.', newItem, oldItem);
          this.form = Object.assign({}, newItem);
        },
        immediate: true
      }
    },
    methods: {
      register() {
        console.log('register is called.');
        // console.log(this.form);
        // this.$emit('register', this.form);

        this.$emit('register', this.form);
      },
      cancel() {
        // console.log()
        this.form.imageUrl = 'http://localhost:3000/images/1968.88%20-%20A%20City%20Park.jpeg';
        // this.item.imageUrl = 'http://localhost:3000/images/1968.88%20-%20A%20City%20Park.jpeg';
        console.log('cancel is called.');
      },
      onUploadImage(file) {
        console.log(file);
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file[0]);
        console.log('file: ', file[0]);
        fileReader.onload = (e) => {
          // this.form.imageUrl = e.target.result;
          this.form.imageUrl = e.target.result;
          console.log('dataUrl:', e.target.result);
          this.url = e.target.result;
        }
      },
      handleFileSelect(e) {
        const inputForm = document.getElementById('image-file-input');
        console.log(this.$refs);
        inputForm.click();
      },
      handleDragOver(e) {
        this.isDragging = true;
        e.stopPropagation();
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
      },
      handleDragLeave(e) {
        this.isDragging = false;
      },
      handleFileDrop(e) {
        e.stopPropagation();
        e.preventDefault();
        this.onUploadImage(e.dataTransfer.files);
        this.isDragging = false;
        console.log(e);
      }
    }
  }
</script>

<style lang="scss">
  @import '~@coreui/coreui/scss/coreui.scss';
  @import '../../../assets/scss/app-colors';
  .item-form {
    max-width: 950px;
  }
  .image {
    cursor: pointer;
    background-position: center;
    background-repeat: no-repeat;
    background-color: $appBasicBgColor;

    /* for upload form's common styles. */
    .image-upload-form {
      position: relative;
      border-width: 1px;
      border-style: dashed;
      border-color: $gray-300;
      background-color: white;
      height: 350px;
      .upload-icon {
        width: 100px;
      }
      p {
        margin: 0;
      }
    }
    /* for before upload image. */
    .image-upload-form:not(.image-uploaded) {
      transition: 0.3s;
      &:hover {
        transition: 0.3s;
        background-color: $gray-100;
      }
    }
    /* for after upload image. */
    .image-upload-form.image-uploaded {
      opacity: 0;
      transition: 0.3s;
      &:hover {
        transition: 0.3s;
        opacity: 0.6;
      }
    }

    .image-upload-form.dragging {
      transition: 0s;
      border-color: $primary;
      border-width: 1px;
      background-color: $gray-100;
    }

    .image-upload-form.dragging:after {
      content:'';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 10000;
    }
    .drag-over-icon {
      width: 100px;
      height: 100px;
    }
  }
</style>
