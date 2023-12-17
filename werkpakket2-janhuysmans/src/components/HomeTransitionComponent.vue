
<script>

export default {
    data() {
        return {
            // Images
            imageSource: "src/assets/auro_vid2.mp4",
            // Text
            transitionTitle: 'Feel the Future.',
            transitionSubtitle: 'AURO is your companion forward.',
            transitionText: 'We  deliver clarity, silence, a bridge between the rhythms of modernity and the timeless grace of a bygone age. Let AURO become an extension of you, enriching life and proving that in the midst of the cacophony, music could be a sanctuary, and innovation could be a timeless marvel.',
             }
        },
        methods:{},
        computed: {},
        props: {},
    }
</script>

<template>
    <section class="home-transition">
            <h1 class="txt-subheader">{{ transitionTitle }}</h1>
            <h3 class="txt_body_xl">{{ transitionSubtitle }}</h3>
            <h3 class="txt_body_xl">{{ transitionText }}</h3>
    </section>
</template>

<style scoped>

</style>





