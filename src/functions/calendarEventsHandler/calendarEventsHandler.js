const storedEvents = JSON.parse(localStorage.getItem('calendar')) || [];

export const saveEvent = (date, hour, durationInMinutes, name) =>{
  
  console.log('zapis eventu')
  console.log(date, hour, durationInMinutes, name)
  console.log('godzina to"',hour,'"' , hour < 0 || hour > 24 , durationInMinutes > (24 - hour))
  console.log('event saved')
    if (hour < 0 || hour > 24 || !name.trim() || durationInMinutes <= 0 ) {
        console.log("Błąd: Godzina wydarzenia spoza zakresu 0 - 24, nazwa jest pusta lub czas trwania jest niepoprawny.");
        return;
      }
    const newEvent = {
        date,
        hour,
        durationInMinutes,
        name
    }
    storedEvents.push(newEvent);
    storedEvents.sort((a, b) => new Date(a.date + ' ' + a.hour) - new Date(b.date + ' ' + b.hour));
    localStorage.setItem('calendar', JSON.stringify(storedEvents));
}

export const logAllEvents = () =>{
    //console.log(storedEvents)
    //console.log(storedEvents.map(x=> x.date[0]).toString())
    //console.log(storedEvents.map(x=> x.date[0]))
    return (storedEvents.map(x=> x.date[0]))
}

export const findEventIndicesByDate = (date)=> {
    return storedEvents.reduce((indices, event, index) => {
      if (event.date[0].toString() === date) {
        indices.push(index);
      }
      //console.log('tutaj znajduje eventy dla daty: ', date, 'eventy to : ', indices[0])
      return indices;
    }, []);
  }
  
export const logEventsByIndexes = (indexes) =>{
    const events = []
    indexes.map((x)=> events.push(storedEvents[x]))
    //console.log('eventy',events)
    return events
}



  