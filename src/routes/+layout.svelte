<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
  import Logo from "$lib/assets/LogoIcon-72.png"
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
  import { AppBar } from '@skeletonlabs/skeleton';
</script>
<AppBar>
	<svelte:fragment slot="lead">
    <img class="rounded-full w-12 h-12" src={Logo} alt="The logo of the Page"/>
  </svelte:fragment>
  <a href="/">
    DNDinator  
  </a>
	<svelte:fragment slot="trail">
    <a href="/profile">Profile</a>
    <a href="/spells">Spells</a>
  </svelte:fragment>
</AppBar>
<slot />
