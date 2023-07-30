<script lang="ts">
	import type { Character, User } from "../../../types";
	import { onMount } from "svelte";
	import userStore from "../../../stores/user";
	import { submitButton, textInputCustom, textInputLabel } from "../../../tailwindStyles";

  let character: Character;
  let user: User;

  $: userName = user.username
  let char: Character = {
    name: "",
    background: "",
    ac: 0,
    hp: 0,
    maxhp: 20,
    lvl: 0,
    init: 0,
    race: "",
    party: 0,
    alignment: "",

    playerid: userName
  }

  userStore.subscribe(value=>user=value)
  onMount(()=>{
    console.log(user)
  })



  function register(){
    char.playerid = user.username;
    fetch(`${import.meta.env.VITE_PUBLIC_BACKEND_URL}/character`,{
      method: "POST",
      body: JSON.stringify(char)
    })
  }
</script>

<svelte:head>
  <title>{character ? character.name : "Please login"}</title>
</svelte:head>

<form class="m-5 flex flex-col mx-auto max-w-xs justify-center items-center" on:submit={()=>register()}>
  <h1 class="font-extrabold text-xl">Login</h1>

  <div class="m-5 flex gap-1 flex-row mx-auto max-w-xs justify-center items-center">
    <div class="m-5 flex flex-col mx-auto max-w-xs justify-center items-center">
      <label class={textInputLabel} for="name">Name</label>
      <input bind:value={char.name} class={textInputCustom} name="name" type="text" />
    </div>
    <div class="m-5 flex flex-col mx-auto max-w-xs justify-center items-center">
      <label class={textInputLabel} for="background">background</label>
      <input bind:value={char.background} class={textInputCustom} name="background" type="text" />
    </div>
      
    <div class="m-5 flex flex-col mx-auto max-w-xs justify-center items-center">
      <label class={textInputLabel} for="lvl">lvl</label>
      <input bind:value={char.lvl} class={textInputCustom} name="lvl" type="number" />
    </div>
  </div>

  <div class="m-5 flex gap-1 flex-row mx-auto max-w-xs justify-center items-center">
    <div class="m-5 flex flex-col mx-auto max-w-xs justify-center items-center">
      <label class={textInputLabel} for="hp">HP</label>
      <input bind:value={char.hp} class={textInputCustom} name="hp" type="number" />
    </div>
    <div class="m-5 flex flex-col mx-auto max-w-xs justify-center items-center">
      <label class={textInputLabel} for="maxhp">maxhp</label>
      <input bind:value={char.maxhp} class={textInputCustom} name="maxhp" type="number" />
    </div>
  </div>

  <div class="m-5 flex gap-1 flex-row mx-auto max-w-xs justify-center items-center">
    <div class="m-5 flex flex-col mx-auto max-w-xs justify-center items-center">
      <label class={textInputLabel} for="ac">AC</label>
      <input bind:value={char.ac} class={textInputCustom} name="ac" type="number" />
    </div>
    <div class="m-5 flex flex-col mx-auto max-w-xs justify-center items-center">
      <label class={textInputLabel} for="init">init</label>
      <input bind:value={char.init} class={textInputCustom} name="init" type="number" />
    </div>
  </div>

  <label class={textInputLabel} for="race">race</label>
  <input bind:value={char.race} class={textInputCustom} name="race" type="text" />

  <label class={textInputLabel} for="party">party</label>
  <input bind:value={char.party} class={textInputCustom} name="party" type="number" />

  <label class={textInputLabel} for="alignment">alignment</label>
  <input bind:value={char.alignment} class={textInputCustom} name="alignment" type="text" />


  <button type="submit" class={submitButton}>Sign Up</button>
</form>
