const plants = [

    {"name": "Bonsai Tree",
    "price": 900,
    "description": "A bonsai tree is a miniature tree that is cultivated in a shallow container and trained to have a specific shape through the art of bonsai. Bonsai is a traditional Japanese art form that involves the cultivation of small, ornamental trees in pots.",
    "image": "bonsaitree.png"},
  
  {
    "name": "Large Monstera Deliciosa",
    "price": 500,
    "description": "Monstera Deliciosas are popular indoor plants. They are great for beginners as they require very little maintenance. This large Monstera comes in a handmade basket which is included in the price and it stands roughly 70cm high so it isn’t very tall. ",
    "image": "LargeMonstera.png"
  },
  {
    "name": "Chinese Money Plant",
    "price": 120,
    "description": "The Chinese money plant, also known as Pilea peperomioides, is a popular houseplant that has gained significant popularity in recent years. It is native to the Yunnan Province in Southern China and is a member of the Urticaceae family. ",
    "image": "ChineesmoneyPlant.png"
  },
  {
    "name": "Fiddle Leaf Fig",
    "price": 600,
    "description": "This very popular indoor plant features large, green leaves that grow upright on its sleek stem. Although many people do struggle with these plants, there are two very important things to remember; these plants need lots of bright natural light from a window and they are very sensitive to overwatering, so its best to always underwater.",
    "image": "FiddleLeaffig.png"
  },
  {
    "name": "Rain Forest Delight Bamboo Plant",
    "price": 550,
    "description": "A vibrant, green areca bamboo plant comes in a gorgeous glass cylinder vase that has been filled with moss and stones for an elegant touch. Send today with NetFlorist! Get this Rain Forest Delight Bamboo Plant delivered with NetFlorist.",
    "image": "rainnforest.png"
  },
  {
    "name": "Dracaena Song",
    "price": 40,
    "description": "Song of India (Golden) is hardy, drought tolerant, low maintenance, and air purifier house plant. What makes it special: Best air purifier indoor plant. Best plant for AC rooms",
    "image": "Dracaena Song.png"
  }
    
];


$(document).ready(function(){
//select the plants container and add html from our template 
    


    loadPlants();
});


function loadPlants () {
    for (let i = 0; i < plants.length; i++) {
        console.log(plants[i]);

        $("#plantsContainer").append($("#plantCardTemplate").html());

        let currentChild = $("#plantsContainer").children().eq(i+1);

        $(currentChild).find(".card-img-top").attr('src','assets/' + plants[i].image);

        $(currentChild).find("#nameText").text(plants[i].name);

        $(currentChild).find("#priceText").text('R ' + plants[i].price);

        $(currentChild).find("#descriptionText").text(plants[i].description);

        $(currentChild).find("#descriptionText").hide();
        
        
    }
}


$("#plantsContainer").on('click', '.card', function(){

  // Toggle the price & description text
  $(this).find("#priceText").toggle();
  $(this).find("#descriptionText").toggle();

  // Resize the image to fit the additional content
  $(this).find(".card-img-top").toggleClass("small");

});















