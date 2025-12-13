<script>
    import io from 'socket.io-client'

    import { onMount } from 'svelte';

    import ColorsList from '../../component/ColorsList/ColorsList.svelte';

    import { nickname } from '../../stores/nicknameStore.js';

    import { colorsList } from '../../stores/colorsList.js';
    let colorInputValue = "#0000ff";
    let socket;

    onMount(() => {
        socket = io("http://localhost:8080");

        socket.on("server-sends-color", (data) => {
            document.body.style.backgroundColor = data.color;
        });
    });

    function submitColor() {
        const newColors = {color: colorInputValue, nickname: $nickname};

    socket.emit("client-send-color", newColors);

    colorsList.update((colorsListStoreValues) => {
        colorsListStoreValues.push(newColors);
        return colorsListStoreValues;
    })};

</script>


<h2> Colors</h2>

<input type="color" bind:value={colorInputValue} />
<button onclick={submitColor}>Send Color</button>

<ColorsList />