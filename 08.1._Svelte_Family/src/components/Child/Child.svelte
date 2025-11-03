<script>
    const { name, familySheep , isGirl, onShowLove, eatCookie } = $props();

    import { fridgeMessages } from "../../stores/fridgeStore.js";

    let fridgeMessageInput = $state("");

    function handleWriteFridgeMessage() {
        //fridgeMessages.set([...$fridgeMessages, fridgeMessageInput]); //ver 1
        //fridgeMessages.update(messages => [...messages, fridgeMessageInput]); //ver 2
        fridgeMessages.update(messages => {
            messages.push(fridgeMessageInput);
            return messages;
        });
        fridgeMessageInput = "";
    }
</script>

<div class={familySheep || "not-a-sheep"}
    class:is-girl={isGirl}
    class:is-boy={!isGirl}
>
<h3>{name}</h3>
</div>

<button onclick={() => onShowLove(name)}>Show your parent some love </button>
<button onclick={() => eatCookie(name)}>Eat a cookie 🍪 </button>

<input bind:value={fridgeMessageInput}/>
<button onclick={handleWriteFridgeMessage}>Write fridge message</button>

<style>
    .black-sheep{
        background-color: crimson;
    }

    .grey-sheep{
        background-color: navajowhite;
    }

    .not-a-sheep{
        background-color: yellowgreen;
    }
    .is-girl{
        border: 0.5em solid rebeccapurple;
    }
    .is-boy{
        border: 0.5em solid cadetblue;
    }
</style>