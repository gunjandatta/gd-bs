// Dropdown
export const HTML = `
<div class="dropdown">
    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false"></button>
    <ul class="dropdown-menu"></ul>
</div>`.trim();

// Form
export const HTMLForm = `
<div>
    <label></label>
    <select class="form-select"></select>
</div>`.trim();

// Navigation
export const HTMLNavItem = `
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false"></a>
    <ul class="dropdown-menu"></ul>
</li>`.trim();

// Split
export const HTMLSplit = `
<div class="btn-group">
    <button type="button" class="btn"></button>
    <button class="btn dropdown-toggle dropdown-toggle-split" type="button" data-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu"></ul>
</div>`.trim();