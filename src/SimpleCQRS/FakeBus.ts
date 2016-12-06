import Message from './Message'
import Event from './Events/Event'
import Command from './Commands/Command'

export default class FakeBus implements CommandSender, EventPublisher {
	private static readonly _routes: Map<any, any> = new Map()

	RegisterHandler<Message>(handler): void {
		let handlers

		if (! (handlers = FakeBus._routes.get(typeof handler))) {
			handlers = []
			FakeBus._routes.set(typeof handler, handlers)
		}

		handlers.push(x => handler(x))
	}

	Send(command: Command): void {
		let handlers

		if (handlers = FakeBus._routes.get(typeof command)) {
			if (handlers.length != 1) {
				throw new Error('Cannot send to more than one handler')
			}
			handlers[0](command)
		} else {
			throw new Error('No handler registered')
		}
	}

	Publish(event: Event): void {
		let handlers

		if (! (handlers = FakeBus._routes.get(typeof event))) return;

		handlers.forEach(handler => {
			// Dispatch on thread pool
			const handler1 = handler
			// TODO: Channels?
		})
	}
}

interface CommandSender {
	Send(command: Command): void
}

interface EventPublisher {
	Publish(event: Event): void
}