import EventStore from './EventStore'
import Guid from './Guid'
import Event from './Events/Event'

export default class MemoryEventStore implements EventStore {
	private readonly _publisher
	private static readonly _current:Map<Guid, EventDescriptor[]> = new Map<Guid, EventDescriptor[]>()

	constructor(publisher) {
		this._publisher = publisher
	}

	SaveEvents(aggregateId: Guid, events: Event[], expectedVersion: Number): void {
		let eventDescriptors:EventDescriptor[];

		// Try to get event descriptors list for given aggregate id
		// Otherwise, create empty dictionary
		if (! (eventDescriptors = MemoryEventStore._current.get(aggregateId))) {
			eventDescriptors = [];
			MemoryEventStore._current.set(aggregateId, eventDescriptors)
		}
		// Check whether latest event version matches current aggregate version
		// otherwise, throw exception
		else if (eventDescriptors[eventDescriptors.length - 1].Version != expectedVersion 
			&& expectedVersion != -1
		) {
			throw new ConcurrencyException()
		}

		let i:number = parseInt(expectedVersion.toString());

		// iterate through the current aggregate events increasing version with
		// each processed event
		events.forEach(event => {
			i++;
			event.Version = i;

			// push event to event descriptors list for current aggregate
			eventDescriptors.push(new EventDescriptor(aggregateId, event, i))

			// publish current event to the bus for further processsing
			// by subscribers
			this._publisher.Publish(event)
		})
	}

	// Collect all processed events for given aggregate and return them as a list
	// used to build up an aggregate from its history (Domain.LoadsFromHistory)
	GetEventsForAggregate(aggregateId: Guid): Event[] {
		let eventDescriptors:EventDescriptor[];

		if (! (eventDescriptors = MemoryEventStore._current.get(aggregateId))) {
			throw new AggregateNotFoundException()
		}

		return eventDescriptors.map(desc => desc.EventData);
	}
}

class EventDescriptor {
	public readonly EventData: Event
	public readonly Id: Guid
	public readonly Version: Number

	constructor(id: Guid, eventData: Event, version: Number) {
		this.EventData = eventData
		this.Version = version
		this.Id = id
	}
}

class AggregateNotFoundException extends Error{}
class ConcurrencyException extends Error {}