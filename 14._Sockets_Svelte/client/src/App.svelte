<script>
    import Colors from './pages/Colors/Colors.svelte';
    import Registration from './pages/Registration/Registration.svelte';

    import { nickname } from './stores/nicknameStore.js';

    //localstorage bruges til nickname persistence ved refresh (darkmode toggle eller rsådan noget)
</script>

<!-- svelte ting så den først går i registration og derefter colors -->
{#if !$nickname}
<Registration />
{:else}
<Colors />
{/if}