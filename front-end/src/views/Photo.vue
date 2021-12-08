<template>
<div class="home">
  <div class="spacer"></div>
  <div class="holder">
    <img v-bind:src="this.path" height="500">

  </div>
  <div class="holder">
  <h3>{{title}} -- {{description}}</h3>
</div>
<div class="holder">
<h2>{{name}} -- {{date}}</h2>
</div>
</div>
</template>


<script>
import axios from 'axios';
import moment from 'moment';
//import ImageGallery from '@/components/ImageGallery.vue';
export default {
  name: 'Home',
  data() {
  return {
    photos: [],
    path: "",
    title: "",
    description: "",
    name: "",
    date: "",
    }
  },
  created() {
  this.getPhoto();
  },
  methods: {
   async getPhoto() {
     try {
       let response = await axios.get("/api/photos/single/" + this.$route.params.id);
       this.photos[0] = response.data;
     } catch (error) {
       this.error = error.response.data.message;
     }
     this.path = this.photos[0].path;
     this.title = this.photos[0].title;
     this.description = this.photos[0].description;
     this.name = this.photos[0].user.firstName + " " + this.photos[0].user.lastName;
     this.date = this.formatDate(this.photos[0].created);

   },
   formatDate(date) {
       return moment(date).format('d MMMM YYYY');
   },
 },
  components: {
  //   ImageGallery,
  },
}
</script>

<style scoped>

body{
  background-color: red;
}

.spacer{
  height: 200px;
}

.holder{
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
