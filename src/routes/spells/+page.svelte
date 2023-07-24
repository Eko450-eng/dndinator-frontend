<script lang="ts">
	import { onMount } from "svelte";
  let spells: Spell[] = []

  type Spell = {
  casting_time: string,
  classes?: string[],
  components?: string[],
  desc?: string,
  duration: string,
  higherdesc?: string,
  id?: number,
  level?: number,
  name: string,
  range: string,
  }

  onMount(async()=>{
    fetch("http://localhost:4000/spells")
    .then(res => res.json())
    .then(data=> spells = data)
    // .then(data=> console.log(data))
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
