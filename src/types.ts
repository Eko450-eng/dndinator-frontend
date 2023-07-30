export enum Classes {
	Artificer,
	Barbarian,
	Bard,
	Blood,
	Hunter,
	Cleric,
	Druid,
	Fighter,
	Monk,
	Paladin,
	Ranger,
	Rogue,
	Sorcerer,
	Warlock,
	Wizard
}

export enum Stats {
	Strength,
	Dexterity,
	Constitution,
	Intelligence,
	Wisdom,
	Charisma
}

export enum DetStats {
	Acrobatics,
	Animal,
	Handling,
	Arcana,
	Athletics,
	Deception,
	History,
	Insight,
	Intimidation,
	Investigation,
	Medicine,
	Nature,
	Perception,
	Performance,
	Persuasion,
	Religion,
	Sleight,
	of,
	Hand,
	Stealth,
	Survival
}

export interface User {
	id: number;
	username: string;
	email: string;
	password: string;
	isLoggedIn: boolean;
	// Characters *[]Character `json:"characterid,omitempty" db:"characterid"`
}

export interface Spelllist {
	id: number;
	index: string;
	name: string;
	url: string;
}

export interface Character {
	id?: number;
	name: string;
	lvl: number;
	race: string;
	alignment: string;
	background: string;

	hp: number;
	maxhp: number;
	ac: number;
	init: number;

	party: number;
	playerid: string;

	abillitie?: Abillitie;
	language?: Language;
	class?: Classes;
}

export interface Attack {
	id: number;
	name: string;
	atk: string;
	range: string;
	type: string;

	characterid: Character;
}

export interface Equipment {
	id: number;
	name: string;
	amount: number;

	characterid: Character;
}

export interface Coins {
	id: number;
	pp: number;
	gp: number;
	ep: number;
	sp: number;
	cp: number;

	characterid: Character;
}

export interface Abillitie {
	id: number;
	name: string;
}

export interface Language {
	id: number;
	name: string;
}

export interface Stat {
	id: number;
	name: Stats;
	value: number;
	savingvalue: number;
	modifier: number;
	shorthand: string;

	characterid: Character;
}

export interface DetStat {
	id: number;
	name: DetStats;
	value: number;
	proficiency: Boolean;

	characterid: Character;
}

export interface Spellbook {
	id: number;
	tier: number;
	slots: number;
	spells: Spell[];

	characterid: Character;
}

export interface Spell {
	id: number;
	name: string;
	casting_time: string;
	range: string;
	duration: string;
	components: [string];
	desc: string;
	higherdesc: string;
	level: number;
	classes: string[];
}

export interface Class {
	id: number;
	index: string;
	name: string;
	url: string;
}
