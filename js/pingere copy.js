let body = document.querySelector("body");
let btn = document.querySelector(".btn");
let sct = document.querySelector(".sct");
let DELbtn = document.querySelector(".DELbtn");
let form = document.forms[0];
let elem = form.elements.Vib
let cards_list = document.querySelector(".cards_list");
let head_div = document.querySelector("#tag_list");
let inp = document.querySelector(".inp");
let src = document.querySelector(".src");

inp.hidden = true;
src.hidden = true;

btn.addEventListener("click", function () 
{
  fetch(`https://acnhapi.com/v1a/${sct.value}`).then((res) => 
    {
      if (res.ok) 
      {
        return res.json();
      }
    })
    .then((data) => 
    {
      let del = document.getElementsByClassName("div_card");
      let del_btn = document.getElementsByClassName("btn_tag");
      inp.hidden = false;
      src.hidden = false;
      if(del.length > 0)
      {
          while(del.length){
          body.removeChild(del[del.length-1]);
          }
      }
      if(del_btn.length > 0)
      {
          while(del_btn.length){
          head_div.removeChild(del_btn[del_btn.length-1]);
          }
      }
//--------------------------------------------------------------------Первый if--------------------------------------------------------------------//
      if (sct.value == "fish") 
      {
        for (let i = 0; i < data.length; i++) 
        {
            let card = document.createElement("div");
            let image = document.createElement("img");
            let Loc = document.createElement("p");
            let Rare = document.createElement("p");
            let Price= document.createElement("p");
            let name = document.createElement("p");

            name.textContent = "Название: ";
            Price.textContent = "Цена: ";
            Loc.textContent = "Локация: ";
            Rare.textContent = "Редкость: ";

            image.src = data[i]["image_uri"];
            name.textContent = data[i].name["name-EUru"];
            Price.textContent += data[i]["price"];
            Loc.textContent += data[i]["availability"]["location"];
            Rare.textContent += data[i]["availability"]["rarity"];


            card.appendChild(name);
            card.appendChild(Price);
            card.appendChild(Loc);
            card.appendChild(Rare);
            card.appendChild(image);
            body.appendChild(card);

            card.setAttribute("class", "div_card");
            name.setAttribute("class", "name");
            Loc.setAttribute("class", "p_class");
            Rare.setAttribute("class", "p_class");
            Price.setAttribute("class", "p_class");
            image.setAttribute("class", "image");
        }
//--------------------------------------------------------------------Второй if--------------------------------------------------------------------//
      } else if (sct.value == "sea") 
        {
          for (let i = 0; i < data.length; i++) 
          {
            let card = document.createElement("div");
            let image = document.createElement("img");
            let Price= document.createElement("p");
            let name = document.createElement("p");
            
            name.textContent = "Название: ";
            Price.textContent = "Цена: ";

            image.src = data[i]["image_uri"];
            name.textContent = data[i].name["name-EUru"];
            Price.textContent += data[i]["price"];

            card.appendChild(name);
            card.appendChild(Price);
            card.appendChild(image);
            body.appendChild(card);

            card.setAttribute("class", "div_card");
            name.setAttribute("class", "name");
            image.setAttribute("class", "image");
          }
//--------------------------------------------------------------------Третий if--------------------------------------------------------------------//
        } else if (sct.value == "bugs") 
          {
            for (let i = 0; i < data.length; i++) 
            {
              let card = document.createElement("div");
              let image = document.createElement("img");
              let Price= document.createElement("p");
              let name = document.createElement("p");
              let Rare = document.createElement("p");

              image.src = data[i]["image_uri"];
              name.textContent = data[i].name["name-EUru"];
              Price.textContent += data[i]["price"];
              Rare.textContent += data[i]["availability"]["rarity"];

              card.appendChild(name);
              card.appendChild(Price);
              card.appendChild(Rare);
              card.appendChild(image);
              body.appendChild(card);

              card.setAttribute("class", "div_card");
              name.setAttribute("class", "name");
              image.setAttribute("class", "image");
              Rare.setAttribute("class", "p_class");
            }
//--------------------------------------------------------------------Четвертый if--------------------------------------------------------------------//
          } else if (sct.value == "villagers") 
            {
              for (let i = 0; i < data.length; i++) 
              {
                let card = document.createElement("div");
                let image = document.createElement("img");
                let name = document.createElement("p");
                let Person = document.createElement("p");
                let Birthday = document.createElement("p");

                image.src = data[i]["image_uri"];
                name.textContent = data[i].name["name-EUru"];
                Person.textContent += data[i]["personality"];
                Birthday.textContent += data[i]["birthday-string"];

                card.appendChild(name);
                card.appendChild(Person);
                card.appendChild(Birthday);
                card.appendChild(image);
                body.appendChild(card);
                

                card.setAttribute("class", "div_card");
                name.setAttribute("class", "name");
                image.setAttribute("class", "image");
              }
//--------------------------------------------------------------------Пятый if--------------------------------------------------------------------//
            } else if (sct.value == "songs") 
              {
                for (let i = 0; i < data.length; i++) 
                {
                  let card = document.createElement("div");
                  let image = document.createElement("img");
                  let name = document.createElement("p");
                  let buy = document.createElement("p");
                  let sell = document.createElement("p");

                  image.src = data[i]["image_uri"];
                  name.textContent = data[i].name["name-EUru"];
                  buy.textContent += data[i]["buy"];
                  sell.textContent += data[i]["sell"];

                  card.appendChild(name);
                  card.appendChild(buy);
                  card.appendChild(sell);
                  card.appendChild(image);
                  body.appendChild(card);

                  card.setAttribute("class", "div_card");
                  name.setAttribute("class", "name");
                  image.setAttribute("class", "image");
                }
//--------------------------------------------------------------------Шестой if--------------------------------------------------------------------//
              } else if (sct.value == "houseware") 
                {
                  for (let i = 0; i < data.length; i++) 
                  {
                    for (let g = 0; g < data[i].length; g++) 
                    {
                      let card = document.createElement("div");
                      let image = document.createElement("img");
                      let buy = document.createElement("p");
                      let sell = document.createElement("p");
                      let name = document.createElement("p");
                      let Source= document.createElement("p");

                      name.textContent = "Название: ";
                      Source.textContent = "Источник: ";
                      buy.textContent = "Цена покупки: ";
                      sell.textContent = "Цена продажи: ";

                      image.src = data[i][g]["image_uri"];
                      name.textContent = data[i][g].name["name-EUru"];
                      Source.textContent += data[i][g]["source"];
                      buy.textContent += data[i][g]["buy-price"];
                      sell.textContent += data[i][g]["sell-price"];

                      card.appendChild(name);
                      card.appendChild(buy);
                      card.appendChild(sell);
                      card.appendChild(Source);
                      card.appendChild(image);
                      body.appendChild(card);

                      card.setAttribute("class", "div_card");
                      name.setAttribute("class", "name");
                      image.setAttribute("class", "image");
                    }
                  }
                }
                src.addEventListener("click", function(){
                  let crd = document.querySelectorAll(".div_card");
                  for (let l = 0; l < crd.length; l++) 
                  {
                    for (let k = 0; k < crd[l].childNodes.length; k++) 
                    {
                      if (crd[l].childNodes[k].className == "name") 
                      {
                        let name = crd[l].childNodes[k];
                        let name_str = name.textContent;
                        let inp_str = inp.value;
                        inp_str = inp_str.toLowerCase();
                        name_str = name_str.toLowerCase();
                        if (name_str.match(inp_str) == null) 
                        {
                        crd[l].hidden = true;
                        }
                      }  
                    }
                  }
              })
              });
            });




