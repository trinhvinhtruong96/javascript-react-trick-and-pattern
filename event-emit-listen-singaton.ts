type EventCallback = (...args: any[]) => any;

class WidgetEvents {
	private _events: { [key: string]: EventCallback[] };

	constructor() {
		this._events = {};
	}

	on(events: string, fct: EventCallback): this {
		events.split(" ").forEach((event) => {
			this._events[event] = this._events[event] || [];
			this._events[event].push(fct);
		});

		return this;
	}

	off(events?: string, fct?: EventCallback): this {
		if (events === undefined) {
			this._events = {};

			return this;
		}

		events.split(" ").forEach((event) => {
			if (!(event in this._events)) {
				return;
			}

			if (fct) {
				this._events[event] = this._events[event].filter((callback) => callback !== fct);
			} else {
				this._events[event] = [];
			}
		});

		return this;
	}

	emit(event: string, ...args: any[]): any {
		if (this._events[event] === undefined) {
			return;
		}

		const tmpArray = this._events[event].slice();

		for (let i = 0; i < tmpArray.length; ++i) {
			const result = tmpArray[i].apply(this, args);

			if (result !== undefined) {
				return result;
			}
		}

		return undefined;
	}
}

const ResizeInstance = new WidgetEvents();

export { WidgetEvents, ResizeInstance };
