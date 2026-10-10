/* ========== CONFIG: single place to edit. Leave "" until real values exist. ========== */
const restaurant={
 name:"Ajwa House of Fast Food",
 address:{street:"Millat Nagar, Road Number 4, Nashik Rd",postal:"421302",city:"Bhiwandi",region:"Maharashtra",country:"IN"},
 phone:"+918888855313", whatsapp:"918888855313" /* digits with country code, e.g. 91XXXXXXXXXX */,
 instagram:"https://www.instagram.com/ajwa_fastfood/", googleMaps:"https://www.google.com/maps/place/Ajwa+House+of+Fast+food/@19.3137376,73.0724032,15z/data=!4m15!1m8!3m7!1s0x3be7bd8f8836274d:0xc12a62dcc3314628!2sAjwa+House+of+Fast+food!8m2!3d19.3137376!4d73.0724032!10e9!16s%2Fg%2F11gl4kymnw!3m5!1s0x3be7bd8f8836274d:0xc12a62dcc3314628!8m2!3d19.3137376!4d73.0724032!16s%2Fg%2F11gl4kymnw?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D", googleMapsEmbed:"", swiggy:"https://www.swiggy.com/restaurants/mumbai/bhiwandi/ajwa-house-of-fast-food-892433/dineout", zomato:"https://www.zomato.com/mumbai/ajwa-house-of-fast-food-bhiwandi-thane", crisfood:"https://crisfood.com/restaurant-details/ajwa-house-of-fast-food-5fa4021d921db", canonical:"",
 openingHours:{monday:"11 AM - 11 PM",tuesday:"11 AM - 11 PM",wednesday:"11 AM - 11 PM",thursday:"11 AM - 11 PM",friday:"11 AM - 11 PM",saturday:"11 AM - 11 PM",sunday:"11 AM - 11 PM"},
 why:["Freshly prepared","Quality ingredients","Made for every craving","Local favourite"] /* placeholders: edit */
};
/* ========== MENU DATA: SAMPLE ITEMS ONLY. price:null shows "See price on platform". image:"" uses placeholder. ========== */
/* Optional per-item order links. Key = exact item name. Empty or missing = the restaurant page above is used.
Example: "Chicken Meal For 2":{crisfood:"https://..."} */
const itemLinks={};
/* ===== MENU DATA (from the Ajwa menu card photo; VERIFY prices) =====
Format: "@Category|emoji|size labels" then "Item name|price[,price...]|optional description". "(New)" marks new items. */
const RAW=`@Chicken Cheese Pizza|🍕|Small,Medium,Large
Chicken Pizza|120,160,240
Chicken Margarita Pizza|140,180,260
Chicken Manchurian Pizza|150,190,270
Chicken Sausage Pizza (New)|150,190,270
Chicken Classic Pizza|170,220,280
Chicken Mayonnaise Pizza|170,220,280
Chicken Tikka Nawabi Pizza|170,220,280
Chicken Ajwa Royal Pizza|180,230,290
Chicken Chilly Pizza|180,230,330
Chicken Kofta Pizza (New)|180,230,330
Chicken Mexican Pizza (New)|180,230,330
Chicken Sweetcorn Pizza|180,230,330
Chicken Schezwan Spicy Pizza|180,230,330
Chicken Mexican Mayo Mix Pizza (New)|200,250,350
Chicken Shawarma Pizza (New)|200,250,350
Chicken Ajwa Special Pizza|200,250,350
@Veg Cheese Pizza|🍕|Small,Medium,Large
Veg Pizza|110,150,210
Margarita Pizza|120,160,220
Cheese Pizza|140,180,240
Veg Tandoori Mix Pizza|140,180,240
Veg Cheese Tomato Pizza|140,180,240
Veg Sweet Corn Pizza|150,190,250
Paneer Chilli Pizza|150,190,250
Veg Mushroom Pizza|160,200,270
Veg Russian Pizza|160,200,270
Veg Ajwa Special Pizza (New)|180,230,290
@Chicken Mozzarella Pizza|🍕|Small,Medium,Large
Chicken Sausage Mozzarella Pizza (New)|170,220,290
Chicken Mexican Mozzarella Pizza (New)|190,240,340
Chicken Kofta Mozzarella Pizza (New)|190,240,340
Chicken Chilly Mozzarella Pizza|200,250,350
Chicken Schezwan Spicy Mozzarella Pizza|200,250,350
Chicken Tikka Nawabi Mozzarella Pizza|200,250,350
Chicken Mexican Mayo Mozzarella Pizza (New)|200,250,350
Chicken Shawarma Mozzarella Pizza|200,250,350
@Veg Mozzarella Pizza|🍕|Small,Medium,Large
Veg Sweet Corn Mozzarella Pizza (New)|170,210,280
Veg Tandoori Mix Mozzarella Pizza (New)|170,210,280
Paneer Chilli Mozzarella Pizza (New)|170,210,280
@Burgers|🍔|
Chicken Burger|65
Chicken & Cheese Burger|80
Chicken Zinger Cheese Burger (New)|99
Ajwa Chicken King Burger|99
@Veg Burgers|🍔|
Veg Burger|55
Veg & Cheese Burger|65
@Chicken Sandwich|🥪|Regular,Large
Chicken Sandwich|55,80
Chicken Grilled Sandwich|70,110
Chicken Mayo Grilled Sandwich|70,110
Chicken & Cheese Grilled Sandwich|80,120
Chicken Tandoori Mix Grill Club Sandwich|85,130
Chicken Cheese Manchurian Grilled Sandwich|90,140
Chicken Tikka Cheese Grilled Sandwich|90,140
Chicken Cheese Spicy Grilled Sandwich|100,160
Chicken Cheese Mexican Grilled Sandwich (New)|100,160
Chicken Cheese Shawarma Grilled Sandwich (New)|110,180
@Veg Sandwich|🥪|Regular,Large
Veg Plain Sandwich|35,55
Butter Jam Sandwich|35,55
Butter Jam Grilled Sandwich|45,65
Veg Grilled Sandwich|45,75
Veg Cheese Grilled Sandwich|55,85
Cheese Grilled Sandwich|60,90
Veg Club Grilled Sandwich|60,90
Veg Sweetcorn Grilled Sandwich|70,95
Veg Mushroom Grilled Sandwich|70,85
Paneer Cheese Grilled Sandwich|80,100
Veg Cheese Russian Grilled Sandwich|90,120
Veg Double Cheese Grilled Sandwich|90,120
@Chicken Rolls|🌯|
Chicken Cheese Tikka Roll|55
Chicken Mayo Roll|55
Chicken Cheese Chilly Roll|75
Chicken Cheese Spicy Roll|75
Chicken Cheese Mexican Roll (New)|75
Chicken Twister Roll|99
Chicken Spring Roll|50
@Veg Rolls|🌯|
Veg Mayo Roll|45
Veg Cheese Roll|55
Paneer Cheese Chilly Roll|65
@Fries|🍟|
Mccain French Fries|60
Mccain French Fries with Mayonnaise|70
@Chicken Fries|🍗|
Chicken Nuggets (6 Piece)|120
Chicken Pop Corn|120
Chicken Finger Crispy (6 Piece)|120
Chicken Lollypop (6 Piece)|100
@Shawarma|🌯|
Chicken Ajwa Shawarma|60
Chicken Schezwan Shawarma|70
Chicken Chatpata Shawarma|70
Chicken Open Shawarma|90
Chicken Shawarma Bowl|120
@Chatpata Chaat|🥙|
Pani Puri|35
Sev Puri|45
Dahi Sev Puri (New)|55
Cheese Sev Puri|65
Bhel Puri|45
Dahi Batata Puri|55
Papdi Chaat|55
Mix Chaat|55
Aloo Tikki Chaat|55
Dahi Wala Papri Chaat|60
Basket Chaat|100
Dahi Wada|60
Dahi Raj Kachori|60
Dhaniya Aloo|50
@Sweets|🍮|
Rabri|65
Gulab Jamun (4 Piece)|60
Phirni|30
@Soft Drinks|🥤|
Fanta Can|25
Thums Up|25
Sprite|25
Limca|25
7up Can|20
Mirinda|20
Pepsi Can|20
@Fruit Juices|🧃|
Rani|35
Mogu Mogu|60
Alo Fruit|40
@Energy Drinks|⚡|
Monster|95
@Meal Combos|🍱|
Veg Meal For 2|199|Veg Cheese Burger + French Fries + 2 Pepsi Bottles
Chicken Meal For 2|249|Ajwa Chicken King Burger + French Fries + 2 Pepsi Bottles`;
const categories=[],catEmoji={},menu=[];let cur,labs,hid=0;
RAW.split("\n").forEach(l=>{if(l[0]==="@"){const[c,e,sz]=l.slice(1).split("|");cur=c;labs=sz?sz.split(","):[];categories.push(c);catEmoji[c]=e;return}
 const[n0,pr,d]=l.split("|"),isNew=/\(New\)$/.test(n0),name=n0.replace(/ \(New\)$/,""),v=pr.split(",").map(Number);
 menu.push({id:String(++hid),name,category:cur,price:v[0],sizes:labs.length>1?labs.map((x,i)=>[x,v[i]]):null,description:d||(labs.length>1?"Available in "+labs.join(", ").toLowerCase()+".":cur),photo:photoKey(name,cur),image:photoKey(name,cur),vegetarian:!/chicken/i.test(name),isNew,popular:/King Burger|Meal For 2/.test(name),e:catEmoji[cur]})});
