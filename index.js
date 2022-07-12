var captions = ["Air fried Lemon Pepper Buffalo Wings served with baked Cajun Parmesan fries!!! 🥵🔥🐓","Blackened Salmon, Shrimp Fettuccine drizzled with Gouda White Wine Sauce, Asparagus, and Garlic Bread!🤤👨🏾‍🍳.","Rosemary Garlic Lamb Chops, Lemon Butter Garlic Seared Scallops, Seasoned Sugar Snap Peas, and Loaded Mashed Potatoes.👨🏾‍🍳🔥"];
var images = ["Recipes/Chef Kiss Unlimited LLC (@mealsbymood) • Instagram photos and videos_files/198594927_636978533929362_5895823369253501036_n.jpg","Recipes/Chef Kiss Unlimited LLC (@mealsbymood) • Instagram photos and videos_files/247517404_592283551982612_2788117762222762960_n.jpg","Recipes/Chef Kiss Unlimited LLC (@mealsbymood) • Instagram photos and videos_files/270296712_269532495164216_8087519797152770548_n.jpg"];
var links = ["Recipes.html","Recipes.html","Recipes.html"];
var i = 0;
var renew = setInterval(function(){
    if(captions.length == i){
        i = 0;
    }
    else {
    document.getElementById("bannerImage").src = images[i]; 
    document.getElementById("bannerCaption").textContent = captions[i];
    document.getElementById("bannerLink").href = links[i]; 
    i++;
    }
},1000);
// End of card that changes every second