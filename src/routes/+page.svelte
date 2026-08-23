<script>
    import Header from './Header.svelte';
    import Hero from './Hero.svelte';
    import ForgeEngine from './ForgeEngine.svelte';
    import Section3 from '$lib/Section3.svelte';
    import RenderingEngine from '$lib/RenderingEngine.svelte';
    import CadStudio from '$lib/CadStudio.svelte';
    import Pricing from './Pricing.svelte';
    import AI from './AI.svelte'; 
    let { data, form } = $props();

</script>


<main>
    <Header />
    <Hero  />
     <AI {data} {form}/>
    <ForgeEngine />
    <Section3 />
    <RenderingEngine />
    <CadStudio />
    <Pricing />
</main>
