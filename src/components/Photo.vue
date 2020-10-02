<template>
  <div class="lightbox" @click.self="closeLightbox">    <img :src="photoUrl(photo.filename)">    <div class="lightbox-info">
      <div class="lightbox-info-inner">
        <p v-if="photo.title">Title: {{ photo.title }}</p>
        <p v-if="photo.location">Location: {{ photo.location }}</p>
        <p v-if="photo.photographer">
          Photographer:
          <a rel="nofollow" :href="photo.photographer.url">
            {{ photo.photographer.name }}
          </a>
        </p><p v-if="photo.source">
          via
          <a rel="nofollow" :href="photo.source.url">
            {{ photo.source.name }}
          </a>
        </p>
        <p>
          <button @click.self="tagPhoto" class="button">Tag me</button>
        </p>
      </div>
    </div>  </div>
</template>
<script>
import photos from '@/photos.json';export default {
  name: 'Photo',
  data() {
    return {
      photos,
    };
  },
  computed: {
    photo() {
      return this.photos.find((photo) => {
        return photo.id === Number(this.$route.params.id);
      });
    },
  },
  methods: {
    photoUrl(filename) {
      return require(`../images/${filename}`);
    },
    closeLightbox() {
      this.$router.push('/');
    },
    tagPhoto(){

    }
  },
};
</script>
<style>
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
}  .lightbox img {
  margin: auto;
  width: 100%;
  grid-column-start: 2;
}  .lightbox-info {
  margin: auto 2rem auto 0;
}  .lightbox-info-inner {
  background-color: #FFFFFF;
  display: inline-block;
  padding: 2rem;
}
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
}
</style>
