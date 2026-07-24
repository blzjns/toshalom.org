// Example custom module. This file is meant to be hosted somewhere reachable by URL
// (an R2 bucket, a CDN, even a local static file server for testing) and referenced
// by its URL when registering the module in the ERP app's Modules page.
//
// It never talks to the ERP database directly — the only data access it has is
// `window.ERP_SDK.call(scope)`, which is injected by the host's sandbox bootstrap
// and round-trips through the scope-checked data proxy on the Worker.
//
// Register this module with:
//   - Entry URL: wherever you host this file
//   - Tag name:  hello-widget
//   - Mount type: Dashboard widget
//   - Requested scope: opportunities:read

class HelloWidget extends HTMLElement {
  connectedCallback() {
    const root = this.attachShadow({ mode: "open" });
    root.innerHTML = `
      <style>
        :host { display: block; font-family: system-ui, sans-serif; }
        .title { font-size: 12px; color: #65788e; margin-bottom: 8px; }
        .row { display: flex; justify-content: space-between; padding: 4px 0; font-size: 13px; color: white; }
        .empty { font-size: 13px; color: #65788e; }
        .error { font-size: 12px; color: #b91c1c; }
      </style>
      <div class="title">Recent opportunities (via custom module)</div>
      <div id="content">Loading…</div>
    `;
    this.render();
  }

  async render() {
    const content = this.shadowRoot.getElementById("content");
    try {
      const opportunities = await window.ERP_SDK.call("opportunities:read");
      if (!opportunities.length) {
        content.innerHTML = `<div class="empty">No opportunities yet.</div>`;
        return;
      }
      content.innerHTML = opportunities
        .slice(0, 5)
        .map(
          (o) =>
            `<div class="row"><span>${escapeHtml(o.name)}</span><span>$${Number(
              o.estimatedValue,
            ).toLocaleString()}</span></div>`,
        )
        .join("");
    } catch (err) {
      content.innerHTML = `<div class="error">${escapeHtml(err.message || String(err))}</div>`;
    }
  }
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

export default HelloWidget;
