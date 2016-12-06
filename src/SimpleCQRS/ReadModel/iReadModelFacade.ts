import Guid from '../Guid'
import InventoryItemListDto from './InventoryItemListDto'
import InventoryItemDetailsDto from './InventoryItemDetailsDto'

interface iReadModelFacade {
	GetInventoryItems() : InventoryItemListDto[]
	GetInventoryItemDetails(id: Guid): InventoryItemDetailsDto
}

export default iReadModelFacade