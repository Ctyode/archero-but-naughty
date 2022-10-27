let dummy = {
  "skills": {
    "hero_tavern": {
      "state": "active"
    },
    "tavern_magazine": {
      "state": "available"
    },
    "lyra_photo": {
      "state": "available"
    },
    "everyday_lyra": {
      "state": "available"
    },
    "everyday_question": {
      "state": "available"
    },
    "current_title": {
      "state": "available"
    },
    "virginity": {
      "state": "available"
    },
    "first_time": {
      "state": "available"
    },
    "last_time": {
      "state": "available"
    },
    "sex_experience": {
      "state": "available"
    }
  }
}

let data = {
  "skills": {
    "hero_tavern": {
      "super_parent": "basic",
        "image": "skill_images/tavern.png",
        "title": "Таверна героев!",
        "base_child": 1,
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
        "super_parent": "basic",
        "parent": "hero_tavern",
        "children": 2,
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
    },
    "lyra_photo": {
        "super_parent": "tavern_magazine",
        "parent": "tavern_magazine",
        "line": 0,
        "children": 1,
        "image": "skill_images/lyralei_photo.png",
        "title": "Ежедневное фото Лиралей",
        "description": "Мы можем нанять незаметного папарацци, который каждый день будет делать фото Лиралей, пока она этого не видит. Само собой, для максимальной естественности!",
        "buffs": {
          "favour": "2",
          "entitlement": "2"
        },
        "buffs_description": {
          "favour": "+2% к Лояльности в конце дня",
          "entitlement": "+2% Избалованности в конце дня"
        },
        "cost": 200,
        "icon": "icons/small-lens.png"
    },
    "everyday_lyra": {
        "super_parent": "tavern_magazine",
        "parent": "lyra_photo",
        "line": 0,
        "children": 1,
        "image": "skill_images/lyralei_photo.png",
        "title": "Ежедневное пожелание от Лиралей",
        "description": "Людям нравится, когда их кумиры желают им приятных вещей. Нам не составит труда выделить немного места в газете для пожеланий Лиралей клиентам таверны.",
        "buffs": {
          "favour": "2",
          "entitlement": "2"
        },
        "buffs_description": {
          "favour": "+2% к Лояльности в конце дня",
          "entitlement": "+2% Избалованности в конце дня"
        },
        "cost": 200,
        "icon": "icons/heart-with-arrow.png"
    },
    "everyday_question": {
        "super_parent": "tavern_magazine",
        "parent": "everyday_lyra",
        "line": 0,
        "children": 1,
        "image": "skill_images/lyralei_photo.png",
        "title": "Ежедневный ответ на вопрос",
        "description": "Люди хотят знать о героях как можно больше! Почему бы не позволить им самим задавать вопросы? В конце концов нам не обязательно отвечать на них честно...",
        "buffs": {
          "favour": "2",
          "entitlement": "2"
        },
        "buffs_description": {
          "favour": "+2% к Лояльности в конце дня",
          "entitlement": "+2% Избалованности в конце дня"
        },
        "cost": 200,
        "icon": "icons/question.png"
    },
    "current_title": {
        "super_parent": "tavern_magazine",
        "parent": "everyday_question",
        "line": 0,
        "image": "skill_images/lyralei_photo.png",
        "title": "Текущий титул",
        "description": "В народе по-разному называют героев, давая им удачные или не очень прозвища, клички или титулы. Мы выберем самый подходящий и выставим на всеобщее обозрение.",
        "buffs": {
          "favour": "2",
          "entitlement": "2"
        },
        "buffs_description": {
          "favour": "+2% к Лояльности в конце дня",
          "entitlement": "+2% Избалованности в конце дня"
        },
        "cost": 200,
        "icon": "icons/autograph.png"
    },
    "virginity": {
        "super_parent": "tavern_magazine",
        "parent": "tavern_magazine",
        "line": 1,
        "children": 1,
        "image": "skill_images/lyralei_photo.png",
        "title": "Информация о девственности",
        "description": "Может показаться странным, но я уверен, что мы получим несколько посетителей, которые каждый день будут приходить в таверны лишь бы проверить эту информацию.",
        "buffs": {
          "favour_to_fame": "2"
        },
        "buffs_description": {
          "favour_to_fame": "+2% к конвертации Лояльности в Славу"
        },
        "cost": 200,
        "icon": "icons/dress.png"
    },
    "first_time": {
        "super_parent": "tavern_magazine",
        "parent": "tavern_magazine",
        "line": 1,
        "children": 1,
        "image": "skill_images/lyralei_photo.png",
        "title": "Информация о первых разах",
        "description": "Люди и так будут шептаться об этом, так почему бы нам не пойти не опережение и не рассказать самим про первые разы Лиралей? Разумеется, когда они появятся!",
        "buffs": {
          "favour_to_fame": "2"
        },
        "buffs_description": {
          "favour_to_fame": "+2% к конвертации Лояльности в Славу"
        },
        "cost": 200,
        "icon": "icons/romance.png"
    },
    "last_time": {
        "image": "skill_images/lyralei_photo.png",
        "title": "Информация о последних разах",
        "line": 1,
        "children": 1,
        "description": "Немало людей хотят следить за личной жизнью героев. Дадим им повод заглядывать в нашу таверну каждый день!",
        "buffs": {
          "favour_to_fame": "2"
        },
        "buffs_description": {
          "favour_to_fame": "+2% к конвертации Лояльности в Славу"
        },
        "cost": 200,
        "icon": "icons/fire-heart.png"
    },
    "sex_experience": {
        "image": "skill_images/lyralei_photo.png",
        "title": "Информация обо всём сексуальном опыте",
        "line": 1,
        "description": "Для самых дотошных посетителей мы можем собрать всю известную информацию о сексуальном опыте Лиралей.",
        "buffs": {
          "favour_to_fame": "2"
        },
        "buffs_description": {
          "favour_to_fame": "+2% к конвертации Лояльности в Славу"
        },
        "cost": 200,
        "icon": "icons/sex-worker.png"
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

let counter = 0;
function generateSkillTree() {

  for (var item in data.skills) {
      let state = dummy.skills[item].state;


      let skill_item = document.createElement('button');

      if(counter == 0) {
        skill_item.id = "defaultSkillOpen";
        counter += 1;
      }
      

      skill_item.classList.add("skill_item");
      skill_item.classList.add("infolinks");

      checkSkillIconType(item, skill_item)

      skill_item.setAttribute("onclick","openInfo(event, '" + item + "')");

      let second_level_container = document.createElement('div');
      second_level_container.classList.add("second_level_container");

      if(data.skills[item].super_parent == "basic") {
        let first_level_container = document.createElement('div');
        first_level_container.classList.add("first_level_container");
        skill_tree.appendChild(first_level_container);

        if(data.skills[item].base_child == 1) {
          let line_vert = document.createElement('div');
          line_vert.classList.add('border_vert')

          skill_tree.appendChild(line_vert);
        }

        first_level_container.appendChild(skill_item)

        if(data.skills[item].children == 2) {
          let border_center_horizontal_short = document.createElement('div');
          border_center_horizontal_short.classList.add('border_center_horizontal_short')
          first_level_container.appendChild(border_center_horizontal_short)


          let border_vertical_short = document.createElement('div');
          border_vertical_short.classList.add('border_vertical_short')
          first_level_container.appendChild(border_vertical_short)

          let border_container = document.createElement('div');
          border_container.classList.add('border_container')

          let border_top_horizontal_short = document.createElement('div');
          border_top_horizontal_short.classList.add('border_top_horizontal_short')
          border_container.appendChild(border_top_horizontal_short)


          let border_bottom_horizontal_short = document.createElement('div');
          border_bottom_horizontal_short.classList.add('border_bottom_horizontal_short')
          border_container.appendChild(border_bottom_horizontal_short)

          first_level_container.appendChild(border_container)
        }

        first_level_container.appendChild(second_level_container)
        second_level_container.classList.add(item);
      }
      
      if(data.skills[item].children != null) {
        for (let index = 0; index < data.skills[item].children; index++) {
          let third_level_container = document.createElement('div');
          third_level_container.classList.add("third_level_container");    
          third_level_container.id = "line" + index;


          second_level_container.appendChild(third_level_container)          
        }
      }
      
      if(data.skills[item].super_parent != "basic") {
        let element = document.getElementById('line' + data.skills[item].line);
        element.appendChild(skill_item);

        if(data.skills[item].children == 1) {
          let border_center_horizontal_short = document.createElement('div');
          border_center_horizontal_short.classList.add('border_center_horizontal_short')
          element.appendChild(border_center_horizontal_short)
        }
      }


      let icon = document.createElement('img');
      icon.className = `icon`;
      icon.src = data.skills[item].icon;

      // first_level_container.appendChild(skill_item)
      skill_item.appendChild(icon);

      // generates info about skill item

      let info_item_container = document.createElement('div');
      info_item_container.classList.add("info_item_container");


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

      info_item_container.appendChild(info_item);
      info_container.appendChild(info_item_container);

      
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