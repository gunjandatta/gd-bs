// Carousel
export const HTML = `
<div class="carousel slide" data-bs-ride="carousel">
    <ol class="carousel-indicators"></ol>
    <div class="carousel-inner"></div>
    <a class="carousel-control-prev" href="#" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </a>
    <a class="carousel-control-next" href="#" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </a>
</div>`.trim();

// Carousel Item
export const HTMLItem = `
<div class="carousel-item">
    <img class="d-block w-100" />
    <div class="carousel-caption"></div>
</div>`.trim();