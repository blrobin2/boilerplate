import Guid from '../Guid'
import AggregateRoot from './AggregateRoot'

interface iRepository<T> {
	Save(aggregate: AggregateRoot, expectedVersion: Number): void
	GetById(id: Guid): T
}

export default iRepository