// fetch(`https://acnhapi.com/v1a/${sct.value}`)
//     .then((res) => 
//     {
//         if (res.ok) 
//         {
//         return res.json();
//         }
//     })
//     .then((data) => 
//     {
//         if (elem[0] == "10") 
//         {
//           if (sct.value = "fish") 
//           {
//             for (let i = 0; i < data.length; i++) 
//             {
//                 let card = document.createElement("div");
//                 let image = document.createElement("img");
//                 let Loc = document.createElement("p");
//                 let Rare = document.createElement("p");
//                 let Price= document.createElement("p");
//                 let name = document.createElement("p");

//                 image.src = data[i]["image_uri"];
//                 name.textContent = data[i].name["name-EUru"];
//                 name.textContent = "Название: ";
//                 Price.textContent += data[index]["price"];
//                 Price.textContent = "Цена: ";
//                 Rare.textContent += data[index]["availability"]["rarity"];
//                 Availibility_rarity.textContent = "Редкость: ";
//                 Loc.textContent += data[index]["availability"]["location"];
//                 Availibility_location.textContent = "Локация: ";

//                 card.appendChild(name);
//                 card.appendChild(Price);
//                 card.appendChild(Loc);
//                 card.appendChild(Rare);
//                 card.appendChild(image);//делаем карточку
//                 body.appendChild(card);//получаем все в интерфейсе пользователя

