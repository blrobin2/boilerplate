import Guid from '../Guid'

export default class InventoryItemListDto {
	public Id: Guid
	public Name: String

	constructor(id: Guid, name: String) {
		this.Id = id
		this.Name = name
	}
}