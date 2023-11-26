<script>
export default {
        data() {
            return {
                socialMedia: {
                    "facebook": "fab fa-facebook-square",
                    "instagram": "fab fa-instagram",
                    "youtube": "fab fa-youtube",
                    "snapchat": "fab fa-snapchat"
                },
                copyRight: "© AURO // All rights reserved."
            }
        },
        props: {
            mainTitle: String,
            subTitle: String
        }
    }
</script>

<template>
<!-- FOOTER SECTION -->
<footer class="footer bg-darkest">
    <div class="footer-header">
        <div>
            <h1 class="brand-title">AURO</h1>
            <p class="brand-subtitle">Feel the Future.</p>
        </div>
    </div>
    <div class="footer-social-media">
        <ul class="social-media">
            <li class="social-media-item"><a href="#" class="social-media-link"><i class="fab fa-facebook-square"></i></a></li>
            <li class="social-media-item"><a href="#" class="social-media-link"><i class="fab fa-instagram"></i></a></li>
            <li class="social-media-item"><a href="#" class="social-media-link"><i class="fab fa-youtube"></i></a></li>
            <li class="social-media-item"><a href="#" class="social-media-link"><i class="fab fa-snapchat"></i></a></li>
        </ul>
    </div>
    <div class="footer-copyright">
        <p class="footer-copyright-paragraph">{{ copyRight }}</p>
    </div>
</footer>
</template>

