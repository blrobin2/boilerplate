import Command from './Command'
import Guid from '../Guid'

export default class CreateInventoryItem extends Command {
	public readonly InventoryItemId: Guid
	public readonly Name: String

	constructor(inventoryItemId: Guid, name: String) {
		super()
		this.InventoryItemId = inventoryItemId
		this.Name = name
	}
}