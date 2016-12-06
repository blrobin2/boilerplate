import Guid from '../Guid'

export default class InventoryItemDetailsDto {
	public Id: Guid
	public Name: String
	public CurrentCount: Number
	public Version: Number

	constructor(id: Guid, name: String, currentCount: Number, version: Number) {
		this.Id = id
		this.Name = name
		this.CurrentCount = currentCount
		this.Version = version
	}
}