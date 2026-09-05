<script>
 import Header from '../Header.svelte';
 import AI from './AI.svelte';
 let { data, form } = $props();
 import Footer from '../Footer.svelte';
</script>

<main>
<Header />
<AI {data} {form} />
<Footer />
</main>

