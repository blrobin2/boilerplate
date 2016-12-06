import Event from './Event'
import Guid from '../Guid'

export default class ItemsRemovedFromInventory extends Event {
	public readonly Id: Guid
	public readonly Count: Number

	constructor(id: Guid, count: Number) {
		super()
		this.Id = id
		this.Count = count
	}
}