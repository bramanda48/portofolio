<script lang="ts">
	export let status: number;
	export let error: Error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
    .page-wrap {
        min-height: 70vh;
    }
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div class="page-wrap d-flex flex-row align-items-center">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 text-center">
                <span class="display-1 d-block">{status}</span>
                <div class="lead">The page you are looking for was not found.</div>
                <div class="mb-4 text-muted">
                    <span class="d-block">({error.message})</span>
                    <span class="d-block">
                        {#if dev && error.stack}
                            <pre>{error.stack}</pre>
                        {/if}
                    </span>
                </div>
                <a href="/" class="btn btn-primary btn-sm">Back to Home</a>
            </div>
        </div>
    </div>
</div>