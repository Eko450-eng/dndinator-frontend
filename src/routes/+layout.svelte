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
	<svelte:fragment slot="lead"><img src={Logo} alt="The logo of the Page"/></svelte:fragment>
  <a href="/spells">
    DNDinator  
  </a>
	<svelte:fragment slot="trail">
    <a href="/spells">Spells</a>
  </svelte:fragment>
</AppBar>
<slot />
