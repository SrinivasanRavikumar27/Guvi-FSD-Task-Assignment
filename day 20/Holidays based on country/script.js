

    // Your code here
    const code = [];
    const countryName = [];
    
    
    async function fetchApi(code,year){
        const holday = await fetch(`https://holidayapi.com/v1/holidays?pretty&key=6f821480-cb30-4366-ab73-712f9384cfc2https://holidayapi.com/v1/holidays?pretty&key=6f821480-cb30-4366-ab73-712f9384cfc2&country=${code}&year=${year}`);
        const holidayData = await holday.json();
        // console.log(holidayData);
    
    }
    
     ( async function (){
        const countryCode = await fetch('https://holidayapi.com/v1/countries?pretty&key=6f821480-cb30-4366-ab73-712f9384cfc2');
        const countryData = await countryCode.json();
        // console.log(countryData);
        countryData.countries.map((con) => {
            countryName.push(con.name);
            code.push(con.code);
        });
    })();
    
    
    // console.log(countryName,code);

    document.addEventListener('DOMContentLoaded', function () {
    
    const selectTag = document.createElement('select');

    selectTag.setAttribute('id','Ccode');
    
        countryName.forEach((name, index) => {
        const option = document.createElement('option');
        option.value = code[index];
        option.textContent = name;
        selectTag.appendChild(option);
      });
      
    
    document.body.append(selectTag);
});



