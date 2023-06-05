import React, { Component } from 'react';
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';

const scheduler = window.scheduler;
 
export default class Scheduler extends Component {
    componentDidMount() {
             //configuration heur du debut et fin 
             scheduler.config.first_hour = 7;
             scheduler.config.last_hour = 18;
             scheduler.config.start_on_monday = true;
             scheduler.init(this.schedulerContainer, null, "week");
             
             //scheduler.updateView();
             scheduler.templates.event_text = function(start,end,ev){
                return 'TRIGRAM: ' + ev.text + '';
             };
             scheduler.init(this.schedulerContainer,null,"week");

        scheduler.skin = 'material';
        scheduler.config.header = [
            'day',
            'week',
            'month',
            'date',
            'prev',
            'today',
            'next'
        ];
       

        const { events } = this.props;
        //manafina ny jour samedie et dimanche
        scheduler.ignore_week = function(date){
            if (date.getDay() === 6 || date.getDay() === 0) //hides Saturdays and Sundays
                return true;
        };

        scheduler.init(this.schedulerContainer, new Date(2020, 5, 10));
        scheduler.clearAll();
        scheduler.parse(events);
    }
 
    render() {
        return (
            <div
                ref={ (input) => { this.schedulerContainer = input } }
                style={ { width: '100%', height: '100%' } }
            ></div>
       );
    }
}