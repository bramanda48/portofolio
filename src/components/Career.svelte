<script lang="ts">
    import Fa from 'svelte-fa';
    import { faCloudDownloadAlt, faAddressBook } from '@fortawesome/free-solid-svg-icons';
    import { fade } from 'svelte/transition';

    export let response: {
        content_name: string, 
        content_desc: string, 
        content_list: any
    }[];
    const career = response[0];
</script>

<style>
    .container {
        z-index: 2;
    }

    .career-list .card .company {
        font-size: 15px; 
    }
    .career-list .card .time-work {
        font-size: 13px; 
    }
</style>

<div class="container mb-4 position-relative">
    <div class="content mb-4">
        <div class="content-name">
            <h1 class="pb-2">
                {@html career.content_name}
            </h1>
        </div>
        <div class="content-desc">
            <p class="text-muted">
                {@html career.content_desc}
            </p>
        </div>
    </div>
    
    <div class="row row-eq-height career-list mb-2">
        {#each career.content_list as value, index}
        <div class="col-md-6 col-xl-4 mb-3">
            <div class="card bg-navy h-100 rounded-lg" in:fade="{{delay: (index * 300)}}">
                <div class="card-header">
                    <h5 class="card-title">{value['name']}</h5>
                    <h6 class="card-subtitle company mb-2">{value['company']} - {value['location']}</h6>
                    <h6 class="card-subtitle time-work">{value['time_work']}</h6>
                </div>
                <div class="card-body">
                    <ol class="pl-3 mb-0" type="1">
                        {#each value['description'] as desc, index}
                            {#if index < (value['description'].length - 1)}
                                <li class="mb-2">{desc}</li>
                            {:else}
                                <li>{desc}</li>
                            {/if} 
                        {/each}
                    </ol>
                </div>
            </div>
        </div>
        {/each}
    </div>

    <div class="card h-100 bg-navy">
        <div class="card-body">
            <div class="row">
                <div class="col-md-6 mb-3 mb-md-auto">
                    <div class="mt-1">
                        <h3 class="mb-0">
                            Let's talk about everything!
                        </h3>
                    </div>
                </div>
                <div class="col-md-6">
                    <a href="/resume.pdf" class="btn btn-outline-light float-lg-right mb-1">
                        <Fa icon={faCloudDownloadAlt} class="mr-2"/><span class="d-none d-md-inline">Download</span> Resume
                    </a>
                    <a href="/#contact" class="btn btn-outline-light float-lg-right mr-2 mb-1">
                        <Fa icon={faAddressBook} class="mr-2"/>Contact Us
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>