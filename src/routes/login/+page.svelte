<script lang="ts">
  import { goto } from '$app/navigation'
	import { saveUser } from '../../stores/user';
	import { submitButton, textInputLabel, textInputCustom } from "../../tailwindStyles";
  import { Toast, toastStore } from '@skeletonlabs/skeleton';

  let info = {
    UserName: "",
    Password: ""
  }

  async function register(){
    fetch(`${import.meta.env.VITE_PUBLIC_BACKEND_URL}/login`, {
      method: "POST",
      body: JSON.stringify(info)
    })
    .then(async (data)=>{
        if(data.status !== 200){
          return toastStore.trigger({
            message: "Something went wrong, please check your information and try again", 
            background: "variant-filled-warning"
          });
        }else {
          goto("/")
          saveUser(await data.json())
        }
      })
  }

</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<form class="m-5 flex flex-col mx-auto max-w-xs justify-center items-center " on:submit={()=>register()}>
  <h1 class="font-extrabold text-xl">Login</h1>
  <label class={textInputLabel} for="userName">User name</label>
  <input bind:value={info.UserName} class={textInputCustom} name="userName" type="text" />

  <label class={textInputLabel} for="password">Password</label>
  <input bind:value={info.Password} class={textInputCustom} name="password" type="password" />

  <button type="submit" class={submitButton}>Login</button>
</form>

<Toast />
