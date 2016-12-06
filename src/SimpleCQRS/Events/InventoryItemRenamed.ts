import Event from './Event'
import Guid from '../Guid'

export default class InventoryItemRenamed extends Event {
	public readonly Id: Guid
	public readonly NewName: String

	constructor(id: Guid, newName: String) {
		super()
		this.Id = id
		this.NewName = newName
	}
}