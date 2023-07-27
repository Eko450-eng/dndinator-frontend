<script lang="ts">
  import type { Spell } from "../../types"
	import { onMount } from "svelte";
  let spells: Spell[] = []

  onMount(async()=>{
    fetch("http://192.168.0.161:4000/spells")
    .then(res => res.json())
    .then(data=> spells = data)
  })
</script>

<svelte:head>
  <title>test</title>
</svelte:head>
<ul>
  {#each spells as Spell}
    <div class="card variant-filled p-4 m-10">
      <h2>{Spell.name}</h2>
      <p>Casting Time: {Spell.casting_time}</p>
      <p>Duraion: {Spell.duration}</p>
      <p>Range: {Spell.range}</p>
      {#if Spell.components != undefined}
        <p>Components: {Spell.components}</p>
      {/if}
      <p>{Spell.desc}</p>
      {#if Spell.higherdesc != undefined}
        <p class="mt-4">At higher Levels: {Spell.higherdesc}</p>
      {/if}
    </div>
  {/each}
</ul>
