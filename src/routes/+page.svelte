<script>
    import Header from './Header.svelte';
    import Hero from './Hero.svelte';
    import About from './About.svelte';
    import Pricing from './Pricing.svelte';
    import Footer from './Footer.svelte';
    export let data;
</script>

{#if data?.countries?.length}
<ul>
  {#each data.countries as country}
    <li>{country.name}</li>
  {/each}
</ul>

<main>
    <Header />
    <Hero  />
    <About />
    <Pricing />
    <Footer />
</main>

