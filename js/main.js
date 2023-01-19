fetch('https://api.covid19api.com/summary').
then(res => res.json()).
then(data => displayGlobal(data.Global));

function displayGlobal(globalData){
   const globalDataCard=document.getElementById('global-statistics');
   globalDataCard.innerHTML=`<P>
   New Confirmed:${globalData.NewConfirmed}
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
   console.log(globalData)
}