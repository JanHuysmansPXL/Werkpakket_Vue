
<script>
export default {
        data() {
            return {
                
            }
        },
        props: {
            mainTitle: String,
            subTitle: String
        }
    }
</script>

<template>
    <!-- POPULAR PRODUCTS - CARD GALLERY -->
    <section class="gallery bg-darkest">
        <p class="txt-body_md">Head into the future. Wear Auro.<br></p>
        <h3 class="txt-title_sm">Discover our popular products:</h3>
        <div class="cards-wrapper bg-black">
            <div class="card">
                <div class="card-overlay">
                    <h1 class="card-overlay-heading">Auro Steroid</h1>
                    <p class="card-overlay-paragraph">€299</p>
                    <a type="button" class="card-overlay-button" href="product_detail.html">Order now</a>
                </div>
                <img class="card-image" src="./../assets/images/gallery_3.png" alt="AuroPods - Nubis">
            </div>
            <div class="card">
                <div class="card-overlay">
                    <h1 class="card-overlay-heading">Auro Phonos</h1>
                    <p class="card-overlay-paragraph">€259</p>
                    <a type="button" class="card-overlay-button" href="product_detail.html">Order now</a>
                </div>
                <img class="card-image" src="./../assets/images/gallery_4.png" alt="Auropods - Phonos">
            </div>
            <div class="card">
                <div class="card-overlay">
                    <h1 class="card-overlay-heading">Auro Nova</h1>
                    <p class="card-overlay-paragraph">€259</p>
                    <a type="button" class="card-overlay-button" href="product_detail.html">Order now</a>
                </div>
                <img class="card-image" src="./../assets/images/case_2.png" alt="Auropods - Nova">
            </div>
            <div class="card">
                <div class="card-overlay">
                    <h1 class="card-overlay-heading">Auro Fluxus</h1>
                    <p class="card-overlay-paragraph">€209</p>
                    <a type="button" class="card-overlay-button" href="product_detail.html">Order now</a>
                </div>
                <img class="card-image" src="./../assets/images/case_4.png" alt="Auropods - Fluxus">
            </div>
        </div>
    </section>
</template>




