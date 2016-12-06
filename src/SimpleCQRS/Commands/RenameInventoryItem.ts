import Command from './Command'
import Guid from '../Guid'

export default class RenameInventoryItem extends Command {
	public readonly InventoryItemId: Guid
	public readonly NewName: String
	public readonly OriginalVersion: Number

	constructor(inventoryItemId: Guid, newName: String, originalVersion: Number) {
		super()
		this.InventoryItemId = inventoryItemId
		this.NewName = newName
		this.OriginalVersion = originalVersion
	}
}