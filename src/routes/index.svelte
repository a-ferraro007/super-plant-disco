<script lang="ts">
	import { CardClass, CardInterface, CardModel } from '../types';
	import { onMount } from 'svelte';
	import Card from '../components/card.svelte';

	let temp: CardInterface = {
		type: CardModel.Temp,
		class: CardClass.Coral
	};
	let humidity: CardInterface = {
		type: CardModel.Humidity,
		class: CardClass.LightBlue
	};
	let soil: CardInterface = {
		type: CardModel.Soil,
		class: CardClass.LightGreen
	};
	let fan: CardInterface = {
		type: CardModel.Fan,
		class: CardClass.Gold
	};
	let pump: CardInterface = {
		type: CardModel.Pump,
		class: CardClass.Gold
	};

	async function connectToServer(): Promise<WebSocket> {
		const ws = new WebSocket('ws://192.168.1.156:8000');
		return new Promise((resolve, reject) => {
			const timer = setInterval(() => {
				if (ws.readyState === 1) {
					clearInterval(timer);
					resolve(ws);
				}
			}, 10);
		});
	}

	onMount(async () => {
		const ws = await connectToServer();
		ws.addEventListener('open', function (e) {
			console.log('open');
			ws.send('hello');
		});

		ws.addEventListener('message', function (e) {
			console.log(e.data);
		});

		ws.addEventListener('error', function (e) {
			console.log('err');
		});
	});
</script>

<div style="max-width: 1100px" class="mx-auto mt-28">
	<div class="flex justify-around flex-wrap">
		<Card card={temp} />
		<Card card={humidity} />
		<Card card={soil} />
		<Card card={fan} />
		<Card card={pump} />
	</div>
</div>
