import Guid from '../Guid'
import Event from '../Events/Event'
import InventoryItemRenamed from '../Events/InventoryItemRenamed'
import ItemsRemovedFromInventory from '../Events/ItemsRemovedFromInventory'
import ItemsCheckedInToInventory from '../Events/ItemsCheckedInToInventory'
import InventoryItemCreated from '../Events/InventoryItemCreated'
import InventoryItemDeactivated from '../Events/InventoryItemDeactivated'
import AggregateRoot from './AggregateRoot'

export default class InventoryItem extends AggregateRoot {
	private _activated: boolean
	private _id: Guid

	private ApplyInventoryItemCreated(e: Event): void {
		this._id = e.Id
		this._activated = true
	}

	private ApplyInventoryItemDeactivated(e: Event): void {
		this._activated = false
	}

	public ChangeName(newName: String): void {
		if(!newName) {
			throw new ArgumentException('newName')
		}

		this.ApplyChange(new InventoryItemRenamed(this._id, newName))
	}

	public Remove(count: Number): void {
		if (count <= 0) {
			throw new RangeError('Cant remove negative count from inventory')
		}

		this.ApplyChange(new ItemsRemovedFromInventory(this._id, count))
	}

	public CheckIn(count: Number): void {
		if (count <= 0) {
			throw new RangeError('Must have a count greater than 0 to add to inventory')
		}

		this.ApplyChange(new ItemsCheckedInToInventory(this._id, count))
	}

	public Deactivate(): void {
		if (!this._activated) {
			throw new RangeError('Already deactivated')
		}

		this.ApplyChange(new InventoryItemDeactivated(this._id))
	}

	get Id() {
		return this._id
	}

	constructor(id = null, name = null) {
		super()
		this.ApplyChange(new InventoryItemCreated(id, name))
	}
}

class ArgumentException extends Error {}