import Event from '../Events/Event'
import Guid from '../Guid'

abstract class AggregateRoot
{
	private static _changes:Event[] = []
	public abstract Id:Guid
	public Version: Number

	public GetUncommittedChanges(): Event[]
	{
		return AggregateRoot._changes
	}

	public MarkChangesAsCommitted(): void
	{
		AggregateRoot._changes = []
	}

	public LoadsFromHistory(history: Event[]): void
	{
		history.forEach(e => this.defaultApplyChange(e, false))
	}

	protected ApplyChange(event: Event): void
	{
		this.defaultApplyChange(event, true)
	}

	private defaultApplyChange(event: Event, isNew: boolean): void
	{
		this[`apply${event.constructor}`](event)
		if (isNew) {
			AggregateRoot._changes.push(event)
		}
	}
}

export default AggregateRoot