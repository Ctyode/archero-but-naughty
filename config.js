let data = {
  "skills": {
    "hero_tavern": {
        "image": "",
        "title": "Таверна героев!",
        "description": "Теперь, когда знаменитая 'таверна героев' открыла свои двери для всех, публика не заставит себя ждать. К сожалению, люди быстро узнают, что здешний сервис оставляет желать лучшего. А значит, у нас впереди много работы.",
        "buffs": {
          "favour": "300",
          "entitlement": "10",
          "sufferance": "100",
          "service_slot": "1"
        },
        "buffs": {
          "favour": "+300 к максимальной Лояльности",
          "entitlement": "+10 Избалованности в день",
          "sufferance": "+100 к Терпимости",
          "service_slot": "+1 слот активного сервиса"
        },
        "cost": 0,
        "icon": "icons/beer.png"
    },
    "tavern_magazine": {
        "title": "Геройская стенгазета",
        "description": "Если бы в таверне было много героев, мы могли бы издавать целый журнал об их жизни. К сожалению, сами герои нечастые гости в собственной таверне. Но мы можем организовать издание одностраничной газеты о новостях, целиком посвящённых главной постоялице - Лиралей!",
        "buffs": {
          "favour_to_fame": "2",
          "favour": "2",
          "entitlement": "2"
        },
        "buffs_text": {
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


function generateSkillTree() {

  for (var item in data.skills) {

      let skill_item = document.createElement('button');
      skill_item.classList.add("skill_item");
      skill_item.classList.add("infolinks");

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


      let title = document.createElement('div');
      title.classList.add("info_title");
      title.innerHTML = data.skills[item].title;

      let description = document.createElement('div');
      description.classList.add("info_description");
      description.innerHTML = data.skills[item].description;

      info_item.appendChild(title);
      info_item.appendChild(description);

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
    infocontent[i].style.display = "none";
  }

  // Get all elements with class="infolinks" and remove the class "active"
  infolinks = document.getElementsByClassName("infolinks");
  for (i = 0; i < infolinks.length; i++) {
    infolinks[i].className = infolinks[i].className.replace(" active", "");
  }

  // Show the current info, and add an "active" class to the button that opened the info
  document.getElementById(infoName).style.display = "block";
  evt.currentTarget.className += " active";
}

// let id = div.id;
//    let panel = document.createElement('div');
//    panel.className = `card_panel base_ui`;
//
//    div.appendChild(panel);
//
//    let arousal = document.createElement('div');
//    arousal.className = `card_arousal`;
//    arousal.id = `card-arousal-${id}`;
//    panel.appendChild(arousal);
