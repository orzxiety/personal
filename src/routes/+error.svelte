<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    onMount(() => {
        if ($page.status === 404) {
            goto('/')
        }
    })
</script>

{#if $page.status !== 404}
    <h1 class="text-center">{$page.status}: {$page.error?.message}</h1>
{/if}