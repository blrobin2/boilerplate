import Guid from './Guid'
import Event from './Events/Event'

interface EventStore {
	SaveEvents(aggregateId: Guid, events: Event[], expectedVersion: Number): void
	GetEventsForAggregate(aggregateId: Guid): Event[]
}

export default EventStore