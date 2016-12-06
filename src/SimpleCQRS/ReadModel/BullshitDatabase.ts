import Guid from '../Guid'
import InventoryItemDetailsDto from './InventoryItemDetailsDto'
import InventoryItemListDto from './InventoryItemListDto'

export default class BullshitDatabase {
	public static details: Map<any, any> = new Map()
	public static list: InventoryItemListDto[] = []
}