<script context="module" lang="ts">
    export function preload() {
		return this.fetch('json/skill.json').then(r => r.json()).then((response: {
            content_name: string, 
            content_desc: string, 
            content_list: any
        }[]) => {
			return { response };
		});
	}
</script>

<script lang="ts">
    import { fly } from 'svelte/transition';

    export let response: {
        content_name: string, 
        content_desc: string, 
        content_list: any
    }[];
</script>

<style>   
    .skill-list .card {
        height: 160px;
    }
    .skill-list .card, .skill .card .card-header {
        border-radius: 10px;
    }
    .skill-list .card .card-image {
        height: 85px;
    }
    .skill-list .card .card-image img {
        width: 64px;
        height: 64px;
    }
</style>

<div class="container mb-4">
    {#each response as skill, index}
    <div class="content mb-4">
        <div class="content-name">
            {#if index > 0}
            <h4 class="pb-2">
                {@html skill.content_name}
            </h4>
            {:else}
            <h1 class="pb-2">
                {@html skill.content_name}
            </h1>
            {/if}
        </div>
        <div class="content-desc">
            <p class="text-muted">
                {@html skill.content_desc}
            </p>
        </div>
    </div>

    <div class="row row-eq-height skill-list mb-3">
        {#each skill.content_list as value, index}
        <div class="col-6 col-lg-3 col-xl-2 mb-3">
            <div class="card shadow-sm bg-navy" in:fly="{{delay: (index * 100)}}"> 
                <div class="card-image text-center pt-4 pr-5 pl-5 ">
                    <img src="{value['image']}" class="card-img-top" alt="{value['name']}">
                </div>
                <div class="card-header border-0 text-center mt-4">
                    {value['name']}
                </div>
            </div>
        </div>
        {/each}
    </div>
    {/each}
</div>