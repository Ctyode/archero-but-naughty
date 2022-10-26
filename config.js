let dummy = {
  "skills": {
    "hero_tavern": {
      "state": "active"
    },
    "tavern_magazine": {
      "state": "available"
    }
  }
}

let data = {
  "skills": {
    "hero_tavern": {
        "image": "skill_images/tavern.png",
        "title": "Таверна героев!",
        "description": "Теперь, когда знаменитая 'таверна героев' открыла свои двери для всех, публика не заставит себя ждать. К сожалению, люди быстро узнают, что здешний сервис оставляет желать лучшего. А значит, у нас впереди много работы.",
        "buffs": {
          "favour": "300",
          "entitlement": "10",
          "sufferance": "100",
          "service_slot": "1"
        },
        "buffs_description": {
          "favour": '+300 к максимальной <span class="text_orange">Лояльности</span>',
          "entitlement": '+10 <span class="text_orange">Избалованности</span> в день',
          "sufferance": '+100 к <span class="text_orange">Терпимости</span>',
          "service_slot": "+1 слот активного сервиса"
        },
        "cost": 0,
        "icon": "icons/beer.png"
    },
    "tavern_magazine": {
        "image": "skill_images/lyralei_photo.png",
        "title": "Геройская стенгазета",
        "description": "Если бы в таверне было много героев, мы могли бы издавать целый журнал об их жизни. К сожалению, сами герои нечастые гости в собственной таверне. Но мы можем организовать издание одностраничной газеты о новостях, целиком посвящённых главной постоялице - Лиралей!",
        "buffs": {
          "favour_to_fame": "2",
          "favour": "2",
          "entitlement": "2"
        },
        "buffs_description": {
          "favour_to_fame": "+2% к конвертации Лояльности в Славу",
          "favour": "+2% к Лояльности в конце дня",
          "entitlement": "+2% Избалованности в конце дня"
        },
        "cost": 200,
        "icon": "icons/magazine.png"
    }
  }
}

let skill_tree = document.getElementById("skill-tree");
let info_container = document.getElementById("info-container");


function checkButtonType(item_name, button) {
  let state = dummy.skills[item_name].state;

  if(state == "available") {
    button.classList.add("info_button_available");
  } else if(state == "unavailable") {
    button.classList.add("info_button_unavailable");
  }
}

function checkSkillIconType(item_name, skill_item) {
  let state = dummy.skills[item_name].state;

  if(state == "available") {
    skill_item.classList.add("item-available");
  } else if(state == "unavailable") {
    skill_item.classList.add("item-unavailable");
  } else if(state == "active") {
    skill_item.classList.add("item-active");
  }
}

function generateSkillTree() {

  for (var item in data.skills) {
      let counter = 0;
      
      let state = dummy.skills[item].state;

      let skill_item = document.createElement('button');
      if(counter == 0) {
        console.log("test")
        skill_item.id = "defaultSkillOpen";
        counter += 1;
      }
      skill_item.classList.add("skill_item");
      skill_item.classList.add("infolinks");
      checkSkillIconType(item, skill_item)

      skill_item.setAttribute("onclick","openInfo(event, '" + item + "')");

      

      let icon = document.createElement('img');
      icon.className = `icon`;
      icon.src = data.skills[item].icon;

      skill_item.appendChild(icon);
      skill_tree.appendChild(skill_item);

      // generates info about skill item

      let info_item = document.createElement('div');
      info_item.classList.add("infocontent");
      info_item.id = item;

      let image =  document.createElement('img');
      image.classList.add("info_image");
      image.src = data.skills[item].image;

      let title = document.createElement('div');
      title.classList.add("info_title");
      title.innerHTML = data.skills[item].title;

      let description = document.createElement('div');
      description.classList.add("info_description");
      description.innerHTML = data.skills[item].description;


      let buffs = document.createElement('div');
      buffs.classList.add("info_buffs");

      Object.keys(data.skills[item].buffs_description).forEach(function(k){
        console.log(k + ' - ' + data.skills[item].buffs_description[k]);

        let buff =  document.createElement('div');
        buff.classList.add("info_buff_description");
        buff.innerHTML = data.skills[item].buffs_description[k];
        buffs.appendChild(buff);


      });

      let upgrade_container = document.createElement('div');
      upgrade_container.classList.add("info_upgrade_container");

      let cost = document.createElement('div');
      cost.classList.add("info_cost");
      cost.innerHTML = "Cost: " + data.skills[item].cost;

      let button = document.createElement('button');
      button.classList.add("info_button");

      if(state == "active") {
        button.innerHTML = "Active";
      } else {
        button.innerHTML = "Upgrade";
      }
      checkButtonType(item, button);

      info_item.appendChild(image);
      info_item.appendChild(title);
      info_item.appendChild(description);
      info_item.appendChild(buffs);

      if(state != "active") {
        upgrade_container.appendChild(button);
        upgrade_container.appendChild(cost);
      }

      info_item.appendChild(upgrade_container);

      info_container.appendChild(info_item);

      
  }


}


generateSkillTree();

function openInfo(evt, infoName) {
  // Declare all variables
  var i, infocontent, infolinks;

  // Get all elements with class="infocontent" and hide them
  infocontent = document.getElementsByClassName("infocontent");
  for (i = 0; i < infocontent.length; i++) {
    infocontent[i].style.visibility = "hidden";
    infocontent[i].style.opacity = "0.0";
  }

  // Get all elements with class="infolinks" and remove the class "active"
  infolinks = document.getElementsByClassName("infolinks");
  for (i = 0; i < infolinks.length; i++) {
    infolinks[i].className = infolinks[i].className.replace(" selected_item", "");
    
  }

  // Show the current info, and add an "active" class to the button that opened the info
  document.getElementById(infoName).style.visibility = "visible";
  document.getElementById(infoName).style.opacity = "1.0";
  evt.currentTarget.className += " selected_item";
}

document.getElementById("defaultSkillOpen").click();