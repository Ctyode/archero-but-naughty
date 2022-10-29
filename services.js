let services_state_dummy = {
    "services": {
        "extended_bar": {
            "state": "active"
        },
        "extended_menu": {
            "state": "available"
        },
        "free_hugs": {
            "state": "cooldown",
            "cooldown": "3"
        }
    }
}

let services = {
    "services": {
      "extended_bar": {
          "image": "services_images/luna.png",
          "title": "Расширенный бар",
          "description": "Эль - это хорошо. Но если мы хотим привлечь серьёзную публику в наше заведение, то расширение винной карты неизбежно.",
          "buffs": {
            "favour_for_3_days": "70",
            "entitlement_in_3_days": "70"
          },
          "buffs_description": {
            "favour_for_3_days": '+70 к <span class="text_orange">Лояльности</span> на три дня',
            "entitlement_in_3_days": '+70 к <span class="text_orange">Избалованности</span> через три дня'
          },
          "cost": 700
      },
      "extended_menu": {
        "image": "services_images/maiden.png",
        "title": "Расширенное меню",
        "description": "Если мы хотим превратить наше заведение в хорошую таверну, то пора начать добавлять в меню что-то кроме рагу.",
        "buffs": {
          "favour_for_2_days": "50",
          "entitlement_in_2_days": "50"
        },
        "buffs_description": {
            "favour_for_2_days": '+50 к <span class="text_orange">Лояльности</span> на два дня',
            "entitlement_in_2_days": '+50 к <span class="text_orange">Избалованности</span> через два дня'
        },
        "cost": 500
    },
    "free_hugs": {
        "image": "services_images/sisters.png",
        "title": "Бесплатные объятия",
        "description": "Гости будут посещать нашу таверну с большим энтузиазмом, если мы предложим им бесплатные объятия. А может и что-то еще...",
        "buffs": {
            "favour_for_2_days": "50",
            "entitlement_in_2_days": "50"
        },
        "buffs_description": {
            "favour_for_2_days": '+50 к <span class="text_orange">Лояльности</span> на два дня',
            "entitlement_in_2_days": '+50 к <span class="text_orange">Избалованности</span> через два дня'
        },
        "cost": 700
    }
  }
}

let services_container = document.getElementById("services-container");

function checkServiceButtonType(item_name, button) {
    let state = services_state_dummy.services[item_name].state;
  
    if(state == "available") {
        button.classList.add("services_button_available");
    } else if(state == "unavailable") {
        button.classList.add("services_button_unavailable");
    } else if(state == "cooldown") {
        button.classList.add("services_button_cooldown");
    } else if(state == "active") {
        button.classList.add("services_button_active");
    }
  }

function generateServices() {
    for (var item in services.services) {
        let services_dummy = services_state_dummy.services[item].state;

        let service_item = document.createElement('div');
        service_item.classList.add("service_item");


        let service_content_container = document.createElement('div');
        service_content_container.classList.add("service_content_container");

        services_container.appendChild(service_item)

        let image =  document.createElement('img');
        image.classList.add("services_image");
        image.src = services.services[item].image;

        let title = document.createElement('div');
        title.classList.add("services_title");
        title.innerHTML = services.services[item].title;

        let description = document.createElement('div');
        description.classList.add("services_description");
        description.innerHTML = services.services[item].description;


        let buffs = document.createElement('div');
        buffs.classList.add("services_buffs");

        Object.keys(services.services[item].buffs_description).forEach(function(k){
            console.log(k + ' - ' + services.services[item].buffs_description[k]);

            let buff =  document.createElement('div');
            buff.classList.add("services_buff_description");
            buff.innerHTML = services.services[item].buffs_description[k];
            buffs.appendChild(buff);


        });

        let upgrade_container = document.createElement('div');
        upgrade_container.classList.add("services_upgrade_container");

        let cost = document.createElement('div');
        cost.classList.add("services_cost");
        cost.innerHTML = "Cost: " + services.services[item].cost;

        let button = document.createElement('button');
        button.classList.add("services_button");

        if(services_dummy == "active") {
            button.innerHTML = "Active";
        } else if(services_dummy == "unavailable" || services_dummy == "available") {
            button.innerHTML = "Activate";
        } else if(services_dummy == "cooldown") {
            button.innerHTML = "Cooldown for " + services_state_dummy.services[item].cooldown + " days";
        }

        checkServiceButtonType(item, button);

        service_item.appendChild(image);
        service_item.appendChild(service_content_container)

        service_content_container.appendChild(title);
        service_content_container.appendChild(description);
        service_content_container.appendChild(buffs);

        upgrade_container.appendChild(cost);
        upgrade_container.appendChild(button);

        service_content_container.appendChild(upgrade_container);

    }
}

generateServices();