//                 card.setAttribute("class", "div_card");
//                 name.setAttribute("class", "name");
//                 Loc.setAttribute("class", "p_class");
//                 Rare.setAttribute("class", "p_class");
//                 Price.setAttribute("class", "p_class");
//                 image.setAttribute("class", "image");
//             }
//           }
//         }
//       });


    //         for (let i = 0; i < data.length; i++) работает блеать не трож
    //         {
    //             let card = document.createElement("div");
    //             let image = document.createElement("img");
    //             let Loc = document.createElement("p");
    //             let Rare = document.createElement("p");
    //             let Price= document.createElement("p");
    //             let name = document.createElement("p");
    //             let Buy = document.createElement("p");
    //             let Sell = document.createElement("p");
    //             image.src = data[i]["image_uri"];
    //             name.textContent = data[i].name["name-EUru"];
    //             Price.textContent += data[index]["price"];
    //             Rare.textContent += data[index]["availability"]["rarity"];
    //             Buy.textContent += data[index]["buy-price"];
    //             Sell.textContent += data[index]["sell-price"];
    //             // card.append(image, name, Loc, Rare, Price);
    //             // body.appendChild(card);

    //             card.appendChild(name);
    //             card.appendChild(Price);
    //             card.appendChild(Loc);
    //             card.appendChild(Rare);
    //             card.appendChild(image);//делаем карточку
    //             body.appendChild(card);//получаем все в интерфейсе пользователя

    //             card.setAttribute("class", "div_card");
    //             name.setAttribute("class", "name");
    //             Loc.setAttribute("class", "p_class");
    //             Rare.setAttribute("class", "p_class");
    //             Price.setAttribute("class", "p_class");
    //             image.setAttribute("class", "image");
    //         }
    //     }
    //     else 
    //     {
    //         delete card;
    //     }
    // });







//       for (let i = 0; i < data.length; i++) 
//       {
//         let card = document.createElement("div");
//         let image = document.createElement("img");
//         let Loc = document.createElement("p");
//         let Rare = document.createElement("p");
//         let Price= document.createElement("p");
//         let name = document.createElement("p");
//         image.src = data[i]["image_uri"];
//         name.textContent = data[i].name["name-EUru"];

//         card.appendChild(name);
//         card.appendChild(image, Loc, Rare, Price, name);
//         body.appendChild(card);

//         card.setAttribute("class", "div_card");
//         name.setAttribute("class", "name");
//         Loc.setAttribute("class", "p_class");
//         Rare.setAttribute("class", "p_class");
//         Price.setAttribute("class", "p_class");
//         image.setAttribute("class", "image");
//       }
//     });
// });











// DELbtn.addEventListener("click", function()
// {
//     card.remove;
// });


// btn.addEventListener("click", function () 
// {
//   fetch(`https://acnhapi.com/v1a/${sct.value}`)
//     .then((res) => 
//     {
//       if (res.ok) 
//       {
//         return res.json();
//       }
//     })
//     .then((data) => 
//         if (sct.value = "fish") {
//             let card = document.createElement("div");
//             let image = document.createElement("img");
//             let Loc = document.createElement("p");
//             let Rare = document.createElement("p");
//             let Price= document.createElement("p");
//             let name = document.createElement("p");
//             image.src = data[i]["image_uri"];
//             name.textContent = data[i].name["name-EUru"];
//             card.append(image, name, Loc, Rare, Price);
//             body.appendChild(card);
//         }
//     });
// });