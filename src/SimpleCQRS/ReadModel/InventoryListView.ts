import BullshitDatabase from './BullshitDatabase'
import InventoryItemListDto from './InventoryItemListDto'
import InventoryItemCreated from '../Events/InventoryItemCreated'
import InventoryItemRenamed from '../Events/InventoryItemRenamed'
import InventoryItemDeactivated from '../Events/InventoryItemDeactivated'

class InventoryListView
{

	public HandleInventoryItemCreated(message: InventoryItemCreated) : void 
	{
		BullshitDatabase.list.push(new InventoryItemListDto(message.Id, message.Name))
	}

	public HandleInventoryItemRenamed(message: InventoryItemRenamed) : void
	{
		const item = BullshitDatabase.list.filter(x => x.Id === message.Id)[0];
		item.Name = message.NewName
	}

	public InventoryItemDeactivated(message: InventoryItemDeactivated) : void
	{
		BullshitDatabase.list.filter(x => x.Id !== message.Id)
	}

/*	
	I would love to be able to do something like this, but Union Types don't allow differing
	contracts
	public Handle(message: InventoryItemCreated | InventoryItemRenamed | InventoryItemDeactivated): void {
		switch (typeof message) {
			case 'InventoryItemCreated':
				BullshitDatabase.list.push(new InventoryItemListDto(message.Id, message.Name))
				break
			case 'InventoryItemRenamed':
				const item = BullshitDatabase.list.filter(x => x.Id === message.Id)[0];
				item.Name = message.NewName
				break
			case 'InventoryItemDeactivated':
				BullshitDatabase.list.filter(x => x.Id !== message.Id)
				break
			default:
				throw new Error('Invalid message passed to handler')
		}
	}*/
}