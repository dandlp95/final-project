let directoryUrl = "https://dandlp95.github.io/final-project/json_files/directory.json";

fetch(directoryUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function(jsonObject) {
        

        businessDirectory = jsonObject["businesses"];
        console.log(businessDirectory);

        for(let i = 0; i<businessDirectory.length; i++) {
            
            let businessSection = document.createElement("section");
            let businessName = document.createElement("h3");
            let businessLogo = document.createElement("img");
            let businessContactInformation = document.createElement("div");
            let businessPhoneNumber = document.createElement("p");
            let businessAddress = document.createElement("p");
            let businessEmail = document.createElement("p");
            let businessHours = document.createElement("p");
            let businessWebsite = document.createElement("a");

            businessName.textContent = businessDirectory[i].name;
            businessLogo.setAttribute("src", businessDirectory[i].logo)
            
            businessPhoneNumber.textContent = businessDirectory[i].contact.phone;
            businessAddress.textContent = businessDirectory[i].contact.address;
            businessEmail.textContent = businessDirectory[i].contact.email;
            
            console.log(businessDirectory[i].phone);

            businessHours.textContent = businessDirectory[i].hours;
            businessWebsite.textContent = businessDirectory[i].website;

            businessWebsite.setAttribute("href", businessDirectory[i].website);

            businessContactInformation.appendChild(businessPhoneNumber);
            businessContactInformation.appendChild(businessAddress);
            businessContactInformation.appendChild(businessEmail);

            //console.log(businessContactInformation);
            businessSection.setAttribute("class", "businessContainer")
            businessSection.appendChild(businessName);
            businessSection.appendChild(businessLogo);
            businessSection.appendChild(businessContactInformation);
            businessSection.appendChild(businessHours);
            businessSection.appendChild(businessWebsite);

            businessName.setAttribute("class", "businessName");
            businessLogo.setAttribute("class", "businessLogo");
            businessContactInformation.setAttribute("class", "businessContactInformation");
            businessHours.setAttribute("class", "businessHours");
            businessWebsite.setAttribute("class", "businessWebsite");

            document.querySelector(".directoryContainer").appendChild(businessSection);
            
            





        }


    })

