// Dropdown
export const HTML = `
<div class="dropdown">
    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true"
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
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"></a>
    <ul class="dropdown-menu"></ul>
</li>`.trim();

// Split
export const HTMLSplit = `
<div class="btn-group">
    <button type="button" class="btn"></button>
    <button class="btn dropdown-toggle dropdown-toggle-split" type="button" data-bs-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false">
        <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu"></ul>
</div>`.trim();