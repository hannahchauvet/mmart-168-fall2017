const apiKey = 'MW9S-E7SL-26DU-VV8V'

const makeStationList = () => {
    const url = 'https://api.bart.gov/api/stn.aspx?key=' + apiKey +
                    '&cmd=stns&json=y'
    const stationList = fetch(url)
          .then((response) => {
            return response.json()
            })
          .then((json) => {
                json.root.stations.station.forEach((station) => {
                const option = document.createElement("option")
                option.value = station.abbr
                option.innerHTML = station.name
                document.getElementById('station_list').appendChild(option)
              })
            })
            .catch((err) => {
                console.log(err)
            })
}

const getArrivalTimes = () => {
    const stationList = document.getElementById('station_list')
    // PART III.B.1: The bartStationCode should read from the list and query
    // for the corresponding station

    const bartStationCode = stationList.value
    console.log('Selected Station Code:', bartStationCode)
    let url = 'https://api.bart.gov/api/etd.aspx?key=' + apiKey + '&cmd=etd' +
                '&orig=' + bartStationCode + '&json=y'
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            json = json.root
            console.log(json)
            const results = document.getElementById('results')
            results.innerHTML = ''
            json.station = json.station[0]
            let selectedStation = document.createElement('h2')
            let stationName = document.createTextNode(json.station.name)
            selectedStation.appendChild(stationName)
            let delayWarning = document.createElement('p')
            let delayCodeText = document.createTextNode('*** indicates possible delay')
            delayWarning.appendChild(delayCodeText)
            results.appendChild(selectedStation)
            results.appendChild(delayWarning)
            json.station.etd.forEach((trainLine) => {
                let originDest = document.createElement('h3')
                let originDestText = document.createTextNode('From ' +
                stationList.options[stationList.selectedIndex].text.toUpperCase() +
                '  to ' + trainLine.destination.toUpperCase())
                originDest.appendChild(originDestText)
                results.appendChild(originDest)
                trainLine.estimate.forEach((estimate) => {
                  let est = document.createElement('p')
                  let eText = document.createTextNode('Leaving from Platform ' + estimate.platform)
                  est.appendChild(eText)
                  eText = document.createTextNode(' due ' + estimate.direction + ': ')
                  est.appendChild(eText)
                  if (estimate.minutes === 'Leaving')
                  {
                    eText = document.createTextNode('now ')
                  }
                  else {
                    eText = document.createTextNode(' ' + estimate.minutes + ' mins. ')
                  }
                  est.appendChild(eText)
                  if (estimate.delay !== '0')
                  {
                    eText = document.createTextNode('***' + ' ')
                  }
                  est.appendChild(eText)
                  est.style.background = estimate.hexcolor
                  results.appendChild(est)
                  })
              })
            })
}
makeStationList()
