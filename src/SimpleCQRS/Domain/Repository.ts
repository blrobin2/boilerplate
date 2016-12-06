import Guid from '../Guid'
import iRepository from './iRepository'
import EventStore from '../EventStore'
import AggregateRoot from './AggregateRoot'

export default class Repository<T> implements iRepository<T> {
	private readonly _storage: EventStore

	constructor(storage: EventStore) {
		this._storage = storage
	}

	public Save(aggregate: AggregateRoot, expectedVersion: Number): void {
		this._storage.SaveEvents(aggregate.Id, aggregate.GetUncommittedChanges(), expectedVersion)
	}

	public GetById(id: Guid): T {
		const obj = <T>{}
		const e = this._storage.GetEventsForAggregate(id)
		//obj.LoadsFromHistory(e) TODO: Figure out how to pull this off...
		return obj
	}
}