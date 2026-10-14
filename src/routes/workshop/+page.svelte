<script>
 import Header from '../Header.svelte';
 import AI from './AI.svelte';
 import WorkshopAbout from './workshopAbout.svelte';
 let { data, form } = $props();
 import Footer from '../Footer.svelte';
</script>

<main>
<Header />
<WorkshopAbout />
<AI {data} {form} />
<Footer />
</main>

