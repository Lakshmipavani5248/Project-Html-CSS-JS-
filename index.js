const products = [

  { name:"Sneakers", price:"₹896", image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQFkev6ue0fusNHxtQ6lKJHba0_XdtwFB1bY8SwqOL_8XVlAxnqsXVaZp8iXUA_CHKnBrjOFV3mrX3kY4RRvudNWKuXKBOCEyiD-47K8Cj_" },
  { name:"Sneakers", price:"₹1,199", image:"https://costosoitaliano.com/cdn/shop/products/20210204_161005_1800x1350_60dabf67-d327-4723-b221-71bcf24d1458_1024x1024@2x.jpg?v=1736601551" },
  { name:"Sneakers", price:"₹1,499", image:"https://rukminim2.flixcart.com/image/260/260/xif0q/shoe/r/m/l/6-tango-11-6-asian-white-navy-mustard-original-imahfyzhx6z3xdpb.jpeg?q=90&crop=false" },
  { name:"Sneakers", price:"₹2,999", image:"https://rukminim2.flixcart.com/image/260/260/xif0q/shoe/9/c/w/7-tango-11-7-asian-full-black-grey-original-imahfyzh7uwbpqbe.jpeg?q=90&crop=false" },
  { name:"Sneakers", price:"₹550", image:"https://www.dealsmagnet.com/images/men-shoes-minimum-50-big-billion-days-o-199Z54HZ.jpg" },

  { name:"T-Shirt", price:"₹499", image:"https://m.media-amazon.com/images/I/41K7PF-AGsL._UY1100_.jpg" },
  { name:"T-Shirt", price:"₹599", image:"https://tiimg.tistatic.com/fp/1/007/395/pink-regular-fit-ladies-round-neck-half-sleeves-printed-cotton-polyester-casual-t-shirts-523.jpg" },
  { name:"T-Shirt", price:"₹699", image:"https://5.imimg.com/data5/ECOM/Default/2025/5/507834299/UD/FT/ZY/13594261/os-376-apna-time-white-bk-2-500x500.jpg" },
  { name:"T-Shirt", price:"₹799", image:"https://www.gavinparis.com/cdn/shop/files/1_5f816196-8984-4827-b8be-fe29cb220191_1080x.jpg?v=1686052337" },
  { name:"T-Shirt", price:"₹899", image:"https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2024/OCTOBER/18/dA4TPbK0_568b0609890d4083a280b39453ee056e.jpg" },

  { name:"Backpack", price:"₹699", image:"https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/30810555/2024/11/13/3f11b88f-b7b3-4cea-a827-6039c66663c61731475367265-Allen-Solly-Women-Backpacks-9901731475366618-1.jpg" },
  { name:"Backpack", price:"₹799", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSuC-zQ3l1mlaI-sBxYCVuAiMP2l6--J-WWA&s" },
  { name:"Backpack", price:"₹899", image:"https://www.lukecase.com/cdn/shop/products/women-backpack-9132_6_1445x.webp?v=1680945351" },

  { name:"Sunglasses", price:"₹99", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTSbD3EVLf3-ZESsX9YbUIknHrUKG2jc8sA&s" },
  { name:"Sunglasses", price:"₹149", image:"https://sunglassic.com/cdn/shop/files/OPERA.SilverBlackRectangleSunglasses_4__compressed.jpg?v=1699335144&width=2048" },
  { name:"Sunglasses", price:"₹199", image:"https://greyjack.in/cdn/shop/files/GREYJACK3241-C3-01.jpg?v=1702014674" },

  { name:"Headphones", price:"₹499", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjR471k6ftYjoJxWIDhTjWNMc1jIJ1rxfCA&s" },
  { name:"Headphones", price:"₹699", image:"https://assets.ajio.com/medias/sys_master/root/20240703/yZmT/6685df151d763220fac5808a/-473Wx593H-4938418060-multi-MODEL.jpg" },
  { name:"Headphones", price:"₹999", image:"https://www.beatsbydre.com/content/dam/beats/web/product/headphones/solo4-wireless/pdp/product-carousel/slate-blue/blue-01-solo4.jpg" },

  { name:"Bluetooth Speaker", price:"₹999", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRar-Rl2Ql2xYbIigCN4hilpfZdlrS0Hen3Ug&s" },
  { name:"Bluetooth Speaker", price:"₹1,299", image:"https://unixindia.in/cdn/shop/files/PINK_bbe7f42d-4feb-43ff-8a47-c5954392c812.jpg?v=1747994455&width=1500" },
  { name:"Bluetooth Speaker", price:"₹1,499", image:"https://i0.wp.com/noizzybox.com/wp-content/uploads/2024/01/Cube-M-Front-2.jpg?fit=1500%2C1500&ssl=1" },

  { name:"Laptop", price:"₹40,000", image:"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Go-3_OG_Twitter-image?scl=1" },
  { name:"Smartphone", price:"₹28,999", image:"https://rukminim2.flixcart.com/image/490/490/xif0q/mobile/x/c/y/-original-imah57jbfqsz6797.jpeg?q=90&crop=false" }
];

const container = document.getElementById("product-container");
let cartCount = 0, cartTotal = 0, cartItems = [];
function displayProducts(list){
  container.innerHTML="";
  list.forEach(product=>{
    const card=document.createElement("div");
    card.classList.add("product-card");
    const img=document.createElement("img"); img.src=product.image; img.alt=product.name;
    const title=document.createElement("h3"); title.textContent=product.name;
    const price=document.createElement("p"); price.textContent=product.price;
    const rating=document.createElement("p"); rating.innerHTML="⭐⭐⭐⭐☆";
    const qtyInput = document.createElement("input");
    qtyInput.type = "number"; qtyInput.value = 1; qtyInput.min = 1; qtyInput.style.width="50px"; qtyInput.style.marginTop="10px";
    const btn=document.createElement("button"); btn.textContent="Add to Cart";
    btn.addEventListener("click",()=>{
      const qty = parseInt(qtyInput.value);
      updateCart(product, qty);
    });
    card.append(img,title,price,rating,qtyInput,btn);
    container.appendChild(card);
  });
}
function updateCart(product, qty){
  cartCount += qty;
  let numericPrice = parseInt(product.price.replace(/[^0-9]/g,''));
  cartTotal += numericPrice * qty;
  const existing = cartItems.find(item=>item.name===product.name);
  if(existing){ existing.qty += qty; }
  else{ cartItems.push({name:product.name, price:numericPrice, qty:qty}); }
  document.getElementById("cart-count").textContent = cartCount;
  document.getElementById("cart-total").textContent = cartTotal.toLocaleString();
}
const cartPopup = document.getElementById("cart-popup");
const cartList = document.getElementById("cart-list");
const cartTotalPopup = document.getElementById("cart-total-popup");
document.getElementById("view-cart-btn").addEventListener("click", showCart);
document.getElementById("close-cart").addEventListener("click",()=>{cartPopup.style.display="none";});
const placeOrderBtn = document.createElement("button");
placeOrderBtn.textContent = "Place Order";
placeOrderBtn.style.marginTop = "10px";
placeOrderBtn.addEventListener("click", ()=>{
  if(cartItems.length === 0){ alert("Cart is empty!"); return; }
  alert("Order placed! Total: ₹" + cartTotal.toLocaleString());
  cartItems=[]; cartCount=0; cartTotal=0;
  document.getElementById("cart-count").textContent=cartCount;
  document.getElementById("cart-total").textContent=cartTotal.toLocaleString();
  cartPopup.style.display="none";
});
cartPopup.appendChild(placeOrderBtn);

function showCart(){
  cartList.innerHTML="";
  cartItems.forEach((item,index)=>{
    const li = document.createElement("li");
    li.textContent = `${item.name} x${item.qty} - ₹${item.price*item.qty}`;

    const removeBtn = document.createElement("button");
    removeBtn.textContent="Remove"; removeBtn.style.marginLeft="10px";
    removeBtn.addEventListener("click",()=>{
      cartCount -= item.qty; cartTotal -= item.price*item.qty;
      cartItems.splice(index,1); document.getElementById("cart-count").textContent=cartCount;
      document.getElementById("cart-total").textContent=cartTotal.toLocaleString(); showCart();
    });
    li.appendChild(removeBtn);
    cartList.appendChild(li);
  });
  cartTotalPopup.textContent=cartTotal.toLocaleString();
  cartPopup.style.display="block";
}

const topBtn=document.getElementById("back-to-top");
window.addEventListener("scroll",()=>{topBtn.style.display=window.scrollY>300?"block":"none";});
topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

displayProducts(products);
