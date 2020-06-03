// Navbar
export const HTML = `
<nav class="navbar navbar-expand-lg">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false"
        aria-label="Toggle Navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto"></ul>
    </div>
    <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn my-2 my-sm-0" type="submit">Search</button>
    </form>
</nav>`.trim();

// Item
export const HTMLItem = `
<li class="nav-item">
    <a class="nav-link" href="#">
        <span class="sr-only">(current)</span>
    </a>
</li>`.trim();