export enum CardModel {
	Temp = 'temp',
	Humidity = 'humidity',
	Soil = 'soil',
	Fan = 'fan',
	Pump = 'pump'
}

export enum CardClass {
	Coral = 'text-coral',
	LightBlue = 'text-blue-light',
	LightGreen = 'text-green-light',
	Gold = 'text-gold'
}

export interface CardInterface {
	type: CardModel;
	class: CardClass;
}
