<script lang="ts">
	import type { Character } from "../../types";
	import { onMount } from "svelte";

  let character: Character;
  let userId: number = 1;


  onMount(async()=>{
    fetch(`http://192.168.0.161:4000/character?id=${userId}`)
    .then(res => res.json())
    .then(data=> character = data)
  })
</script>

<svelte:head>
  <title>{character ? character.name : "Please login"}</title>
</svelte:head>

{#if character}
  <div class="card p-4 m-4 variant-filled-surface">
    <h1>{character.name} the {character.alignment} {character.race}</h1>
    <p>Level: {character.lvl} {character.class} </p>
    <div class="card flex space-x-20 m-4 p-4 variant-ghost-secondary">
      <p>HP: {character.hp}</p>
      <p>AC: {character.ac}</p>
      <p>Init: {character.init}</p>
    </div>
  </div>
{/if}
{#if !character}
  <h1>Please create a character first</h1>
{/if}
