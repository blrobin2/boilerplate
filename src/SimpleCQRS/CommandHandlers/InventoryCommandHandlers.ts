import iRepository from '../Domain/iRepository'
import InventoryItem from '../Domain/InventoryItem'
import CreateInventoryItem from '../Commands/CreateInventoryItem'
import DeactivateInventoryItem from '../Commands/DeactivateInventoryItem'
import RemoveItemsFromInventory from '../Commands/RemoveItemsFromInventory'
import CheckInItemsToInventory from '../Commands/CheckInItemsToInventory'
import RenameInventoryItem from '../Commands/RenameInventoryItem'

export default class InventoryCommandHandlers {
	private readonly _repository: iRepository<InventoryItem>

	constructor(repository: iRepository<InventoryItem>) {
		this._repository = repository
	}

	public HandleCreateInventoryItem(message: CreateInventoryItem): void {
		const item = new InventoryItem(message.InventoryItemId, message.Name)
		this._repository.Save(item, -1)
	}

	public HandleDeactivateInventoryItem(message: DeactivateInventoryItem): void {
		const item = this._repository.GetById(message.InventoryItemId)
		item.Deactivate()
		this._repository.Save(item, message.OriginalVerson)
	}

	public HandleRemoveItemsFromInventory(message: RemoveItemsFromInventory): void {
		const item = this._repository.GetById(message.InventoryItemId)
		item.Remove(message.Count)
		this._repository.Save(item, message.OriginalVersion)
	}

	public HandleCheckInItemsToInventory(message: CheckInItemsToInventory): void {
		const item = this._repository.GetById(message.InventoryItemId)
		item.CheckIn(message.Count)
		this._repository.Save(item, message.OriginalVersion)
	}

	public HandleRenameInventoryItem(message: RenameInventoryItem): void {
		const item = this._repository.GetById(message.InventoryItemId)
		item.ChangeName(message.NewName)
		this._repository.Save(item, message.OriginalVersion)
	}
}