<script lang="ts">
    import { onMount } from 'svelte';
    import About from '../components/About.svelte';
    import Career from '../components/Career.svelte';
    import Portofolio from '../components/Portofolio.svelte';
    import Skill from '../components/Skill.svelte';
    import Contact from '../components/Contact.svelte';
    import SocialMediaFloating from '../components/SocialMediaFloating.svelte';

    const fetchAll = (async function() {
        return Promise.all([
            fetch('json/career.json'),
            fetch('json/portofolio.json'),
            fetch('json/skill.json'),
        ]).then(function (responses) {
	        // Get a JSON object from each of the responses
            return Promise.all(responses.map(function (response) {
                return response.json();
            }));
        }).catch(err => {
            throw err;
        });
    });

    let resolve = Promise.resolve([]);
    onMount(function() {
        resolve = fetchAll();
    });
</script>

<style>
    section {
        padding: 1.5rem 0;
    }
</style>

<svelte:head>
	<title>Bramanda Febri Suwandi</title>
</svelte:head>

<!-- Social Media Floating in Right -->
<SocialMediaFloating/>

<!-- All Section -->
<section id="about">
    <About/>
</section>
<section id="career">
    {#await resolve}
        <div></div>
    {:then  result} 
        <Career response={result[0]}/>
    {:catch error}
        <div class="text-center">
            <p>Failed to load career data.</p>
        </div>
    {/await}
</section>
<section id="portofolio">
    {#await resolve}
        <div></div>
    {:then  result} 
        <Portofolio response={result[1]}/>
    {:catch error}
        <div class="text-center">
            <p>Failed to load portofolio data.</p>
        </div>
    {/await}
</section>
<section id="skill">
    {#await resolve}
        <div></div>
    {:then  result} 
        <Skill response={result[2]}/>
    {:catch error}
        <div class="text-center">
            <p>Failed to load skill & tools data.</p>
        </div>
    {/await}
</section>
<section id="contact">
    <Contact/>
</section>