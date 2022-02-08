<script lang="ts">
	import type { CardInterface } from 'src/types';

	export let card: CardInterface;
</script>

<div class="h-72 w-72 rounded-lg bg-gray-light mb-5 p-6" style="border-radius: 50px;">
	<span class="{card.class} text-4xl block"> {card.type} </span>
	<span class="text-cream block text-center text-7xl p-11"> 70% </span>
</div>
