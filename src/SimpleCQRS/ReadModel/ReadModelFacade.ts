import Guid from '../Guid'
import iReadModelFacade from './iReadModelFacade'
import BullshitDatabase from './BullshitDatabase'
import InventoryItemListDto from './InventoryItemListDto'
import InventoryItemDetailsDto from './InventoryItemDetailsDto'

export default class ReadModelFacade implements iReadModelFacade {
	GetInventoryItems(): InventoryItemListDto[] {
		return BullshitDatabase.list
	}

	GetInventoryItemDetails(id: Guid): InventoryItemDetailsDto {
		return BullshitDatabase.details.get(id)
	}
}