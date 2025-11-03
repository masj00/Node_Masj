<script>
    import Child from "../Child/Child.svelte";

    const { parentName, children } = $props();

      const loveHistory = $state([
        { 
            name: "self-love",
            love: "💞"
    }]);

    function handleShowLove(childsName) {
        loveHistory.push({
            name: childsName,
            love: "💞"
        });
    }

    const cookieJar = $state(["🍪", "🍪", "🍪", "🍪", "🍪"]);
    const cookieHistory = $state([
        { 
            name: "",
            eat: ""
    }
    ]);

    function handleEatCookie(childsName) {
        cookieHistory.push({
            name: childsName,
            eat: "ate a cookie 🍪"
        });
        cookieJar.pop();
    
    }

    // assignment: allow childen to eat a cookie from the jar
</script>

<h2>{parentName}</h2>

{#each loveHistory as love}
    <span>{love.name}: {love.love} </span>
{/each}

{cookieJar.length} cookies left in the jar 
{#each cookieHistory as cookie}
    <span>{cookie.name + " " + cookie.eat}: {cookie.cookie}</span>
{/each}


{#each children as child (child.name)}
<!-- hvis mange keys i child så brug ikke ...-->
    <Child {...child} onShowLove={handleShowLove} EatCookie={handleEatCookie}/>
{/each}