import Command from './Command'
import Guid from '../Guid'

export default class CheckInItemsToInventory extends Command {
	public readonly InventoryItemId: Guid
	public readonly Count: Number
	public readonly OriginalVersion: Number

	constructor(inventoryItemId: Guid, count: Number, originalVersion: Number) {
		super()
		this.InventoryItemId = inventoryItemId
		this.Count = count
		this.OriginalVersion = originalVersion
	}
}