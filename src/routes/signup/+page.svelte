<script lang="ts">
  import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { submitButton, textInputLabel, textInputCustom } from "../../tailwindStyles";
  import { Toast, toastStore } from '@skeletonlabs/skeleton';
  import { goto } from "$app/navigation";

  const signUpError = (input: string) =>{
    let warning = (): string => {
      switch(input){
        case ("pNoMatch"):
          return "Your passwords don't match";
        case ("pLength"):
          return "Your password is too short";
        case ("uLength"):
          return "Your username is too short";
        case ("exists"):
          return "This username or email already exists";
        default:
          return "There was an error";
      }
    };

    const t: ToastSettings = {
      message: warning(), 
      background: "variant-filled-warning"
    };
    toastStore.trigger(t);
  }

  let confirmPassword = "";

  let info = {
    UserName: "",
    Email: "",
    Password: "",
  }

  async function register(){
    if(info.UserName.length <= 2){
      return signUpError("uLength")
    } else if (info.Password !== confirmPassword){
      return signUpError("pNoMatch")
    }else if(info.Password.length <= 7) {
      return signUpError("pLength")
    }

    fetch(`${import.meta.env.VITE_PUBLIC_BACKEND_URL}/signup`, {
      method: "POST",
      body: JSON.stringify(info)
    })
    .then((data)=>{
        if(data.status !== 200){
          return signUpError("exists")
        }else goto("/")
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

  <label class={textInputLabel} for="email">Email</label>
  <input bind:value={info.Email} class={textInputCustom} name="email" type="text" />

  <label class={textInputLabel} for="password">Password</label>
  <input bind:value={info.Password} class={textInputCustom} name="password" type="password" />

  <label class={textInputLabel} for="confirmPassword">Confirm password</label>
  <input bind:value={confirmPassword} class={textInputCustom} name="confirmPassword" type="password" />

  <button type="submit" class={submitButton}>Sign Up</button>
</form>

<Toast />
