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
            let businessWebsite = document.createElement("p");

            businessName.textContent = businessDirectory[i].name;
            businessLogo.setAttribute("src", businessDirectory[i].logo)
            
            businessPhoneNumber.textContent = businessDirectory[i].phone;
            businessAddress.textContent = businessDirectory[i].address;
            businessEmail.textContent = businessDirectory[i].email;

            businessHours.textContent = businessDirectory[i].hours;
            businessWebsite.textContent = businessDirectory[i].website;

            businessContactInformation.appendChild(businessPhoneNumber);
            businessContactInformation.appendChild(businessAddress);
            businessContactInformation.appendChild(businessEmail);
            
            





        }


    })


/*
    const eventsURL = "https://dandlp95.github.io/wdd230/lesson-11/events.json";
    fetch(eventsURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            //console.log(jsonObject);
    
            const sodaSpringEvents = jsonObject["events"][1].FishHaven;
    
    
            for (let i = 0; i < sodaSpringEvents.length; i++) {
                let eventSection = document.createElement("section");
                let eventTextDiv = document.createElement("div");
                let eventImgDiv = document.createElement("div");
                let title = document.createElement("h2");
                let date = document.createElement("p");
                let img = document.createElement("img");
    
    
                title.textContent = sodaSpringEvents[i].event;
                date.textContent = sodaSpringEvents[i].date;
                img.setAttribute("src", sodaSpringEvents[i].photo);
                img.setAttribute("alt", sodaSpringEvents[i].photoDescription);
    
                eventTextDiv.appendChild(title);
                eventTextDiv.appendChild(date);
                eventImgDiv.appendChild(img);
    
                eventSection.appendChild(eventTextDiv);
                eventSection.appendChild(eventImgDiv);
    
                eventSection.classList.add("event");
                eventTextDiv.classList.add("event-text");
                eventImgDiv.classList.add("event-img");
    
    
                document.querySelector("div.events").appendChild(eventSection);
    
            }
    
    
        })
    */