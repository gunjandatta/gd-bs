// Navbar
export const HTML = `
<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false"
            aria-label="Toggle Navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto mb-2 mb-lg-0"></ul>
        </div>
        <form class="d-flex">
            <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn" type="submit">Search</button>
        </form>
    </div>
</nav>`.trim();

// Item
export const HTMLItem = `
<li class="nav-item">
    <a class="nav-link" href="#">
        <span class="visually-hidden">(current)</span>
    </a>
</li>`.trim();