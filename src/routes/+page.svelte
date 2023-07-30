<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import { toastStore } from "@skeletonlabs/skeleton";
	import userStore, { saveUser } from "../stores/user";
	import type { User } from "../types";
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
  let data: User;

  userStore.subscribe((value)=>{
    data = value
  })


  //TODO ADD JWT AUTHENTICATION
  onMount(async() => {
    let localUser = localStorage.getItem("user")

    if(localUser !== undefined || localUser !== null || localUser !== ""){
        fetch(`${import.meta.env.VITE_PUBLIC_BACKEND_URL}/loginJWTJankness`, {
          method: "POST",
          body: JSON.stringify({ UserName: localUser })
        })
        .then(async (data)=>{
            if(data.status !== 200){
              return toastStore.trigger({
                message: "Something went wrong", 
                background: "variant-filled-warning"
              });
            }else saveUser(await data.json())
          })
    }
  })

</script>

<h1>{data.username}</h1>
