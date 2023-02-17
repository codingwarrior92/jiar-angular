import { Injectable } from '@angular/core';
import {
    CalendarSchedulerEvent,
    CalendarSchedulerEventStatus,
    CalendarSchedulerEventAction
} from '../scheduler/scheduler.module';
import {
    addDays,
    startOfHour,
    addHours,
    subHours,
    setHours,
    subMinutes,
    addMinutes,
    startOfDay,
    setMinutes
} from 'date-fns';

@Injectable()
export class AppService {
    getEvents(actions: CalendarSchedulerEventAction[]): Promise<CalendarSchedulerEvent[]> {
        const events = [
            <CalendarSchedulerEvent>{
                id: '6',
                start: startOfHour(setHours(new Date(), 22)),
                end: addHours(startOfHour(setHours(new Date(), 22)), 10),
                title: 'Event 6',
                content: 'Test Event',
                color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
                actions: actions,
                status: 'ok' as CalendarSchedulerEventStatus,
                isClickable: true,
                isDisabled: false
            },
        ];
        localStorage.setItem("events", JSON.stringify(events));
        return new Promise(resolve => setTimeout(() => resolve(events), 3000));
    }

    addEvent(actions: CalendarSchedulerEventAction[], startDate: Date, endDate: Date, title: String, content: String): Promise<CalendarSchedulerEvent[]> {
        let events = [
            <CalendarSchedulerEvent>{
                id: '6',
                start: startDate,
                end: endDate,
                title: title,
                content: content,
                color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
                actions: actions,
                status: 'ok' as CalendarSchedulerEventStatus,
                isClickable: true,
                isDisabled: false
            },
        ];
        let old_events = [];
        old_events = JSON.parse(localStorage.getItem("events"));
        if (old_events === undefined)
            old_events = [];
        console.log(old_events);
        old_events.push(...events);
        console.log(old_events);
        localStorage.setItem("events", JSON.stringify(old_events));
        return new Promise(resolve => setTimeout(() => resolve(old_events), 3000));
    }

    deleteEvent(actions: CalendarSchedulerEventAction[], id: String): Promise<CalendarSchedulerEvent[]> {
        let old_events = JSON.parse(localStorage.getItem("events"));
        old_events = old_events.filter(event => event.id !== id);
        localStorage.setItem("events", old_events);
        return new Promise(resolve => setTimeout(() => resolve(old_events), 3000));
    }
}
