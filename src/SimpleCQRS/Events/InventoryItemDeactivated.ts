import Event from './Event'
import Guid from '../Guid'

export default class InventoryItemDeactivated extends Event {
	public readonly Id: Guid

	constructor(id: Guid) {
		super()
		this.Id = id
	}
}