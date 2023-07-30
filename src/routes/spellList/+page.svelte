<script lang="ts">
  import type { Spell, User } from "./../../types"
  import Icon from '@iconify/svelte'
	import { onMount } from "svelte";
	import { actionButton } from "./../../tailwindStyles";
	import userStore from "./../../stores/user";

  let spells: Spell[] = []

  onMount(async()=>{
    fetch(`${import.meta.env.VITE_PUBLIC_BACKEND_URL}/spells`)
    .then(res => res.json())
    .then(data=> spells = data)
  })

  let user: null | User = null
  userStore.subscribe((data)=>user = data)

  async function addSpell(spell: number){
    if(!user) return
    fetch(`${import.meta.env.VITE_PUBLIC_BACKEND_URL}/addspellbook`,{
      method: "POST",
      body: JSON.stringify({
        Spell: spell,
        User: user.username,
        Book: 1,
      })
    }).then(async (data)=>{
        console.log(await data.json())
      })
  }

</script>

<svelte:head>
  <title>Spell Overview</title>
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
      {#if user && user.isLoggedIn}
        <button on:click={()=>addSpell(Spell.id)}>
          <Icon icon="carbon:add-filled" class={actionButton} />
        </button>
      {/if}
    </div>
  {/each}
</ul>
