export const HTML = `
<div class="listbox">
    <label class="form-label" for="search-options"></label>
    <input class="form-control" id="search-options" list="options" placeholder="Type to search...">
    <datalist id="options"></datalist>
    <ul class="list-group"></ul>
</div>`.trim();

export const HTMLItem = `
<li class="list-group-item d-flex justify-content-between align-items-center active">
    <span class="badge bg-secondary rounded-pill">&times;</span>
</li>`.trim();