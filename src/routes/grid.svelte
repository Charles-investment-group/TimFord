<script>
  import { createEventDispatcher } from 'svelte';
  export let items = []; // [{ id, title, description, image? }, ...]
  export let columns = 'auto-fill'; // for customization if needed
  const dispatch = createEventDispatcher();

  function handleKey(e, item) {
 if (e.key === 'Enter' || e.key === ' ') {
 e.preventDefault();
 dispatch('select', item);
 }
  }

  function handleClick(item) {
 dispatch('select', item);
  }
</script>

<style>
  .grid {
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
 gap: 12px;
 align-items: stretch;
  }

  .cell {
 position: relative;
 background: #fff;
 border-radius: 8px;
 box-shadow: 0 1px 4px rgba(0,0,0,0.08);
 overflow: hidden;
 cursor: pointer;
 display: flex;
 flex-direction: column;
 min-height: 140px;
 transition: transform .12s ease, box-shadow .12s ease;
  }

  .cell:focus,
  .cell:focus-visible {
 outline: 3px solid #3b82f633;
 outline-offset: 2px;
  }

  .cell:hover {
 transform: translateY(-4px);
 box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  }

  .media {
 width: 100%;
 height: 90px;
 object-fit: cover;
 background: linear-gradient(135deg,#eef2ff,#fff);
  }

  .content {
 padding: 10px;
 display: flex;
 flex-direction: column;
 gap: 6px;
 flex: 1;
  }

  .title {
 font-weight: 600;
 font-size: 0.98rem;
 color: #111827;
  }

  / Description overlay visible on hover/focus for larger screens /
  .overlay {
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 background: linear-gradient(180deg, rgba(17,24,39,0.0) 0%, rgba(17,24,39,0.72) 50%, rgba(17,24,39,0.88) 100%);
 color: #fff;
 padding: 10px;
 transform: translateY(100%);
 transition: transform .14s ease;
 font-size: 0.9rem;
  }

  .cell:hover .overlay,
  .cell:focus-within .overlay {
 transform: translateY(0);
  }

  / For small screens, show description inline under the content /
  @media (max-width: 600px) {
 .overlay {
 position: static;
 transform: none;
 background: none;
 color: #374151;
 padding: 0;
 font-size: 0.9rem;
 }
  }

  .sr-only {
 position: absolute;
 left: -10000px;
 top: auto;
 width: 1px;
 height: 1px;
 overflow: hidden;
  }
</style>

<div class="grid" role="list">
  {#each items as item (item.id)}
 <div
 role="button"
 class="cell"
 tabindex="0"
 aria-label={item.title}
 on:click={() => handleClick(item)}
 on:keydown={(e) => handleKey(e, item)}
 >
 {#if item.image}
 <img src={item.image} alt="" class="media" />
 {:else}
 <div class="media" aria-hidden="true"></div>
 {/if}

 <div class="content">
 <div class="title">{item.title}</div>
 <!-- visible on small screens; on desktop overlay will appear on hover -->
 <div class="overlay" aria-hidden="false">{item.description}</div>
 </div>

 <span class="sr-only">Press Enter or Space to select</span>
 </div>
  {/each}
</div>
```

Example usage (App.svelte):

```svelte
<script>
  import Grid from './Grid.svelte';

  const items = [
 { id: 1, title: 'Analytics', description: 'View detailed usage analytics and reports.', image: 'https://picsum.photos/id/1015/400/200' },
 { id: 2, title: 'Settings', description: 'Configure preferences and account settings.', image: 'https://picsum.photos/id/1011/400/200' },
 { id: 3, title: 'Team', description: 'Manage team members and permissions.' },
 { id: 4, title: 'Billing', description: 'Update billing information and invoices.' },
  ];

  function onSelect(e) {
 const item = e.detail;
 // handle selection - navigate, open modal, etc.
 alert(`Selected: ${item.title}`);
  }
</script>

<Grid {items} on:select={onSelect} />