import Handles from '../Handles'
import InventoryItemCreated from '../Events/InventoryItemCreated'
import InventoryItemDeactivated from '../Events/InventoryItemDeactivated'
import InventoryItemRenamed from '../Events/InventoryItemRenamed'
import ItemsRemovedFromInventory from '../Events/ItemsRemovedFromInventory'
import ItemsCheckedInToInventory from '../Events/ItemsCheckedInToInventory'
import BullshitDatabase from './BullshitDatabase'
import InventoryItemDetailsDto from './InventoryItemDetailsDto'
import Guid from '../Guid'

export default class InventoryDetailsView 
{
	public HandleInventoryItemCreated(message: InventoryItemCreated) : void
	{
		BullshitDatabase.details.set(message.Id, new InventoryItemDetailsDto(message.Id, message.Name, 0, 0))
	}

	public HandleInventoryItemRenamed(message: InventoryItemRenamed) : void
	{
		const d = this.GetDetailsItem(message.Id)
		d.Name = message.NewName
		d.Version = message.Version
	}

	public HandleItemsRemovedFromInventory(message: ItemsRemovedFromInventory) : void
	{
		const d = this.GetDetailsItem(message.Id)
		d.CurrentCount = parseInt(d.CurrentCount.toString()) - parseInt(message.Count.toString())
		d.Version = message.Version
	}

	public HandleItemsCheckedInToInventory(message: ItemsCheckedInToInventory) : void
	{
		const d = this.GetDetailsItem(message.Id)
		d.CurrentCount = parseInt(d.CurrentCount.toString()) + parseInt(message.Count.toString())
		d.Version = message.Version
	}

	public HandleInventoryItemDeactivated(message: InventoryItemDeactivated) : void
	{
		BullshitDatabase.details.delete(message.Id)
	}

/*	public Handle(message: InventoryItemCreated | InventoryItemDeactivated | InventoryItemRenamed | ItemsRemovedFromInventory | ItemsCheckedInToInventory): void
	{
		let d:InventoryItemDetailsDto
		switch(typeof message) {
			case 'InventoryItemCreated':
				BullshitDatabase.details.set(message.Id, new InventoryItemDetailsDto(message.Id, message.Name, 0, 0))
				break
			case 'InventoryItemRenamed':
				d = this.GetDetailsItem(message.Id)
				d.Name = message.NewName
				d.Version = message.Version
				break
			case 'ItemsRemovedFromInventory':
				d = this.GetDetailsItem(message.Id)
				d.CurrentCount -= message.Count
				d.Version = message.Version
				break
			case 'ItemsCheckedInToInventory':
				d = this.GetDetailsItem(message.Id)
				d.CurrentCount += message.Count
				d.Version = message.Version
				break
			case 'InventoryItemDeactivated':
				BullshitDatabase.details.delete(message.Id)
		}
	}*/

	private GetDetailsItem(id: Guid): InventoryItemDetailsDto
	{
		let d:InventoryItemDetailsDto

		if(!(d = BullshitDatabase.details.get(id))) {
			throw new Error('Did not find the original inventory. This shouldn\'t happen')
		}

		return d
	}
}