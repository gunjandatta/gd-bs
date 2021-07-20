// Navbar
export const HTML = `
<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" aria-expanded="false"
            aria-label="Toggle Navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0"></ul>
        </div>
        <form class="d-flex mb-2 mb-lg-0">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn" type="submit">Search</button>
        </form>
    </div>
</nav>`.trim();

// Item
export const HTMLItem = `
<li class="nav-item">
    <a class="nav-link" href="#" role="link">
        <span class="visually-hidden">(current)</span>
    </a>
</li>`.trim();

// Item
export const HTMLItemButton = `
<li class="nav-item">
    <a class="btn" href="#" role="button">
        <span class="visually-hidden">(current)</span>
    </a>
</li>`.trim();