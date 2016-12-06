import Command from './Command'
import Guid from '../Guid'

export default class DeactivateInventoryItem extends Command {
	public readonly InventoryItemId: Guid
	public readonly OriginalVerson: Number

	constructor(inventoryItemId: Guid, originalVersion: Number) {
		super();
		this.InventoryItemId = inventoryItemId
		this.OriginalVerson = originalVersion
	}
}