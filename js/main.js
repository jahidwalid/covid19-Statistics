fetch('https://api.covid19api.com/summary').
then(res => res.json()).
then(data => displayGlobal(data.Global));

function displayGlobal(globalData){
   const globalDataCard=document.getElementById('global-statistics');
   globalDataCard.innerHTML=`<P>
   New Confirmed: ${globalData.NewConfirmed}
   <br/>
   New Deaths: ${globalData.NewDeaths}
   <br/>
   New Recovered: ${globalData.NewRecovered}
   <br/>
   Total Confirmed: ${globalData.TotalConfirmed}
   <br/>
   Total Deaths: ${globalData.TotalDeaths}
   <br/>
   Total Recovered: ${globalData.TotalRecovered}
   </P>
   `;
}


const countryData = () => {
    document.getElementById('country-statistics-div').style.display = 'Block';
    fetch('https://api.covid19api.com/summary', {
        "method": 'GET',
        "mode": "cors",
        "headers": {
            "X-Access-Token": "5cf9dfd5-3449-485e-b5ae-70a60e997864",
            "X-Access-host": "api.covid19api.com/summary"
        }
    })
    .then(response => response.json())
    .then(json => showData(json.Countries))
    const showData = countryData => {
        const CountryDiv=document.getElementById('country-statistics');
        console.log(countryData)
        for(let i = 0; countryData.length; i++){  
            const inputCountry=document.getElementById('input-country').value;

            if(inputCountry == countryData[i].Country){
                console.log(countryData[i].Country);
                CountryDiv.innerHTML=`<p>
            Country: ${countryData[i].Country}
            <br/>
            New Confirmed: ${countryData[i].NewConfirmed}
            <br/>
            New Deaths: ${countryData[i].NewDeaths}
            <br/>
            New Recovered: ${countryData[i].NewRecovered}
            <br/>
            Total Confirmed: ${countryData[i].TotalConfirmed}
            <br/>
            Total Deaths: ${countryData[i].TotalDeaths}
            <br/>
            Total Recovered: ${countryData[i].TotalRecovered}
            </p>
            `
            }
            
        }
       
 
    }


}