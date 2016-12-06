import Event from './Event'
import Guid from '../Guid'

export default class InventoryItemCreated extends Event {
	public readonly Id: Guid
	public readonly Name: String

	constructor(id: Guid, name: String) {
		super()
		this.Id = id
		this.Name = name
	}
}