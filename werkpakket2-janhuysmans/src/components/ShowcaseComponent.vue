
<script>

export default {
    data() {
        return {
            // Images
            imageSource: "src/assets/auro_vid2.mp4",
            // Gallery
            showcaseTitle: 'Find your vibe.',
            showcaseSubtitle: 'You \'ve never felt like this before.',
            buttonText: 'Products',
             }
        },
        methods:{},
        computed: {},
        props: {},
    }
</script>

<template>
    <section class="showcase">
            <video class="video-bkg" v-bind:src="imageSource" muted loop autoplay></video>
            <div class="overlay"></div>
            <div class="showcase-text">
                <h2 class="txt-heading_xl" >{{ showcaseTitle }}</h2>
                <p class="txt-body_md">{{ showcaseSubtitle }}</p>
                <a><router-link to="/products" class="showcase-button">{{buttonText}}</router-link></a>
            </div>
    </section>
</template>



<style scoped>

</style>





