let params=new URLSearchParams(window.location.search);
let productid=params.get("id");
let products={
    trolley1:{
        name:"Premium Scratch Free Advance Trolley bag",
        price:"RS.1359",
        formprice:"1359",
        image:"trolley1.jpg",
        description:"Useful in carrying Electronic with seperate space"
    },
    trolley2:{
        name:"Premium Dual Combo Trolley bag",
        price:"RS.2499",
        formprice:"2499",
        image:"trolley2.jpg",
        description:"Combo Family prefered Trolley bag"
    },
    trolley3:{
        name:"Premium Big Size Trolley bag",
        price:"RS.1159",
        formprice:"1159",
        image:"trolley3.jpg",
        description:"Can carry around 40 to 50 kg weight premium fibre bag"
    },
    school1:{
        name:"Lookmaster black School bag",
        price:"RS.499",
        formprice:"499",
        image:"school1.jpg",
        description:"premium school bag with 3 chain compartments "
    },
    school2:{
        name:"Sport white School bag",
        price:"RS.599",
        formprice:"599",
        image:"school2.jpg",
        description:"premium school bag with 3 chain compartments with stylish look and extra pocketS"
    },
    school3:{
        name:"Safari School bag",
        price:"RS.799",
        formprice:"799",
        image:"school3.jpg",
        description:"premium Fabric school bag "
    },
    college1:{
        name:"AEETHON college bag",
        price:"RS.679",
        formprice:"679",
        image:"college1.jpg",
        description:"Leather Bag with stainless steel chain  "
    },
    college2:{
        name:"Fur Jaden collge bag",
        price:"RS.1499",
        formprice:"1499",
        image:"college2.jpg",
        description:"Leather bags with internal laptop carry compartment"
        
    },
    college3:{
        name:" HotShot college bag",
        price:"RS.899",
        formprice:"899",
        image:"college3.jpg",
        description:" Fully leather polish dust free stylish bag  "
    }
};
let product=products[productid];
document.querySelector("#productName").innerText=product.name;
document.querySelector("#productPrice").innerText=product.price;
document.querySelector("#productImage").src=product.image;
document.querySelector("#productDescription").innerText=product.description;

let formBtn = document.querySelector("#formBtn");

formBtn.addEventListener("click", () => {

    





    let formLink =
`https://docs.google.com/forms/d/e/1FAIpQLSc5unJA_WVpRP1osYraPOxcDcZkd_1bnMR49Frt6np9B6fENg/viewform?usp=pp_url&entry.699097681=${encodeURIComponent(product.name)}&entry.823300438=${encodeURIComponent(product.formprice)}`;
    
window.open(formLink,"_blank");
});