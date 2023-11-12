<script lang="ts">
    import Fa from 'svelte-fa';
    import { faExternalLinkAlt, faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
    import { fly } from 'svelte/transition';

    export let response: {
        content_name: string, 
        content_desc: string, 
        content_list: any
    }[];
    const portofolio = response[0];

    let isOpen = false;
    const showMore = (function() {
        isOpen = !isOpen;
    });
</script>

<style>    
    .portofolio-list .card {
        z-index: 2;
    }
    .portofolio-list .card .card-title {
        font-size: 16px; 
        line-height: 1.5em;
        height: 45px;
    }
    .portofolio-list .card .card-text {
        font-size: 14px; 
    } 
    .portofolio-list .card .card-image {
        position: relative;
        height: 220px;
        overflow: hidden;
    }
    .portofolio-list .card:hover .card-image .overflow {
        content: '';
        background: rgb(0,0,0,0.3);
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
    }

    .portofolio-list .card .overflow .techstack {
        list-style-type: none;
        position: absolute;
        bottom: 0;
        left: 15px;
        display: none;
    }
    .portofolio-list .card .techstack li {
        display: inline;
    }

    .portofolio-list .card .overflow .link {
        position: absolute;
        top: 15px;
        right: 10px;
        display: none;
    }
    .portofolio-list .card .overflow .link a {
        color: var(--dark);
        font-size: 13px;
        text-decoration: none;
        padding: 5px;
        border-radius: 3px;
        background: #fff;
    }

    .portofolio-list .card:hover .overflow .techstack,
    .portofolio-list .card:hover .overflow .link {
        display: block;
    }
</style>

<div class="container">
    <div class="content text-center mb-4">
        <div class="content-name center-line">
            <h1 class="pb-2">
                {@html portofolio.content_name}
            </h1>
        </div>
        <div class="content-desc">
            <p class="text-muted">
                {@html portofolio.content_desc}
            </p>
        </div>
    </div>

    <div class="row row-eq-height portofolio-list mb-4">
        {#each portofolio.content_list as value, index}
        {#if index > 5 && !isOpen}
        <div></div>
        {:else}
        <div class="col-md-6 col-xl-4 mb-3" in:fly="{{delay: (index * 100)}}">
            <div class="card bg-navy h-100">
                <div class="card-image">
                    <div class="overflow">
                        {#if value['url']}
                        <div class="link">
                            <a href="{value['url']}" target="_blank">
                                <Fa icon={faExternalLinkAlt} class="mr-2"/>See Project
                            </a>
                        </div>
                        {/if}
                        <ul class="techstack pl-0">
                            {#each value["techstack"] as techstack}
                                <li><span class="badge badge-light mr-1">{techstack}</span></li>
                            {/each}
                        </ul>
                    </div>
                    <img src="{value['image']}" class="card-img-top" alt="{value['image_alt']}">
                </div>
                <div class="card-body">
                    
                    <h5 class="card-title">{@html value['name']}</h5>
                    <p class="card-text">
                        {@html value['description']}
                    </p>
                </div>
            </div>
        </div>
        {/if}
        {/each}
    </div>
    <div class="text-center">
        <a href="/" class="btn btn-outline-light" on:click|preventDefault={showMore}>
            {#if !isOpen}
            <Fa icon={faAngleDoubleDown} class="mr-2"/>Show More
            {:else}
            <Fa icon={faAngleDoubleUp} class="mr-2"/>Show Less
            {/if}
        </a>
    </div>
</div>