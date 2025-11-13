<script>
    import { onMount } from "svelte";
    import { on } from "svelte/events";
    let housingmarket;

    onMount(() => { //onMount bliver kaldt når komponenten er blevet "mounted" i DOM'en og kun bliver kaldt 1 gang
    fetch("http://localhost:8080/houses", {
        credentials: "include",
    })
    .then((response) => response.json())
    .then((result) => {
        housingmarket = result.data;
        });
    });

    function addHouse() {
        const newhouse = {
            street: "Ugandavej"
        }
        fetch("http://localhost:8080/houses", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newhouse),
        })
        .then((response) => response.json())
        .then((result) => {
            housingmarket = result.data; //opdaterer housingmarket med den nye liste af huse
        });
    }
    </script>

<h1>Housing Market</h1>
<h2> Stonks </h2>

<button onclick={addHouse}>Add a new house</button>

{#each housingmarket as house}
    <h4>{house.street}</h4>
{/each}

