<script lang="ts">
    import GoogleAnalytics from "sapper-google-analytics/GoogleAnalytics.svelte"
    import { stores } from "@sapper/app"
	import Nav from '../components/Nav.svelte';

    const ga_measurment_id = "G-YZF437MZTR";
    export let segment: string;
</script>

<style>
    :root {
        --navy: #0A192F !important;
        --navy-dark: #112240 !important;
        --navy-shadow: rgba(2,12,27,0.7) !important;
        --white: #dcdde1 !important;
        --green: #64ffda !important;
        --light-slate: #a8b2d1 !important;
    }
    :global(body) {
        font-family: 'Lato', sans-serif !important;
        background-color: var(--navy) !important;
        color: var(--white) !important;
        overflow: hidden scroll;
    }
    :global(.montserrat) {
        font-family: 'Montserrat', sans-serif !important;
    }

    :global(.animation-bounce) {
        animation: bounce 1s infinite alternate;
        -webkit-animation: bounce 1s infinite alternate;
    }
    @keyframes bounce {
        from { transform: translateY(0px); }
        to { transform: translateY(-15px); }
    }
    @-webkit-keyframes bounce {
        from { transform: translateY(0px); }
        to { transform: translateY(-15px); }
    }

    :global(.content .content-name) {
        position: relative;
        font-family: "Roboto", sans-serif; 
    }
    :global(.content .content-name::after) {
        content: '';
        width: 120px;
        height: 4px;
        position: absolute;
        bottom: 0px;
        background-color: var(--white); 
    }
    :global(.content .content-name.center-line::after) {
        left: 50%;
        transform: translate(-50%, 0); 
    }
    :global(.content .content-name h1) {
        letter-spacing: 5px; 
    }
    :global(.content .content-desc p) {
        font-size: 15px; 
    }

    :global(.btn) { 
        box-shadow: 0.1em 0.2em 0.3em var(--navy-shadow) !important; 
    }
    :global(.bg-navy) {
        background-color: var(--navy-dark) !important;
    }
</style>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato|Monoton|Montserrat:wght@300">
</svelte:head>

<Nav {segment}/>
<main>
	<slot></slot>
</main>

<!-- Google Analytics to Tracking -->
<GoogleAnalytics {stores} id={ga_measurment_id}/>